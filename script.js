// function for navbar in mobile phones:

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// for subscription:

document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById('subscriptionForm');
  form.onsubmit = function(event) {
    // preventing the browser from automatically going to other webpage
      event.preventDefault();
      var email = document.getElementById('email').value;
      // shows in console 
      console.log('Email:', email); 
      document.getElementById('thankYouMessage').style.display = 'inline'; 
  };
});
