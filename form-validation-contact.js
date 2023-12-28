
  document.getElementById('submitButton').addEventListener('click', function () {
    validateForm();
  });

  function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phoneNumber = document.getElementById('number').value;
    var contactTypePersonal = document.getElementById('personal').checked;
    var contactTypeCompany = document.getElementById('company').checked;
    var h1Element = document.querySelector('.contact-panel .text h1');

    // Check if first name and last name contain numbers
    if (/\d/.test(firstName) || /\d/.test(lastName)) {
      showError("PLEASE FILL ALL THE INFO");
      return;
    }

    if (!firstName || !lastName || !phoneNumber || (!contactTypePersonal && !contactTypeCompany)) {
      showError("PLEASE FILL ALL THE INFO");
    } else {
      submitButton.textContent = "DONE!";

      // Reset submit button to default after 5 seconds
      setTimeout(function () {
        submitButton.textContent = "SEND";
        submitButton.style.color = ""; // Reset color to default
      }, 5000);

      // You can add further processing or form submission logic here
    }
  }

  function showError(message) {
    var submitButton = document.getElementById('submitButton');
    submitButton.textContent = message;
    submitButton.style.background = "red";

    // Reset submit button to default after 5 seconds
    setTimeout(function () {
      submitButton.textContent = "SEND";
      submitButton.style.background = ""; // Reset color to default
    }, 5000);
  }

