import * as vscode from 'vscode';

/**
 * Tema preestablecido con 5 colores semilla
 */
export interface PresetTheme {
    id: string;
    label: string;
    type: 'dark' | 'light';
    /** 
     * 5 colores semilla:
     * [Background, Panel, Surface, Accent, Highlight]
     */
    seedColors: [string, string, string, string, string];
}

/**
 * Item para Quick Pick
 */
export interface ThemeQuickPickItem extends vscode.QuickPickItem {
    themeId: string;
}

/**
 * Colores generados para workbench
 */
export interface GeneratedWorkbenchColors {
    [key: string]: string;
}
