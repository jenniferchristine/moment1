"use strict";

function addToForm(event) {
    event.preventDefault();

    const surname = document.getElementById("surname").value;
    const lastname = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;
    const city = document.getElementById("city").value;

    if (!surname || !lastname || !age || !city) {
        alert("Vänligen fyll i alla fält");
        return;
    }

    const tBody = document.getElementById("tableBody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
    <td>${tBody.rows.length + 1}</td>
    <td>${surname}</td>
    <td>${lastname}</td>
    <td>${age}</td>
    <td>${city}</td>
    `;

    tBody.appendChild(newRow);
    document.getElementById("formResult").reset();
}