document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");
    form.addEventListener("submit", sendData);
});

const sendData = async(event) => {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Validate passwords
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    try {
        // Send the data to the server
        const response = await fetch("http://localhost:8888/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });

        // Parse the response
        const result = await response.json();

        if (response.ok) {
            localStorage.setItem("zengardining-authtoken", result.token);
            window.location.href = "/home";
        } else {
            const alertArea = document.getElementById("alertArea");
            alertArea.style.display = "flex";
            alertArea.textContent = JSON.stringify(result);
            setTimeout(() => {
                    alertArea.style.display = "none";
                },
                5000
            );
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while registering.");
    }
};