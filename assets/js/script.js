function toggleContent() {
  $(".menu").toggleClass("active");
  $("body").toggleClass("overflow-hidden");
}

function removeActiveOnResize() {
  var windowWidth = $(window).width();
  if (windowWidth > 768) {
    // Adjust this value based on your breakpoint
    $(".menu").removeClass("active");
    $("body").remove("overflow-hidden");
  }
}
$(window).on("resize", removeActiveOnResize);
removeActiveOnResize();

// $(document).ready(function () {
//   // Activate the second li element
//   $("#accordion li:nth-child(2)")
//     .addClass("active")
//     .find(".content")
//     .slideDown()
//     .css("display", "flex");

//   $("#accordion li").click(function () {
//     var $content = $(this).find(".content");
//     if (!$(this).hasClass("active")) {
//       $("#accordion li.active")
//         .removeClass("active")
//         .find(".content")
//         .slideUp();
//       $(this).addClass("active");
//       $content.slideDown().css("display", "flex");
//     } else {
//       // If already active, do nothing
//     }
//   });
// });
