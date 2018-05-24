$(document).ready( function(){

$('.slider__list').slick();


});


$('#fullpage').fullpage({
	
	menu: '#myMenu'
});



$(document).ready(function() {
	$('#fullpage').fullpage();
});

 $('.command__elem').on('click', function () {
       $('.command__elem').removeClass('active');
       $(this).addClass('active');
   });


   $('.fon__burger').on('click', function () {
    $('.fon__burger').removeClass('active');
    $(this).addClass('active');
});



$('.mobile__open').on('click',function(){
    $('.mobile__content').fadeIn();
    
});

$('.close__mobile').on('click',function(){
    $('.mobile__content').fadeOut();
});



$('.rewews__btn').on('click',function(e){
    e.preventDefault()
    $('.revews__popup').fadeIn();
    
});

$('.popup__close').on('click',function(){
    $('.revews__popup').fadeOut();
});
