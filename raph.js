$(function() {

  $('.carousel').carousel({
    interval: 4500
  }); 

  $('.navbar-nav a').on('click', function() {
    $(this).css("color", "purple");
  })


});