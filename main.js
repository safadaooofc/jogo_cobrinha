const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 600,
    resizable: true
  });
  win.loadFile("snake_deluxe.html");
}

app.whenReady().then(createWindow);
