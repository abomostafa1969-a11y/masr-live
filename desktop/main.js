const { app, BrowserWindow, shell, Menu } = require('electron');
const HOME = 'https://abomostafa1969-a11y.github.io/masr-live/';

function create() {
  const win = new BrowserWindow({
    width: 1200, height: 800, backgroundColor: '#0b3d2e', title: 'مصر لايف',
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, autoplayPolicy: 'no-user-gesture-required' }
  });
  Menu.setApplicationMenu(null);
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
  win.webContents.on('will-navigate', (e, url) => { if (!url.startsWith(HOME)) { e.preventDefault(); shell.openExternal(url); } });
  win.loadURL(HOME);
}

app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
