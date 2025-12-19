import * as vscode from 'vscode';
import { ThemeService } from './services/ThemeService';

export function activate(context: vscode.ExtensionContext) {
    const themeService = new ThemeService();

    // Comando: Abrir selector de temas
    context.subscriptions.push(
        vscode.commands.registerCommand('tadatheme.selectTheme', () => {
            themeService.showThemePicker();
        })
    );

    // Comando: Restaurar tema original
    context.subscriptions.push(
        vscode.commands.registerCommand('tadatheme.resetTheme', () => {
            themeService.resetTheme();
        })
    );

    console.log('TadaTheme Universal activado');
}

export function deactivate() { }
