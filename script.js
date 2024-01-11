

$('.burger_menu').on('click', function(){
  $('body').toggleClass('menu_active');
});


$(".a").css('height', $('.aa > div:eq(0)').height());
function aa(p){
    console.log(p)
    $('.aa > div').css('opacity', '0');
    setTimeout(function(){ $('.aa > div').css('display', 'block'); }, 0);
    $('.aa > div:eq(' + p + ')').css('display', 'block');
    setTimeout(function(){ $('.aa > div:eq(' + p + ')').css('opacity', '1'); }, 0);
    
    setTimeout(function(){
        $(".a").animate({
            'height': $('.aa > div:eq(' + p + ')').height()
        }, 300, "linear");
    }, 100);

    $('.ednum').html((p+1).toString().padStart(2, '0'))
}

p = 0, pl = $('.aa > div').length - 1;
$('.b1').on('click', function(){
    if(p == 0) p = pl;
    else p--;
    aa(p);
});
$('.b2').on('click', function(){

    if(p == pl) p = 0;
    else p++;
    aa(p);
});

/*Footer*/ 

document.addEventListener("DOMContentLoaded", (event) => {
  const recaptcha = document.querySelector(".g-recaptcha");
  recaptcha.setAttribute("data-theme", "dark");
});

/*Fetch*/
const formElem = document.querySelector("#forma");

formElem.onsubmit = async (e) => {
    e.preventDefault();
    await download();
    let response = await fetch('https://formcarry.com/s/jDSMpRR850', {
        method: 'POST',
        body: new FormData(formElem)
    });
    formElem.reset();
    alert("Данные отправлены!");
    await download();
}
function download(){
  load = document.getElementById("loading-animation");
  popup = document.getElementsByClassName("popup");
  if (load.style.display == "none"){
    popup[0].style.display = "block";
    load.style.display = "block";
  }
  else{
    popup[0].style.display = "none";
    load.style.display = "none";
  }
}

$(".FAQ h5:first").addClass("active");
 $(".FAQ p:not(:first)").hide();
 $(".FAQ h5").click(function () {
   $(this).next("p").slideToggle("slow")
     .siblings("p:visible").slideUp("slow");
   $(this).toggleClass("active");
   $(this).siblings("h5").removeClass("active");
 });




$(document).ready(function() {
  $('.feedback-slider').slick({
    infinite: true,
    speed: 500,
    prevArrow: $("#feedback-previous"),
    nextArrow: $("#feedback-next"),
    fade: true,
    swipe: false, 
    draggable: false,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  
  $('.feedback-slider').on('afterChange', function(event, slick, currentSlide) {
    $('#feedback-number').text('0' + (currentSlide + 1));
  });

  $("#wwu-slider-1").slick({
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10%',
    autoplaySpeed: 3500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {slidesToShow: 3}
        },
        {
            breakpoint: 600, 
            settings: {slidesToShow: 2}
        }
    ]
  });

  $("#wwu-slider-2").slick({
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10%',
    autoplaySpeed: 3500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {slidesToShow: 3}
        },
        {
            breakpoint:600, 
            settings: {slidesToShow: 2}
        }
    ]
  });
});

