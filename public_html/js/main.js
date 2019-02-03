$(document).ready(function () {
  //Hamburger button animationa trigger
  $(".hamburger").click(function () {
    // Toggle class "is-active"
    $(this).toggleClass("is-active");
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
