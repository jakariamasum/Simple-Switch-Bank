let email = document.getElementById("user-email");
let password = document.getElementById("user-password");

document.getElementById("submit-btn").addEventListener("click", function () {
  if (!email.value || !password.value) {
    alert("Enter email and password");
    return;
  } else {
    window.location.href = "bank.html";
  }
});
