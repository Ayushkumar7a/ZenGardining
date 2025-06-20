document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    form.addEventListener("submit", sendData);
});

const sendData = async(event) => {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
        // Send the data to the server
        const response = await fetch("http://localhost:8888/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        // Parse the response
        const result = await response.json();

        if (response.ok) {
            // Store the token in localStorage
            localStorage.setItem("zengardining-authtoken", result.authtoken);
            window.location.href = "/home";
        } else {
            const alertArea = document.getElementById("alertArea");
            alertArea.style.display = "flex";
            alertArea.textContent = JSON.stringify(result);
            setTimeout(() => {
                alertArea.style.display = "none";
            }, 5000);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while Loggin.");
    }
};