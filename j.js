// Simulated user data (replace with actual user data if implementing authentication)
let currentUser = null;

// Login button event listener
document.getElementById("loginBtn").addEventListener("click", function() {
    currentUser = prompt("Enter your username:");
    if (currentUser) {
        document.getElementById("loggedInUser").innerText = `Logged in as: ${currentUser}`;
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("logoutBtn").style.display = "inline-block";
        document.getElementById("switchAccountBtn").style.display = "inline-block";
    }
});

// Logout button event listener
document.getElementById("logoutBtn").addEventListener("click", function() {
    currentUser = null;
    document.getElementById("loggedInUser").innerText = "";
    document.getElementById("loginBtn").style.display = "inline-block";
    document.getElementById("logoutBtn").style.display = "none";
    document.getElementById("switchAccountBtn").style.display = "none";
});

// Switch account button event listener
document.getElementById("switchAccountBtn").addEventListener("click", function() {
    currentUser = prompt("Enter your new username:");
    if (currentUser) {
        document.getElementById("loggedInUser").innerText = `Logged in as: ${currentUser}`;
    }
});

