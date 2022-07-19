const body = document.querySelector("body");
const switchThemeButton = document.querySelector("button");
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

const preferredTheme = () => (darkThemeMq.matches ? "dark" : "light");

const currentTheme = () => body.dataset.theme;

const isDark = () => currentTheme() === "dark";

const updateButton = () => {
    switchThemeButton.innerText = isDark() ? "🌝" : "🌚";
};

const setTheme = (theme) => {
    body.dataset.theme = theme;
};

const toggleTheme = () => {
    if (isDark()) setTheme("light");
    else setTheme("dark");
    updateButton();
};

const startup = () => {
    if (preferredTheme() === "dark") setTheme("dark");
    updateButton();

    switchThemeButton.onclick = toggleTheme;
};

startup();
