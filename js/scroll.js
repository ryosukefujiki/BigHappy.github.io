jQuery(function(){
    jQuery('#scroll').click(function(){
        var addHeight = 0;
        if(window.parent.screen.width >= 768){
            addHeight = 700;
        }else{
            addHeight = 550;
        }
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + addHeight;
        jQuery("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
