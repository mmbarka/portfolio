
//Nav bar
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menuheader = document.getElementsByClassName('menu_header')[0]

toggleButton.addEventListener('click', () =>{
    menuheader.classList.toggle('active')
})

// back to top
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}