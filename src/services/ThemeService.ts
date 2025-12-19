import * as vscode from 'vscode';
import { presetThemes } from '../themes/presets';
import { generateWorkbenchColors, generateTokenColors } from './ThemeGenerator';
import { ThemeQuickPickItem } from '../types';

export class ThemeService {
    /**
     * Muestra el Quick Pick con todos los temas
     */
    async showThemePicker(): Promise<void> {
        // Crear items para Quick Pick (solo texto)
        const items: ThemeQuickPickItem[] = presetThemes.map(theme => ({
            label: theme.label,
            description: theme.type === 'dark' ? 'Dark' : 'Light',
            themeId: theme.id
        }));

        // Mostrar Quick Pick
        const selected = await vscode.window.showQuickPick(items, {
            placeHolder: 'Selecciona un tema',
            title: 'TadaTheme - Galería de Temas',
            matchOnDescription: true
        });

        if (selected) {
            await this.applyPreset(selected.themeId);
        }
    }

    /**
     * Aplica un tema preset por su ID
     */
    async applyPreset(themeId: string): Promise<void> {
        const theme = presetThemes.find(t => t.id === themeId);
        if (!theme) {
            vscode.window.showErrorMessage(`Tema no encontrado: ${themeId}`);
            return;
        }

        // Generar colores desde las semillas
        const workbenchColors = generateWorkbenchColors(theme.seedColors, theme.type);
        const tokenRules = generateTokenColors(theme.seedColors, theme.type);

        // Aplicar a settings.json
        const config = vscode.workspace.getConfiguration();

        // Aplicar colores de UI (workbench)
        await config.update(
            'workbench.colorCustomizations',
            workbenchColors,
            vscode.ConfigurationTarget.Global
        );

        // Aplicar colores de sintaxis (tokens)
        await config.update(
            'editor.tokenColorCustomizations',
            { textMateRules: tokenRules },
            vscode.ConfigurationTarget.Global
        );

        vscode.window.showInformationMessage(`Tema "${theme.label}" aplicado`);
    }

    /**
     * Restaura los colores originales
     */
    async resetTheme(): Promise<void> {
        const config = vscode.workspace.getConfiguration();

        // Limpiar colores de UI
        await config.update(
            'workbench.colorCustomizations',
            undefined,
            vscode.ConfigurationTarget.Global
        );

        // Limpiar colores de sintaxis
        await config.update(
            'editor.tokenColorCustomizations',
            undefined,
            vscode.ConfigurationTarget.Global
        );

        vscode.window.showInformationMessage('Tema restaurado al original');
    }
}
