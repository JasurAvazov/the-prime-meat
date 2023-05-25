import * as functions from "./modules/functions.js";
import SmoothScroll from "smoothscroll-for-websites";

SmoothScroll({
    animationTime: 800,
    stepSize: 60,
    keyboardSupport: true,
    arrowScroll: 100,
    touchpadSupport: true,
});

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();