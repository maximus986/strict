$(document).ready(function () {
  //Hamburger button animation trigger
  $(".hamburger").click(function () {
    // Toggle class "is-active"
    $(this).toggleClass("is-active");
  });

  //Smooth scroll
  $(".navbar-nav a").click(function () {
    $("html, body").animate({
      scrollTop: $($.attr(this, "href")).offset().top
    }, 2000);
  });

  //Reduce header padding on scroll
  $(window).scroll(function () {
    animation(); // Start animation on window scroll
    animateHeader(); //Animate header on window scroll
  });

  animation(); // Start animation on window load
  animateHeader(); //Animate header on window load

  //Header animation function
  function animateHeader() {
    const scroll = $(window).scrollTop();
    if (scroll > 150) {
      $(".main-header").removeClass("py-lg-4");
    } else {
      $(".main-header").addClass("py-lg-4");
    }
  }

  // Animation function

  function animation() {

    const windowHeight = $(window).height();
    const scrollDown = $(window).scrollTop();

    $('.animation').each(function () {
      var position = $(this).offset().top;

      if (position < scrollDown + windowHeight - 50) {
        const animation = $(this).attr('data-animation');
        const delay = $(this).attr('data-delay');
        $(this).css('animation-delay', delay);
        $(this).addClass(animation);
      }
    });
  }

  // Form validation
  $(function () {
    $(".subscribe-form").validate({
      highlight: function (element) {
        $(element).closest(".form-group").addClass("has-danger");
        $(element).addClass("form-control-danger");
      },
      unhighlight: function (element) {
        $(element).closest(".form-group").removeClass("has-danger").addClass("has-success");
        $(element).removeClass("form-control-danger").addClass("form-control-success");
      },
      rules: {
        name: {
          required: true,
          rangelength: [2, 20]
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true,
          maxlength: 255
        }
      },
      messages: {
        name: {
          required: "This field is required.",
          rangelength: 'This field must contain between 2 adn 20 characters.'
        },
        email: {
          required: "This field is required.",
          email: 'Please enter a valid email.'
        },
        message: {
          required: "This field is required.",
          maxlength: "This field can't have more than 255 characters."
        }
      },
      errorElement: "p",
      errorPlacement: function (error, element) {
        error.appendTo($(element).closest(".form-group").find(".error-msg"));
      }
    });
  });
});
