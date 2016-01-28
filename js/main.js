$(function() {
    $('#fullpage').fullpage({
        anchors: ['main', 'offer', 'cases', 'clients', 'contacts'],
        menu: '#menu',
        controlArrows: false,
        scrollingSpeed: 1500
    });

    $('#mainScreen').parallaxify({
        positionProperty: 'transform'
    });

    // var $gnezdo = $('.section.main .fp-tableCell');
    // var $eggs = $('#eggs');
    // var movementStrength = 0.8;
    // var height = movementStrength / $(window).height();
    // var width = movementStrength / $(window).width();
    // $(".main").mousemove(function(e){
    //     var screenWidth = $(window).width();
    //     var screenHeight = $(window).height();
    //     var pageX = e.pageX - (screenWidth / 2);
    //     var pageY = e.pageY - (screenHeight / 2);
    //     var newvalueX = width * pageX * - 25;
    //     var newvalueY = height * pageY * - 50;
    //     $gnezdo.css("background-position-x", screenWidth / 2 + newvalueX + "px");
    //     $gnezdo.css("top", 100 + newvalueY + "px");
// 
        // $eggs.css("top", screenHeight / 2 - newvalueY + "px");
        // $eggs.css("left", screenWidth / 2 - newvalueX + "px");
    // });
});