// 1 without regex

document.getElementById("emailForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    if (email.includes("@") && email.includes(".") && email.indexOf("@") < email.lastIndexOf(".") && email.length > 5) {
      message.textContent = "Valid email address!";
      message.style.color = "green";
    } else {
      message.textContent = "Invalid email address. Please try again.";
      message.style.color = "red";
    }
  });


//   2 with regex
  document.getElementById("emailForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(email)) {
      message.textContent = "Valid email address!";
      message.style.color = "green";
    } else {
      message.textContent = "Invalid email address. Please try again.";
      message.style.color = "red";
    }
  });
  
  