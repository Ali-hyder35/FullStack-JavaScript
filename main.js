console.log("Connected");
function submit_form(event) {
    try {
        event.preventDefault(); // Prevent actual form submission

        let full_name = document.getElementById("fullname").value.trim();
        let cnic = document.getElementById("cnic").value.trim();
        let email = document.getElementById("email").value.trim();
        let father_name = document.getElementById("fathername").value.trim();
        let contact_number = document.getElementById("contact_number").value.trim();

        if (cnic.length !== 13) {
            alert("Please enter a 13-digit CNIC number.");
            return;
        }

        if (contact_number.length !== 11) {
            alert("Please enter an 11-digit contact number.");
            return;
        }

        if (full_name.length < 3) {
            alert("Name must be at least 3 characters long.");
            return;
        }

        // If everything is valid
        alert("Form submitted successfully!");
        // You can now submit the form or perform further actions

    } catch (e) {
        console.error("An error occurred during form submission:", e);
        alert("Something went wrong. Please try again.");
    }
}

