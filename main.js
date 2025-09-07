const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow(){
  const win = new BrowserWindow({
    width: 520, height: 600, resizable: false,
    webPreferences: { contextIsolation: true } // seguro e suficiente p/ HTML puro
  });
  win.loadFile(path.join(__dirname, 'snake.html')); // caminho correto evita tela branca
  // win.webContents.openDevTools(); // descomente para ver erros de console
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
