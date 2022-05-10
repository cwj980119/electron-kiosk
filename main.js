const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 600,
      height: 800
    })
    
    //win.removeMenu()
    //win.webContents.openDevTools();

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})
