$(document).ready(function() {
    $('with-dropdown').mouseenter(
      function() {
        $(this).children('.dropdown').addClass('open');
      }
    );
    $('with-dropdown').mouseleave(
      function() {
        $(this).children('.dropdown').removeClass('open');
      }
    );
  }
);
