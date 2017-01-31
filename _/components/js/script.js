// plugins
(function ( $ ) {
    $.logThis = function(m) {
        if (show_log) {
            if( (window['console'] !== undefined) ){
                console.log( m );
            }
        }
    }
}( jQuery ));

$(document).ready(function(){
    Target.init();
    moveMe.init();
    Ai.init();    
});