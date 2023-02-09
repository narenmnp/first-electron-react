module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        authors: 'Naren',
        /* iconUrl: 'https://your_site/favicon.ico', */
        exe: `my_first_electron_app.exe`,
        name: "my_first_electron_app",
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'mas', 'win32', 'linux'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },/* 
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    }, */
    {
      name: '@electron-forge/maker-wix',
      config: {
        language: 1033,
        manufacturer: 'My First Electron App'
      }
    }
  ],
};
