/*global define, $, brackets, window */
define(function (require, exports, module) {
    "use strict";
  
    var LanguageManager = brackets.getModule("language/LanguageManager");
    require("ooc");
  
    LanguageManager.defineLanguage("ooc", {
        name: "ooc",
        mode: ["clike", "text/x-ooc"],
        fileExtensions: ["ooc"]
    });
});
