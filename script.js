
window.onload = function () {
  let start = false;
  function slicker() {
      let vw = window.innerWidth;
      let vh = window.innerHeight;
      console.log(vh, vw);
      if (start) {
          $('.autoplay').slick('unslick');
      }

      if (vw >= 1000) {
          $('.autoplay').slick({
              arrows: false,
              dots: true,
              infinite: true,
              slidesToShow: 5,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
          });
          setTimeout(function(){
            $('.autoplay2').slick({
              arrows: false,
              dots: true,
              infinite: true,
              slidesToShow: 5,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
            });
          },800);
      } else if (vw >= 600) {
        $('.autoplay').slick({
              arrows: false,
              dots: true,
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
      });
      setTimeout(function(){
        $('.autoplay2').slick({
          arrows: false,
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        });
      },800);
    } else if (vw >=480) {
          $('.autoplay').slick({
              arrows: false,
              dots: true,
              infinite: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,

          });
          setTimeout(function(){
            $('.autoplay2').slick({
              arrows: false,
              dots: true,
              infinite: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
            });
          },800);
      }
  }
  slicker();
  start = true;

  window.addEventListener("resize", function () {
      slicker();
  });
};

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
   $(.col-md-12 > this).toggleClass("active");
   $(.col-md-12 > this).siblings("div").removeClass("active");
 });
