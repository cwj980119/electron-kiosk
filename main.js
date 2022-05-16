const { app, BrowserWindow } = require('electron')
const {ipcMain} = require('electron')
const url = require('url')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1000,
      height: 800,
      // frame: false //Remove Frame
    })
    
    //win.removeMenu()
    win.webContents.openDevTools();
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
  app.quit()
})
