// ==UserScript==
// @name         CQ Style Enhancements
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Apply custom styles to cq elements to fix issues
// @author       Kyle
// @match        *://*/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/kyleobyte/cqfix/main/kyles-tampermonkey-fixes.js
// @downloadURL  https://raw.githubusercontent.com/kyleobyte/cqfix/main/kyles-tampermonkey-fixes.js
// ==/UserScript==

(function () {
    'use strict';

    const css = `
.cq-Overlay--placeholder {
    color: #7000ff !important;
    border: 2px solid #7000ff !important;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 15px;
    margin: -0.125rem;
    text-transform: uppercase;
    font-size: 1rem;
    box-sizing: border-box;
}

.cq-Overlay--placeholder.is-hover {
    background-color: #7000ff22 !important;
}

.cq-Overlay.cq-Overlay--paragraph-system .cq-Overlay--placeholder {
    border: 2px solid #7000ff !important;
    border-color: #7000ff !important;
}

.scaffold-host-wizard .cq-RichText-editable,
.cq-dialog .cq-RichText-editable,
.scaffold-host-wizard .rte-sourceEditor,
.cq-dialog .rte-sourceEditor {
    overflow-y: auto;
    background-color: #ccc;
    height: 100%;
    min-height: 600px;
}

.rte-fullscreen-dialog .rte-editorWrapper {
    outline: 0;
    -webkit-box-shadow: 0 0 0.1875rem #326ec8;
    box-shadow: 0 0 0.1875rem #326ec8;
    border: 0.0625rem solid #326ec8;
    background-color: #ccc;
    height: 100% !important;
    min-height: 300px;
}

/* Fix scrollbars on images in the sites view. */
coral-columnview-preview-asset img {
    width: 100%;
}

/* Keep overlays visible all the time. */
.cq-Overlay {
    color: #7000ff !important;
    border: 2px solid #7000ff !important;
    border-radius: 15px !important;
}

.cq-Overlay > .cq-Overlay--component-name {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 30;
    display: block !important;
    padding: 5px 10px;
    font-size: 10px;
    line-height: 10px;
    font-weight: 400;
    letter-spacing: 0.05rem;
    background-color: #7000ff;
    border-radius: 15px;
    color: #fff;
    text-transform: uppercase;
    opacity: 1 !important;
}

/* Preserve the same styling when AEM adds state classes. */
.cq-Overlay.is-active,
.cq-Overlay:focus,
.cq-Overlay.is-hover,
.cq-Overlay.is-selected {
    color: #7000ff !important;
    border-color: #7000ff !important;
    border-radius: 15px !important;
}

.cq-Overlay.is-active > .cq-Overlay--component-name,
.cq-Overlay:focus > .cq-Overlay--component-name,
.cq-Overlay.is-hover > .cq-Overlay--component-name,
.cq-Overlay.is-selected > .cq-Overlay--component-name {
    display: block !important;
    background-color: #7000ff;
}

/* Experience Fragment highlight. */
.cq-Overlay.cq-Overlay--experience-fragment,
.cq-Overlay.cq-Overlay--experience-fragment.is-active,
.cq-Overlay.cq-Overlay--experience-fragment:focus,
.cq-Overlay.cq-Overlay--experience-fragment.is-hover,
.cq-Overlay.cq-Overlay--experience-fragment.is-selected {
    color: #ff00d4 !important;
    border-color: #ff00d4 !important;
}

.cq-Overlay.cq-Overlay--experience-fragment > .cq-Overlay--component-name,
.cq-Overlay.cq-Overlay--experience-fragment.is-active > .cq-Overlay--component-name,
.cq-Overlay.cq-Overlay--experience-fragment:focus > .cq-Overlay--component-name,
.cq-Overlay.cq-Overlay--experience-fragment.is-hover > .cq-Overlay--component-name,
.cq-Overlay.cq-Overlay--experience-fragment.is-selected > .cq-Overlay--component-name {
    background-color: #ff00d4 !important;
}

/* State-specific Experience Fragment highlight. */
.cq-Overlay.cq-Overlay--state-experience-fragment,
.cq-Overlay.cq-Overlay--state-experience-fragment.is-active,
.cq-Overlay.cq-Overlay--state-experience-fragment:focus,
.cq-Overlay.cq-Overlay--state-experience-fragment.is-hover,
.cq-Overlay.cq-Overlay--state-experience-fragment.is-selected {
    color: #ffae00 !important;
    border: 2px solid #ffae00 !important;
    border-color: #ffae00 !important;
    background-color: rgba(255, 255, 255, 0) !important;
}

.cq-Overlay.cq-Overlay--state-experience-fragment:hover,
.cq-Overlay.cq-Overlay--state-experience-fragment.is-hover {
    background-color: rgba(255, 174, 0, 0.14) !important;
}

.cq-Overlay.cq-Overlay--state-experience-fragment > .cq-Overlay--component-name,
.cq-Overlay.cq-Overlay--state-experience-fragment.is-active > .cq-Overlay--component-name,
.cq-Overlay.cq-Overlay--state-experience-fragment:focus > .cq-Overlay--component-name,
.cq-Overlay.cq-Overlay--state-experience-fragment.is-hover > .cq-Overlay--component-name,
.cq-Overlay.cq-Overlay--state-experience-fragment.is-selected > .cq-Overlay--component-name {
    background-color: #ffae00 !important;
    color: #111 !important;
}

/* Direct fallback for State-Specific XF overlays before the JS class is added. */
.cq-Overlay[title*="State-Specific Experience Fragment"],
.cq-Overlay[data-text*="State Experience Fragment"],
.cq-Overlay[data-path*="stateexperiencefragm"],
.cq-Overlay[data-path*="state-experience-fragment"] {
    color: #ffae00 !important;
    border: 2px solid #ffae00 !important;
    border-color: #ffae00 !important;
    background-color: rgba(255, 255, 255, 0) !important;
}

.cq-Overlay[title*="State-Specific Experience Fragment"]:hover,
.cq-Overlay[data-text*="State Experience Fragment"]:hover,
.cq-Overlay[data-path*="stateexperiencefragm"]:hover,
.cq-Overlay[data-path*="state-experience-fragment"]:hover,
.cq-Overlay[title*="State-Specific Experience Fragment"].is-hover,
.cq-Overlay[data-text*="State Experience Fragment"].is-hover,
.cq-Overlay[data-path*="stateexperiencefragm"].is-hover,
.cq-Overlay[data-path*="state-experience-fragment"].is-hover {
    background-color: rgba(255, 174, 0, 0.14) !important;
}

.cq-Overlay[title*="State-Specific Experience Fragment"] > .cq-Overlay--component-name,
.cq-Overlay[data-text*="State Experience Fragment"] > .cq-Overlay--component-name,
.cq-Overlay[data-path*="stateexperiencefragm"] > .cq-Overlay--component-name,
.cq-Overlay[data-path*="state-experience-fragment"] > .cq-Overlay--component-name {
    background-color: #ffae00 !important;
    color: #111 !important;
}

/* Hide paragraph system labels but keep the overlay outline. */
.cq-Overlay.cq-Overlay--paragraph-system,
.cq-Overlay.cq-Overlay--paragraph-system.is-active,
.cq-Overlay.cq-Overlay--paragraph-system:focus,
.cq-Overlay.cq-Overlay--paragraph-system.is-hover,
.cq-Overlay.cq-Overlay--paragraph-system.is-selected {
    border-width: 0 !important;
    border-color: transparent !important;
}

/* Hide paragraph system labels. */
.cq-Overlay.cq-Overlay--paragraph-system > .cq-Overlay--component-name,
.cq-Overlay.cq-Overlay--paragraph-system.is-active > .cq-Overlay--component-name,
.cq-Overlay.cq-Overlay--paragraph-system:focus > .cq-Overlay--component-name,
.cq-Overlay.cq-Overlay--paragraph-system.is-hover > .cq-Overlay--component-name,
.cq-Overlay.cq-Overlay--paragraph-system.is-selected > .cq-Overlay--component-name {
    display: none !important;
}

/* Content fragment updates. */
article.cmp-contentfragment {
    width: 100%;
    max-width: 100%;
    margin: 30px 0;
    padding: 1rem 0;
    font-family: Arial, sans-serif;
    box-sizing: border-box;
}

.cmp-contentfragment__title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: #002b45;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.25rem;
}

.cmp-contentfragment__element {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0.75rem 0;
    border-bottom: 1px solid #eee;
}

.cmp-contentfragment__element-title {
    width: 220px;
    font-weight: 600;
    font-size: 1rem;
    color: #333;
    margin-right: 1rem;
    flex-shrink: 0;
}

.cmp-contentfragment__element-value {
    flex: 1;
    font-size: 1rem;
    color: #222;
    line-height: 1.5;
    word-break: break-word;
}

/* Final hover fill for regular Experience Fragment overlays. */
.cq-Overlay.cq-Overlay--component.cq-Overlay--experience-fragment:hover,
.cq-Overlay.cq-Overlay--component.cq-Overlay--placeholder.cq-Overlay--experience-fragment:hover,
.cq-Overlay.cq-Overlay--component.cq-Overlay--experience-fragment.is-hover,
.cq-Overlay.cq-Overlay--component.cq-Overlay--placeholder.cq-Overlay--experience-fragment.is-hover {
    background: rgba(255, 0, 212, 0.12) !important;
    background-color: rgba(255, 0, 212, 0.12) !important;
}

/* Final override: State-Specific XF must beat the generic purple overlay rules. */
.cq-Overlay.cq-Overlay--component.cq-Overlay--state-experience-fragment,
.cq-Overlay.cq-Overlay--component.cq-Overlay--placeholder.cq-Overlay--state-experience-fragment,
.cq-Overlay.cq-Overlay--component.cq-Overlay--experience-fragment.cq-Overlay--state-experience-fragment,
.cq-Overlay.cq-Overlay--component.cq-Overlay--placeholder.cq-Overlay--experience-fragment.cq-Overlay--state-experience-fragment,
.cq-Overlay.cq-Overlay--component.cq-Overlay--state-experience-fragment.is-active,
.cq-Overlay.cq-Overlay--component.cq-Overlay--state-experience-fragment.is-selected,
.cq-Overlay.cq-Overlay--component.cq-Overlay--state-experience-fragment.is-hover {
    color: #ffae00 !important;
    border: 2px solid #ffae00 !important;
    border-top-color: #ffae00 !important;
    border-right-color: #ffae00 !important;
    border-bottom-color: #ffae00 !important;
    border-left-color: #ffae00 !important;
    border-radius: 15px !important;
    background-color: rgba(255, 255, 255, 0) !important;
}

.cq-Overlay.cq-Overlay--component.cq-Overlay--state-experience-fragment:hover,
.cq-Overlay.cq-Overlay--component.cq-Overlay--state-experience-fragment.is-hover {
    background-color: rgba(255, 174, 0, 0.14) !important;
}

.cq-Overlay.cq-Overlay--component.cq-Overlay--state-experience-fragment > .cq-Overlay--component-name,
.cq-Overlay.cq-Overlay--component.cq-Overlay--state-experience-fragment.is-active > .cq-Overlay--component-name,
.cq-Overlay.cq-Overlay--component.cq-Overlay--state-experience-fragment.is-selected > .cq-Overlay--component-name,
.cq-Overlay.cq-Overlay--component.cq-Overlay--state-experience-fragment.is-hover > .cq-Overlay--component-name {
    background-color: #ffae00 !important;
    color: #111 !important;
}

/* Final hover fill for State-Specific XF overlays. */
.cq-Overlay.cq-Overlay--component.cq-Overlay--state-experience-fragment:hover,
.cq-Overlay.cq-Overlay--component.cq-Overlay--placeholder.cq-Overlay--state-experience-fragment:hover,
.cq-Overlay.cq-Overlay--component.cq-Overlay--experience-fragment.cq-Overlay--state-experience-fragment:hover,
.cq-Overlay.cq-Overlay--component.cq-Overlay--placeholder.cq-Overlay--experience-fragment.cq-Overlay--state-experience-fragment:hover,
.cq-Overlay.cq-Overlay--component.cq-Overlay--state-experience-fragment.is-hover,
.cq-Overlay.cq-Overlay--component.cq-Overlay--placeholder.cq-Overlay--state-experience-fragment.is-hover,
.cq-Overlay.cq-Overlay--component.cq-Overlay--experience-fragment.cq-Overlay--state-experience-fragment.is-hover,
.cq-Overlay.cq-Overlay--component.cq-Overlay--placeholder.cq-Overlay--experience-fragment.cq-Overlay--state-experience-fragment.is-hover {
    background: rgba(255, 174, 0, 0.14) !important;
    background-color: rgba(255, 174, 0, 0.14) !important;
}
`;

    function injectStyles() {
        const existingStyle = document.getElementById('cq-style-enhancements-2025');
        if (existingStyle) {
            if (existingStyle.textContent !== css) {
                existingStyle.textContent = css;
            }
            return;
        }

        const style = document.createElement('style');
        style.id = 'cq-style-enhancements-2025';
        style.type = 'text/css';
        style.textContent = css;
        document.head.appendChild(style);
    }

    function isExperienceFragmentOverlay(overlay) {
        const label = overlay.querySelector('.cq-Overlay--component-name')?.textContent?.trim().toLowerCase() || '';
        const resourceType = (overlay.getAttribute('data-resource-type') || '').toLowerCase();
        const overlayType = (overlay.getAttribute('data-type') || '').toLowerCase();
        const title = (overlay.getAttribute('title') || '').toLowerCase();
        const className = (overlay.className || '').toLowerCase();

        return (
            label.includes('experience fragment') ||
            label === 'xf' ||
            title.includes('experience fragment') ||
            resourceType.includes('experiencefragment') ||
            resourceType.includes('experience-fragment') ||
            resourceType.includes('/experience-fragments/components/xfpage') ||
            resourceType.includes('/core/wcm/components/experiencefragment') ||
            overlayType === 'experiencefragment' ||
            className.includes('experiencefragment')
        );
    }

    function isStateExperienceFragmentOverlay(overlay) {
        const label = overlay.querySelector('.cq-Overlay--component-name')?.textContent?.trim().toLowerCase() || '';
        const title = (overlay.getAttribute('title') || '').toLowerCase();
        const text = (overlay.getAttribute('data-text') || '').toLowerCase();
        const path = (overlay.getAttribute('data-path') || '').toLowerCase();

        return (
            label.includes('state-specific experience fragment') ||
            title.includes('state-specific experience fragment') ||
            text.includes('state experience fragment') ||
            path.includes('stateexperiencefragm') ||
            path.includes('state-experience-fragment')
        );
    }

    function isParagraphSystemOverlay(overlay) {
        const label = overlay.querySelector('.cq-Overlay--component-name')?.textContent?.trim().toLowerCase() || '';
        const resourceType = (overlay.getAttribute('data-resource-type') || '').toLowerCase();
        const overlayType = (overlay.getAttribute('data-type') || '').toLowerCase();
        const title = (overlay.getAttribute('title') || '').toLowerCase();
        const className = (overlay.className || '').toLowerCase();

        return (
            label.includes('paragraph system') ||
            label.includes('layout container') ||
            resourceType.includes('/foundation/components/parsys') ||
            resourceType.includes('/responsivegrid') ||
            resourceType.includes('/wcm/foundation/components/responsivegrid') ||
            overlayType === 'parsys' ||
            title.includes('paragraph system') ||
            title.includes('layout container') ||
            className.includes('parsys')
        );
    }

    function markExperienceFragments() {
        document.querySelectorAll('.cq-Overlay').forEach((overlay) => {
            overlay.classList.toggle('cq-Overlay--experience-fragment', isExperienceFragmentOverlay(overlay));
            overlay.classList.toggle('cq-Overlay--state-experience-fragment', isStateExperienceFragmentOverlay(overlay));
            overlay.classList.toggle('cq-Overlay--paragraph-system', isParagraphSystemOverlay(overlay));
        });
    }

    function init() {
        injectStyles();
        markExperienceFragments();

        const observer = new MutationObserver(() => {
            injectStyles();
            markExperienceFragments();
        });

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
            attributes: true
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
