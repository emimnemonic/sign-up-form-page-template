var nameBox = document.getElementById('namebox'),
    emailBox = document.getElementById('emailbox'),
    confirmBox = document.getElementById('confirmbox'),
    nameInput = document.getElementById('userName'),
    emailInput = document.getElementById('userEmail'),
    userInfo = [],
    nameVal,
    emailVal,
    isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.iOS() || isMobile.BlackBerry() || isMobile.Windows() || isMobile.Opera());
        },
        isDesktop: function () {
            if (navigator.platform.indexOf('Mac') > -1 || navigator.platform.indexOf('Win') > -1) {
                return true;
            } else {
                return false;
            }
        },
        checkAndroid: function () {
            if (isMobile.Android() && !isMobile.isDesktop()) {
                nameBox.style.height = "400px";
                emailBox.style.height = "400px";
            }
        },
        checkMobile: function () {
            if (!isMobile.any() && isMobile.isDesktop()) {
                emailInput.focus();
            }
        }
    };



nameInput.addEventListener('keypress', function nextStep(e) {

    nameVal = document.getElementById('userName').value;

    if (e.keyCode == 13 && nameVal !== "") {
        userInfo.push(nameVal);
        nameBox.style.display = "none";
        emailBox.style.display = "block";

        // Add name input value to step two title

        document.getElementById('stepTwoTitle').insertAdjacentHTML('beforeend', "<span>" + nameVal + "!</span>");


        isMobile.checkMobile();

    } else if (e.keyCode == 13 && nameVal == "") {
        // Box background flashes red if field is left empty
        nameBox.classList.add("blink");
        setTimeout(function () {
            if (nameBox.classList.contains("blink")) {
                nameBox.classList.remove("blink");
            }
        }, 1000);
    }
});

emailInput.addEventListener('keypress', function submit(e) {
    emailVal = document.getElementById('userEmail').value;

    if (e.keyCode == 13 && emailVal !== "") {
        // Email Validations here
        userInfo.push(emailVal);
        console.log(userInfo);
        emailBox.style.display = "none";

        setTimeout(function () {
            confirmBox.style.display = "block";
            confirmBox.classList.add('success');
            document.getElementById("confirmation").classList.add("move-icon");
        }, 400);

    } else if (e.keyCode == 13 && emailVal == "") {
        // Box background flashes red if field is left empty. will do form validations another day.
        emailBox.classList.add("blink");
        setTimeout(function () {
            if (emailBox.classList.contains("blink")) {
                emailBox.classList.remove("blink");
            }
        }, 1000);
    }
});
