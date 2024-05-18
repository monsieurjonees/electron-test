import { onLoad, print, camelToSnake, camelToHyphenated } from "./utils"

var customStyle = {}

function changeRootStyle() {
    var currentRootStyle = document.getElementById("RootStyleOverride")
    var newStyle = document.createElement("style")
    newStyle.textContent = ":root { "
    newStyle.id = "RootStyleOverride"
    for (const [key, value] of Object.entries(customStyle)) {
        newStyle.textContent += `--${camelToHyphenated(key)}: ${value}; `
    }
    print(newStyle.textContent)
    newStyle.textContent += "}"
    // I've put this so low to try to avoid visual quirks as the style changes
    if (currentRootStyle != null) {
        document.head.removeChild(currentRootStyle)
    }
    document.head.appendChild(newStyle)
}

function fontEvent(event) {
    event.preventDefault()
    var field = event.currentTarget.FontBox
    var value = field.value
    field.value = ""

    customStyle.primaryFontFamily = value
    changeRootStyle()
}
window.fontEvent = fontEvent

function primaryFontColorEvent(event) {
    event.preventDefault()

    customStyle.primaryTextColor = event.currentTarget.Font1Color.value
    changeRootStyle()
}
window.primaryFontColorEvent = primaryFontColorEvent

function font2Event(event) {
    event.preventDefault()
    var field = event.currentTarget.Font2Box
    var value = field.value
    field.value = ""

    customStyle.secondaryFontFamily = value
    changeRootStyle()
}
window.font2Event = font2Event

function secondaryFontColorEvent(event) {
    event.preventDefault()

    customStyle.secondaryTextColor = event.currentTarget.Font2Color.value
    changeRootStyle()
}
window.secondaryFontColorEvent = secondaryFontColorEvent

function primaryColorEvent(event) {
    event.preventDefault()

    customStyle.primaryColor = event.currentTarget.PrimaryColor.value
    changeRootStyle()
}
window.primaryColorEvent = primaryColorEvent

// function changePrimaryFontColor(e) {
//     e.preventDefault()
//     var entry = e.currentTarget.Font1Color
//     _changePrimaryFontColor(entry.value);
// }

// function _changeHeaderColor(color) {
//     document.getElementById("TabBar").style.backgroundColor = color
// }

// function changeHeaderColor(e) {
//     e.preventDefault()
//     var entry = e.currentTarget.TabBarColor
//     _changeHeaderColor(entry.value);
// }

// function _changeHTMLColor(color) {
//     var styleString = ""
//     styleString += "html { background-color: " + color + "; } "
//     styleString += ".TabButton.active { background-color: " + color + "; }"
//     appendStyle(styleString)
// }

// function changeHTMLColor(e) {
//     e.preventDefault()
//     var entry = e.currentTarget.HTMLColor
//     _changeHTMLColor(entry.value);
// }

// window.fontEvent = fontEvent
// window.changePrimaryFontColor = changePrimaryFontColor
// window.changeHeaderColor = changeHeaderColor
// window.changeHTMLColor = changeHTMLColor

// function _changePrimaryFontColor(color) {
//     document.body.style.color = color;
// }
