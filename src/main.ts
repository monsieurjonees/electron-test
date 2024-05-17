import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';

async function showNotif() {
  let permissionGranted = await isPermissionGranted();
  if (!permissionGranted) {
    const permission = await requestPermission();
    permissionGranted = permission === 'granted';
  }
  if (permissionGranted) {
    sendNotification({ title: 'urmom', body: 'lololololololol gottem' });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  console.log("h")
  document.getElementById("notifButton")?.addEventListener(
    "click",
    async (_) => {await showNotif()}
  )
});
