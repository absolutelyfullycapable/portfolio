$(window).on("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  frontScript.common();
  frontScript.main();
  frontScript.work();
});

const frontScript = (function () {
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

              $("header .contact").on("click", function () {
                lenis.scrollTo(document.body.scrollHeight, { duration: 2 });
              });
            } else {
              $("header .logo").prop("href", "../../index.html");
              $("header .gnb li").hide();
              $("header .gnb li:has(.notion)").show();
            }
          });
        $("footer")
          .empty()
          .load(BASE + "html/_footer.html", function () {
            $("footer .inner .email").on("focus", function () {
              lenis.scrollTo(document.body.scrollHeight, { duration: 2 });
            });
          });
      }

      // title scroll motion
      $(".main section:not(.kv) .tit-wrap").each(function (idx, el) {
        gsap.to($(el).find(".scrl-motion"), {
          duration: 0.7,
          y: 0,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            end: "bottom top",
          },
        });
      });
    },
    main: function () {
      if ($(".main").length) {
        // header
        setTimeout(function () {
          gsap.fromTo(
            "header",
            {
              top: "-90rem",
            },
            {
              duration: 0.7,
              top: 0,
            },
          );
        }, 10);

        // key visual
        setTimeout(function () {
          const kvTl = gsap.timeline();

          kvTl
            .to(".kv .tit-wrap .badge", {
              duration: 0.7,
              y: 0,
              opacity: 1,
            })
            .to(
              ".kv .tit-wrap .tit span",
              {
                duration: 0.7,
                y: 0,
                opacity: 1,
                stagger: 0.2,
              },
              "<+=0.5",
            );
        }, 10);

        // about
        gsap.to(".main .about .desc-wrap .photo-area", {
          duration: 0.7,
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: $(".main .about .desc-wrap .photo-area"),
            start: "top 90%",
            end: "bottom top",
          },
        });

        const aboutTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".main .about .desc-wrap hr",
            start: "top 90%",
            end: "bottom top",
            endTrigger: ".main .about .desc-wrap",
          },
        });

        aboutTl
          .to(".main .about .desc-wrap hr", {
            duration: 0.7,
            width: "100%",
          })
          .to(
            ".main .about .desc-wrap .scrl-motion",
            {
              duration: 1,
              y: 0,
              opacity: 1,
              stagger: 0.2,
            },
            "<+=0.2",
          );

        // work archive
        $(".main .w-archive .w-list .w-item").each(function (itemIdx, itemEl) {
          const itemSt = ScrollTrigger.create({
            trigger: itemEl,
            start: "top 70%",
            end: "bottom top",
          });
          const isInView = itemSt.isActive || itemSt.progress === 1;

          gsap.to(itemEl, {
            duration: 0.7,
            y: 0,
            opacity: 1,
            delay: isInView ? itemIdx * 0.2 : itemIdx % 2 === 0 ? 0 : 0.2,
            scrollTrigger: {
              trigger: itemEl,
              start: "top 70%",
              end: "bottom top",
            },
          });
        });
      }
    },
    work: function () {
      if ($(".work").length) {
        // work header
        const workTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".w-header",
            start: "top 90%",
            end: "bottom top",
            endTrigger: ".work",
          },
        });

        workTl
          .to(".w-header .w-header-wrap", {
            duration: 0.7,
            y: 0,
            opacity: 1,
          })
          .to(
            ".w-header hr",
            {
              duration: 1,
              width: "100%",
            },
            "<+=0.2",
          )
          .to(
            ".w-header .scrl-motion",
            {
              duration: 0.7,
              y: 0,
              opacity: 1,
              stagger: 0.2,
            },
            "<",
          )
          .to(
            ".w-detail .screenshot-wrap",
            {
              duration: 0.7,
              y: 0,
              opacity: 1,
            },
            "<",
          );

        // work detail
        $(".w-detail .txt-wrap .txt-area").each(function (txtIdx, txtEl) {
          gsap.to(txtEl, {
            duration: 0.7,
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: txtEl,
              start: "top 80%",
              end: "bottom top",
            },
          });
        });

        const workMaintTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".w-detail .maint-notice",
            start: "top bottom",
            end: "bottom top",
            markers: true,
          },
        });

        workMaintTl
          .to(".w-detail .maint-notice", { y: 0, opacity: 1, delay: 1 })
          .to(".w-detail .maint-wrap", { y: 0, opacity: 1 }, "<+=0.2");

        // work navigation
        const workNavTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".w-nav",
            start: "top 80%",
            end: "bottom top",
          },
        });

        workNavTl
          .to(".w-nav hr", {
            duration: 1,
            width: "100%",
          })
          .to(
            ".w-nav .w-nav-wrap",
            {
              y: 0,
              opacity: 1,
            },
            "<+=0.2",
          );
      }
    },
  };
})();
