$(document).ready(function () {
  //Hamburger button animationa trigger
  $(".hamburger").click(function () {
    // Toggle class "is-active"
    $(this).toggleClass("is-active");
  });

  // Animations

  function animation() {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    console.log(windowHeight, scrollTop);

    $('.animation').each(function () {
      var topPosition = $(this).offset().top;
      console.log(topPosition);
      if (topPosition < scrollTop + windowHeight - 100) {
        var animation = $(this).data('animation');
        $(this).addClass(animation);
      }
    });
  }

  animation();

  $(window).scroll(function () {
    animation();
  });

});
