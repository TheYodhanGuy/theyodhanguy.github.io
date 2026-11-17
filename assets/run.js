import { openCloak } from "./library.js";

const cloakerTag = document.querySelector("#cloak");

cloakerTag.addEventListener("click", function () {
    openCloak();
});