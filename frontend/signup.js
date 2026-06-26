/* ==========================================================================
   🌿 ZENGardening – Signup Logic (localStorage-based auth)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");
    if (form) form.addEventListener("submit", handleSignup);

    // If already logged in, redirect to home
    if (localStorage.getItem("zengardining-authtoken")) {
        window.location.href = "/home";
    }
});

function showSignupAlert(message, type = "error") {
    const alertArea = document.getElementById("alertArea");
    if (!alertArea) return;
    alertArea.style.display = "flex";
    alertArea.style.padding = "12px 16px";
    alertArea.style.borderRadius = "10px";
    alertArea.style.marginBottom = "16px";
    alertArea.style.fontSize = "0.9rem";
    alertArea.style.fontWeight = "500";
    alertArea.style.alignItems = "center";
    alertArea.style.gap = "8px";

    if (type === "error") {
        alertArea.style.background = "rgba(239, 83, 80, 0.12)";
        alertArea.style.border = "1.5px solid rgba(239, 83, 80, 0.4)";
        alertArea.style.color = "#c62828";
        alertArea.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    } else {
        alertArea.style.background = "rgba(46, 125, 50, 0.12)";
        alertArea.style.border = "1.5px solid rgba(46, 125, 50, 0.4)";
        alertArea.style.color = "#2e7d32";
        alertArea.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    }

    setTimeout(() => {
        alertArea.style.display = "none";
    }, 5000);
}

const handleSignup = (event) => {
    event.preventDefault();

    const name            = (document.getElementById("name").value || "").trim();
    const email           = (document.getElementById("email").value || "").trim().toLowerCase();
    const password        = (document.getElementById("password").value || "").trim();
    const confirmPassword = (document.getElementById("confirm-password").value || "").trim();
    const btn             = document.querySelector("#signupForm button[type='submit']");

    // Validation
    if (!name || !email || !password) {
        showSignupAlert("Please fill in all fields.");
        return;
    }
    if (password.length < 6) {
        showSignupAlert("Password must be at least 6 characters.");
        return;
    }
    if (password !== confirmPassword) {
        showSignupAlert("Passwords do not match.");
        return;
    }

    // Prevent signing up as admin
    if (email === "admin@zengardening.com") {
        showSignupAlert("This email is reserved. Please use a different email.");
        return;
    }

    // Check if email already registered
    const users = JSON.parse(localStorage.getItem("zen-registered-users") || "[]");
    if (users.find(u => u.email.toLowerCase() === email)) {
        showSignupAlert("An account with this email already exists. Please log in.");
        return;
    }

    // Show loading
    if (btn) { btn.disabled = true; btn.textContent = "Creating account…"; }

    // Save new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        password,   // plain-text is fine for this client-only app
        role: "Student",
        joined: new Date().toLocaleDateString('en-IN', { month: 'short', year: 'numeric' }),
        courses: 0,
        status: "Active"
    };
    users.push(newUser);
    localStorage.setItem("zen-registered-users", JSON.stringify(users));

    // Also add to zen-users for admin panel visibility
    const zenUsers = JSON.parse(localStorage.getItem("zen-users") || "[]");
    zenUsers.push({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: "Student",
        courses: 0,
        joined: newUser.joined,
        status: "Active"
    });
    localStorage.setItem("zen-users", JSON.stringify(zenUsers));

    // Auto-login the new user
    const token = "user-" + Date.now() + "-" + Math.random().toString(36).slice(2);
    localStorage.setItem("zengardining-authtoken", token);
    localStorage.setItem("zengardining-user", JSON.stringify({
        name: newUser.name,
        email: newUser.email,
        role: "Student"
    }));

    if (btn) { btn.disabled = false; btn.textContent = "Create Account"; }

    showSignupAlert("Account created! Welcome to ZENGardening 🌿", "success");
    setTimeout(() => { window.location.href = "/home"; }, 1200);
};