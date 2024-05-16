import { path } from "@tauri-apps/api"
import { readTextFile, writeTextFile, BaseDirectory, exists, createDir } from "@tauri-apps/api/fs"


var settings = {
    "lastTheme": ""
}

async function checkAppDataValid() {
    var dirExists = await exists(".", {
        dir: BaseDirectory.AppData
    })
    if (!dirExists) {
        await createDir(await path.appDataDir())
    }
}

async function saveSettings() {
    await checkAppDataValid()
    var text = JSON.stringify(settings)
    await writeTextFile("settings.json", text, {
        dir: BaseDirectory.AppConfig
    })
}

export async function loadSettings() {
    await checkAppDataValid()
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