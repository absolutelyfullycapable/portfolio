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

    // 스크롤 시 가려진 제목 나타나는 애니메이션
    $(window).scroll(function() {
        var scr = $(window).scrollTop(),
            ability = $('.ability').offset().top,
            contact = $('.contact').offset().top;

        if(scr >= ability - 500) {
            $('.ability h2 span').addClass('slide');
        } else {
            $('.ability h2 span').removeClass('slide');
        }

        if(scr >= contact - 500) {
            $('.contact h2 span').addClass('slide');
        } else {
            $('.contact h2 span').removeClass('slide');
        }
    });
});