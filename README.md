![doc_logo.png](/public/common/doc_logo.png)
  
[![Status](https://img.shields.io/badge/npm-v6.9.0-blue.svg)](https://www.npmjs.com/)
[![Status](https://img.shields.io/badge/node-v10.16.0-blue.svg)](https://nodejs.org/en/download/)
[![Status](https://travis-ci.org/Suwings/MCSManager.svg?branch=master)](https://travis-ci.org/Suwings/MCSManager)
[![Status](https://img.shields.io/badge/License-MIT-red.svg)](https://github.com/Suwings/MCSManager)


简单，易用，多实例，轻量级的 Minecraft Server 控制面板，桌面程序版



[官方网站](http://mcsmanager.com/) | [中文简体](https://github.com/Suwings/MCSManager) | [中文繁體](README-traditional.md) |  [API 文档](https://github.com/Suwings/MCSManager/wiki/API-Documentation)  | [二次开发参考文档](https://github.com/Suwings/MCSManager/wiki/Development_Document)

<br />

简介
-----------
这是一款可以管理多个 Minecraft 服务端（支持群组端）的桌面程序管理面板，并且可以分配多个子账号来分别管理不同的 Minecraft 服务端，支持绝大部分主流的服务端，甚至是其他非 Minecraft 的程序。

下载后即可直接运行。

![main_theme.png](/public/common/main_theme.png)

<br />


运行环境
-----------
Windows 7 以上，64 位操作系统。

<br />


配置文件
-----------
配置文件是程序目录下的 `property.js` 文件，端口不可更改。

<br />


缺陷
-----------
由于是 Web 网页程序转本地 EXE 程序，文件管理部分功能可能不可用，但对于桌面程序来说，这一点也不再必须。

有需求者可自取。


<br />


构建 & 运行 
-----------

**前提条件（Windows）**

- Visual Studio 2017 IDE
- Visual Studio 2017 C++ 桌面开发套件
- Visual Studio 2017 通用 Windows 开发套件
- Visual Studio 2017 .Net 开发套件（可选）
- Node v14.18.1
- Python 3.10.0


**理论前提条件**

您在安装 NodeJS 时，最后一步会有一个“安装可选编译工具”的选项，使用此配置后 NodeJS 会自动下载并安装 C++，Python 等编译环境，您可以尝试。

**构建并运行**

```
git clone git@github.com:Suwings/MCSManager-V8-EXE.git
cd MCSManager-V8-EXE
npm install
npm run app
```

如果您依然未能成功构建并运行程序，请参考 https://www.electronjs.org/zh/docs/latest/tutorial/quick-start#scaffold-the-project


打包成 EXE
-----------
```
npm install 
npx electron-forge import
npm run make
```

在 out 目录中将会有包含 exe 与 dll 文件等程序，双击即可运行。

如果无法运行，请将源代码目录复制进去，MCSM 某些程序需要这些目录和文件配合（并不是需要里面的 JS 文件）

<br />


浏览器兼容性
-----------
- `ECMAScript 5` 标准
- `IE 11+` `Chrome` `Firefox` `Safari` `Opera` 等现代主流浏览器

<br />


权限系统
-----------
尤其注意的是，为了更加简化面板权限系统，我们只分为两种账号。

`管理账号` 凡是以 # 字符开头的用户，均为管理账号，列如 `#master` `#admin` `#test`

`普通账号` 不以 # 字符开头的用户，列如 `test` `usernameww` `xxx`

普通账号能够管理的服务器只能由管理账号来进行设定，管理账号可以管理任何服务器，并且能管理所有用户。

具体使用，我想你只需要运行就知道，设计的十分简单。

<br />

问题报告
-----------
欢迎发现任何 BUG 及时反馈，必当及时修复。

若发现严重安全漏洞又不便公开发布，请发送邮件至: Suwings@outlook.com，安全问题修复后将在代码中附加漏洞发现者姓名。

<br />

开源协议
-----------
MIT License

<br />
