import { onLoad, print } from "./utils";
import { loadSettings, getSettings, changeTheme, loadSession, getSession, changeTab } from "./storage.ts"

/** Switches to the relevant tab in response a click event. */
async function openTab(event) {
    setTab(event.currentTarget.name)
    await changeTab(event.currentTarget.name)
}

function setTab(tab) {
    var tabs = document.getElementsByClassName("Tab")
    for (let i = 0; i < tabs.length; i++) {
        const element = tabs[i];
        element.style.display = "none"
        element.className.replace(" active", "")
    }

    var tabElement = document.getElementById(tab)
    tabElement.style.display = "block"

    var tabLink = document.getElementsByClassName("TabButton active")[0]
    tabLink.className = tabLink.className.replace(" active", "")
    for (let i = 0; i < document.getElementsByClassName("TabButton").length; i++) {
        const button = document.getElementsByClassName("TabButton")[i];
        if (button.name == tab) {
            button.className += " active"
            return
        }
    }
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

function taskButtonClicked(event) {
    var button = event.currentTarget
    if (button.className == "clicked") {
        button.className = ""
    } else {
        button.className = "clicked"
    }
}
window.taskButtonClicked = taskButtonClicked

function addTask() {
    var taskContainer = document.getElementById("taskContainer")
    var newTask = document.createElement("div")
    newTask.className = "Task"
    newTask.innerHTML = `
    <div style="min-width: 2rem;">
        <button onclick="taskButtonClicked(event)"></button>
    </div>
    <div style="flex-grow: 2;">
        Title
    </div>
    <div style="flex-grow: 1;">
        Category
    </div>
    <div style="flex-grow: 1; text-align: right;">
        Due
    </div>
    `
    taskContainer.appendChild(newTask)
}
window.addTask = addTask

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
    await loadSession()
    var settings = getSettings()
    setTheme(settings.lastTheme)
    if (settings.defaultTab == "last") {
        setTab(getSession().lastTab)
    }
    document.body.style.display = "initial"
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