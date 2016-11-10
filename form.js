var nameBox = document.getElementById('namebox'),
    emailBox = document.getElementById('emailbox'),
    confirmBox = document.getElementById('confirmbox'),
    nameInput = document.getElementById('userName'),
    emailInput = document.getElementById('userEmail'),
    userInfo = [],
    nameVal,
    emailVal;
// Display first input field
function showForm() {
    nameBox.style.display = "block";
    nameInput.focus();
}

nameInput.addEventListener('keypress', function nextStep(e) {

    nameVal = document.getElementById('userName').value;

    if (e.keyCode == 13 && nameVal !== "") {
        userInfo.push(nameVal);
        nameBox.style.display = "none";
        emailBox.style.display = "block";

        // Add name input value to step two title

        document.getElementById('stepTwoTitle').insertAdjacentHTML('beforeend', "<span>" + nameVal + "!</span>" );

        emailInput.focus();

    } else if (e.keyCode == 13 && nameVal == "") {

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
        userInfo.push(emailVal);
        console.log(userInfo);
        emailBox.style.display = "none";
        confirmBox.style.display = "block";
        document.getElementById("confirmation").classList.add("move-icon");

    } else if (e.keyCode == 13 && emailVal == "") {

        emailBox.classList.add("blink");
        setTimeout(function () {
            if (emailBox.classList.contains("blink")) {
                emailBox.classList.remove("blink");
            }
        }, 1000);
    }
});
