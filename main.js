
const { app, BrowserWindow, Menu } = require('electron')


function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 720
  })

  Menu.setApplicationMenu(null);

  win.loadFile("./public/index.html");

  // 开发者工具
  // win.webContents.openDevTools()
}


app.whenReady().then(() => {
  createWindow();
  require("./app.js");
})