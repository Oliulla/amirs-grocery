import { isBrowser } from "./is-browser";

export function isSmallScreen() {
    return isBrowser() && window.innerWidth < 768;
}