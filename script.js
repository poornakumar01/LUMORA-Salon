// ================= CITY =================

const cityData = {

    Hyderabad: {
        address:
            "Jubilee Hills • Road No. 36 • 8:00 AM – 9:00 PM"
    },

    Kakinada: {
        address:
            "Main Road • Suryaraopeta • 8:00 AM – 8:00 PM"
    },

    Vijayawada: {
        address:
            "Benz Circle • MG Road • 8:00 AM – 9:00 PM"
    },

    Visakhapatnam: {
        address:
            "Dwaraka Nagar • Main Road • 8:00 AM – 9:00 PM"
    },

    Rajahmundry: {
        address:
            "Danavaipeta • Main Road • 8:00 AM – 8:00 PM"
    }

};


function changeCity() {

    const city =
        document.getElementById("citySelect").value;

    document.getElementById("cityName")
        .innerText = city;

    document.getElementById("cityAddress")
        .innerText = cityData[city].address;

}


// ================= LOCATION =================

function selectLocation(city) {

    document.getElementById("citySelect").value =
        city;

    changeCity();

    document.getElementById("home")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ================= BOOKING =================

function openBooking(service = "") {

    document.getElementById("bookingModal")
        .classList.add("show");


    if (service !== "") {

        document.getElementById("bookingService")
            .value = service;

    }

}


function closeBooking() {

    document.getElementById("bookingModal")
        .classList.remove("show");

}


// Close when clicking outside

document.getElementById("bookingModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeBooking();

        }

    });


// ================= BOOKING FORM =================

function submitBooking(event) {

    event.preventDefault();


    const name =
        document.getElementById("bookingName").value;

    document.getElementById("bookingMessage")
        .innerText =
        "✓ Thank you " +
        name +
        "! Your appointment request has been received.";


    event.target.reset();

}


// ================= CONTACT =================

function submitContact(event) {

    event.preventDefault();


    document.getElementById("contactMessage")
        .innerText =
        "✓ Thank you! We will contact you shortly.";


    event.target.reset();

}