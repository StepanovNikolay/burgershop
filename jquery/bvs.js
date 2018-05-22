(function( $ ) {

    $.fn.bvs = function( options ) {


        // DEFAULT OPTIONS
        var settings = $.extend({
            // These are the defaults.
            // These are the events
            onComplete: false,
            onStart: false,
            onHoverOut: false,
            activeRatio: '75'
        }, options );

        var bvs = this;
        var boxCount = bvs.length;

        // TRIGGER EVENTS
        bvs.triggerEvent = function(event){
            if(event == "start-complete"){
                // trigger start and complete
                if(settings.onStart != false){
                    settings.onStart(this);
                }
                setTimeout(function(){
                    if(settings.onComplete != false){
                        settings.onComplete(this);
                    }
                },400);
            }
            else if(event == "hover-out"){
                // trigger hover out
                if(settings.onHoverOut != false){
                    settings.onHoverOut(this);
                }
            }
        };

        // ANIMATION EXECUTION AND TRIGGER EVENTS
        $(bvs).hover(
            function(){
                bvs.removeClass("active");
                bvs.addClass("notactive");
                bvs.css("width",((100 - settings.activeRatio) / (boxCount - 1)) + "%");
                console.log(((100 - settings.activeRatio) / (boxCount - 1)) + "%");
                $(this).addClass("active");
                $(this).removeClass("notactive");
                $(this).css("width",settings.activeRatio+'%');
                bvs.triggerEvent("start-complete");
            },function(){
                bvs.removeClass("active");
                bvs.removeClass("notactive");
                bvs.triggerEvent("hover-out");
                bvs.css("width",(100 / boxCount) + "%");
            }
        );

        return bvs;

    };
}( jQuery ));
