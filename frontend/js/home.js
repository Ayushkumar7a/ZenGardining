function Logout() {
    localStorage.removeItem('zengardining-authtoken');
    window.location.href = '/login';
}

function checkforLogin() {
    const token = localStorage.getItem('zengardining-authtoken');
    if (!token) {
        window.location.href = '/login';
    }
}

checkforLogin();

function getUserDetails() {
    const userStr = localStorage.getItem('zengardining-user');
    if (userStr) {
        try {
            const user = JSON.parse(userStr);
            const username = document.getElementById('username');
            const useremail = document.getElementById('usermail');
            if (username && user.name) {
                username.innerText = user.name;
            }
            if (useremail && user.email) {
                useremail.innerText = user.email;
            }
        } catch (error) {
            console.error('Error parsing user details from localStorage:', error);
        }
    }
}

getUserDetails();