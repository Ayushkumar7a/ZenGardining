/* ==========================================================================
   🌿 ZENGardening – Login Logic (localStorage-based auth)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    if (form) form.addEventListener("submit", handleLogin);

    // If already logged in, redirect to home
    if (localStorage.getItem("zengardining-authtoken")) {
        window.location.href = "/home";
    }
});

function showAlert(message, type = "error") {
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

const handleLogin = (event) => {
    event.preventDefault();

    const email    = (document.getElementById("login-email").value || "").trim().toLowerCase();
    const password = (document.getElementById("login-password").value || "").trim();
    const btn      = document.querySelector("#loginForm button[type='submit']");

    // Basic validation
    if (!email || !password) {
        showAlert("Please enter both email and password.");
        return;
    }

    // Show loading state
    if (btn) { btn.disabled = true; btn.textContent = "Signing in…"; }

    // ── Admin shortcut ───────────────────────────────────────────
    // Admin credentials: admin@zengardening.com / admin123
    const ADMIN_EMAIL    = "admin@zengardening.com";
    const ADMIN_PASSWORD = "admin123";

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const token = "admin-" + Date.now();
        localStorage.setItem("zengardining-authtoken", token);
        localStorage.setItem("zengardining-user", JSON.stringify({
            name: "Admin",
            email: ADMIN_EMAIL,
            role: "Admin"
        }));
        showAlert("Welcome back, Admin! Redirecting…", "success");
        setTimeout(() => { window.location.href = "/admin"; }, 1000);
        return;
    }

    // ── Registered users (stored during signup) ──────────────────
    const users = JSON.parse(localStorage.getItem("zen-registered-users") || "[]");
    const user  = users.find(u => u.email.toLowerCase() === email && u.password === password);

    if (btn) { btn.disabled = false; btn.textContent = "Sign In"; }

    if (user) {
        const token = "user-" + Date.now() + "-" + Math.random().toString(36).slice(2);
        localStorage.setItem("zengardining-authtoken", token);
        localStorage.setItem("zengardining-user", JSON.stringify({
            name: user.name,
            email: user.email,
            role: "Student"
        }));
        showAlert("Login successful! Redirecting…", "success");
        setTimeout(() => { window.location.href = "/home"; }, 1000);
    } else {
        // Also check default zen-users list (demo users)
        const zenUsers = JSON.parse(localStorage.getItem("zen-users") || "[]");
        const demoUser = zenUsers.find(u => u.email.toLowerCase() === email);

        if (demoUser) {
            // Demo users have no stored password — accept any password for demo purposes
            const token = "demo-" + Date.now();
            localStorage.setItem("zengardining-authtoken", token);
            localStorage.setItem("zengardining-user", JSON.stringify({
                name: demoUser.name,
                email: demoUser.email,
                role: demoUser.role || "Student"
            }));
            showAlert("Welcome back, " + demoUser.name + "! Redirecting…", "success");
            setTimeout(() => { window.location.href = "/home"; }, 1000);
        } else {
            showAlert("Invalid email or password. Please try again.");
        }
    }
};