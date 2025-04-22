// Dictionary to store IDs and how often they are submitted
const idCounts = {};

// Submit handler
function submitId() {
    const input = document.getElementById("id-input");
    const id = input.value.trim();

    if (id) {
        idCounts[id] = (idCounts[id] || 0) + 1;
        console.log(idCounts);
        input.value = "";
        renderTable(); // Update table view
    } else {
        console.log("No ID entered.");
    }
}

// Render table based on idCounts
function renderTable() {
    const table = document.getElementById("sorting-table");
    const tbody = table.querySelector("tbody");

    tbody.innerHTML = ""; // Clear current content

    for (const [id, count] of Object.entries(idCounts)) {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = id;

        const countCell = document.createElement("td");
        countCell.textContent = count;

        const controlsCell = document.createElement("td");

        const plusButton = document.createElement("button");
        plusButton.textContent = "+";
        plusButton.onclick = () => {
            idCounts[id]++;
            renderTable();
        };

        const minusButton = document.createElement("button");
        minusButton.textContent = "-";
        minusButton.onclick = () => {
            idCounts[id]--;
            if (idCounts[id] <= 0) {
                delete idCounts[id]; // remove entry if count hits 0 or below
            }
            renderTable();
        };

        controlsCell.appendChild(plusButton);
        controlsCell.appendChild(minusButton);

        row.appendChild(idCell);
        row.appendChild(countCell);
        row.appendChild(controlsCell);

        tbody.appendChild(row);
    }
}

async function downloadTable() {
    const table = document.getElementById("sorting-table");
    const tableHTML = table.outerHTML;
    let css = "";

    try {
        const response = await fetch("style.css");
        css = await response.text();
    } catch(error) {
        console.error(error);
    }

    const fullHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Exported Table</title>
    <style>${css}</style>
</head>
<body>
    ${tableHTML}
</body>
</html>
`;

    const blob = new Blob([fullHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "table.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
}
