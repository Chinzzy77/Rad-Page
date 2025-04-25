function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // 1. Check against hardcoded users
    const validUsers = [
        { username: "maya2212@gmail.com", password: "mayagloss", redirectTo: "Maya.html" },
        { username: "smart.gajup06@gmail.com", password: "favyspace", redirectTo: "Favy.html"},
        { username: "dr.chinzzy@yahoo.com", password: "chinzzyb", redirectTo: "Chinzzy.html"}
    ];

    for (let i = 0; i < validUsers.length; i++) {
        if (username === validUsers[i].username && password === validUsers[i].password) {
            window.location.href = validUsers[i].redirectTo;
            return;
        }
    }

    // 2. Check against users in localStorage (signup users)
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = storedUsers.find(user => user.email === username && user.password === password);

    if (matchedUser) {
        alert(`Welcome ${matchedUser.firstName}!`);
        window.location.href = "welcome.html";
    } else {
        const message = document.getElementById("message");
        message.style.color = "red";
        message.textContent = "Invalid username/email or password!";
    }
}
function goToSignup() {
    window.location.href = "signup.html";
}

function signup() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("signupPassword").value;

    if (!firstName || !lastName || !email || !password) {
        alert("Please fill all fields.");
        return;
    }

    const newUser = { firstName, lastName, email, password };
    
    // Support multiple users in localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    if (users.some(user => user.email === email)) {
        alert("Email already registered. Please log in.");
        return;
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! You can now log in.");
    window.location.href = "index.html";
}
