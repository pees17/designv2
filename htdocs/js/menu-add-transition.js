/**
 * Fix to make the responsive menu start up outside the page without
 * any transition. This js adds the transition after the page has
 * loaded.
 */
(function() {
    "use strict";

    window.onload = (event) => {
        document.getElementById("rm-menu").style.transition = "all 0.15s linear";
    };

})();
