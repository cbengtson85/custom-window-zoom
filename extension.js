// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    console.log('Custom Window Zoom activated');
    const customLevel = vscode.workspace.getConfiguration('').get('customWindowZoom.zoomLevelChangeValue');   

    const zoomIn = vscode.commands.registerCommand('extension.customWindowZoomIn', () => {  
        const zoomLevel = vscode.workspace.getConfiguration('').get('window.zoomLevel');
        vscode.workspace.getConfiguration('').update('window.zoomLevel', zoomLevel + customLevel, true)
    });
    const zoomOut = vscode.commands.registerCommand('extension.customWindowZoomOut', () => {
        const zoomLevel = vscode.workspace.getConfiguration('').get('window.zoomLevel');
        vscode.workspace.getConfiguration('').update('window.zoomLevel', zoomLevel - customLevel, true)
    });

    context.subscriptions.push(zoomIn);
    context.subscriptions.push(zoomOut);    
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
    console.log('Custom Window Zoom deactivated');
}
exports.deactivate = deactivate;
