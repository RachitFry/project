// packages and services array object
const packages = [
    {
        image: "https://images.pexels.com/photos/2748019/pexels-photo-2748019.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "The Turk Palace",
        subTitle: "one of the best hotel",
        price: 300,
        rating: 3.7
    },
    {
        image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?cs=srgb&dl=dug-out-pool-hotel-poolside-1134176.jpg&fm=jpg",
        title: "Le'mo re Tour",
        subTitle: "luxury in its truest form",
        price: 260,
        rating: 2.2
    },
    {
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2020/04/The-Muraka-Undersea-Bedroom-scaled.jpg",
        title: "Under water world resort",
        subTitle: "Japan is great place to visit.",
        price: 190,
        rating: 4.2
    },
    {
        image: "https://images.alphacoders.com/498/498263.jpg",
        title: "Golden Beach Resort",
        subTitle: "India is great place to visit.",
        price: 200,
        rating: 4.9
    },
    {
        image: "https://www.travelplusstyle.com/wp-content/uploads/2016/01/sonevajani-1880.jpg",
        title: "Royal Mal Resort",
        subTitle: "Australia is great place to visit.",
        price: 360,
        rating: 4.7
    },
    {
        image: "https://images.pexels.com/photos/94420/pexels-photo-94420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Over Town Table Hotel",
        subTitle: "Malaysia is great place to visit.",
        price: 290,
        rating: 2.8
    },
    {
        image: "https://ci4.googleusercontent.com/proxy/Pl0uCGLcZAt_Nhjazzg6xUWXSvsTwAAoK9U-wxCuzHigmK-1cj6_eORGlsrhUazLA_8YtxUKmT074oeFwlXjeqFY-ZQDI88MUvMZZkPmY4NoTfevchXblMSxcj5K5HkwdPn1giaw=s0-d-e1-ft#https://cdn.hotelplanner.com/Common/Images/_HotelPlanner/Home-Page/fade/sld6.jpg",
        title: "Rift View Resort",
        subTitle: "Indonesia is great place to visit.",
        price: 310,
        rating: 3.9
    },-
    {
        image: "https://www.hotelscombined.com/news/wp-content/uploads/sites/314/2020/08/featured-image-GettyImages-989110990.jpg",
        title: "Palm Bliss Resort",
        subTitle: "United States is great place to visit.",
        price: 460,
        rating: 4.0
    },
    {
        image: "https://www.tripsavvy.com/thmb/M76hHrXLJRAysiuS74Ym6XHA7tU=/3216x2136/filters:fill(auto,1)/LuxorHotelandCasino-026c92de5e0845f5b214f1a80d869d23.jpg",
        title: "Eypt the Legends Hotel",
        subTitle: "China is great place to visit.",
        price: 270,
        rating: 3.4
    },
]

const services = [
    {
        name: "Affordable Hotel",
        description: "Booking and reservation services for hotels, resorts, lodges, and vacation rentals"
    },
    {
        name: "Food & Drinks",
        description: "Engage travelers in interactive and educational experiences related to food and beverages"
    },
    {
        name: "Safety Guide",
        description: "Be aware of your surroundings and trust your instincts"
    },
    {
        name: "Travel Insurance",
        description: "Offer travel insurance options to ensure travelers' safety and security during their trips"
    },
    {
        name: "Transportation Assistance",
        description: "Arrangement of airport transfers, car rentals, and transportation between destinations"
    },
    {
        name: "Wellness & Spa",
        description: "Wellness retreats and spa for relaxation and rejuvenation"
    },
]

const galleryImages = [
    {
        imageUrl: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        imageUrl: "https://images.pexels.com/photos/6246724/pexels-photo-6246724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        imageUrl: "https://images.pexels.com/photos/5254688/pexels-photo-5254688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        imageUrl: "https://images.pexels.com/photos/19109585/pexels-photo-19109585/free-photo-of-victoria-memorial-museum-in-kolkata-seen-from-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        imageUrl: "https://images.pexels.com/photos/5472258/pexels-photo-5472258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        imageUrl: "https://images.pexels.com/photos/132479/pexels-photo-132479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        imageUrl: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        imageUrl: "https://images.pexels.com/photos/99551/hot-air-balloon-valley-sky-99551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    
]

// package and service section reference.
const packageSection = document.getElementById('package-section');
const serviceSection = document.getElementById('services-section');
const gallerySection = document.getElementById('gallery-section');

const packageBookingBtn = document.getElementById('packageBookingBtn');

// form input elements reference.
const whereTo = document.getElementById('whereTo');
const persons = document.getElementById('persons');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const description = document.getElementById('description');

// error elements reference for input fields.
const whereToError = document.getElementById('whereToError');
const personsError = document.getElementById('personsError');
const startDateError = document.getElementById('startDateError');
const endDateError = document.getElementById('endDateError');
const descriptionError = document.getElementById('descriptionError');

// booking form reference
const bookingForm = document.getElementById('bookingForm');

// functions to validate the form input fields.
function validateNotEmpty(value, errorElement, errorMessage) {
    if (!value) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

function validatePositiveInteger(value, errorElement, errorMessage) {
    if (value < 1) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

function validateDateNotInPast(value, currentDateValue, errorElement, errorMessage) {
    if (value < currentDateValue) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

function validateEndDateAfterStartDate(endDateValue, startDateValue, errorElement, errorMessage) {
    if (endDateValue < startDateValue) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

function validateDescriptionLength(value, errorElement, errorMessage, minLength) {
    if (value.length < minLength) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

// function to handle booking form.
function handleFormSubmit(e) {
    var currentDate = new Date().toISOString().split('T')[0];

    var isValid = true;

    if (!whereTo.value || !persons.value || !startDate.value || !endDate.value || !description.value) {
        isValid &= validateNotEmpty(whereTo.value, whereToError, "Error: Complete this field.");
        isValid &= validateNotEmpty(persons.value, personsError, "Error: Complete this field.");
        isValid &= validateNotEmpty(startDate.value, startDateError, "Error: Complete this field.");
        isValid &= validateNotEmpty(endDate.value, endDateError, "Error: Complete this field.");
        isValid &= validateNotEmpty(description.value, descriptionError, "Error: Complete this field.");
    } else {
        isValid &= validatePositiveInteger(persons.value, personsError, "Error: Please add at least one person.");
        isValid &= validateDateNotInPast(startDate.value, currentDate, startDateError, "Error: Start Date cannot be in the past.");
        isValid &= validateDateNotInPast(endDate.value, currentDate, endDateError, "Error: End Date cannot be in the past.");
        isValid &= validateEndDateAfterStartDate(endDate.value, startDate.value, endDateError, "Error: End Date cannot be prior to Start Date.");
        isValid &= validateDescriptionLength(description.value, descriptionError, "Error: Description must be at least 50 characters.", 50);
    }

    if (isValid) {
        alert(`Thank You!\nYour package has been booked successfully for ${whereTo.value}.`);
        bookingForm.reset();
    }
    e.preventDefault();
}

// function to create HTML package card.
function createPackage() {
    packages.map((package) => {
        let packageCard = document.createElement('div');
        let packageCardContent = document.createElement('div');
        let image = document.createElement('img');
        let title = document.createElement('h3');
        let subTitle = document.createElement('p');
        let price = document.createElement('p');
        let rating = document.createElement('div');
        let button = document.createElement('button');

        image.src = package.image;
        image.alt = package.title;
        title.textContent = package.title;
        subTitle.textContent = package.subTitle;
        price.innerHTML = `$${package.price}`;
        button.textContent = 'Book';
        rating.style.marginBlock = '5px';
        price.classList.add('price');

        packageCard.classList.add('package-card');
        packageCardContent.classList.add('card-content');
        packageCardContent.appendChild(title);
        packageCardContent.appendChild(subTitle);
        packageCardContent.appendChild(price);
        packageCardContent.appendChild(rating);

        let stars = 5;
        for(let i=1; i<=Math.round(package.rating); i++) {
            let starIcon = document.createElement('i');
            starIcon.style.color = '#E5BD46';
            starIcon.style.paddingInline = '1px';
            starIcon.classList.add('bi');
            starIcon.classList.add('bi-star-fill');
            rating.appendChild(starIcon);
            stars -=1;
        }
        for(let i=1; i<=stars; i++) {
            let starIcon = document.createElement('i');
            starIcon.style.color = '#BFBFBF'
            starIcon.style.paddingInline = '1px';
            starIcon.classList.add('bi');
            starIcon.classList.add('bi-star-fill');
            rating.appendChild(starIcon);
        }

        packageCardContent.appendChild(button);
        button.classList.add('btn');
        button.classList.add('btn-warning');
        packageCard.appendChild(image);
        packageCard.appendChild(packageCardContent);
        packageSection.appendChild(packageCard)
    })
};

// function to create HTML service card.
function createService() {
    services.map((service) => {
        let serviceCard = document.createElement('div');
        serviceCard.classList.add('service-item');

        let serviceName = document.createElement('h3');
        serviceName.textContent = service.name;
        let serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;
        serviceCard.appendChild(serviceName);
        serviceCard.appendChild(serviceDescription);
        serviceSection.appendChild(serviceCard);
    })
};

// function to create HTML gallery card.
function createGallery() {
    galleryImages.map((image) => {
        let galleryCard = document.createElement('div');
        galleryCard.classList.add('box');

        let galleryImage = document.createElement('img');
        galleryImage.src = image.imageUrl;
        galleryCard.appendChild(galleryImage);
        gallerySection.appendChild(galleryCard);
    })
};

createPackage();
createService();
createGallery();

// event listener to submit the form on button click.
packageBookingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    handleFormSubmit();
});

// event listener to submit the form on form submit.
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleFormSubmit();
    bookingForm.reset();
});

// Event listeners to remove the error message from input fields when value is updated.
document.getElementById('whereTo').addEventListener('input', function () {
    whereToError.textContent = "";
});

document.getElementById('persons').addEventListener('input', function () {
    personsError.textContent = "";
});

document.getElementById('startDate').addEventListener('input', function () {
    startDateError.textContent = "";
});

document.getElementById('endDate').addEventListener('input', function () {
    endDateError.textContent = "";
});

document.getElementById('description').addEventListener('input', function () {
    descriptionError.textContent = "";
});


// Back to Top 
document.addEventListener("DOMContentLoaded", function() {
    var backToTopBtn = document.getElementById("back-to-top-btn");

    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});
