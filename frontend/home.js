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

async function getUserDetails() {
    const token = localStorage.getItem('zengardining-authtoken');
    try {
        const response = await fetch("http://localhost:8888/api/auth/getuser", {
            method: "GET",
            headers: {
                'auth-token': token
            }
        });

        const result = await response.json();

        if (response.ok) {

            const username = document.getElementById('username');
            const useremail = document.getElementById('usermail');

            username.innerText = result.user.name;
            useremail.innerText = result.user.email;
        }

    } catch (error) {
        console.error('somthing went wrong:', error);
        alert('error ', error)
    }
}

getUserDetails();