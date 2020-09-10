// 모바일, 태블릿 햄버거 메뉴 버튼 클릭 애니메이션
$('.menu-wrapper').on('click', function() {
        $('.hamburger-menu').toggleClass('animate');
        $('.menu').toggleClass('visible');
        $('.menu-wrapper').toggleClass('visible');
});