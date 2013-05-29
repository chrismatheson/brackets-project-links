/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */

/** Simple extension that adds a "File > Hello World" menu item */
define(function (require, exports, module) {
    "use strict";
    
    var CollectionUtils = brackets.getModule("utils/CollectionUtils"),
        NativeApp = brackets.getModule("utils/NativeApp"),
        FileUtils = brackets.getModule("file/FileUtils");
    

    //read in project prefs from various sources
    //DocumentManger.getDocumentForPath()
    //FileUtils.readAsText()
    
    /**
     *  @type {array}
     *  @private var that hols the links we want in the sidebar
     */
    var _links = {
        project: {
            link: "https://trello.com/board/ivendi-angular-api/5190a1229ca5228907002c90",
            icon: "http://trello.com/favicon.ico"
        },
        angular: {
            link: "http://docs.angularjs.org/api/",
            icon: "http://angularjs.org/favicon.ico"
        },
        ngBootstrap: {
            link: "http://angular-ui.github.io/bootstrap/",
            icon: "http://github.com/favicon.ico"
        }
    };
        
    //add icons to sidebar as buttons
    var $newLink;
    CollectionUtils.forEach(_links, function (value, key) {
        $newLink = $("<img></img>");
        $newLink.attr("src", value.icon);
        $newLink.css("max-width", 22);
        $newLink.css("max-height", 22);
        $newLink.click(function () {
            NativeApp.openURLInDefaultBrowser(value.link);
        });
        $newLink.appendTo($("#main-toolbar .buttons"));
    });
});
