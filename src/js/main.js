"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formResult");
    form.addEventListener("submit", addToForm);

    const homeBtn = document.getElementById("navHome");

    homeBtn.addEventListener("click", () => {
        window.location.href = "/";
    });

});

function addToForm(event) {
    event.preventDefault();

    const surname = document.getElementById("surname").value;
    const lastname = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;
    const city = document.getElementById("city").value;
    let other = document.getElementById("moreInfo").value;

    if (!surname || !lastname || !age || !city) {
        alert("Vänligen fyll i alla fält");
        return;
    }

    other = other.trim() === "" ? "-" : other;

    const tBody = document.getElementById("tableBody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
    <td>${tBody.rows.length + 1}</td>
    <td>${surname}</td>
    <td>${lastname}</td>
    <td>${age}</td>
    <td>${city}</td>
    <td>${other}</td>
    `;

    tBody.appendChild(newRow);
    document.getElementById("formResult").reset();
}