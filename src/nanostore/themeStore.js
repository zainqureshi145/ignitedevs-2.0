import { atom } from "nanostores";

let theme = localStorage.getItem("theme");

export const themeStore = atom(theme);