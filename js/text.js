$(document).on('scroll', function() {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
    const $img = $('.h3');
    // console.log(scrollValue);
    const $section5 = $('.section-4');
    const section5FromTop = $section5.offset().top
    const section5Height = $section5.outerHeight()
    // console.log(section5Height)
    if(scrollValue > section5FromTop + section5Height - windowHeight - 500){
        $img.addClass('active')
    }
    // else{
    //     $img.removeClass('fade-in');
    //     $img.addClass('fade-out')
    // }
})