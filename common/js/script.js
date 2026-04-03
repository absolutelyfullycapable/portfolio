$(window).on("load", function () {
  mainScript.common();
});

var mainScript = (function () {
  return {
    common: function () {
      // lenis
      const lenis = new Lenis();

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // header, footer
      if (location.pathname.includes(".html")) {
        $("header")
          .empty()
          .load("/html/_header.html", function () {
            if ($("#cBody").hasClass("main")) {
              $("header .gnb .notion").hide();
            } else {
              $("header .gnb li").hide();
              $("header .gnb .notion").show();
            }
          });
        $("footer").empty().load("/html/_footer.html");
      }
    },
  };
})();
