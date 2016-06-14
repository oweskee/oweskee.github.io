$(document).ready(function(){

    var randomizer = $('.slides');
    var count = $('.slides li').length;
    for (var i = 1; i < count; i++) {
        var j = Math.floor(Math.random() * count);
        $('li', randomizer).eq(j).appendTo(randomizer);
    }


   $('.slider').slider({transition:2000, interval:4000, indicators:false});

   $(".button-collapse").sideNav();
   $('.flame').hide();




 });

     $('.cta-animation').on('click',function(){

       $('.slider-cta').addClass('slider-cta-after slideOutRight');
       $('.flame').show();

     });
