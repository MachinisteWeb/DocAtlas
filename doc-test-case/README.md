# Purina Cat Chow - HTML Assets#

## Why ##

HTML Assets directory is the UI Purina Cat Chow Brand Reference accross all project of this brand. That allows developers to know what component already exist and let you to know all possible variation of a same page or component into only one place. Your assured this asset always run with some fake content.



### Where ###

You can view HTML render of all HTML Assets into [/dist/](/dist/) folder.



### Run ###

To run this HTML Assets in place of just look the [/dist/](/dist/) folder, you will need [NodeAtlas](https://www.npmjs.com/package/node-atlas). To install it, download `node.js` and `npm` and use the command line

```
npm install -g node-atlas
```

Use the following `.bat` to :

 - Run Assets on localhost environment: `watch-assets.bat` (command line: `nodeatlas --browse`)
 - Generate (and update) Assets into [/dist/](/dist/) folder: `generate-assets.bat`  (command line: `nodeatlas --generate`)
 - Generate (and update) Documentation into [/src/assets/documentation/](/src/assets/documentation/) folder: `generate-css-doc.bat` and `generate-js-doc.bat`
 - OR to do all previous thing in one time: `generate-all.bat` (command line: `node generate-all.js`)
