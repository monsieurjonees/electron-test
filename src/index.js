import { onLoad, print } from "./utils";
import { loadSettings, getSettings, changeTheme } from "./storage.ts"

/** Switches to the relevant tab in response a click event. */
function openTab(event) {
    var tabs = document.getElementsByClassName("Tab")
    for (let i = 0; i < tabs.length; i++) {
        const element = tabs[i];
        element.style.display = "none"
        element.className.replace(" active", "")
    }

    var tabLink = document.getElementsByClassName("TabButton active")[0]
    tabLink.className = tabLink.className.replace(" active", "")

    var tabElement = document.getElementById(event.currentTarget.name)
    tabElement.style.display = "block"
    event.currentTarget.className += " active"
}

function addStyleSheet(path, className, id = "") {
    var newStyle = document.createElement("link")
    newStyle.type = "text/css"
    newStyle.rel = "stylesheet"
    if (id.length > 0) {
        newStyle.id = id
    }
    newStyle.className = className
    newStyle.href = path
    document.head.appendChild(newStyle)
}

// peepeepoopoo
async function setColorScheme(event) {
    var scheme = event.currentTarget.name

    
    setTheme(scheme)
    await changeTheme(scheme);
}

onLoad(async () => {
    // Listen for button clicks (tab changes)
    var buttons = document.getElementsByClassName("TabButton")
    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        element.addEventListener("click", openTab)
    }

    buttons = document.getElementsByClassName("ThemeButton")
    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        element.addEventListener("click", setColorScheme)
    }

    await loadSettings()
    var theme = getSettings().lastTheme
    setTheme(theme)
})

function setTheme(scheme) {
    var themeElements = document.getElementsByClassName("Theme")
    for (let i = 0; i < themeElements.length; i++) {
        const theme = themeElements[i];
        if (theme.className)
        document.head.removeChild(theme)
    }

    switch (scheme) {
        case "gay":
            addStyleSheet("/src/themes/gay.css", "Theme");
            break;

        case "bisexual":
            addStyleSheet("/src/themes/bisexual.css", "Theme");
            break;

        case "light":
            break;

        case "emo":
            addStyleSheet("/src/themes/emo.css", "Theme");
            break;
        case "strawberry":
            addStyleSheet("/src/themes/strawberry.css", "Theme");
            break;
        case "gray":
            addStyleSheet("/src/themes/gray.css", "Theme");
            break;
        case "matcha":
            addStyleSheet("/src/themes/matcha.css", "Theme");
            break;

        default:
            break;
    }
}
window.setTheme = setTheme