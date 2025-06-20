// script.js
function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";

    // For toggling the main navigation links (if using Approach 1 or 3)
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

// Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, // Adjust based on navbar height
                behavior: "smooth"
            });
        }
    });
});

// Course Card Scrolling
function scrollLeft() {
    document.getElementById("courseScroll").scrollBy({ left: -300, behavior: "smooth" });
}

function scrollRight() {
    document.getElementById("courseScroll").scrollBy({ left: 300, behavior: "smooth" });
}

// Open Modal Function
function openModal(title, description, imageSrc) {
    document.getElementById("courseTitle").innerText = title;
    document.getElementById("courseDescription").innerText = description;
    document.getElementById("courseImage").src = imageSrc;
    document.getElementById("courseModal").style.display = "flex";
}

// Close Modal Function
function closeModal() {
    document.getElementById("courseModal").style.display = "none";
}

// Course Data (Move this to your script.js)
const coursesData = [{
        title: "Rose Course",
        description: "Learn how to grow and take care of roses like a pro!",
        image: "rose.jpg",
        price: 199
    },
    {
        title: "Dahlia Course",
        description: "Master the art of growing beautiful dahlias!",
        image: "dahlia.jpg",
        price: 149
    },
    {
        title: "Tulip Course",
        description: "Discover the secrets of growing vibrant tulips!",
        image: "tulip.jpg",
        price: 150
    },
    {
        title: "Sunflower Course",
        description: "Grow bright and healthy sunflowers!",
        image: "sunflower.jpg",
        price: 199
    },
    {
        title: "Lavender Course",
        description: "Learn how to cultivate fragrant lavender!",
        image: "lavender.jpg",
        price: 99
    },
    {
        title: "Marigold Course",
        description: "Grow vibrant marigolds in your garden!",
        image: "marigold.jpg",
        price: 49
    }
];

function renderCourses() {
    const courseContainer = document.getElementById("courseScroll");
    courseContainer.innerHTML = ""; // Clear existing content

    coursesData.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");
        courseCard.setAttribute("data-title", course.title);
        courseCard.setAttribute("data-description", course.description);
        courseCard.setAttribute("data-image", course.image);
        courseCard.onclick = function() {
            openModal(this.getAttribute("data-title"), this.getAttribute("data-description"), this.getAttribute("data-image"));
        };

        const img = document.createElement("img");
        img.src = course.image;
        img.alt = course.title;

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.innerHTML = `<p>Subscribe to Watch</p><button>Subscribe at ₹${course.price}/-</button>`;

        courseCard.appendChild(img);
        courseCard.appendChild(overlay);
        courseContainer.appendChild(courseCard);
    });
}

// Ensure Modal is Hidden on Page Load and Render Courses
document.addEventListener("DOMContentLoaded", function() {
    closeModal();
    renderCourses();

    // Close modal when clicking outside it
    const modal = document.getElementById("courseModal");
    if (modal) {
        modal.addEventListener("click", function(event) {
            if (event.target === this) {
                closeModal();
            }
        });
    }

    // Signup Form Handling
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            const user = { name, email, password };
            localStorage.setItem("user", JSON.stringify(user));
            alert("Sign up successful! You can now log in.");
            window.location.href = "login.html";
        });
    }

    // Login Form Handling
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;
            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (storedUser && storedUser.email === email && storedUser.password === password) {
                alert("Login successful!");
                window.location.href = "index.html";
            } else {
                alert("Invalid email or password. Please try again.");
            }
        });
    }
});
// script.js

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: Adds smooth scrolling animation
    });
}

// You might also want to add logic to show/hide the button
// based on how far the user has scrolled down:
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("goTopBtn").style.display = "block";
    } else {
        document.getElementById("goTopBtn").style.display = "none";
    }
}
const form = document.getElementById('newsletterForm');
const messageDiv = document.getElementById('newsletter-message');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual submission (no backend yet)

    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value.trim();

    if (!isValidEmail(email)) { // Basic frontend email validation
        displayMessage('Please enter a valid email address.', 'error');
        return;
    }

    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;
    messageDiv.classList.remove('hidden', 'success', 'error');
    messageDiv.textContent = '';

    // Simulate backend processing with a timeout
    setTimeout(() => {
        // Simulate a successful subscription (you can make this random if you want)
        const isSuccess = Math.random() < 0.8; // 80% chance of success for simulation

        if (isSuccess) {
            displayMessage('Successfully subscribed! (Simulated)', 'success');
            form.reset(); // Clear the form
        } else {
            displayMessage('Subscription failed. Please try again. (Simulated)', 'error');
        }

        submitButton.textContent = 'Subscribe';
        submitButton.disabled = false;
    }, 1500); // Simulate a 1.5-second processing time
});

function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function displayMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.classList.remove('hidden');
    messageDiv.classList.add(type);
}
// script.js
const courseCards = document.querySelectorAll('.course-card');
const courseModal = document.getElementById('courseModal');
const courseTitle = document.getElementById('courseTitle');
const courseImage = document.getElementById('courseImage');
const courseDescription = document.getElementById('courseDescription');
const courseScroll = document.getElementById('courseScroll');
const goTopBtn = document.getElementById('goTopBtn');

courseCards.forEach(card => {
    card.addEventListener('click', () => {
        courseTitle.textContent = card.dataset.title;
        courseImage.src = card.dataset.image; // You'll need to have images named like this
        courseDescription.textContent = card.dataset.description;
        courseModal.style.display = 'block';
    });
});

function closeModal() {
    courseModal.style.display = 'none';
}

function scrollLeft() {
    courseScroll.scrollLeft -= 200; // Adjust the scroll amount as needed
}

function scrollRight() {
    courseScroll.scrollLeft += 200; // Adjust the scroll amount as needed
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
};
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // prevents submission
    // you must handle the navigation or form submission manually now
    window.location.href = "thankyou.html"; // example
});
