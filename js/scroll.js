jQuery(function(){
    jQuery('#scroll').click(function(){
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + 600;
        jQuery("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
