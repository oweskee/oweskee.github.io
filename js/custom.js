$(document).ready(function(){

    var randomizer = $('.slides');
    var count = $('.slides li').length;
    for (var i = 1; i < count; i++) {
        var j = Math.floor(Math.random() * count);
        $('li', randomizer).eq(j).appendTo(randomizer);
    }


   $('.slider').slider({transition:2000, interval:4000, indicators:true});

   $(".button-collapse").sideNav();




 });

     $('.slider-caption a').on('click',function(){

       $('.slider-caption a').removeClass('flipInX');
       $('.slider-caption a').addClass('slideOutRight');

     });
