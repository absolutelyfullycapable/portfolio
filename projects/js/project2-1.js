$(function() {
    // 모바일, 태블릿 햄버거 메뉴 버튼 클릭 애니메이션
    $('.menu-wrapper').on('click', function() {
        $(this).toggleClass('visible');
        $('.hamburger-menu').toggleClass('animate');
        $('.menu').toggleClass('active');
        
        // 모바일 메뉴 버튼 클릭 시 헤더 내용 숨기기
        $('.container header').toggleClass('none');
        $('.container header h1').toggleClass('none');
    });

    // .projects 영역 화살표 누르면 숨겨져 있던 메뉴 펼쳐짐
    $('.main .projects li').eq(0).nextAll().hide();
    $('.main .projects img').on('click', function() {
        var rotate = $(this).hasClass('rotate');
        if(rotate == false) {
            $('.main .projects li').eq(0).nextAll().slideDown();
            $(this).addClass('rotate');
        } else {
            $('.main .projects li').eq(0).nextAll().slideUp();
            $(this).removeClass('rotate');
        }
    });
});