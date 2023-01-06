$(function(){

    var menuoffset = $('#main_menu').offset().top;

    $(window).on('scroll',function(){
        var winscroll = $(window).scrollTop();
        

        if(winscroll < menuoffset){

            $('#main_menu').addClass('menu_fixed')
        }
        // backtop button js

       if(winscroll > 200){
        $('.backtop').fadeIn(1000);

    }else{
        $('.backtop').fadeOut(1000);
    }
    })
    // backtop button js
    $('.backtop').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },1000)
    })
    // preloader js
    $(window).on('load',function(){
       
        $('.preloader_main').delay(2000).fadeOut(1000)
    })

})