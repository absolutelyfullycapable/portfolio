var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');
  $("nav").css("visibility", "visible");
  $(".wrapper-menu").css("z-index", "9999");
  $(".line-menu").css("background-color", "#0027c9");
})

$(".hoverA").hover(function() {
    $(".hoverA").css("cursor", "pointer");
    $(".hoverA").css("transform", "translateY(-10px)");
    $(".hoverA").css("transition", "0.4s");
    $(".hoverA1").css("visibility", "visible");
}, function() {
    $(".hoverA").css("transform", "translateY(0px)");
    $(".hoverA1").css("visibility", "hidden");
});

$(".hoverB").hover(function() {
    $(".hoverB").css("cursor", "pointer");
    $(".hoverB").css("transform", "translateY(-10px)");
    $(".hoverB").css("transition", "0.4s");
    $(".hoverB1").css("visibility", "visible");
}, function() {
    $(".hoverB").css("transform", "translateY(0px)");
    $(".hoverB1").css("visibility", "hidden");
});

$(".hoverC").hover(function() {
    $(".hoverC").css("transform", "translateY(-10px)");
    $(".hoverC").css("transition", "0.4s");
    $(".hoverC1").css("visibility", "visible");
}, function() {
    $(".hoverC").css("transform", "translateY(0px)");
    $(".hoverC1").css("visibility", "hidden");
});

(function (document) {
    const markers = [...document.querySelectorAll('.slide')];
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
});
}, {
    threshold: 0.8
});

markers.forEach(mark => {
    observer.observe(mark);
});
})(document);