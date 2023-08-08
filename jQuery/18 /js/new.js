$(function(){
    var isStartMotion = true
    var rafid
    var scrollMotion = function(){
        if(!isStartMotion) return
        isStartMotion = false
        rafid = requestAnimationFrame(function(){
            var scry = $(window).scrollTop()
            var winh = $(window).height()
            var meta
            var meta2
            var t
            var h
            t = $('.ex1').offset().top
            h = $('.ex1 div').innerHeight()
            meta = 0 + (scry - (t - winh * 0.5 + h * 0.5)) * -1
            if(meta > 0){
                meta = 0
            }
            $('.ex1 div').css({'transform': `translateX(${meta}px)`})

            t = $('.ex2').offset().top
            h = $('.ex2 div').innerHeight()
            meta = 0 + Math.abs(scry - (t - winh * 0.5 + h * 0.5)) * -0.8
            
            $('.ex2 div').css({'transform': `translateX(${meta}px)`})
           
           
            t = $('.ex3').offset().top
            h = $('.ex3 div').innerHeight()
            meta = 0 + Math.abs(scry - (t - winh * 0.5 + h * 0.5)) * 2
            
            $('.ex3 div').css({'transform': `translateX(${meta}px)`})
            
           
            t = $('.ex4').offset().top
            h = $('.ex4').innerHeight()
            meta = 0 + Math.abs(scry - (t - winh * 0.5 + h * 0.5)) * 0.2
            
            $('.ex4').css({'border-radius': `${meta}%`})
           
           
            t = $('.ex5').offset().top
            h = $('.ex5').innerHeight()
            // meta2 = 1 + Math.abs(scry - (t - winh * 0.5 + h * 0.5)) * -0.003
            meta = 1 + Math.abs(scry - (t - winh * 0.5 + h * 0.5)) * -0.003
            
            $('.ex5').css({'opacity': `${meta}`, 'transform': `scale(${meta})`})
           
            $('.ex6 div').each(function(){
                t = $(this).offset().top
                h = $(this).innerHeight()
                meta = 1 + Math.abs(scry - (t - winh * 0.5 + h * 0.5)) * -0.003
                meta2 = 0 + Math.abs(scry - (t - winh * 0.5 + h * 0.5)) * 1
                // if(meat < 0) meta = 0
                $(this).css({
                    'opacity': `${meta}`, 
                    'transform': `scale(${meta})`, 
                    'border-radius': `${meta2}%`})
            })
           



            isStartMotion = true
        })
    }
    scrollMotion()
    $(window).scroll(function(){
        scrollMotion()
    }).resize(function(){
        scrollMotion()
    })
})