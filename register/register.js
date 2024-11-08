import { participantTemplate, successTemplate } from './Templates.js';

let participantCount = 1; // Declare participantCount globally

document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add");
    const participantsFieldset = document.querySelector("fieldset.participants");

    addButton.addEventListener("click", () => {
        participantCount++;
        const newParticipantSection = participantTemplate(participantCount);
        addButton.insertAdjacentHTML("beforebegin", newParticipantSection);
    });

    const form = document.querySelector("form");
    form.addEventListener("submit", submitForm);
});

function submitForm(event) {
    event.preventDefault();

    const totalFees = calculateTotalFees();
    const adultName = document.getElementById("adult_name").value;

    document.querySelector("form").style.display = "none";
    const summary = document.getElementById("summary");
    summary.innerHTML = successTemplate({
        adultName,
        participantCount, // participantCount is now accessible here
        totalFees
    });
    summary.style.display = "block";
}

function calculateTotalFees() {
    const feeElements = [...document.querySelectorAll("[id^=fee]")];
    return feeElements.reduce((total, el) => total + Number(el.value || 0), 0);
}
