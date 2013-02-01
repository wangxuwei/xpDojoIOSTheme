;(function() {

	/**
	 * View: MainScreen
	 *
	 */
    (function ($) {
        brite.registerView("MainScreen",  {}, {
            create:function (data, config) {
                var $html = app.render("tmpl-MainScreen");
                var $e = $($html);
                return $e;
            },
            init:function(){
              require(["dojox/mobile/parser", "dojox/mobile", "dojox/mobile/deviceTheme", "dojox/mobile/compat"]);
              require(["dojox/mobile/DatePicker"]);
            },
            postDisplay:function (data, config) {
                var view = this;
                var $e = view.$el;
                
            },
            events:{
            },

            docEvents:{
            },

            daoEvents:{
            }
            
        });
    })(jQuery);


})();
