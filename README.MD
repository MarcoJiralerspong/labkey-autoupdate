# Labkey AutoUpdate
Simple chrome extension/AutoHotkey script to make developing LabKey wiki pages easier by allowing you to use your favorite text editor. 5 minute setup to save countless, select all, copy, switch to chrome, etc.

## Installation

### Chrome setup
- Create directory
- Navigate to it and use `git clone https://github.com/MarcoJiralerspong/labkey-autoupdate.git`
- In Chrome, go to `More Tools`, `Extensions`
- Enable developer mode in the top right
- Click on `Load unpacked` and select the directory you created

### AutoHotkey setup
- Download [AutoHotkey](https://www.autohotkey.com/download/ahk-install.exe).
- Install and launch.
- Right-click on icon and select 'Edit this script'.
- Paste the contents of `script.ahk` (you can also change the keyboard shortcut in the process)
    - Default is `^!a`, where `^` is `CTRL`, `!` is `ALT` and `a` is `a`)

## Usage
- In Chrome, open the edit and view pages of the wiki you want to edit.
- Click on the extension icon and press on 'Find tabs'.
- Start editing the HTML in your editor of choice.
- To see the effect of your change, use the keyboard shortcut.
- The script will then: 
    - Select all, copy 
    - Switch to Chrome 
    - Change the value of the source field of the edit page, save the change
    - Switch to the view page and refresh



