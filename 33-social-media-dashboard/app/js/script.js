const toggle = document.getElementById("switch");

function setLightMode() {
    document.body.classList = "light";
    localStorage.setItem("colorMode", "light");
}

function setDarkMode() {
    document.body.classList = "dark";
    localStorage.setItem("colorMode", "dark");
}

function getLocalPref() {
    return localStorage.getItem("colorMode");
}

function getSystemPref() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

function setInitialColorMode() {
    const color = getLocalPref() || getLocalPref();
    document.body.classList = color;
}

toggle.addEventListener("click", () => {
    toggle.checked ? setDarkMode() : setLightMode();
});

setInitialColorMode();
