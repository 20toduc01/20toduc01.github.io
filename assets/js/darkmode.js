function darkmode_on(){
    $('.post__title').addClass('darkmode');
    $('.post__content').addClass('darkmode');
    $('body').addClass('darkmode');
    $('.line').attr('style','border-bottom: 3px solid white;');
    $('.float').attr("style", "box-shadow: none;");

    //dark code
    $('pre').attr('style','background: #282c34;');
    $('code').attr('style','background: #282c34; text-shadow: none !important; color: #abb2ae;');
    $('.operator').attr('style','background: #282c34; color: #c678dd;');
    $('.keyword').attr('style','color: #56b6c2;');
    $('.number').attr('style','color: #d19a66;');
    $('.string').attr('style','color: #98c379;');
    $('.macro').attr('style','color: #c678dd;');
    $('.function').attr('style','color: #e06b73;');
}

function darkmode_off(){
    $('.post__title').removeClass('darkmode');
    $('.post__content').removeClass('darkmode');
    $('body').removeClass('darkmode');
    $('.line').attr('style','');
    $('.float').attr("style", "");

    //normal code
    $('pre').attr('style','');
    $('code').attr('style','');
    $('.operator').attr('style','');
    $('.keyword').attr('style','');
    $('.number').attr('style','');
    $('.string').attr('style','');
    $('.macro').attr('style','');
    $('.function').attr('style','');
}

let darkmode = 0;
if(matchMedia('(prefers-color-scheme: dark)').matches){
    darkmode = 1;
    darkmode_on();
}

$('.toggle-darkmode').on("click", () => {
    if (darkmode) {
        darkmode_off();
        darkmode ^= 1;
    } else {
        darkmode_on();
        darkmode ^= 1;
    }
});
