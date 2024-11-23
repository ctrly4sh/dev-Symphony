// The module 'vscode' contains the VS Code extensibility API
import * as vscode from "vscode";

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
  // Log to confirm activation
  console.log('Congratulations, your extension "dev-symphony" is now active!');

  /* First Feature 🚀 */

  // Register the "Show Current Time" command
  const showTimeCommand = vscode.commands.registerCommand(
    "devsymphony.showTime", // Command ID (must match package.json)
    () => {
      const now = new Date();
      const currentTime = `${now.getHours()}h:${now.getMinutes()}m:${now.getSeconds()}s`;
      vscode.window.showInformationMessage(`Current Time: ${currentTime}`);
    }
  );

  // Add the command to the subscriptions
  context.subscriptions.push(showTimeCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
