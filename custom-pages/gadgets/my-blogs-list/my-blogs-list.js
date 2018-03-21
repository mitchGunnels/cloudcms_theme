define(function(require, exports, module) {

    require("css!./my-blogs-list.css");
    var html = require("text!./my-blogs-list.html");

    var Empty = require("ratchet/dynamic/empty");

    var UI = require("ui");

    return UI.registerGadget("my-blogs-list", Empty.extend({

        TEMPLATE: html,

        /**
         * Binds this gadget to the /myblogs route
         */
        setup: function() {
            this.get("/projects/{projectId}/myblogs", this.index);
        },

        /**
         * Puts variables into the model for rendering within our template.
         * Once we've finished setting up the model, we must fire callback().
         *
         * @param el
         * @param model
         * @param callback
         */
        prepareModel: function(el, model, callback) {

            // get the current project
            var project = this.observable("project").get();

            // the current branch
            var branch = this.observable("branch").get();

            // call into base method and then set up the model
            this.base(el, model, function() {
                callback();
            });
        },

        /**
         * This method gets called before the rendered DOM element is injected into the page.
         *
         * @param el the dom element
         * @param model the model used to render the template
         * @param callback
         */
        /*
        beforeSwap: function(el, model, callback)
        {
            this.base(el, model, function() {
                callback();
            });
        },
        */

        /**
         * This method gets called after the rendered DOM element has been injected into the page.
         *
         * @param el the new dom element (in page)
         * @param model the model used to render the template
         * @param originalContext the dispatch context used to inject
         * @param callback
         */
        afterSwap: function(el, model, originalContext, callback) {
            this.base(el, model, originalContext, function() {

                // find all .media-popups and attach to a lightbox


                callback();
            });
        }

    }));

});