(function($,window,undefined){"use strict";$.fn.foundationAlerts=function(options){var settings=$.extend({callback:$.noop},options);$(document).on("click",".alert-box a.close",function(e){e.preventDefault();$(this).closest(".alert-box").fadeOut(function(){$(this).remove();settings.callback()})})}})(jQuery,this);