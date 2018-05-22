$(document).ready( function(){

$('.slider__list').slick();




});

 $('.command__elem').on('click', function () {
       $('.command__elem').removeClass('active');
       $(this).addClass('active');
   });


   $('.fon__burger').on('click', function () {
    $('.fon__burger').removeClass('active');
    $(this).addClass('active');
});
