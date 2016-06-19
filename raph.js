$(function() {

  $('.carousel').carousel({
    interval: 3000
  }); 

  $('.navbar-nav a').on('click', function() {
    $(this).css("color", "purple");
  })


});