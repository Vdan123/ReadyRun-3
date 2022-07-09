const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		},
      electronBuilder: {
          nodeIntegration: true,
          mainProcessFile: 'src/background.js',
          externals: ['nedb'],
          builderOptions: {
              productName: 'ReadyRun',
              asar: true,
              appId: 'com.squirrel.ready-run.ReadyRun',
              win: {
                  target: 'squirrel',
                  icon: 'public/ico.ico'
              },
              squirrelWindows: {
                  iconUrl: 'https://raw.githubusercontent.com/megahertz/electron-simple-updater/master/example/build/icon.ico'
              },
              mac: {
                  icon: 'public/icon.png'
              },
              directories: {
                  'output': 'build'
              },
              extraFiles: [
                  {
                      from: 'public/',
                      to: 'resources'
                  }
              ],
              dmg: {
                  contents: [
                      {
                          x: 410,
                          y: 150,
                          type: 'link',
                          path: '/Applications'
                      },
                      {
                          x: 130,
                          y: 150,
                          type: 'file'
                      }
                  ]
              }
          }
      }
  }
})
