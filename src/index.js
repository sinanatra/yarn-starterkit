import './scss/application.scss'

import jquery from "jquery";

window.$ = window.jQuery = jquery;

import Home from "./assets/modules/home";

$(function () {
    Home.init();
});
