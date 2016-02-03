$(function() {
    var $body = $('body');

    $('#fullpage').fullpage({
        anchors: ['main', 'offer', 'cases', 'clients', 'contacts'],
        menu: '#menu',
        controlArrows: false,
        scrollingSpeed: 1500,
        onLeave: function(index, nextIndex, direction){
            if (nextIndex == 3 || nextIndex == 5) {
                $body.addClass('dark');
                $body.removeClass('split');
            } else if (nextIndex == 4) {
                $body.addClass('split');
                $body.removeClass('dark');
            } else {
                $body.removeClass('split');
                $body.removeClass('dark');
            }
        }
    });

    $('#mainScreen').parallaxify({
        positionProperty: 'transform'
    });
    $('#contactsScreen').parallaxify({
        positionProperty: 'transform'
    });

    $filter = $('#filter');
    $bottomFilter = $filter.find('.bottom-filter');
    $bottomFilter.find('.filter-btn').click(function (e) {
        e.preventDefault();
        try {
            $('#works').slick('unslick');
        } catch (err) {
            // console.log(err);
        }

        $bottomFilter.find('.filter-btn').removeClass('active');
        $(this).addClass('active');

        var categoryToFilter = $(this).attr('data-filter');

        var slides = '';
        var slideImgCount = 0;
        $('#worksHolder .elem').each(function(){
            if ($(this).data('category') === categoryToFilter || categoryToFilter === 'all') {
                if (slideImgCount == 0) {
                    slides += '<div class="slider-slide">';
                }
                slides += '<div class="elem" style="background: url(' + $(this).data('img') + ');">';
                var title = $(this).data('title');
                var text = $(this).data('text');
                if (title != undefined) {
                    slides += '<div class="back">\
                                </div><div class="overflow">\
                                    <div class="description">\
                                        <div class="title">'+title+'</div>\
                                        <div class="text">\
                                            <p>'+text+'</p>\
                                        </div>\
                                    </div>\
                                </div>';
                }
                slides += '</div>';
                slideImgCount++;
                if (slideImgCount == 6) {
                    slides += '<div class="clearfix"></div></div>';
                    slideImgCount = 0;
                }
            }
        });
        if (slideImgCount < 6 && slideImgCount > 0) {
            slides += '<div class="clearfix"></div></div>';
        }
        $('#works').html(slides);
        $('#works').slick({
            slide: '.slider-slide',
        });

        if ($('#detail').hasClass('open')) {
           closeReference();
        } else {
           $('#references-masonry').masonry('reloadItems').masonry('layout');
        }
    });

    $filter.find('.bottom-filter .filter-btn').eq(0).click();

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