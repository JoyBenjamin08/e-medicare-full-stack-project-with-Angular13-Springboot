var responsiveSlider = function() {

    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
    
    var prevSlide = function() {
      if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };
    
    var nextSlide = function() {
      if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
    
    next.addEventListener("click", function() {
      nextSlide();
    });
    
    prev.addEventListener("click", function() {
      prevSlide();
    });
    
    setInterval(function() {
      nextSlide()
    }, 5000);
    
    };
    
    window.onload = function() {
    responsiveSlider();
    }
    
    /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

var cta = document.querySelector(".cta");
var check = 0;

cta.addEventListener('click', function(e){
    var text = e.target.nextElementSibling;
    var loginText = e.target.parentElement;
    text.classList.toggle('show-hide');
    loginText.classList.toggle('expand');
    if(check == 0)
    {
        cta.innerHTML = "<i class=\"fas fa-chevron-up\"></i>";
        check++;
    }
    else
    {
        cta.innerHTML = "<i class=\"fas fa-chevron-down\"></i>";
        check = 0;
    }
})
$(".btn-enregistrer").click(function () {
  $(".connexion").addClass("remove-section");
  $(".enregistrer").removeClass("active-section");
  $(".btn-enregistrer").removeClass("active");
  $(".btn-connexion").addClass("active");
});

$(".btn-connexion").click(function () {
  $(".connexion").removeClass("remove-section");
  $(".enregistrer").addClass("active-section");
  $(".btn-enregistrer").addClass("active");
  $(".btn-connexion").removeClass("active");
});
function validate(val) {
  v1 = document.getElementById("fname");
  v2 = document.getElementById("lname");
  v3 = document.getElementById("email");
  v4 = document.getElementById("mob");
  v5 = document.getElementById("job");
  v6 = document.getElementById("ans");
  
  flag1 = true;
  flag2 = true;
  flag3 = true;
  flag4 = true;
  flag5 = true;
  flag6 = true;
  
  if(val>=1 || val==0) {
  if(v1.value == "") {
  v1.style.borderColor = "red";
  flag1 = false;
  }
  else {
  v1.style.borderColor = "green";
  flag1 = true;
  }
  }
  
  if(val>=2 || val==0) {
  if(v2.value == "") {
  v2.style.borderColor = "red";
  flag2 = false;
  }
  else {
  v2.style.borderColor = "green";
  flag2 = true;
  }
  }
  if(val>=3 || val==0) {
  if(v3.value == "") {
  v3.style.borderColor = "red";
  flag3 = false;
  }
  else {
  v3.style.borderColor = "green";
  flag3 = true;
  }
  }
  if(val>=4 || val==0) {
  if(v4.value == "") {
  v4.style.borderColor = "red";
  flag4 = false;
  }
  else {
  v4.style.borderColor = "green";
  flag4 = true;
  }
  }
  if(val>=5 || val==0) {
  if(v5.value == "") {
  v5.style.borderColor = "red";
  flag5 = false;
  }
  else {
  v5.style.borderColor = "green";
  flag5 = true;
  }
  }
  if(val>=6 || val==0) {
  if(v6.value == "") {
  v6.style.borderColor = "red";
  flag6 = false;
  }
  else {
  v6.style.borderColor = "green";
  flag6 = true;
  }
  }
  
  flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6;
  
  return flag;
  }
  $('.buy').click(function(){
    $('.bottom').addClass("clicked");
  });
  
  $('.remove').click(function(){
    $('.bottom').removeClass("clicked");
  });