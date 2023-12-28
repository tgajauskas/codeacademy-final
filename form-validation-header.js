document.addEventListener("DOMContentLoaded", function () {
    var getStartedLink = document.getElementById("getStartedLink");
    var buttonGetStarted = document.querySelector(".button-get-started");

    if (getStartedLink && buttonGetStarted) {
        getStartedLink.addEventListener("click", function (event) {
            // Get form elements and perform validation checks
            var firstName = document.querySelector("input[placeholder='First name']");
            var lastName = document.querySelector("input[placeholder='Last name']");
            var phoneNumber = document.querySelector("input[placeholder='Phone number']");
            var selectedSubscriptionType = document.querySelector("input[name='subscriptionType']:checked");

            // Validation checks
            if (!firstName.value || !lastName.value || !phoneNumber.value || !selectedSubscriptionType) {
                // Change the text to "Please fill in all your details"
                getStartedLink.textContent = "Please fill in all your details";

                // Change the background color and text color with transition effect for 5 seconds
                buttonGetStarted.classList.add("active");
                setTimeout(function () {
                    // Revert back to default styles
                    getStartedLink.textContent = "GET STARTED";
                    buttonGetStarted.classList.remove("active");
                }, 5000);

                event.preventDefault(); // Prevent link navigation
            } else {
                // Change the text to "DONE!" with a smooth transition
                getStartedLink.style.transition = "1s ease-in-out";
                getStartedLink.textContent = "DONE!";

                // After 5 seconds, revert back to "GET STARTED" with a smooth transition
                setTimeout(function () {
                    getStartedLink.textContent = "GET STARTED";
                    getStartedLink.style.transition = "0.5s ease-in-out";
                }, 5000);
            }
        });
    }
});