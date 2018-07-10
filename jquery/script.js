$(document).ready( function(){

$('.slider__list').slick();


});


$('#fullpage').fullpage({
	
	menu: '#myMenu'
});





 $('.command__elem').on('click', function () {
       $('.command__elem').removeClass('active');
       $(this).addClass('active');
   });

   $('.com__text').on('click', function () {
    $('.com__text').removeClass('active');
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



$('.rewews__btn').on('click',function(e){
    e.preventDefault()
    $('.revews__popup').fadeIn();
    
});

$('.popup__close').on('click',function(){
    $('.revews__popup').fadeOut();
});

$('.command__elem').each(function(){
    var $dropdown = $(this);


  
$(document).on("click", function(event){
    if($dropdown !== event.target && !$dropdown.has(event.target).length){
        $dropdown.removeClass('active');
    }
    });      
    
});      

$('.fon__burger').each(function(){
    var $dropdown = $(this);


  
$(document).on("click", function(event){
    if($dropdown !== event.target && !$dropdown.has(event.target).length){
        $dropdown.removeClass('active');
    }
    });      
});  