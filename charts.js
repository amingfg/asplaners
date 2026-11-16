
(() => {
    "use strict";

    // =====================================
    // 1. ELEMENTS & STORAGE
    // =====================================

    const STORAGE_KEY = "as-planer-charts";

    const subjectForm = document.getElementById("subject-form");
    const subjectNameInput = document.getElementById("subject-name");
    const subjectsContainer = document.getElementById("subjects-container");
    const subjectsEmpty = document.getElementById("subjects-empty");

    if (!subjectForm || !subjectsContainer || !subjectNameInput) return;

    let subjects = loadSubjects();
    const charts = new Map();

    // =====================================
    // 2. TRANSLATION
    // =====================================

    function t(key) {
        if (typeof window.plannerTranslate === "function") {
            return window.plannerTranslate(key);
        }

        return key;
    }

    function getLanguage() {
        if (typeof window.plannerGetLanguage === "function") {
            return window.plannerGetLanguage();
        }

        return "fa";
    }

    function isEnglish() {
        return getLanguage() === "en";
    }

    // =====================================
    // 3. STORAGE
    // =====================================

    function createId() {
        return Date.now().toString(36) +
            Math.random().toString(36).slice(2, 8);
    }

    function loadSubjects() {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

            if (!Array.isArray(saved)) return [];

            return saved
                .filter(subject => subject && typeof subject === "object")
                .map(subject => ({
                    id: subject.id || createId(),
                    name: String(subject.name || "بدون نام"),
                    exams: Array.isArray(subject.exams)
                        ? subject.exams.map(exam => ({
                            id: exam.id || createId(),
                            name: String(exam.name || "آزمون"),
                            date: String(exam.date || ""),
                            score: Number(exam.score),
                            scale: Number(exam.scale)
                        })).filter(exam =>
                            isValidDate(exam.date) &&
                            Number.isFinite(exam.score) &&
                            Number.isFinite(exam.scale) &&
                            exam.scale > 0 &&
                            exam.score >= 0 &&
                            exam.score <= exam.scale
                        )
                        : [],
                    cycles: []
                }));
        } catch (error) {
            console.error("Could not load charts data:", error);
            return [];
        }
    }

    function saveSubjects() {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(subjects)
            );
        } catch (error) {
            console.error("Could not save charts data:", error);
            alert(t("chartSaveError"));
        }
    }

    // =====================================
    // 4. DATE FUNCTIONS
    // =====================================

    function isValidDate(dateString) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
            return false;
        }

        const date = parseDate(dateString);

        return (
            date instanceof Date &&
            !Number.isNaN(date.getTime()) &&
            toISODate(date) === dateString
        );
    }

    function parseDate(dateString) {
        const [year, month, day] = dateString.split("-").map(Number);

        return new Date(year, month - 1, day);
    }

    function toISODate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    function formatDate(dateString) {
        const locale = isEnglish() ? "en-US" : "fa-IR";

        return parseDate(dateString).toLocaleDateString(locale);
    }

    function addOneMonth(dateString) {
        const date = parseDate(dateString);

        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();

        const lastDay = new Date(year, month + 2, 0).getDate();

        const result = new Date(
            year,
            month + 1,
            Math.min(day, lastDay)
        );

        return toISODate(result);
    }

    function getToday() {
        return toISODate(new Date());
    }

    // =====================================
    // 5. SCORE CONVERSION
    // =====================================

    function getPercentage(exam) {
        return Math.round(
            (Number(exam.score) / Number(exam.scale)) * 100
        );
    }

    function getOriginalScore(exam) {
        return isEnglish()
            ? `${exam.score} / ${exam.scale}`
            : `${exam.score} از ${exam.scale}`;
    }

    function getPercentSymbol() {
        return isEnglish() ? "%" : "٪";
    }

    // =====================================
    // 6. CYCLE MANAGEMENT
    // =====================================

    function rebuildCycles(subject) {
        const exams = [...(subject.exams || [])]
            .filter(exam => isValidDate(exam.date))
            .sort((a, b) => {
                const dateCompare = a.date.localeCompare(b.date);

                if (dateCompare !== 0) return dateCompare;

                return a.id.localeCompare(b.id);
            });

        const cycles = [];

        exams.forEach(exam => {
            let currentCycle = cycles[cycles.length - 1];

            if (!currentCycle || exam.date > currentCycle.endDate) {
                currentCycle = {
                    id: `cycle-${exam.id}`,
                    startDate: exam.date,
                    endDate: addOneMonth(exam.date),
                    exams: []
                };

                cycles.push(currentCycle);
            }

            currentCycle.exams.push(exam);
        });

        subject.cycles = cycles;

        return cycles;
    }

    // =====================================
    // 7. ADD SUBJECT
    // =====================================

    subjectForm.addEventListener("submit", event => {
        event.preventDefault();

        const name = subjectNameInput.value.trim();

        if (!name) return;

        const alreadyExists = subjects.some(subject =>
            subject.name.toLowerCase() === name.toLowerCase()
        );

        if (alreadyExists) {
            alert(t("chartDuplicateSubject"));
            return;
        }

        const newSubject = {
            id: createId(),
            name: name,
            exams: [],
            cycles: []
        };

        subjects.push(newSubject);

        saveSubjects();
        renderSubjects();

        subjectForm.reset();
    });

    // =====================================
    // 8. ADD EXAM
    // =====================================

    function addExam(subjectId, form) {
        const subject = subjects.find(item =>
            item.id === subjectId
        );

        if (!subject) return;

        const examName = form.querySelector(".exam-name").value.trim();
        const examDate = form.querySelector(".exam-date").value;
        const score = Number(form.querySelector(".exam-score").value);
        const scale = Number(form.querySelector(".exam-scale").value);

        if (!examName || !examDate) return;

        if (!isValidDate(examDate)) {
            alert(t("chartInvalidDate"));
            return;
        }

        if (
            !Number.isFinite(score) ||
            !Number.isFinite(scale) ||
            scale <= 0 ||
            score < 0 ||
            score > scale
        ) {
            alert(t("chartInvalidScore"));
            return;
        }

        const exam = {
            id: createId(),
            name: examName,
            date: examDate,
            score: score,
            scale: scale
        };

        subject.exams.push(exam);

        rebuildCycles(subject);
        saveSubjects();
        renderSubjects();
    }

    // =====================================
    // 9. DELETE FUNCTIONS
    // =====================================

    function deleteSubject(subjectId) {
        const confirmed = confirm(
            t("chartDeleteSubjectConfirm")
        );

        if (!confirmed) return;

        destroyChart(subjectId);

        subjects = subjects.filter(subject =>
            subject.id !== subjectId
        );

        saveSubjects();
        renderSubjects();
    }

    function deleteExam(subjectId, examId) {
        const subject = subjects.find(item =>
            item.id === subjectId
        );

        if (!subject) return;

        subject.exams = subject.exams.filter(exam =>
            exam.id !== examId
        );

        rebuildCycles(subject);
        saveSubjects();
        renderSubjects();
    }

    // =====================================
    // 10. CHART MANAGEMENT
    // =====================================

    function destroyChart(subjectId) {
        const chart = charts.get(subjectId);

        if (chart) {
            chart.destroy();
            charts.delete(subjectId);
        }
    }

    function renderChart(subject, canvas, cycle) {
        destroyChart(subject.id);

        if (!cycle || cycle.exams.length === 0) return;

        if (typeof Chart === "undefined") {
            const error = document.createElement("p");

            error.className = "chart-error";
            error.textContent = t("chartLibraryError");

            canvas.parentElement.after(error);

            return;
        }

        const labels = cycle.exams.map(exam =>
            formatDate(exam.date)
        );

        const percentages = cycle.exams.map(exam =>
            getPercentage(exam)
        );

        const isDark = document.body.classList.contains("dark-mode");

        const chart = new Chart(canvas, {
            type: "line",

            data: {
                labels: labels,

                datasets: [{
                    label: t("chartPerformance"),
                    data: percentages,

                    borderColor: "#df8eaf",
                    backgroundColor: "rgba(223, 142, 175, 0.15)",

                    borderWidth: 3,
                    pointRadius: 5,
                    pointHoverRadius: 7,

                    pointBackgroundColor: "#df8eaf",
                    tension: 0.35,
                    fill: true
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                    legend: {
                        display: false
                    },

                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const exam = cycle.exams[context.dataIndex];

                                return [
                                    `${t("chartPercent")}: ${getPercentage(exam)}${getPercentSymbol()}`,
                                    `${t("chartOriginalScore")}: ${getOriginalScore(exam)}`,
                                    `${t("chartExam")}: ${exam.name}`
                                ];
                            }
                        }
                    }
                },

                scales: {
                    y: {
                        min: 0,
                        max: 100,

                        ticks: {
                            color: isDark ? "#ddd" : "#777",
                            callback: value => value + getPercentSymbol()
                        },

                        grid: {
                            color: isDark
                                ? "rgba(255,255,255,0.08)"
                                : "rgba(0,0,0,0.06)"
                        }
                    },

                    x: {
                        ticks: {
                            color: isDark ? "#ddd" : "#777"
                        },

                        grid: {
                            display: false
                        }
                    }
                }
            }
        });

        charts.set(subject.id, chart);
    }

    // =====================================
    // 11. RENDER SUBJECTS
    // =====================================

    function renderSubjects() {
        charts.forEach(chart => chart.destroy());
        charts.clear();

        subjectsContainer.innerHTML = "";

        if (subjectsEmpty) {
            subjectsEmpty.style.display =
                subjects.length === 0 ? "block" : "none";
        }

        subjects.forEach(subject => {
            rebuildCycles(subject);

            const card = document.createElement("article");

            card.className = "chart-subject-card";
            card.dataset.subjectId = subject.id;

            // CARD HEADER

            const header = document.createElement("div");
            header.className = "chart-card-header";

            const title = document.createElement("h3");
            title.className = "chart-subject-title";
            title.textContent = subject.name;

            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.className = "delete-subject-btn";
            deleteButton.textContent = t("chartDeleteSubject");

            deleteButton.addEventListener("click", () => {
                deleteSubject(subject.id);
            });

            header.append(title, deleteButton);

            // EXAM FORM

            const examForm = document.createElement("form");
            examForm.className = "chart-exam-form";

            examForm.innerHTML = `
                <h4>${t("chartAddExam")}</h4>

                <input
                    type="text"
                    class="exam-name"
                    placeholder="${t("chartExamName")}"
                    required
                    maxlength="60"
                >

                <input
                    type="date"
                    class="exam-date"
                    value="${getToday()}"
                    required
                >

                <input
                    type="number"
                    class="exam-score"
                    placeholder="${t("chartScore")}"
                    min="0"
                    step="any"
                    required
                >

                <select class="exam-scale">
                    <option value="20">${t("chartScale20")}</option>
                    <option value="100">${t("chartScale100")}</option>
                </select>

                <button type="submit">
                    ${t("chartSubmitExam")}
                </button>
            `;

            examForm.addEventListener("submit", event => {
                event.preventDefault();

                if (!examForm.reportValidity()) return;

                addExam(subject.id, examForm);
            });

            // CYCLE SECTION

            const cycleSection = document.createElement("div");
            cycleSection.className = "chart-cycle-section";

            const cycleTitle = document.createElement("h4");
            cycleTitle.textContent = t("chartMonthlyPerformance");

            const cycleSelect = document.createElement("select");
            cycleSelect.className = "chart-cycle-select";

            if (subject.cycles.length === 0) {
                const option = document.createElement("option");
                option.value = "";
                option.textContent = t("chartNoExams");

                cycleSelect.appendChild(option);
            } else {
                subject.cycles.forEach((cycle, index) => {
                    const option = document.createElement("option");

                    option.value = cycle.id;

                    option.textContent =
                        `${t("chartCycle")} ${index + 1} | ${formatDate(cycle.startDate)} - ${formatDate(cycle.endDate)}`;

                    cycleSelect.appendChild(option);
                });
            }

            const chartWrapper = document.createElement("div");
            chartWrapper.className = "chart-canvas-wrapper";

            const canvas = document.createElement("canvas");
            chartWrapper.appendChild(canvas);

            const cycleInfo = document.createElement("p");
            cycleInfo.className = "chart-cycle-info";

            cycleSection.append(
                cycleTitle,
                cycleSelect,
                chartWrapper,
                cycleInfo
            );

            function updateSelectedCycle() {
                const selectedCycle = subject.cycles.find(cycle =>
                    cycle.id === cycleSelect.value
                );

                if (!selectedCycle) {
                    cycleInfo.textContent = t("chartNoChart");

                    destroyChart(subject.id);
                    return;
                }

                cycleInfo.textContent =
                    `${selectedCycle.exams.length} ${t("chartExamCount")}`;

                renderChart(subject, canvas, selectedCycle);
            }

            cycleSelect.addEventListener("change", updateSelectedCycle);

            // EXAM HISTORY

            const historySection = document.createElement("div");
            historySection.className = "chart-history";

            const historyTitle = document.createElement("h4");
            historyTitle.textContent = t("chartExamHistory");

            const examList = document.createElement("div");
            examList.className = "chart-exam-list";

            if (subject.exams.length === 0) {
                const empty = document.createElement("p");

                empty.textContent = t("chartNoExamHistory");

                examList.appendChild(empty);
            } else {
                [...subject.exams]
                    .sort((a, b) => b.date.localeCompare(a.date))
                    .forEach(exam => {
                        const examItem = document.createElement("div");
                        examItem.className = "chart-exam-item";

                        const details = document.createElement("div");

                        const examTitle = document.createElement("strong");
                        examTitle.textContent = exam.name;

                        const examInfo = document.createElement("p");

                        examInfo.textContent =
                            `${formatDate(exam.date)} | ${getOriginalScore(exam)} | ${getPercentage(exam)}${getPercentSymbol()}`;

                        details.append(examTitle, examInfo);

                        const deleteExamButton =
                            document.createElement("button");

                        deleteExamButton.type = "button";
                        deleteExamButton.className = "delete-exam-btn";
                        deleteExamButton.textContent = t("chartDelete");

                        deleteExamButton.addEventListener("click", () => {
                            deleteExam(subject.id, exam.id);
                        });

                        examItem.append(details, deleteExamButton);
                        examList.appendChild(examItem);
                    });
            }

            historySection.append(historyTitle, examList);

            // FINAL CARD

            card.append(
                header,
                examForm,
                cycleSection,
                historySection
            );

            subjectsContainer.appendChild(card);

            updateSelectedCycle();
        });

        saveSubjects();
    }

    // =====================================
    // 12. THEME & LANGUAGE UPDATES
    // =====================================

    document.addEventListener("planner-language-changed", () => {
        renderSubjects();
    });

    document.addEventListener("click", event => {
        if (event.target.closest(".theme-toggle")) {
            setTimeout(renderSubjects, 50);
        }
    });

    // =====================================
    // 13. INITIAL RENDER
    // =====================================

    renderSubjects();

})();
