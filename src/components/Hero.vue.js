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
var vue_1 = require("vue");
var SplitText_1 = require("gsap/SplitText");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger, SplitText_1.SplitText);
var scrambledParagraph = (0, vue_1.ref)(null);
(0, vue_1.onMounted)(function () {
    var mySplitText = new SplitText_1.SplitText(scrambledParagraph.value, {
        type: "words",
    });
    gsap_1.gsap.from(mySplitText.words, {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
            trigger: scrambledParagraph.value,
            start: "top 80%",
            toggleActions: "play none none none",
        },
    });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: "relative py-48" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "top-50 w-full text-sand flex flex-col items-center justify-center" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "text-8xl font-display font-extralight" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "text-2xl font-display font-extralight w-1/2" }, { ref: "scrambledParagraph" }));
/** @type {typeof __VLS_ctx.scrambledParagraph} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['py-48']} */ ;
/** @type {__VLS_StyleScopedClasses['top-50']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sand']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-8xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-display']} */ ;
/** @type {__VLS_StyleScopedClasses['font-extralight']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-display']} */ ;
/** @type {__VLS_StyleScopedClasses['font-extralight']} */ ;
/** @type {__VLS_StyleScopedClasses['w-1/2']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            scrambledParagraph: scrambledParagraph,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
