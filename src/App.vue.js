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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Backdrop_vue_1 = require("./components/Backdrop.vue");
var Hero_vue_1 = require("./components/Hero.vue");
var Slider_vue_1 = require("./components/Slider.vue");
var gsap_1 = require("gsap");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
var ScrollSmoother_1 = require("gsap/ScrollSmoother");
var vue_1 = require("vue");
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger, ScrollSmoother_1.ScrollSmoother);
(0, vue_1.onMounted)(function () {
    if (document.querySelector("#smooth-wrapper") &&
        document.querySelector("#smooth-content")) {
        ScrollSmoother_1.ScrollSmoother.create({
            content: "#smooth-content",
            effects: true,
            smooth: 1.2,
            smoothTouch: 0.1,
            wrapper: "#smooth-wrapper",
        });
    }
    else {
        console.warn("Smooth wrapper or content element not found, ScrollSmoother not initialized.");
    }
    gsap_1.gsap.fromTo("#images-container", { filter: "blur(16px)" }, {
        filter: "blur(0px)",
        ease: "none",
        scrollTrigger: {
            trigger: "#blurred-images-container",
            start: "top bottom",
            end: "50% top",
            scrub: true,
        },
    });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    id: "app",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    id: "smooth-wrapper",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ id: "smooth-content" }, { class: "relative" }));
/** @type {[typeof Backdrop, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(Backdrop_vue_1.default, new Backdrop_vue_1.default({}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_0), false));
/** @type {[typeof Hero, ]} */ ;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(Hero_vue_1.default, new Hero_vue_1.default({}));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_3), false));
/** @type {[typeof Slider, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(Slider_vue_1.default, new Slider_vue_1.default({}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_6), false));
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            Backdrop: Backdrop_vue_1.default,
            Hero: Hero_vue_1.default,
            Slider: Slider_vue_1.default,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
