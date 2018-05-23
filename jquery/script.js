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



$('.mobile__link').on('click',function(){
    $('.mobile__content').fadeIn();
});

$('.close__mobile').on('click',function(){
    $('.mobile__content').fadeOut();
});
