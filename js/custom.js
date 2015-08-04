$(document).ready(function(){

    var randomizer = $('.slides');
    var count = $('.slides li').length;
    for (var i = 1; i < count; i++) {
        var j = Math.floor(Math.random() * count);
        $('li', randomizer).eq(j).appendTo(randomizer);
    }


   $('.slider').slider({full_width:true, transition:2000, interval:4000, indicators:false});

   $(".button-collapse").sideNav();

   $('a.animated.flipInX').on('click',function(){

     $('a.animated.flipInX').addClass('slideOutRight');

   });

 });
