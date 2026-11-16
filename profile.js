// =====================================
// A.S.PLANER - PROFILE SYSTEM
// =====================================

(function () {

    const NAME_KEY = "as-planer-profile-name";
    const IMAGE_KEY = "as-planer-profile-image";


    // =====================================
    // INDEX PAGE - DISPLAY PROFILE
    // =====================================

    const profileName = document.getElementById("profileName");
    const profileImage = document.getElementById("profileImage");
    const defaultAvatar = document.getElementById("defaultAvatar");

    function loadProfile() {

        const savedName = localStorage.getItem(NAME_KEY);
        const savedImage = localStorage.getItem(IMAGE_KEY);

        if (profileName) {
            profileName.textContent = savedName || "Your Name";
        }

        if (profileImage && defaultAvatar) {

            if (savedImage) {

                profileImage.src = savedImage;
                profileImage.hidden = false;
                defaultAvatar.hidden = true;

            } else {

                profileImage.hidden = true;
                defaultAvatar.hidden = false;

            }
        }
    }

    loadProfile();


    // =====================================
    // PROFILE PAGE - FORM
    // =====================================

    const profileForm = document.getElementById("profileForm");

    if (!profileForm) {
        return;
    }

    const nameInput = document.getElementById("profileNameInput");

    const imageInput = document.getElementById("profileUpload");

    const previewImage = document.getElementById("previewImage");

    const previewDefaultAvatar = document.getElementById("previewDefaultAvatar");


    // LOAD PREVIOUS INFORMATION

    const savedName = localStorage.getItem(NAME_KEY);
    const savedImage = localStorage.getItem(IMAGE_KEY);

    if (savedName) {
        nameInput.value = savedName;
    }

    if (savedImage) {

        previewImage.src = savedImage;

        previewImage.hidden = false;

        previewDefaultAvatar.hidden = true;

    }


    // SELECT IMAGE

    let selectedImage = savedImage || "";

    imageInput.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {

            alert("Please select a valid image.");

            this.value = "";

            return;
        }


        const reader = new FileReader();

        reader.onload = function (event) {

            const image = new Image();

            image.onload = function () {

                const canvas = document.createElement("canvas");

                const maxSize = 400;

                let width = image.width;
                let height = image.height;


                if (width > height && width > maxSize) {

                    height = height * maxSize / width;
                    width = maxSize;

                } else if (height > maxSize) {

                    width = width * maxSize / height;
                    height = maxSize;

                }


                canvas.width = width;
                canvas.height = height;

                const context = canvas.getContext("2d");

                context.drawImage(
                    image,
                    0,
                    0,
                    width,
                    height
                );


                selectedImage = canvas.toDataURL(
                    "image/jpeg",
                    0.75
                );


                previewImage.src = selectedImage;

                previewImage.hidden = false;

                previewDefaultAvatar.hidden = true;

            };

            image.onerror = function () {

                alert("Could not load this image.");

            };

            image.src = event.target.result;

        };

        reader.readAsDataURL(file);

    });


    // SAVE PROFILE

    profileForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = nameInput.value.trim();

        if (!name) {

            alert("Please enter your name.");

            nameInput.focus();

            return;
        }


        try {

            localStorage.setItem(NAME_KEY, name);

            if (selectedImage) {

                localStorage.setItem(
                    IMAGE_KEY,
                    selectedImage
                );

            }

            alert("Your profile has been saved!");

            window.location.href = "index.html";

        } catch (error) {

            alert(
                "Could not save your profile. Please choose a smaller image."
            );

        }

    });

})();