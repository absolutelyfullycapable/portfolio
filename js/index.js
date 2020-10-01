$(function() {
    // a href="#" 기본 성격 제거
    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    }); 

    // 모바일, 태블릿 햄버거 메뉴 버튼 클릭 시 내비게이션 보이는 애니메이션
    $('.menu-wrapper').on('click', function() {
        $(this).toggleClass('visible');
        $('.hamburger-menu').toggleClass('animate');
        $('.menu').toggleClass('active');
    });
});