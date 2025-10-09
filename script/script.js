$(document).ready(function () {
  $(".btn-toggler").click(() => {
    $(".showlist").slideToggle(800);
  });
  AOS.init();
});
