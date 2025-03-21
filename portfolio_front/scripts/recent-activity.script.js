// Get elements
let contentBox = document.getElementById('rc-content-box')
let closeBtn = document.getElementById('close-btn')

let fetchedBlog = false

// wrote
const rcCardWroteId = "rc-card-wrote"
const cardWrote = document.getElementById(rcCardWroteId)

// drew
const rcCardDrewId = "rc-card-drew"
const cardDrew = document.getElementById(rcCardDrewId)

// read
const rcCardReadId = "rc-card-read"
const cardRead = document.getElementById(rcCardReadId)

// Image arrays
const drawings = [
    'assets/images/drawings/karuna.png'
];

const writings = [
    'assets/images/drawings/sleeping.gif'
];

const readings = [
    'assets/images/drawings/eating.png'
];

// Titles for each category
const modalTitles = {
    wrote: "drink water, Bro ",
    drew: "sleep well, Bro ",
    read: "Eat Good food, Bro "
};

// Open modal function
function openModal(type, cardId) {
    document.getElementById("modalOverlay").classList.add("show");
    document.getElementById("modal").classList.add("show");

    let card = document.getElementById(cardId);
    card.classList.add("rc-card-active");

    if (type == 'wrote') {
        displayContent(writings);
    } else if (type == 'drew') {
        displayContent(drawings);
    } else if (type == 'read') {
        displayContent(readings);
    }
}

// Close modal function
function closeModal() {
    document.getElementById("modalOverlay").classList.remove("show");
    document.getElementById("modal").classList.remove("show");

    let cards = document.querySelectorAll('.rc-card')
    for (const card of cards) {
        card.classList.remove("rc-card-active")
    }
}

// Close modal when clicking the close button
closeBtn.addEventListener('click', closeModal)

// Close modal when clicking outside of it
document.getElementById("modalOverlay").onclick = function (event) {
    if (event.target === this) {
        closeModal();
    }
};

// Function to display images in modal
function displayContent(dataArray) {
    contentBox.innerHTML = ''; // Clear previous content
    contentBox.className = 'content-container';

    dataArray.forEach((item) => {
        let contentBoxElement = document.createElement('div');
        contentBoxElement.classList.add('content-box');

        let contentImg = document.createElement('img');
        contentImg.loading = "lazy";
        contentImg.src = item;
        contentImg.classList.add('content-img');

        contentBoxElement.appendChild(contentImg);
        contentBox.appendChild(contentBoxElement);
    });
}


// Event listeners for cards
cardDrew.addEventListener("click", () => {
    openModal("drew", rcCardDrewId)
});

cardWrote.addEventListener("click", () => {
    openModal("wrote", rcCardWroteId)
});

cardRead.addEventListener("click", () => {
    openModal("read", rcCardReadId)
});
