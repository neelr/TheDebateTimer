require("dotenv").config();
var url = require("url");
var path = require('path')
const {shell, app, BrowserWindow, protocol } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
function createWindow () {

  win = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight:300,
    minWidth:300,
    webPreferences: {
      nodeIntegration: true
    }
  })
  if (process.env.NODE_ENV !== "dev") {
    win.loadURL(url.format({
        pathname: 'index.html',    /* Attention here: origin is path.join(__dirname, 'index.html') */
        protocol: 'file',
        slashes: true
    }))
   } else {
       win.loadURL("http://localhost:3000");
       win.webContents.openDevTools();
   }

  win.on('closed', () => {
    win = null
  })
}
app.on('ready', () => {
    protocol.interceptFileProtocol('file', (request, callback) => {
        const url = request.url.substr(7)
        callback({ path: path.normalize(`${__dirname}/out/${url}`) })
    }, (err) => {
        if (err) console.error('Failed to register protocol')
    })
    createWindow();
    var wc = win.webContents;

    wc.on('will-navigate', function(e, url) {
        e.preventDefault();
        shell.openExternal(url);
    })
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})