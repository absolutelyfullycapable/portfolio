$(function() {
    // 모바일, 태블릿 햄버거 메뉴 버튼 클릭 애니메이션
    $('.menu-wrapper').on('click', function() {
        $('.hamburger-menu').toggleClass('animate');
        $('.menu').toggleClass('visible');
        $('.menu-wrapper').toggleClass('visible');
        
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

    // 호버 애니메이션
    $(".hoverA").hover(function() {
        $(this).css({"cursor":"pointer", "transform":"translateY(-10px)", "transition":"0.4s"});
        $(".hoverA1").css("visibility", "visible");
    }, function() {
        $(this).css("transform", "translateY(0px)");
        $(".hoverA1").css("visibility", "hidden");
    });

    $(".hoverB").hover(function() {
        $(this).css({"cursor":"pointer", "transform":"translateY(-10px)", "transition":"0.4s"});
        $(".hoverB1").css("visibility", "visible");
    }, function() {
        $(this).css("transform", "translateY(0px)");
        $(".hoverB1").css("visibility", "hidden");
    });

    $(".hoverC").hover(function() {
        $(this).css({"transform":"translateY(-10px)", "transition":"0.4s"});
        $(".hoverC1").css("visibility", "visible");
    }, function() {
        $(this).css("transform", "translateY(0px)");
        $(".hoverC1").css("visibility", "hidden");
    });
});