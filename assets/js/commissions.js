var latest_price = 123

function getPricePerMinute() {
    const selector = document.getElementById("genre");

    console.log(selector.value)
    switch (selector.value) {
        case "cinematic":
            return 80;
        case "rock":
            return 60;
        case "electronic":
            return 50;
        case "mixing":
            return 45;
        default:
            alert("Invalid genre/music type specified.")
            break;
    }
}

function calculatePrice() {
    const output = document.getElementById("calculated-price");

    const duration = document.getElementById("duration");
    const purchase_button = document.getElementById("purchase-button");

    if(duration.value === "") {
        alert("Please input a valid duration!");
        return;
    }

    const price_unit = getPricePerMinute();

    const minutes = parseInt(duration.value.substring(0, 2));
    const seconds = parseInt(duration.value.substring(3));

    const totalInMinutes = minutes + (seconds / 60);
    latest_price = Math.round((totalInMinutes * price_unit));

    output.textContent = "Price: " + latest_price + "€ (" + price_unit + "€/min, " + duration.value + ")";
    purchase_button.hidden = false;
}

function payOnThomann() {
    openLinkCautious("https://www.thomann.de/intl/basket_coupon.html?ordervalue=" + latest_price)
}