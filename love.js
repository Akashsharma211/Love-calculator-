// love.js
// This script calculates a random love percentage between two names
window.onload = function() {
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);
}

function calculateLove() {
    let button = document.getElementById("calculate");
    let yourName = document.getElementById("your-name").value;
    let crushName = document.getElementById("crush-name").value;

    if (yourName != "" && crushName != "") {
        let percentage = Math.floor(Math.random() * 101);

        document.getElementById("result-message").innerText = yourName + " and " + crushName + "'s chance of love:";
        document.getElementById("result-percentage").innerText = percentage.toString() + "%";

        button.disabled = false;
        button.innerText = "Reload";
        button.removeEventListener("click", calculateLove);
        button.addEventListener("click", function reloadPage() {
            // Clear form fields and results
            document.getElementById("your-name").value = "";
            document.getElementById("crush-name").value = "";
            document.getElementById("result-message").innerText = "";
            document.getElementById("result-percentage").innerText = "";
            button.innerText = "Calculate";
            button.disabled = false;
            // Remove this reload event and restore original
            button.removeEventListener("click", reloadPage);
            button.addEventListener("click", calculateLove);
        });
    }
}
