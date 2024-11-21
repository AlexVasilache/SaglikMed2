function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}


function sendMail () {
  let parms = {
    firstName : document.getElementById("firstName").value,
    lastName : document.getElementById("lastName").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value,
    phone : document.getElementById("phone").value,
  }

  emailjs.send("service_yhjibla","template_hx8um5t",parms).then(alert("Email Sent!!"))
}


