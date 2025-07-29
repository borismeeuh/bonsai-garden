"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var gsap_1 = require("gsap");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
var vue_1 = require("vue");
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger);
var horizontalWrapper = (0, vue_1.ref)(null);
var horizontalSection = (0, vue_1.ref)(null);
(0, vue_1.onMounted)(function () {
    if (!horizontalWrapper.value || !horizontalSection.value) {
        console.warn("Horizontal scrolling elements not found.");
        return;
    }
    var scrollWidth = horizontalSection.value.scrollWidth - window.innerWidth;
    gsap_1.gsap.to(horizontalSection.value, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
            trigger: horizontalWrapper.value,
            start: "top top",
            end: function () { return "+=".concat(scrollWidth); },
            pin: true,
            scrub: 1,
        },
    });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ ref: "horizontalWrapper" }, { class: "horizontal-scroll-wrapper overflow-hidden relative" }));
/** @type {typeof __VLS_ctx.horizontalWrapper} */ ;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ ref: "horizontalSection" }, { class: "horizontal-scroll-section flex flex-nowrap w-max" }));
/** @type {typeof __VLS_ctx.horizontalSection} */ ;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "horizontal-panel min-w-screen h-screen flex flex-shrink-0 justify-center items-center p-16" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "/src/images/bonsai-9.png", alt: "Bonsai 1" }, { class: "w-full h-full object-cover shadow-lg" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "horizontal-panel min-w-screen h-screen flex flex-shrink-0 justify-center items-center p-16" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "/src/images/bonsai-6.png", alt: "Bonsai 1" }, { class: "w-full h-full object-cover shadow-lg" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "horizontal-panel min-w-screen h-screen flex flex-shrink-0 justify-center items-center p-16" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "/src/images/bonsai-10.png", alt: "Bonsai 1" }, { class: "w-full h-full object-cover shadow-lg" }));
/** @type {__VLS_StyleScopedClasses['horizontal-scroll-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['horizontal-scroll-section']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-nowrap']} */ ;
/** @type {__VLS_StyleScopedClasses['w-max']} */ ;
/** @type {__VLS_StyleScopedClasses['horizontal-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['min-w-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-16']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['horizontal-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['min-w-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-16']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['horizontal-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['min-w-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-16']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            horizontalWrapper: horizontalWrapper,
            horizontalSection: horizontalSection,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
