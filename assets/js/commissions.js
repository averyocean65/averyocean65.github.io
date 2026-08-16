function getPricePerMinute() {
    return 60; // TODO: use select option to determine price
}

function calculatePrice() {
    const output = document.getElementById("calculated-price");
    output.textContent = "Price: TODO (" + getPricePerMinute() + "€/min)";
}