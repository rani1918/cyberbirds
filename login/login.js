document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
  
    const users = JSON.parse(localStorage.getItem("users")) || {};
  
    if (users[username] && users[username].password === password) {
      alert("Login successful!");
      localStorage.setItem("currentUser", username); // Optional: Save session
      window.location.href = "redirect.html"; // Go to intermediate page
    } else {
      alert("Invalid username or password.");
    }
  });
  