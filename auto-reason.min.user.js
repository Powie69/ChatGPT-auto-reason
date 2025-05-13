// ==UserScript==
// @name         auto reason
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  makes reasoning mode active by default
// @author       Powie69
// @match        https://chatgpt.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com
// @grant        none
// @updateURL    https://github.com/Powie69/ChatGPT-auto-reason/raw/refs/heads/main/auto-reason.min.user.js
// @downloadURL  https://github.com/Powie69/ChatGPT-auto-reason/raw/refs/heads/main/auto-reason.min.user.js
// @supportURL   https://github.com/Powie69/ChatGPT-auto-reason/issues
// @run-at       document-idle
// ==/UserScript==

!function(){"use strict";let e=location.pathname+location.search+location.hash;function a(){setTimeout(()=>{"false"===document.querySelector('button[aria-label="Reason"]').attributes["aria-pressed"].value&&document.querySelector('button[aria-label="Reason"]').click()},1e3)}function t(){let t=location.pathname+location.search+location.hash;t!==e&&(e=t,a())}setTimeout(()=>{a()},1e3),window.addEventListener("popstate",()=>{t()}),setInterval(()=>{console.log(Date.now()),t()},3500)}();