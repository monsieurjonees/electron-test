import { readTextFile, writeTextFile, BaseDirectory } from "@tauri-apps/api/fs"


var settings = {
    "lastTheme": ""
}

async function saveSettings() {
    var text = JSON.stringify(settings)
    await writeTextFile("settings.json", text, {
        dir: BaseDirectory.AppConfig
    })
}

export async function loadSettings() {
    var text = await readTextFile("settings.json", {
        dir: BaseDirectory.AppConfig
    })
    settings = JSON.parse(text)
}

export async function changeTheme(theme: string) {
    settings["lastTheme"] = theme
    await saveSettings()
}

export function getSettings() {
    return settings
}