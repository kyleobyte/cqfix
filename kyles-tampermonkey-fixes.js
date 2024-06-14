// ==UserScript==
// @name         CQ Style Enhancements
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Apply custom styles to cq elements to fix issues
// @author       YourName
// @match        *://*/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/kyleobyte/cqfix/main/kyles-tampermonkey-fixes.js
// @downloadURL  https://raw.githubusercontent.com/kyleobyte/cqfix/main/kyles-tampermonkey-fixes.js
// ==/UserScript==

(function () {
  'use strict';

  const css = `
.cq-Overlay--placeholder {
	color: #7000ff;
	border-color: #7000ff;
	background-color: rgba(255,255,255,0);
	border-style: dashed;
    border-radius:15px;
	border-width: 2px;
	margin: -0.125rem;
}
.scaffold-host-wizard .cq-RichText-editable, .cq-dialog .cq-RichText-editable, .scaffold-host-wizard .rte-sourceEditor, .cq-dialog .rte-sourceEditor {
	overflow-y: auto;
	background-color: #ccc;
    height:100%;
    min-height:600px;
}

.rte-fullscreen-dialog .rte-editorWrapper {
	outline: 0;
	-webkit-box-shadow: 0 0 0.1875rem #326ec8;
	box-shadow: 0 0 0.1875rem #326ec8;
	border: .0625rem solid #326ec8;
	background-color: #ccc;
    height:100% !important;
    min-height:300px;

}


/* Fix Scrollbars on images in the sites view. */
coral-columnview-preview-asset img {
    width: 100%;
}

.cloudlets-app, .container, .ng-scope {
width:100%;
}



/* Pretty scrollbar*/
::-webkit-scrollbar {
  width: 10px;
  height:10px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #E6E8F7;
  border-radius: 8px;
}
::-webkit-scrollbar-thumb {
  background: #4D60C8;
  border-radius: 10px;
  width: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: #5E7AB4;
}

coral-shell-content {
	scrollbar-width: none;

`;

  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = css;
  document.head.appendChild(style);
})();
