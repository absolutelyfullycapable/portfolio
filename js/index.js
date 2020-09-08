$(".toggleMenu").on("click", function() {
    $("nav").css("visibility", "visible");
});
var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');
  $("nav").css("visibility", "visible");
  $(".wrapper-menu").css("z-index", "9999");
  $(".line-menu").css("background-color", "#0027c9");
})