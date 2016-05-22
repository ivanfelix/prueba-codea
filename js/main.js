$(document).ready(function(){
    $('#siguiente').click(function(){
        $('#text1').fadeOut(200, function(){
            $('#text2').fadeIn(200)
        })
    })
   
    $('#submenu a').click(function(e){
        e.preventDefault();    
        $(this).parent().siblings().find('a').removeClass('activo')
        $(this).addClass('activo')
    })
    $('#balma').click(function(){
        $('#s1').siblings().fadeOut(0,function(){
            $('#s1').fadeIn()
        });
    })
    
    $('#bdis').click(function(){
        $('#s2').siblings().fadeOut(0,function(){
            $('#s2').fadeIn()
        });
    })
    $('#bbunk').click(function(){
        $('#s3').siblings().fadeOut(0,function(){
            $('#s3').fadeIn()
        });
    })
    $('#bven').click(function(){
        $('#s4').siblings().fadeOut(0,function(){
            $('#s4').fadeIn()
        });
    })
    $('#previo').click(function(){
        $('#text2').fadeOut(200, function(){
            $('#text1').fadeIn(200)
        })
    })
    $('#iniciom').click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop:0 }, 1400);
        $(this).addClass('current');
        return false;
    });
    $('#nosotrosm').click(function (event) {
        $(this).addClass('current');
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1400);
        return false;
    });
    $('#serm').click(function (event) {
        $(this).addClass('current');
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1400);
        return false;
    });
    $('#inm').click(function (event) {
        $(this).addClass('current');
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1400);
        return false;
    });
    $('#contactom').click(function (event) {
        $(this).addClass('current');
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1400);
        return false;
    });
    $('#tecnolm').click(function (event) {
        $(this).addClass('current');
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1400);
        return false;
    });
    $("header").sticky({topSpacing:0});
    
    ( function( $ ) {
        // Init Skrollr
        var s = skrollr.init({
            render: function(data) {
                //Debugging - Log the current scroll position.
                //console.log(data.curTop);
            }
        });
    } )( jQuery );
     
})