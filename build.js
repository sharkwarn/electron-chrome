var electronInstaller = require('electron-winstaller');
var path = require("path");

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: path.join('./dist/jchl-win32-x64'), //刚才生成打包文件的路径
    outputDirectory: path.join('./dest/test/installer'), //输出路径
    authors: 'xiaowu', // 作者名称
    exe: 'jchl.exe', //在appDirectory寻找exe的名字
    noMsi: true, //不需要mis!
    loadingGif: './install.gif',
    // iconUrl: './icon.ico',
    setupIcon: './icon.ico',
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));