import { onLoad, print } from "./utils"


export function changeFontFamily(target) {
    document.body.style.fontFamily = target
    var buttons = document.getElementsByTagName("button")
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.style.fontFamily = target
    }
}

window.changeFontFamily = changeFontFamily

function fontEvent(e) {
    e.preventDefault()
    var field = e.currentTarget.FontBox
    var value = field.value
    field.value = ""
    changeFontFamily(value)
}

function changePrimaryFontColor(e) {
    e.preventDefault()
    var entry = e.currentTarget.Font1Color
    _changePrimaryFontColor(entry.value);
}

function _changeHeaderColor(color) {
    document.getElementById("TabBar").style.backgroundColor = color
}

function changeHeaderColor(e) {
    e.preventDefault()
    var entry = e.currentTarget.TabBarColor
    _changeHeaderColor(entry.value);
}

function _changeHTMLColor(color) {
    document.getElementsByTagName("html")[0].style.backgroundColor = color
    
}

function changeHTMLColor(e) {
    e.preventDefault()
    var entry = e.currentTarget.HTMLColor
    _changeHTMLColor(entry.value);
}

window.fontEvent = fontEvent
window.changePrimaryFontColor = changePrimaryFontColor
window.changeHeaderColor = changeHeaderColor
window.changeHTMLColor = changeHTMLColor

function _changePrimaryFontColor(color) {
    document.body.style.color = color;
}
