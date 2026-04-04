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

      // skip navigation
      $(".skip-nav").on("click", function () {
        $("#wrapper").attr("tabindex", "-1").focus();
        setTimeout(function () {
          $("#wrapper").removeAttr("tabindex");
        }, 300);
      });

      // header, footer
      const BASE =
        location.hostname === "localhost" || location.hostname === "127.0.0.1"
          ? "/"
          : "/portfolio/";

      if (location.pathname.includes(".html")) {
        $("header")
          .empty()
          .load(BASE + "html/_header.html", function () {
            if ($("#cBody").hasClass("main")) {
              $("header .logo").prop("href", "./index.html");
              $("header .gnb li:has(.notion)").hide();
            } else {
              $("header .logo").prop("href", "../../index.html");
              $("header .gnb li").hide();
              $("header .gnb li:has(.notion)").show();
            }
          });
        $("footer")
          .empty()
          .load(BASE + "html/_footer.html");
      }
    },
  };
})();
