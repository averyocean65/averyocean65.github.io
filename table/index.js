// Existing dictionary
const idCounts = {};

function submitId() {
    const input = document.getElementById("id-input");
    const id = input.value.trim();

    if (id) {
        idCounts[id] = (idCounts[id] || 0) + 1;
        console.log(idCounts);
        input.value = "";

        renderTable(); // Update the table after each submission
    } else {
        console.log("No ID entered.");
    }

    renderTable();
}

function renderTable() {
    const table = document.getElementById("sorting-table");
    const tbody = table.querySelector("tbody");

    // Clear existing rows
    tbody.innerHTML = "";

    // Populate table from dictionary
    for (const [id, count] of Object.entries(idCounts)) {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = id;

        const countCell = document.createElement("td");
        countCell.textContent = count;

        row.appendChild(idCell);
        row.appendChild(countCell);
        tbody.appendChild(row);
    }
}
