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
    const scroll = $(window).scrollTop();
    if (scroll > 150) {
      $(".main-header").removeClass("py-lg-4");
    } else {
      $(".main-header").addClass("py-lg-4");
    }
  });

  // Animations

  function animation() {
    const windowHeight = $(window).height();
    const scrollTop = $(window).scrollTop();

    $('.animation').each(function () {
      const topPosition = $(this).offset().top;
      if (topPosition < scrollTop + windowHeight - 100) {
        const animation = $(this).data('animation');
        $(this).addClass(animation);
      }
    });
  }

  animation();

  $(window).scroll(function () {
    animation();
  });

});
