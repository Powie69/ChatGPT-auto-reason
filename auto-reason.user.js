// ==UserScript==
// @name         auto reason
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  makes reasoning mode active by default
// @author       Powie69
// @match        https://chatgpt.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    let lastPath = location.pathname + location.search + location.hash;

    function pressReason() {
        setTimeout(() => {
             if (document.querySelector('button[aria-label="Reason"]').attributes["aria-pressed"].value === "false") {
                 document.querySelector('button[aria-label="Reason"]').click()
             }
        }, 1000);
    }

    function checkPath() {
		const current = location.pathname + location.search + location.hash;
		if (current !== lastPath) {
			lastPath = current;
            pressReason()
		}
	}

    setTimeout(() => {
       pressReason()
    }, 1000);


    window.addEventListener('popstate', () => {
		checkPath();
	});

    setInterval(() => {
        console.log(Date.now())
        checkPath();
    }, 3500);
})();