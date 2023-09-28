// Template Name: Vape Mafia
// Description: Vape Store HTML5 Template
// Version: 1.0.0
(function (window, document, $, undefined) {
  "use strict";
  var Init = {
    i: function (e) {
      Init.s();
      Init.methods();
    },
    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Init.w();
      Init.hidepreloader();
      Init.contactForm();
      Init.quanityHandle();
      Init.BackToTop();
      Init.searchToggle();
      Init.intializeSlick();
      Init.salActivation();
      Init.countdownInit(".countdown", "2023/12/01");
      Init.filtersCollapse();
      Init.billingFields();
      Init.deliveryMethods();
      Init.productFilter();
    },
    w: function (e) {
      this._window.on("load", Init.l).on("scroll", Init.res);
    },
    hidepreloader: function () {
      $("#preloader").hide();
    },
    contactForm: function () {
      $(".contact-form").on("submit", function (e) {
        e.preventDefault();
        var _self = $(this);
        var _selector = _self.closest("input,textarea");
        _self.closest("div").find("input,textarea").removeAttr("style");
        _self.find(".error-msg").remove();
        _self
          .closest("div")
          .find('button[type="submit"]')
          .attr("disabled", "disabled");
        var data = $(this).serialize();
        $.ajax({
          url: "./assets/mail/contact.php",
          type: "post",
          dataType: "json",
          data: data,
          success: function (data) {
            _self.find('button[type="submit"]').removeAttr("disabled");
            if (data.success) {
              document.getElementById("message").innerHTML =
                "Email Sent Successfully";
            } else {
              document.getElementById("message").innerHTML =
                "There is an error";
            }
            $("#message").slideDown("slow");
            setTimeout(function () {
              $("#message").slideUp("hide");
            }, 3000);
          },
        });
      });
    },

    BackToTop: function () {
      var btn = $("#backto-top");
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 300) {
          btn.addClass("show");
        } else {
          btn.removeClass("show");
        }
      });
      btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          "300"
        );
      });
    },
    searchToggle: function () {
      var el = $(".search-btn");
      $(el).on("click", function () {
        if ($("#search-form").is(":visible")) {
          $("#search-form").hide("slow");
        } else {
          $("#search-form").show("slow");
        }
      });
    },
    quanityHandle: function () {
      $(".decrement").on("click", function () {
        var qtyInput = $(this).closest(".quantity-wrap").children(".number");
        var qtyVal = parseInt(qtyInput.val());
        if (qtyVal > 0) {
          qtyInput.val(qtyVal - 1);
        }
      });
      $(".increment").on("click", function () {
        var qtyInput = $(this).closest(".quantity-wrap").children(".number");
        var qtyVal = parseInt(qtyInput.val());
        qtyInput.val(parseInt(qtyVal + 1));
      });
    },

    salActivation: function () {
      sal({
        threshold: 0.1,
        once: true,
      });
    },
    intializeSlick: function (e) {
      if ($(".banner").length) {
        $(".banner").slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: true,
          dots: true,
          autoplaySpeed: 4000,
          fade: true,
          responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows: false,
              },
            },
          ],
        });
      }
      if ($(".testimonial-slider").length) {
        $(".testimonial-slider").slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1250,
              settings: {
                arrows: true,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 991,
              settings: {
                arrows: false,
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
          ],
        });
      }
      if ($(".product-slider").length) {
        $(".product-slider").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: false,
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 991,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
          ],
        });
      }
      if ($(".partner-slider").length) {
        $(".partner-slider").slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 2,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 2,
              },
            },
          ],
        });
      }
      if ($(".preview-slider").length) {
        $(".preview-slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: ".preview-slider-nav",
        });
      }
      if ($(".preview-slider-nav").length) {
        $(".preview-slider-nav").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: ".preview-slider",
          dots: false,
          arrows: true,
          centerMode: false,
          focusOnSelect: true,
          responsive: [
            {
              breakpoint: 990,
              settings: {
                arrows: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 2,
              },
            },
          ],
        });
      }
    },

    countdownInit: function (countdownSelector, countdownTime) {
      var eventCounter = $(countdownSelector);
      if (eventCounter.length) {
        eventCounter.countdown(countdownTime, function (e) {
          $(this).html(
            e.strftime(
              " <li>%D<small>d</small></li>\
                            <li>%H<small>h</small></li>\
                            <li>%M<small>m</small></li>\
                            <li>%S<small>s</small></li>"
            )
          );
        });
      }
    },
    filtersCollapse: function () {
      var filters = $(".filters-trigger");
      if (filters.length) {
        filters.on("click", function () {
          if ($(".filters-collapse-mobile").is(":visible")) {
            $(".filters-collapse-mobile").hide("slow");
          } else {
            $(".filters-collapse-mobile").show("slow");
          }
        });
      }
    },
    billingFields: function () {
      var filters = $('input[name="same_billing"]');
      if (filters.length) {
        filters.on("change", function () {
          if ($('input[name="same_billing"]').is(":checked")) {
            $(".billing-details").hide("slow");
          } else {
            $(".billing-details").show("slow");
          }
        });
      }
    },
    productFilter: function () {
      var filters = $(".modify-all");
      if (filters.length) {
        filters.on("change", function () {
          if ($(".modify-all").is(":checked")) {
            $('input[name="product[]"]').prop("checked", true);
          } else {
            $('input[name="product[]"]').prop("checked", false);
          }
        });
      }

      var filters = $(".filters");
      if (filters.length) {
        $(".filters input").on("change", function () {
          filters.submit();
        });
      }
    },
    deliveryMethods: function(){
      $('.delivery-box').on("click", function () {
        $('.delivery-box').removeClass('active');
        $(this).addClass('active');
      })
    }
  };
  Init.i();
})(window, document, jQuery);
