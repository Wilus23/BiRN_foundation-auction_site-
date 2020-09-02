$(document).on('scroll', function() {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
    const $img = $('.img');
    // console.log(scrollValue);
    const $section5 = $('.section-5');
    const section5FromTop = $section5.offset().top
    const section5Height = $section5.outerHeight()
    // console.log(section5Height)
    if(scrollValue > section5FromTop + section5Height - windowHeight - 400){
        $img.addClass('fade-in');
        $img.removeClass('fade-out')
    }
    else{
        $img.removeClass('fade-in');
        $img.addClass('fade-out')
    }
})