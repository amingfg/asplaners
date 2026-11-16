
// =====================================
// A.S.Planer - Main JavaScript
// =====================================


// =====================================
// 1. GLOBAL TRANSLATIONS
// =====================================

(function () {

    const translations = {
        fa: {
            mainMenu: "منوی اصلی",
            dashboard: "داشبورد",
            calendar: "تقویم",
            goals: "اهداف",
            habits: "عادت‌ها",
            notes: "یادداشت‌ها",
            charts: "نمودارها",
            settings: "تنظیمات",

            myDashboard: "داشبورد من",
            dashboardSubtitle: "برنامه‌ها و فعالیت‌های روزانه‌ات",
            myProfile: "پروفایل من",
            welcomeGreeting: "خوش آمدی 🌸",
            welcomeMessage: "برای یک روز پربار آماده‌ای؟",
            totalTasks: "کل برنامه‌ها",
            completed: "انجام‌شده",
            remaining: "باقی‌مانده",
            todayTasks: "برنامه‌های امروز",
            taskPlaceholder: "برنامه جدیدت رو بنویس...",
            add: "افزودن",
            taskDate: "تاریخ برنامه",
            emptyTasks: "هنوز برنامه‌ای ثبت نکردی 🌷",

            myCalendar: "تقویم من",
            calendarDescription: "برنامه‌های روزانه‌ات رو مدیریت کن.",
            myCalendarTitle: "تقویم من",
            calendarTopSubtitle: "روزها و برنامه‌های خودت رو مدیریت کن.",
            dailyTasks: "برنامه‌های روزانه",
            emptyDailyTasks: "برای این روز برنامه‌ای ثبت نشده است.",

            myGoals: "اهداف من",
            myGoalsTitle: "اهداف من 🎯",
            goalsTopSubtitle: "برای رسیدن به آرزوهات برنامه‌ریزی کن.",
            goalsDescription: "هدف‌هات رو ثبت کن و قدم‌به‌قدم بهشون نزدیک شو.",
            goalPlaceholder: "هدف جدیدت رو بنویس...",
            goalDeadline: "مهلت هدف",
            addGoal: "افزودن هدف",
            emptyGoals: "هنوز هدفی ثبت نکردی 🌷",

            myHabits: "عادت‌های من 🌱",
            habitsTopSubtitle: "هر روز یک قدم به نسخه بهتر خودت نزدیک‌تر شو.",
            myHabitsTitle: "عادت‌های من 🌱",
            habitsDescription: "عادت‌های خوبت رو ثبت کن و استمرار داشته باش.",
            habitPlaceholder: "مثلاً روزی ۳۰ دقیقه مطالعه...",
            addHabit: "+ افزودن عادت",
            emptyHabits: "هنوز عادتی ثبت نکردی 🌷",

            myNotes: "یادداشت‌های من 📝",
            notesTopSubtitle: "ایده‌ها و افکارت رو ثبت کن.",
            myNotesTitle: "یادداشت‌های من 📝",
            notesDescription: "هیچ ایده‌ای رو فراموش نکن.",
            noteTitlePlaceholder: "عنوان یادداشت...",
            noteContentPlaceholder: "یادداشتت رو اینجا بنویس...",
            saveNote: "+ ذخیره یادداشت",
            emptyNotes: "هنوز یادداشتی ثبت نکردی 🌷",

            settingsSubtitle: "تنظیمات و شخصی‌سازی پلنر",
            plannerSettingsTitle: "تنظیمات پلنر شما 🌸",
            plannerSettingsDescription: "فضای شخصی خودت رو مطابق سلیقه‌ات تنظیم کن.",
            appearance: "ظاهر سایت",
            appearanceDescription: "تغییر ظاهر و رنگ‌بندی سایت",
            lightMode: "☀️ حالت روشن",
            darkMode: "🌙 حالت تاریک",
            language: "زبان",
            languageDescription: "زبان مورد استفاده در پلنر",
            calendarSettingsDescription: "تنظیم نوع تقویم مورد استفاده",
            aboutPlanner: "درباره A.S.Planer",
            aboutPlannerDescription: "یک فضای ساده برای برنامه‌ریزی، هدف‌گذاری و پیشرفت روزانه.",

            delete: "حذف",
            done: "انجام شد",
            undo: "برگرداندن",
            maxTasks: "برای هر روز حداکثر ۵۰ برنامه می‌توانی ثبت کنی!",

            deadlineLabel: "مهلت:",
            daysRemaining: "روز باقی‌مانده",
            deadlineToday: "مهلت هدف امروز است",
            daysOverdue: "روز از مهلت گذشته",
            noDeadline: "بدون مهلت",
            progressLabel: "میزان پیشرفت:",
            increaseProgress: "+۱۰٪ پیشرفت",
            deleteGoal: "حذف هدف",

            todayStatus: "وضعیت امروز:",
            completedToday: "انجام شده ✓",
            notCompletedToday: "هنوز انجام نشده",
            cancelCompletion: "لغو انجام",
            deleteHabit: "حذف عادت",

            deleteNote: "حذف یادداشت",
            chartDeleteSubject: "حذف درس",
            chartDeleteSubjectConfirm: "از حذف این درس و تمام آزمون‌های آن مطمئنی؟",
chartDuplicateSubject: "این درس قبلاً اضافه شده است.",
chartSaveError: "ذخیره اطلاعات با مشکل مواجه شد. فضای ذخیره‌سازی مرورگر را بررسی کن.",
            chartExamTitle: "آزمون",
chartExamName: "نام آزمون",
chartScore: "نمره",
chartAddExam: "ثبت آزمون جدید",
chartSubmitExam: "+ ثبت آزمون",
chartScale20: "از ۲۰",
chartScale100: "از ۱۰۰",
chartInvalidDate: "لطفاً تاریخ معتبر وارد کن.",
chartInvalidScore: "لطفاً نمره و مقیاس معتبر وارد کن.",
chartPerformance: "درصد عملکرد",
chartPercent: "درصد",
chartOriginalScore: "نمره اصلی",
chartExam: "آزمون",
chartMonthlyPerformance: "عملکرد ماهانه",
chartNoExams: "هنوز آزمونی ثبت نشده",
chartNoChart: "برای مشاهده نمودار، ابتدا یک آزمون ثبت کن.",
chartExamCount: "آزمون در این دوره ثبت شده است.",
chartExamHistory: "تاریخچه آزمون‌ها",
chartNoExamHistory: "هنوز آزمونی ثبت نکردی.",
chartDelete: "حذف",
chartLibraryError: "کتابخانه نمودار بارگذاری نشد. اتصال اینترنت را بررسی کن.",
chartCycle: "دوره",
chartsPageTitle: "نمودارهای من 📊",
chartsPageSubtitle: "عملکرد درسی خودت رو بررسی کن و پیشرفتت رو ببین.",
addSubjectTitle: "افزودن درس جدید",
addSubjectSubtitle: "برای هر درس یک نمودار اختصاصی داشته باش.",
subjectNamePlaceholder: "نام درس رو وارد کن...",
addSubjectButton: "+ افزودن درس",
mySubjectsTitle: "درس‌های من",
mySubjectsSubtitle: "نمودار عملکرد و تاریخچه آزمون‌های هر درس",
emptySubjects: "هنوز درسی اضافه نکردی 🌷",
        },

        en: {
            mainMenu: "Main Menu",
            dashboard: "Dashboard",
            calendar: "Calendar",
            goals: "Goals",
            habits: "Habits",
            notes: "Notes",
            charts: "Charts",
            settings: "Settings",

            myDashboard: "My Dashboard",
            dashboardSubtitle: "Your daily plans and activities",
            myProfile: "My Profile",
            welcomeGreeting: "Welcome 🌸",
            welcomeMessage: "Are you ready for a productive day?",
            totalTasks: "Total Tasks",
            completed: "Completed",
            remaining: "Remaining",
            todayTasks: "Today's Tasks",
            taskPlaceholder: "Write your new task...",
            add: "Add",
            taskDate: "Task Date",
            emptyTasks: "You haven't added any tasks yet 🌷",

            myCalendar: "My Calendar",
            calendarDescription: "Manage your daily plans.",
            myCalendarTitle: "My Calendar",
            calendarTopSubtitle: "Manage your days and plans.",
            dailyTasks: "Daily Tasks",
            emptyDailyTasks: "No tasks have been added for this day.",

            myGoals: "My Goals",
            myGoalsTitle: "My Goals 🎯",
            goalsTopSubtitle: "Make plans to achieve your dreams.",
            goalsDescription: "Add your goals and get closer to them step by step.",
            goalPlaceholder: "Write your new goal...",
            goalDeadline: "Goal Deadline",
            addGoal: "Add Goal",
            emptyGoals: "You haven't added any goals yet 🌷",

            myHabits: "My Habits 🌱",
            habitsTopSubtitle: "Take one step closer to a better you every day.",
            myHabitsTitle: "My Habits 🌱",
            habitsDescription: "Track your good habits and stay consistent.",
            habitPlaceholder: "For example, read for 30 minutes...",
            addHabit: "+ Add Habit",
            emptyHabits: "You haven't added any habits yet 🌷",

            myNotes: "My Notes 📝",
            notesTopSubtitle: "Write down your ideas and thoughts.",
            myNotesTitle: "My Notes 📝",
            notesDescription: "Never forget an idea.",
            noteTitlePlaceholder: "Note title...",
            noteContentPlaceholder: "Write your note here...",
            saveNote: "+ Save Note",
            emptyNotes: "You haven't added any notes yet 🌷",

            settingsSubtitle: "Planner settings and customization",
            plannerSettingsTitle: "Your Planner Settings 🌸",
            plannerSettingsDescription: "Customize your personal space the way you like.",
            appearance: "Appearance",
            appearanceDescription: "Change the website appearance and colors",
            lightMode: "☀️ Light Mode",
            darkMode: "🌙 Dark Mode",
            language: "Language",
            languageDescription: "Choose your planner language",
            calendarSettingsDescription: "Choose your preferred calendar type",
            aboutPlanner: "About A.S.Planer",
            aboutPlannerDescription: "A simple space for planning, setting goals and daily progress.",

            delete: "Delete",
            done: "Done",
            undo: "Undo",
            maxTasks: "You can add a maximum of 50 tasks per day!",

            deadlineLabel: "Deadline:",
            daysRemaining: "days remaining",
            deadlineToday: "Goal deadline is today",
            daysOverdue: "days overdue",
            noDeadline: "No deadline",
            progressLabel: "Progress:",
            increaseProgress: "+10% Progress",
            deleteGoal: "Delete Goal",

            todayStatus: "Today's status:",
            completedToday: "Completed ✓",
            notCompletedToday: "Not completed yet",
            cancelCompletion: "Undo completion",
            deleteHabit: "Delete Habit",

            deleteNote: "Delete Note",
            chartDeleteSubject: "Delete subject",
chartDeleteSubjectConfirm: "Are you sure you want to delete this subject and all its exams?",
chartDuplicateSubject: "This subject has already been added.",
chartSaveError: "There was a problem saving the data. Please check your browser storage.",
chartExamTitle: "Exam",
chartExamName: "Exam name",
chartScore: "Score",
chartAddExam: "Add a new exam",
chartSubmitExam: "+ Add exam",
chartScale20: "Out of 20",
chartScale100: "Out of 100",
chartInvalidDate: "Please enter a valid date.",
chartInvalidScore: "Please enter a valid score and scale.",
chartPerformance: "Performance percentage",
chartPercent: "Percentage",
chartOriginalScore: "Original score",
chartExam: "Exam",
chartMonthlyPerformance: "Monthly performance",
chartNoExams: "No exams have been added yet.",
chartNoChart: "Add an exam first to view the chart.",
chartExamCount: "exams recorded in this cycle.",
chartExamHistory: "Exam history",
chartNoExamHistory: "You haven't added any exams yet.",
chartDelete: "Delete",
chartLibraryError: "The chart library could not be loaded. Please check your internet connection.",
chartCycle: "Cycle",
chartsPageTitle: "My Charts 📊",
chartsPageSubtitle: "Review your academic performance and track your progress.",
addSubjectTitle: "Add a New Subject",
addSubjectSubtitle: "Have a dedicated chart for each subject.",
subjectNamePlaceholder: "Enter subject name...",
addSubjectButton: "+ Add Subject",
mySubjectsTitle: "My Subjects",
mySubjectsSubtitle: "Performance charts and exam history for each subject",
emptySubjects: "You haven't added any subjects yet 🌷",
        }
    };


    window.plannerTranslate = function (key) {

        const language =
            localStorage.getItem("as-planer-language") || "fa";

        return translations[language]?.[key] ||
            translations.fa[key] ||
            key;

    };


    window.plannerGetLanguage = function () {
        return localStorage.getItem("as-planer-language") || "fa";
    };


    function applyLanguage(language) {

        const selectedLanguage =
            translations[language] ? language : "fa";

        const dictionary = translations[selectedLanguage];

        localStorage.setItem("as-planer-language", selectedLanguage);

        document.documentElement.lang = selectedLanguage;

        document.documentElement.dir =
            selectedLanguage === "fa" ? "rtl" : "ltr";


        document.querySelectorAll("[data-i18n]").forEach(element => {

            const key = element.dataset.i18n;

            if (!Object.prototype.hasOwnProperty.call(dictionary, key)) {
                return;
            }

           if (element.hasAttribute("placeholder")) {
    element.placeholder = dictionary[key];
} else {
    element.textContent = dictionary[key];
}
        });


        const calendarSetting =
            document.getElementById("calendar-setting");

        if (calendarSetting) {

            calendarSetting.querySelectorAll("option").forEach(option => {

                if (selectedLanguage === "fa") {

                    if (option.value === "persian") {
                        option.textContent = "تقویم شمسی";
                    }

                    if (option.value === "gregorian") {
                        option.textContent = "تقویم میلادی";
                    }

                } else {

                    if (option.value === "persian") {
                        option.textContent = "Persian Calendar";
                    }

                    if (option.value === "gregorian") {
                        option.textContent = "Gregorian Calendar";
                    }

                }

            });

        }


        const languageSetting =
            document.getElementById("language-setting");

        if (languageSetting) {
            languageSetting.value = selectedLanguage;
        }

        window.dispatchEvent(new Event("planner-language-changed"));

    }


    const languageSetting =
        document.getElementById("language-setting");

    const calendarSetting =
        document.getElementById("calendar-setting");

    const savedLanguage =
        localStorage.getItem("as-planer-language") || "fa";

    applyLanguage(savedLanguage);


    if (languageSetting) {

        languageSetting.addEventListener("change", function () {
            applyLanguage(this.value);
        });

    }


    if (calendarSetting) {

        const savedCalendar =
            localStorage.getItem("as-planer-calendar") || "persian";

        calendarSetting.value = savedCalendar;

        calendarSetting.addEventListener("change", function () {

            localStorage.setItem("as-planer-calendar", this.value);

            window.dispatchEvent(
                new Event("planner-calendar-changed")
            );

        });

    }

})();


// =====================================
// 2. CALENDAR & TASKS
// =====================================

(function () {

    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskDate = document.getElementById("task-date");
    const taskList = document.getElementById("task-list");
    const emptyMessage = document.getElementById("empty-message");

    const totalCount = document.getElementById("total-count");
    const doneCount = document.getElementById("done-count");
    const remainingCount = document.getElementById("remaining-count");

    const calendarMonth = document.getElementById("calendar-month");
    const calendarSubtitle = document.getElementById("calendar-subtitle");
    const calendarDays = document.getElementById("calendar-days");

    const prevMonth = document.getElementById("prev-month");
    const nextMonth = document.getElementById("next-month");


    const hasCalendar = Boolean(
        calendarMonth &&
        calendarDays &&
        prevMonth &&
        nextMonth
    );

    const hasTasks = Boolean(
        taskForm &&
        taskInput &&
        taskDate &&
        taskList &&
        emptyMessage
    );


    if (!hasCalendar && !hasTasks) return;


    const TASKS_KEY = "as-planer-tasks";
    const DATE_KEY = "as-planer-selected-date";


    function getTodayDate() {

        const today = new Date();

        return [
            today.getFullYear(),
            String(today.getMonth() + 1).padStart(2, "0"),
            String(today.getDate()).padStart(2, "0")
        ].join("-");

    }


    function parseISODate(value) {

        if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
            return null;
        }

        const [year, month, day] = value.split("-").map(Number);

        const date = new Date(year, month - 1, day);

        if (
            date.getFullYear() !== year ||
            date.getMonth() !== month - 1 ||
            date.getDate() !== day
        ) {
            return null;
        }

        return date;

    }


    function toISODate(date) {

        return [
            date.getFullYear(),
            String(date.getMonth() + 1).padStart(2, "0"),
            String(date.getDate()).padStart(2, "0")
        ].join("-");

    }


    let tasks = [];

    try {

        const savedTasks =
            localStorage.getItem(TASKS_KEY) ||
            localStorage.getItem("lunelle-tasks");

        tasks = savedTasks ? JSON.parse(savedTasks) : [];

        if (!Array.isArray(tasks)) {
            tasks = [];
        }

    } catch (error) {

        tasks = [];

    }


    tasks = tasks
        .filter(task => task && typeof task === "object")
        .map((task, index) => ({

            id: String(task.id || `task-${Date.now()}-${index}`),

            title: String(task.title || ""),

            date: parseISODate(task.date)
                ? task.date
                : getTodayDate(),

            completed: Boolean(task.completed)

        }))
        .filter(task => task.title.trim());


    function saveTasks() {
        localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    }


    let selectedDate = getTodayDate();

    if (hasTasks && parseISODate(taskDate.value)) {

        selectedDate = taskDate.value;

    } else {

        const storedDate = localStorage.getItem(DATE_KEY);

        if (parseISODate(storedDate)) {
            selectedDate = storedDate;
        }

    }


    if (hasTasks) {
        taskDate.value = selectedDate;
    }


    let currentMonthDate =
        parseISODate(selectedDate) || new Date();


    function getCalendarType() {

        return localStorage.getItem("as-planer-calendar") === "gregorian"
            ? "gregorian"
            : "persian";

    }


    function getLanguage() {

        return window.plannerGetLanguage
            ? window.plannerGetLanguage()
            : "fa";

    }


    function getCalendarLocale() {

        const language = getLanguage();
        const calendar = getCalendarType();

        const base = language === "fa" ? "fa-IR" : "en-US";

        const calendarName =
            calendar === "persian" ? "persian" : "gregory";

        const numbering =
            language === "fa" ? "arabext" : "latn";

        return `${base}-u-ca-${calendarName}-nu-${numbering}`;

    }


    function getCalendarParts(date) {

        const calendarName =
            getCalendarType() === "persian" ? "persian" : "gregory";

        const formatter = new Intl.DateTimeFormat(
            `en-US-u-ca-${calendarName}-nu-latn`,
            {
                year: "numeric",
                month: "numeric",
                day: "numeric"
            }
        );

        const parts = formatter.formatToParts(date);
        const result = {};

        parts.forEach(part => {

            if (
                part.type === "year" ||
                part.type === "month" ||
                part.type === "day"
            ) {
                result[part.type] = Number(part.value);
            }

        });

        return result;

    }


    function getMonthStart(date) {

        const parts = getCalendarParts(date);

        const firstDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
        );

        firstDay.setDate(firstDay.getDate() - parts.day + 1);

        return firstDay;

    }


    function getMonthDates(date) {

        const firstDay = getMonthStart(date);
        const firstParts = getCalendarParts(firstDay);

        const dates = [];

        for (let offset = 0; offset < 32; offset++) {

            const current = new Date(firstDay);

            current.setDate(firstDay.getDate() + offset);

            const parts = getCalendarParts(current);

            if (
                parts.year !== firstParts.year ||
                parts.month !== firstParts.month
            ) {
                break;
            }

            dates.push(current);

        }

        return dates;

    }


    function formatCalendarDate(date, options) {

        return new Intl.DateTimeFormat(
            getCalendarLocale(),
            options
        ).format(date);

    }


    function formatGregorianSubtitle(date) {

        const language = getLanguage();

        const locale = language === "fa"
            ? "fa-IR-u-ca-gregory"
            : "en-US";

        return new Intl.DateTimeFormat(locale, {
            month: "long",
            year: "numeric"
        }).format(date);

    }


    function saveSelectedDate() {

        if (!hasTasks || !parseISODate(taskDate.value)) {
            return;
        }

        localStorage.setItem(DATE_KEY, taskDate.value);

        selectedDate = taskDate.value;

    }


    function renderCalendar() {

        if (!hasCalendar) return;

        const monthDates = getMonthDates(currentMonthDate);

        if (!monthDates.length) return;

        const firstDate = monthDates[0];

        calendarMonth.textContent = formatCalendarDate(
            firstDate,
            {
                month: "long",
                year: "numeric"
            }
        );


        calendarSubtitle.textContent =
            getCalendarType() === "persian"
                ? formatGregorianSubtitle(firstDate)
                : "";


        calendarDays.innerHTML = "";


        // شروع هفته از شنبه

        const leadingEmptyDays = (firstDate.getDay() + 1) % 7;

        for (let index = 0; index < leadingEmptyDays; index++) {

            const empty = document.createElement("div");

            empty.className = "empty-day";

            calendarDays.appendChild(empty);

        }


        const today = getTodayDate();

        const selected = hasTasks
            ? taskDate.value
            : selectedDate;

        const numberLocale = getLanguage() === "fa"
            ? "fa-IR"
            : "en-US";


        monthDates.forEach(date => {

            const isoDate = toISODate(date);

            const button = document.createElement("button");

            button.type = "button";


            const dayNumber = document.createElement("span");

            dayNumber.className = "gregorian-day";

            dayNumber.textContent = new Intl.NumberFormat(
                numberLocale
            ).format(
                getCalendarParts(date).day
            );


            button.appendChild(dayNumber);


            if (isoDate === selected) {
                button.classList.add("selected");
            }

            if (isoDate === today) {
                button.classList.add("today");
            }

            if (tasks.some(task => task.date === isoDate)) {
                button.classList.add("has-tasks");
            }


            button.addEventListener("click", function () {

                selectedDate = isoDate;

                if (hasTasks) {

                    taskDate.value = isoDate;

                    saveSelectedDate();

                    renderTasks();

                }

                renderCalendar();

            });


            calendarDays.appendChild(button);

        });

    }


    function updateStats(dayTasks) {

        if (totalCount) {
            totalCount.textContent = dayTasks.length;
        }

        if (doneCount) {

            doneCount.textContent = dayTasks.filter(
                task => task.completed
            ).length;

        }

        if (remainingCount) {

            remainingCount.textContent = dayTasks.filter(
                task => !task.completed
            ).length;

        }

    }


    function renderTasks() {

        if (!hasTasks) return;

        taskList.innerHTML = "";


        const dayTasks = tasks.filter(
            task => task.date === taskDate.value
        );


        emptyMessage.style.display =
            dayTasks.length === 0 ? "block" : "none";


        dayTasks.forEach(task => {

            const li = document.createElement("li");

            li.className = "task-row";

            if (task.completed) {
                li.classList.add("completed");
            }


            const text = document.createElement("p");

            text.textContent = task.title;


            const completeButton = document.createElement("button");

            completeButton.type = "button";

            completeButton.className = "complete-btn";

            completeButton.textContent =
                window.plannerTranslate(
                    task.completed ? "undo" : "done"
                );

            completeButton.dataset.action = "toggle";

            completeButton.dataset.id = task.id;


            const deleteButton = document.createElement("button");

            deleteButton.type = "button";

            deleteButton.className = "delete-btn";

            deleteButton.textContent =
                window.plannerTranslate("delete");

            deleteButton.dataset.action = "delete";

            deleteButton.dataset.id = task.id;


            li.append(text, completeButton, deleteButton);

            taskList.appendChild(li);

        });


        updateStats(dayTasks);

    }


    // افزودن برنامه

    if (hasTasks) {

        taskForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const title = taskInput.value.trim();

            const date = taskDate.value;

            if (!title || !parseISODate(date)) {
                return;
            }


            const dayTasks = tasks.filter(
                task => task.date === date
            );


            if (dayTasks.length >= 50) {

                alert(
                    window.plannerTranslate("maxTasks")
                );

                return;

            }


            tasks.push({

                id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,

                title: title,

                date: date,

                completed: false

            });


            saveTasks();

            renderCalendar();

            renderTasks();

            taskInput.value = "";

            taskInput.focus();

        });


        // تکمیل یا حذف برنامه

        taskList.addEventListener("click", function (event) {

            const button = event.target.closest(
                "button[data-action]"
            );

            if (!button) return;


            const id = button.dataset.id;

            const action = button.dataset.action;


            if (action === "toggle") {

                tasks = tasks.map(task =>

                    task.id === id
                        ? {
                            ...task,
                            completed: !task.completed
                        }
                        : task

                );

            }

            if (action === "delete") {

                tasks = tasks.filter(
                    task => task.id !== id
                );

            }


            saveTasks();

            renderCalendar();

            renderTasks();

        });


        // تغییر تاریخ انتخابی

        taskDate.addEventListener("change", function () {

            if (!parseISODate(taskDate.value)) {
                return;
            }

            selectedDate = taskDate.value;

            currentMonthDate = parseISODate(selectedDate);

            saveSelectedDate();

            renderCalendar();

            renderTasks();

        });

    }


    // ماه قبل

    if (hasCalendar) {

        prevMonth.addEventListener("click", function () {

            const firstDay = getMonthStart(currentMonthDate);

            firstDay.setDate(firstDay.getDate() - 1);

            currentMonthDate = getMonthStart(firstDay);


            if (hasTasks) {

                taskDate.value = toISODate(currentMonthDate);

                saveSelectedDate();

                renderTasks();

            }

            renderCalendar();

        });


        // ماه بعد

        nextMonth.addEventListener("click", function () {

            const datesInMonth = getMonthDates(currentMonthDate);

            const lastDay = datesInMonth[datesInMonth.length - 1];

            const nextDay = new Date(lastDay);

            nextDay.setDate(nextDay.getDate() + 1);

            currentMonthDate = getMonthStart(nextDay);


            if (hasTasks) {

                taskDate.value = toISODate(currentMonthDate);

                saveSelectedDate();

                renderTasks();

            }

            renderCalendar();

        });

    }


    // تغییر زبان

    window.addEventListener(
        "planner-language-changed",
        function () {

            renderCalendar();

            renderTasks();

        }
    );


    // تغییر نوع تقویم

    window.addEventListener(
        "planner-calendar-changed",
        function () {

            renderCalendar();

        }
    );


    saveTasks();

    renderCalendar();

    renderTasks();

})();


// =====================================
// 3. GOALS
// =====================================

(function () {

    const form = document.getElementById("goal-form");
    const input = document.getElementById("goal-input");
    const dateInput = document.getElementById("goal-date");
    const list = document.getElementById("goals-list");
    const empty = document.getElementById("goals-empty");

    if (!form || !input || !dateInput || !list || !empty) {
        return;
    }


    const KEY = "as-planer-goals";

    let goals = [];


    try {

        goals = JSON.parse(localStorage.getItem(KEY)) || [];

        if (!Array.isArray(goals)) {
            goals = [];
        }

    } catch (error) {

        goals = [];

    }


    goals = goals
        .filter(goal => goal && typeof goal === "object")
        .map((goal, index) => ({

            id: String(goal.id || `goal-${Date.now()}-${index}`),

            title: String(goal.title || ""),

            date: typeof goal.date === "string" ? goal.date : "",

            progress: Math.min(
                100,
                Math.max(0, Number(goal.progress) || 0)
            )

        }))
        .filter(goal => goal.title.trim());


    function save() {

        localStorage.setItem(
            KEY,
            JSON.stringify(goals)
        );

    }


    function getLocalDate(value) {

        if (!value) return null;

        const parts = value.split("-").map(Number);

        if (parts.length !== 3 || parts.some(Number.isNaN)) {
            return null;
        }

        return new Date(
            parts[0],
            parts[1] - 1,
            parts[2]
        );

    }


    function render() {

        list.innerHTML = "";

        empty.style.display =
            goals.length ? "none" : "block";


        goals.forEach(goal => {

            const card = document.createElement("div");

            card.className = "goal-card saved-item";


            const toggle = document.createElement("button");

            toggle.type = "button";

            toggle.className = "saved-item-title";

            toggle.textContent = goal.title;


            const details = document.createElement("div");

            details.className = "saved-item-details";

            details.hidden = true;


            const deadline = document.createElement("p");


            if (goal.date) {

                const today = new Date();

                today.setHours(0, 0, 0, 0);


                const targetDate = getLocalDate(goal.date);

                let remainingText =
                    window.plannerTranslate("noDeadline");


                if (targetDate) {

                    const difference = Math.round(
                        (targetDate - today) /
                        (1000 * 60 * 60 * 24)
                    );


                    if (difference > 0) {

                        remainingText =
                            `${difference} ${window.plannerTranslate("daysRemaining")}`;

                    } else if (difference === 0) {

                        remainingText =
                            window.plannerTranslate("deadlineToday");

                    } else {

                        remainingText =
                            `${Math.abs(difference)} ${window.plannerTranslate("daysOverdue")}`;

                    }

                }


                const dateLabel = document.createElement("span");

                dateLabel.textContent =
                    `${window.plannerTranslate("deadlineLabel")} ${goal.date}`;


                const remainingLabel = document.createElement("span");

                remainingLabel.className = "days-left";

                remainingLabel.textContent = remainingText;


                deadline.append(dateLabel, remainingLabel);

            } else {

                deadline.textContent =
                    window.plannerTranslate("noDeadline");

            }


            const progress = document.createElement("p");

            progress.textContent =
                `${window.plannerTranslate("progressLabel")} ${goal.progress}%`;


            const bar = document.createElement("div");

            bar.className = "goal-progress";


            const fill = document.createElement("div");

            fill.className = "goal-progress-fill";

            fill.style.width = `${goal.progress}%`;


            bar.appendChild(fill);


            const increase = document.createElement("button");

            increase.type = "button";

            increase.textContent =
                window.plannerTranslate("increaseProgress");

            increase.dataset.action = "increase";

            increase.dataset.id = goal.id;

            increase.disabled = goal.progress >= 100;


            const remove = document.createElement("button");

            remove.type = "button";

            remove.textContent =
                window.plannerTranslate("deleteGoal");

            remove.dataset.action = "delete";

            remove.dataset.id = goal.id;


            details.append(
                deadline,
                progress,
                bar,
                increase,
                remove
            );


            toggle.addEventListener("click", function () {

                details.hidden = !details.hidden;

                toggle.classList.toggle(
                    "open",
                    !details.hidden
                );

            });


            card.append(toggle, details);

            list.appendChild(card);

        });

    }


    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const title = input.value.trim();

        if (!title) return;


        goals.push({

            id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,

            title: title,

            date: dateInput.value,

            progress: 0

        });


        save();

        render();

        form.reset();

    });


    list.addEventListener("click", function (event) {

        const button = event.target.closest(
            "button[data-action]"
        );

        if (!button) return;


        const id = button.dataset.id;


        if (button.dataset.action === "increase") {

            goals = goals.map(goal =>

                goal.id === id
                    ? {
                        ...goal,
                        progress: Math.min(
                            goal.progress + 10,
                            100
                        )
                    }
                    : goal

            );

        }

        if (button.dataset.action === "delete") {

            goals = goals.filter(
                goal => goal.id !== id
            );

        }


        save();

        render();

    });


    window.addEventListener(
        "planner-language-changed",
        render
    );


    render();

})();


// =====================================
// 4. HABITS
// =====================================

(function () {

    const form = document.getElementById("habit-form");
    const input = document.getElementById("habit-input");
    const list = document.getElementById("habits-list");
    const empty = document.getElementById("habits-empty");

    if (!form || !input || !list || !empty) {
        return;
    }


    const KEY = "as-planer-habits";

    let habits = [];


    try {

        habits = JSON.parse(localStorage.getItem(KEY)) || [];

        if (!Array.isArray(habits)) {
            habits = [];
        }

    } catch (error) {

        habits = [];

    }


    habits = habits
        .filter(habit => habit && typeof habit === "object")
        .map((habit, index) => ({

            id: String(habit.id || `habit-${Date.now()}-${index}`),

            title: String(habit.title || ""),

            completedDate:
                typeof habit.completedDate === "string"
                    ? habit.completedDate
                    : ""

        }))
        .filter(habit => habit.title.trim());


    function save() {

        localStorage.setItem(
            KEY,
            JSON.stringify(habits)
        );

    }


    function getToday() {

        const now = new Date();

        return [
            now.getFullYear(),
            String(now.getMonth() + 1).padStart(2, "0"),
            String(now.getDate()).padStart(2, "0")
        ].join("-");

    }


    function render() {

        list.innerHTML = "";

        empty.style.display =
            habits.length ? "none" : "block";


        const today = getToday();


        habits.forEach(habit => {

            const completed = habit.completedDate === today;


            const card = document.createElement("div");

            card.className = "habit-card saved-item";


            const toggle = document.createElement("button");

            toggle.type = "button";

            toggle.className = "saved-item-title";

            toggle.textContent = habit.title;


            const details = document.createElement("div");

            details.className = "saved-item-details";

            details.hidden = true;


            const status = document.createElement("p");

            status.textContent =
                `${window.plannerTranslate("todayStatus")} ` +
                window.plannerTranslate(
                    completed
                        ? "completedToday"
                        : "notCompletedToday"
                );


            const done = document.createElement("button");

            done.type = "button";

            done.className = "habit-done-btn";

            done.textContent = completed
                ? window.plannerTranslate("cancelCompletion")
                : `${window.plannerTranslate("done")} ✓`;

            done.dataset.action = "toggle";

            done.dataset.id = habit.id;


            const remove = document.createElement("button");

            remove.type = "button";

            remove.className = "habit-delete-btn";

            remove.textContent =
                window.plannerTranslate("deleteHabit");

            remove.dataset.action = "delete";

            remove.dataset.id = habit.id;


            details.append(status, done, remove);


            toggle.addEventListener("click", function () {

                details.hidden = !details.hidden;

                toggle.classList.toggle(
                    "open",
                    !details.hidden
                );

            });


            card.append(toggle, details);

            list.appendChild(card);

        });

    }


    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const title = input.value.trim();

        if (!title) return;


        habits.push({

            id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,

            title: title,

            completedDate: ""

        });


        save();

        render();

        form.reset();

    });


    list.addEventListener("click", function (event) {

        const button = event.target.closest(
            "button[data-action]"
        );

        if (!button) return;


        const id = button.dataset.id;


        if (button.dataset.action === "toggle") {

            const today = getToday();

            habits = habits.map(habit =>

                habit.id === id
                    ? {
                        ...habit,
                        completedDate:
                            habit.completedDate === today
                                ? ""
                                : today
                    }
                    : habit

            );

        }


        if (button.dataset.action === "delete") {

            habits = habits.filter(
                habit => habit.id !== id
            );

        }


        save();

        render();

    });


    window.addEventListener(
        "planner-language-changed",
        render
    );


    render();

})();


// =====================================
// 5. NOTES
// =====================================

(function () {

    const form = document.getElementById("note-form");
    const titleInput = document.getElementById("note-title");
    const contentInput = document.getElementById("note-content");
    const list = document.getElementById("notes-list");
    const empty = document.getElementById("notes-empty");

    if (!form || !titleInput || !contentInput || !list || !empty) {
        return;
    }


    const KEY = "as-planer-notes";

    let notes = [];


    try {

        notes = JSON.parse(localStorage.getItem(KEY)) || [];

        if (!Array.isArray(notes)) {
            notes = [];
        }

    } catch (error) {

        notes = [];

    }


    notes = notes
        .filter(note => note && typeof note === "object")
        .map((note, index) => ({

            id: String(note.id || `note-${Date.now()}-${index}`),

            title: String(note.title || ""),

            content: String(note.content || ""),

            date: typeof note.date === "string" ? note.date : ""

        }))
        .filter(note => note.title.trim() || note.content.trim());


    function save() {

        localStorage.setItem(
            KEY,
            JSON.stringify(notes)
        );

    }


    function render() {

        list.innerHTML = "";

        empty.style.display =
            notes.length ? "none" : "block";


        notes.forEach(note => {

            const card = document.createElement("div");

            card.className = "note-card saved-item";


            const toggle = document.createElement("button");

            toggle.type = "button";

            toggle.className = "saved-item-title";

            toggle.textContent = note.title;


            const details = document.createElement("div");

            details.className = "saved-item-details";

            details.hidden = true;


            const content = document.createElement("p");

            content.textContent = note.content;


            const date = document.createElement("small");

            date.textContent = note.date;


            const remove = document.createElement("button");

            remove.type = "button";

            remove.textContent =
                window.plannerTranslate("deleteNote");

            remove.dataset.action = "delete";

            remove.dataset.id = note.id;


            details.append(content, date, remove);


            toggle.addEventListener("click", function () {

                details.hidden = !details.hidden;

                toggle.classList.toggle(
                    "open",
                    !details.hidden
                );

            });


            card.append(toggle, details);

            list.appendChild(card);

        });

    }


    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const title = titleInput.value.trim();

        const content = contentInput.value.trim();

        if (!title || !content) return;


        notes.unshift({

            id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,

            title: title,

            content: content,

            date: new Date().toLocaleDateString("fa-IR")

        });


        save();

        render();

        form.reset();

    });


    list.addEventListener("click", function (event) {

        const button = event.target.closest(
            "button[data-action]"
        );

        if (!button) return;


        notes = notes.filter(
            note => note.id !== button.dataset.id
        );


        save();

        render();

    });


    window.addEventListener(
        "planner-language-changed",
        render
    );


    render();

})();


// =====================================
// 6. GLOBAL THEME SETTINGS
// =====================================

(function () {

    const lightButton = document.getElementById("light-theme");

    const darkButton = document.getElementById("dark-theme");


    const savedTheme =
        localStorage.getItem("as-planer-theme") || "light";


    function applyTheme(theme) {

        const selectedTheme =
            theme === "dark" ? "dark" : "light";

        document.body.classList.toggle(
            "dark-mode",
            selectedTheme === "dark"
        );

        localStorage.setItem(
            "as-planer-theme",
            selectedTheme
        );

    }


    applyTheme(savedTheme);


    if (lightButton) {

        lightButton.addEventListener("click", function () {
            applyTheme("light");
        });

    }


    if (darkButton) {

        darkButton.addEventListener("click", function () {
            applyTheme("dark");
        });

    }

})();


// =====================================
// 7. MOBILE MENU
// =====================================

(function () {

    const menuButton =
        document.getElementById("mobile-menu-toggle");

    const sidebarNav =
        document.getElementById("sidebar-nav");


    if (!menuButton || !sidebarNav) return;


    menuButton.addEventListener("click", function () {

        sidebarNav.classList.toggle("open");

        const isOpen =
            sidebarNav.classList.contains("open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });


    sidebarNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {

            sidebarNav.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    document.addEventListener("click", function (event) {

        if (
            !sidebarNav.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            sidebarNav.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

})();


console.log("A.S.Planer is ready!");





