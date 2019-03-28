//	Program:  Hippo by BlatSoft
//	05/2016	version: 1.0.0
//  appbasic.js
//  This file used to setup standard App features such as menus/trays, system info, etc
//  - Called from end of index.html file

"use strict";

// **********************  js lint suppressions  **************************
/*jslint node: true */
/*jslint browser: true*/
/*global $, jQuery, alert*/
//require('nw.gui').Window.get().showDevTools();
// **********************  Init Variables  ************************

// **********************  npm modules  **************************
var os = require('os');
var platform = require('platform');

var win = nw.Window.get();

//win.showDevTools();

// **********************  Project Paths  ************************

function appMenus() {
    // **********************  Build Menus  **************************
    console.log("platform.os.family" + platform.os.family);
    console.log("Platform - " + platform);
    //if (platform.os.family === "Darwin") {
        // use Native OSX menu system
        // create empty menu

        var nativeMenuBar = new nw.Menu({
            type: "menubar"
        });
       // nativeMenuBar.createMacBuiltin("WinNotClosingTest", {
         //   hideEdit: true
       // });
	var submenu = new nw.Menu();
	submenu.append(new nw.MenuItem({
            type: 'separator'
        }), 1);
	submenu.append(new nw.MenuItem({
            label: 'Preferences...',
            key: 'P',
            click: function () {
                var prefwin = nw.Window.open('readme.txt', {
                    width: 415,
                    height: 378,
                    fullscreen: false,
                    resizable: false
                }, function (prefwin) {
                    prefwin.on('loaded', function () {
                        prefwin.focus();
                        prefwin.setAlwaysOnTop(true);
                    });

                    // Release the 'win' object here after the new window is closed.
                    prefwin.on('closed', function () {
                        win.focus();
                        prefwin = null;
                    });

                    // Listen to main window's close event
                    nw.Window.get().on('close', function () {
//                    win.on('close', function () {
                        // May want to hide the window to give user the feeling of closing immediately
                        // this.hide();
//nw.App.closeAllWindows();
                        // If the new window is still open then close it.
                        if (prefwin != null) {
                            prefwin.close(true);
                        }
                        win.close(true); // required otherwise main win will not close after prefs closed.
                    });
                });
            }
        }), 2);
	nativeMenuBar.append(new nw.MenuItem({
 	 label: 'First Menu',
 	 submenu: submenu
	}));


        win.menu = nativeMenuBar;

    //}else{console.log();}

} // end appmenus()

appMenus();
