import Alpine from "alpinejs";
// @ts-ignore
import ajax from "@imacrayon/alpine-ajax";

window.Alpine = Alpine;
Alpine.plugin(ajax);
Alpine.start();
