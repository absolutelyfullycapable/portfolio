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

    // 스크롤 애니메이션
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
});