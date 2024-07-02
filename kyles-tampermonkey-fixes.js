// ==UserScript==
// @name         CQ Style Enhancements
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  Apply custom styles to cq elements to fix issues
// @author       YourName
// @match        *://*/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/kyleobyte/cqfix/main/kyles-tampermonkey-fixes.js
// @downloadURL  https://raw.githubusercontent.com/kyleobyte/cqfix/main/kyles-tampermonkey-fixes.js
// ==/UserScript==

(function() {
    'use strict';

    const css = `
.cq-Overlay--placeholder {
	color: #7000ff;
	border-color: #7000ff;
	background-color: rgba(255, 255, 255, 0);
	border-style: solid;
	border-radius: 15px;
	border-width: 2px;
	margin: -0.125rem;
	text-transform: uppercase;
	font-size: 1rem;
}

.cq-Overlay--placeholder.is-hover{
background-color:#7000ff22;
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


/*Updating the component labels for better visibility*/
.cq-Overlay.is-active, .cq-Overlay:focus, .cq-Overlay.is-hover, .cq-Overlay.is-selected {
	color: #7000ff;
	border-color: #7000ff;
	border-radius: 15px;
}

.cq-Overlay.is-active>.cq-Overlay--component-name, .cq-Overlay:focus>.cq-Overlay--component-name, .cq-Overlay.is-hover>.cq-Overlay--component-name, .cq-Overlay.is-selected>.cq-Overlay--component-name {
	display: block;
	background-color: #7000ff;
	border-radius: 15px;
	padding: 5px 15px;
}

.cq-Overlay--component-name {
	position: absolute;
	right: 0;
	bottom: 0;
	z-index: 30;
	display: none;
	padding: 0 2px 1px 6px;
	font-size: 1rem;
	line-height: 1.1rem;
	font-weight: 400;
	letter-spacing: 0.05rem;
	background-color: rgba(0, 0, 0, 0.3);
	color: #fff;
	text-transform: uppercase;
}


/* Pretty scrollbar
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
	scrollbar-width: none;*/

`;

    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    document.head.appendChild(style);
})();
