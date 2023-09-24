document.addEventListener("DOMContentLoaded", function () {
    const cognitiveForm = document.getElementById("cognitiveForm");
    const analyzeButton = document.getElementById("analyzeButton");

    analyzeButton.addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const brothers = parseInt(document.getElementById("brothers").value);
        const textbox3 = parseInt(document.getElementById("textbox3").value);
        const textbox4 = parseInt(document.getElementById("textbox4").value);
        const textbox5 = parseInt(document.getElementById("textbox5").value);
        const enteredBrothers = parseInt(document.getElementById("enteredBrothers").value);
        const enteredSisters = parseInt(document.getElementById("enteredSisters").value);

        // Validation and calculation
        const errors = [];
        if (isNaN(brothers)) {
            errors.push("Number of Brothers must be a valid number.");
        }
        if (isNaN(enteredBrothers)) {
            errors.push("Entered Brothers must be a valid number.");
        }
        if (isNaN(enteredSisters)) {
            errors.push("Entered Sisters must be a valid number.");
        }

        const derivedValue = textbox6Calculation(brothers, enteredSisters);
        const derivedBrothers = Math.floor(derivedValue / 10);
        const derivedSisters = derivedValue % 10;

        if (enteredBrothers === derivedBrothers && enteredSisters === derivedSisters) {
            setResultMessage("Good memory and problem solving skills");
        } else {
            setResultMessage("Retardation in memory and problem solving skills");
        }

        // Display errors
        displayErrors(errors);
    });

    // Function to calculate the value for Textbox 6
    function textbox6Calculation(brothers, sisters) {
        return (textbox5Calculation(brothers) + sisters);
    }

    // Function to calculate the value for Textbox 5
    function textbox5Calculation(brothers) {
        return ((textbox4Calculation(brothers) + brothers) * 5);
    }

    // Function to calculate the value for Textbox 4
    function textbox4Calculation(brothers) {
        return (textbox3Calculation(brothers) + 1);
    }

    // Function to calculate the value for Textbox 3
    function textbox3Calculation(brothers) {
        return (brothers + 2) * 2;
    }

    // Function to set the result message
    function setResultMessage(message) {
        const result = document.getElementById("result");
        result.textContent = message;
    }

    // Function to display errors
    function displayErrors(errors) {
        for (let i = 3; i <= 5; i++) {
            const errorDiv = document.getElementById("error" + i);
            errorDiv.textContent = "";
        }
        if (errors.length > 0) {
            errors.forEach((error, index) => {
                const errorDiv = document.getElementById("error" + (index + 3));
                errorDiv.textContent = error;
            });
        }
    }
});
