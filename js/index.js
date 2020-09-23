// 모바일, 태블릿 햄버거 메뉴 버튼 클릭 애니메이션
$('.menu-wrapper').on('click', function() {
        $('.hamburger-menu').toggleClass('animate');
        $('.menu').toggleClass('visible');
        $('.menu-wrapper').toggleClass('visible');
});

// var app = document.getElementById('app');

var typewriter = new Typewriter('#app1', {
        loop: true
});

typewriter.typeString('ab·so·<br>lute·ly<br>fully<br>cap·<br>able') // 글자 입력
.pauseFor(4000) // 딜레이 값
.deleteAll() // 글자 지움
.start();

var typewriterPC = new Typewriter('#app2', {
        loop: true
});

typewriterPC.typeString('absolutely<br>fully<br>capable') // 글자 입력
.pauseFor(4000) // 딜레이 값
.deleteAll() // 글자 지움
.start();