import { path } from "@tauri-apps/api"
import { readTextFile, writeTextFile, BaseDirectory, exists, createDir } from "@tauri-apps/api/fs"

const SETTINGS_FN = "settings.json"
const SESSION_FN = "session.json"

var settings = {
    "lastTheme": "",
    "defaultTab": "Hello"
}

var session = {
    "lastTab": ""
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
    await writeTextFile(SETTINGS_FN, text, {
        dir: BaseDirectory.AppConfig
    })
}

export async function loadSettings() {
    try {
        await checkAppDataValid()
        var text = await readTextFile(SETTINGS_FN, {
            dir: BaseDirectory.AppConfig
        })
        settings = JSON.parse(text)
    } catch (error) {
        await saveSettings()
    }
}

async function saveSession() {
    await checkAppDataValid()
    var text = JSON.stringify(session)
    await writeTextFile(SESSION_FN, text, {
        dir: BaseDirectory.AppConfig
    })
}

export async function loadSession() {
    try {
        await checkAppDataValid()
        var text = await readTextFile(SESSION_FN, {
            dir: BaseDirectory.AppConfig
        })
        session = JSON.parse(text)
    } catch (error) {
        await saveSession()
    }
}

export async function changeTheme(theme: string) {
    settings.lastTheme = theme
    await saveSettings()
}

export async function changeTab(tab: string) {
    if (session.lastTab == tab) { return; }
    session.lastTab = tab
    await saveSession()
}

export async function changeDefaultTab(opt: string) {
    settings.defaultTab = opt
    await saveSettings()
}

export function getSettings() {
    return settings
}

export function getSession() {
    return session
}