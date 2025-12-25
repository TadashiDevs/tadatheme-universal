import { GeneratedWorkbenchColors } from '../types';

/**
 * Genera colores completos de workbench desde 5 colores semilla
 */
export function generateWorkbenchColors(
    seedColors: [string, string, string, string, string],
    type: 'dark' | 'light'
): GeneratedWorkbenchColors {
    const [background, panel, surface, accent, highlight] = seedColors;

    const textPrimary = type === 'dark' ? '#e0e0e0' : '#1a1a1a';
    const textSecondary = type === 'dark' ? '#a0a0a0' : '#333333';
    const textMuted = type === 'dark' ? '#707070' : '#444444';
    const border = type === 'dark'
        ? adjustBrightness(panel, 15)
        : adjustBrightness(panel, -25);

    return {
        // Activity Bar - Con colores de tema NOTORIOS (siempre visibles)
        'activityBar.background': panel,
        'activityBar.foreground': accent,
        'activityBar.inactiveForeground': accent + '70',
        'activityBar.activeBorder': accent,
        'activityBar.activeBackground': surface + '40',
        'activityBar.dropBorder': highlight,
        'activityBarBadge.background': accent,
        'activityBarBadge.foreground': '#ffffff',
        'activityBarTop.foreground': accent,
        'activityBarTop.inactiveForeground': accent + '70',
        'activityBarTop.activeBorder': accent,
        'activityBarTop.dropBorder': highlight,

        // Side Bar
        'sideBar.background': panel,
        'sideBar.foreground': textPrimary,
        'sideBarTitle.foreground': textPrimary,
        'sideBarSectionHeader.background': surface,
        'sideBarSectionHeader.foreground': textPrimary,

        // Editor
        'editor.background': background,
        'editor.foreground': textPrimary,
        'editorLineNumber.foreground': textMuted,
        'editorLineNumber.activeForeground': textPrimary,
        'editor.selectionBackground': type === 'dark' ? highlight + '40' : highlight + '25',
        'editor.inactiveSelectionBackground': type === 'dark' ? highlight + '25' : highlight + '15',
        'editor.selectionHighlightBackground': type === 'dark' ? highlight + '30' : highlight + '18',
        'editor.lineHighlightBackground': type === 'dark' ? surface + '30' : surface + '40',
        'editorCursor.foreground': accent,

        // Word Highlight (cuando haces clic en una palabra)
        'editor.wordHighlightBackground': type === 'dark' ? highlight + '35' : highlight + '20',
        'editor.wordHighlightStrongBackground': type === 'dark' ? accent + '35' : accent + '20',
        'editor.wordHighlightTextBackground': type === 'dark' ? highlight + '25' : highlight + '15',
        'editor.wordHighlightBorder': type === 'dark' ? highlight + '60' : accent + '40',
        'editor.wordHighlightStrongBorder': type === 'dark' ? accent + '60' : accent + '50',

        // Find Match Highlight
        'editor.findMatchBackground': type === 'dark' ? '#facc1560' : '#facc1540',
        'editor.findMatchHighlightBackground': type === 'dark' ? '#facc1535' : '#facc1525',
        'editor.findMatchBorder': type === 'dark' ? '#facc15' : '#b8860b',
        'editor.findMatchHighlightBorder': 'transparent',

        // Range Highlight (cuando seleccionas un rango)
        'editor.rangeHighlightBackground': type === 'dark' ? surface + '40' : surface + '50',

        // Title Bar
        'titleBar.activeBackground': background,
        'titleBar.activeForeground': textPrimary,
        'titleBar.inactiveBackground': background,
        'titleBar.inactiveForeground': textMuted,

        // Tabs
        'tab.activeBackground': background,
        'tab.activeForeground': textPrimary,
        'tab.inactiveBackground': panel,
        'tab.inactiveForeground': textSecondary,
        'tab.border': border,
        'editorGroupHeader.tabsBackground': panel,

        // Status Bar (completo)
        'statusBar.background': accent,
        'statusBar.foreground': '#ffffff',
        'statusBar.border': accent,
        'statusBar.noFolderBackground': surface,
        'statusBar.noFolderForeground': textPrimary,
        'statusBar.noFolderBorder': border,
        'statusBar.debuggingBackground': highlight,
        'statusBar.debuggingForeground': '#ffffff',
        'statusBar.debuggingBorder': highlight,
        'statusBar.focusBorder': '#ffffff50',
        'statusBarItem.hoverBackground': highlight,
        'statusBarItem.hoverForeground': '#ffffff',
        'statusBarItem.activeBackground': highlight,
        'statusBarItem.focusBorder': '#ffffff50',
        'statusBarItem.compactHoverBackground': highlight,
        'statusBarItem.offlineBackground': textMuted,
        'statusBarItem.offlineForeground': '#ffffff',

        // Inputs
        'input.background': surface,
        'input.foreground': textPrimary,
        'input.border': border,
        'input.placeholderForeground': textMuted,
        'inputOption.activeBorder': accent,

        // Buttons
        'button.background': accent,
        'button.foreground': '#ffffff',
        'button.hoverBackground': highlight,
        'button.secondaryBackground': surface,
        'button.secondaryForeground': textPrimary,

        // Lists
        'list.activeSelectionBackground': highlight + '60',
        'list.activeSelectionForeground': textPrimary,
        'list.activeSelectionIconForeground': textPrimary,
        'list.hoverBackground': surface + '80',
        'list.focusBackground': highlight + '40',
        'list.focusOutline': accent,
        'list.focusAndSelectionOutline': accent,
        'list.inactiveSelectionBackground': surface,
        'list.highlightForeground': accent,
        'list.focusForeground': textPrimary,

        // Quick Pick / Command Palette
        'quickInput.background': panel,
        'quickInput.foreground': textPrimary,
        'quickInputTitle.background': surface,
        'quickInputList.focusBackground': highlight + '40',
        'quickInputList.focusForeground': textPrimary,
        'quickInputList.focusIconForeground': accent,

        // Keybinding in Quick Pick
        'keybindingTable.headerBackground': surface,
        'keybindingTable.rowsBackground': panel,

        // List descriptions and labels
        'descriptionForeground': textSecondary,
        'disabledForeground': textMuted,
        'errorForeground': '#ef4444',
        'foreground': textPrimary,
        'icon.foreground': textSecondary,
        'sash.hoverBorder': accent,
        'selection.background': highlight + '40',
        'textBlockQuote.background': surface,
        'textBlockQuote.border': accent,
        'textCodeBlock.background': surface,
        'textLink.activeForeground': accent,
        'textLink.foreground': accent,
        'textPreformat.foreground': textPrimary,
        'textPreformat.background': surface,
        'textSeparator.foreground': border,

        // Dropdown
        'dropdown.background': surface,
        'dropdown.foreground': textPrimary,
        'dropdown.border': border,

        // Panel
        'panel.background': panel,
        'panel.border': border,
        'panelTitle.activeForeground': textPrimary,
        'panelTitle.inactiveForeground': textMuted,

        // Terminal - Full ANSI color palette
        'terminal.background': background,
        'terminal.foreground': textPrimary,
        'terminal.selectionBackground': highlight + '50',
        'terminal.selectionForeground': textPrimary,
        'terminalCursor.background': background,
        'terminalCursor.foreground': accent,

        // Terminal ANSI Colors (16 colors)
        // Dark variants
        'terminal.ansiBlack': type === 'dark' ? '#000000' : '#1a1a1a',
        'terminal.ansiRed': '#ef4444',
        'terminal.ansiGreen': '#22c55e',
        'terminal.ansiYellow': '#eab308',
        'terminal.ansiBlue': accent,  // Use theme accent
        'terminal.ansiMagenta': highlight,  // Use theme highlight
        'terminal.ansiCyan': '#06b6d4',
        'terminal.ansiWhite': type === 'dark' ? '#d4d4d4' : '#ffffff',

        // Bright variants
        'terminal.ansiBrightBlack': type === 'dark' ? '#525252' : '#404040',
        'terminal.ansiBrightRed': '#f87171',
        'terminal.ansiBrightGreen': '#4ade80',
        'terminal.ansiBrightYellow': '#facc15',
        'terminal.ansiBrightBlue': adjustBrightness(accent, 20),  // Brighter accent
        'terminal.ansiBrightMagenta': adjustBrightness(highlight, 20),  // Brighter highlight
        'terminal.ansiBrightCyan': '#22d3ee',
        'terminal.ansiBrightWhite': '#ffffff',

        // Borders & Focus
        'focusBorder': accent,
        'contrastBorder': border,

        // Badges
        'badge.background': accent,
        'badge.foreground': '#ffffff',

        // Scrollbar
        'scrollbar.shadow': '#00000030',
        'scrollbarSlider.background': textMuted + '30',
        'scrollbarSlider.hoverBackground': textMuted + '50',
        'scrollbarSlider.activeBackground': textMuted + '70',

        // Widgets
        'editorWidget.background': panel,
        'editorWidget.foreground': textPrimary,
        'editorWidget.border': border,
        'editorHoverWidget.background': panel,
        'editorHoverWidget.foreground': textPrimary,
        'editorHoverWidget.border': border,
        'editorHoverWidget.highlightForeground': accent,
        'editorHoverWidget.statusBarBackground': surface,

        // Suggest Widget (Autocomplete)
        'editorSuggestWidget.background': panel,
        'editorSuggestWidget.foreground': textPrimary,
        'editorSuggestWidget.border': border,
        'editorSuggestWidget.highlightForeground': accent,
        'editorSuggestWidget.focusHighlightForeground': accent,
        'editorSuggestWidget.selectedBackground': surface,
        'editorSuggestWidget.selectedForeground': textPrimary,
        'editorSuggestWidget.selectedIconForeground': accent,

        // Parameter Hints
        'editorParameterHint.background': panel,
        'editorParameterHint.foreground': textPrimary,

        // Lightbulb
        'editorLightBulb.foreground': '#f59e0b',
        'editorLightBulbAutoFix.foreground': '#22c55e',

        // Inlay Hints
        'editorInlayHint.background': surface + '80',
        'editorInlayHint.foreground': textSecondary,
        'editorInlayHint.typeForeground': textSecondary,
        'editorInlayHint.parameterForeground': textSecondary,

        // Ghost Text (Copilot, etc.)
        'editorGhostText.foreground': textMuted,

        // Code Lens
        'editorCodeLens.foreground': textMuted,

        // Gutter
        'editorGutter.background': background,
        'editorGutter.modifiedBackground': accent,
        'editorGutter.addedBackground': '#22c55e',
        'editorGutter.deletedBackground': '#ef4444',
        'editorGutter.commentRangeForeground': textMuted,
        'editorGutter.foldingControlForeground': textMuted,

        // Peek View
        'peekView.border': accent,
        'peekViewEditor.background': background,
        'peekViewResult.background': panel,
        'peekViewTitle.background': surface,

        // Git Decorations
        'gitDecoration.modifiedResourceForeground': accent,
        'gitDecoration.untrackedResourceForeground': highlight,
        'gitDecoration.deletedResourceForeground': '#f44336',
        'gitDecoration.addedResourceForeground': '#22c55e',
        'gitDecoration.conflictingResourceForeground': '#f59e0b',
        'gitDecoration.ignoredResourceForeground': textMuted,
        'gitDecoration.renamedResourceForeground': accent,
        'gitDecoration.stageDeletedResourceForeground': '#f44336',
        'gitDecoration.stageModifiedResourceForeground': accent,
        'gitDecoration.submoduleResourceForeground': highlight,

        // Source Control (SCM) - Git icons and sync
        'scmGraph.foreground': textPrimary,
        'scmGraph.historyItemGroupBase': accent,
        'scmGraph.historyItemGroupHoverLabelForeground': textPrimary,
        'scmGraph.historyItemGroupLocal': accent,
        'scmGraph.historyItemGroupRemote': highlight,
        'scmGraph.historyItemGroupBackground': surface,
        'scmGraph.historyItemGroupForeground': textPrimary,

        // Status Bar Remote
        'statusBarItem.remoteBackground': accent,
        'statusBarItem.remoteForeground': '#ffffff',
        'statusBarItem.remoteHoverBackground': highlight,
        'statusBarItem.remoteHoverForeground': '#ffffff',

        // Status Bar Prominent
        'statusBarItem.prominentBackground': accent,
        'statusBarItem.prominentForeground': '#ffffff',
        'statusBarItem.prominentHoverBackground': highlight,

        // Status Bar Error/Warning
        'statusBarItem.errorBackground': '#ef4444',
        'statusBarItem.errorForeground': '#ffffff',
        'statusBarItem.warningBackground': '#f59e0b',
        'statusBarItem.warningForeground': '#ffffff',

        // Minimap
        'minimap.background': background,
        'minimap.selectionHighlight': highlight + '80',

        // Notifications (Toast messages)
        'notifications.background': panel,
        'notifications.foreground': textPrimary,
        'notifications.border': border,
        'notificationCenter.border': border,
        'notificationCenterHeader.background': surface,
        'notificationCenterHeader.foreground': textPrimary,
        'notificationToast.border': border,
        'notificationsInfoIcon.foreground': accent,
        'notificationsWarningIcon.foreground': '#f59e0b',
        'notificationsErrorIcon.foreground': '#ef4444',
        'notificationLink.foreground': accent,

        // Context Menu
        'menu.background': panel,
        'menu.foreground': textPrimary,
        'menu.selectionBackground': highlight + '40',
        'menu.selectionForeground': textPrimary,
        'menu.selectionBorder': accent,
        'menu.separatorBackground': border,
        'menu.border': border,
        'menubar.selectionBackground': surface,
        'menubar.selectionForeground': textPrimary,
        'menubar.selectionBorder': accent,

        // Command Center
        'commandCenter.background': panel,
        'commandCenter.foreground': textPrimary,
        'commandCenter.border': border,
        'commandCenter.activeBackground': surface,
        'commandCenter.activeForeground': textPrimary,
        'commandCenter.activeBorder': accent,

        // Breadcrumb
        'breadcrumb.background': background,
        'breadcrumb.foreground': textSecondary,
        'breadcrumb.focusForeground': textPrimary,
        'breadcrumb.activeSelectionForeground': textPrimary,
        'breadcrumbPicker.background': panel,

        // Settings
        'settings.headerForeground': textPrimary,
        'settings.modifiedItemIndicator': accent,
        'settings.dropdownBackground': surface,
        'settings.dropdownForeground': textPrimary,
        'settings.dropdownBorder': border,
        'settings.checkboxBackground': surface,
        'settings.checkboxForeground': textPrimary,
        'settings.checkboxBorder': border,
        'settings.textInputBackground': surface,
        'settings.textInputForeground': textPrimary,
        'settings.textInputBorder': border,
        'settings.numberInputBackground': surface,
        'settings.numberInputForeground': textPrimary,
        'settings.numberInputBorder': border,

        // Welcome Page
        'welcomePage.background': background,
        'welcomePage.tileBackground': panel,
        'welcomePage.tileHoverBackground': surface,
        'welcomePage.tileBorder': border,
        'welcomePage.progress.foreground': accent,

        // Keybinding
        'keybindingLabel.background': surface,
        'keybindingLabel.foreground': textPrimary,
        'keybindingLabel.border': border,
        'keybindingLabel.bottomBorder': border,

        // Tree/List Icons and Indent Guides
        'tree.indentGuidesStroke': textMuted,
        'tree.inactiveIndentGuidesStroke': textMuted + '60',
        'tree.tableColumnsBorder': border,
        'tree.tableOddRowsBackground': surface + '30',

        // Editor Indent Guides
        'editorIndentGuide.background': textMuted + '30',
        'editorIndentGuide.activeBackground': textMuted + '60',
        'editorIndentGuide.background1': textMuted + '30',
        'editorIndentGuide.background2': textMuted + '25',
        'editorIndentGuide.background3': textMuted + '20',
        'editorIndentGuide.activeBackground1': textMuted + '60',
        'editorIndentGuide.activeBackground2': textMuted + '55',
        'editorIndentGuide.activeBackground3': textMuted + '50',

        // Editor Whitespace
        'editorWhitespace.foreground': textMuted + '40',

        // Editor Rulers
        'editorRuler.foreground': textMuted + '30',

        // Minimap (more visible)
        'minimap.foregroundOpacity': '#000000',
        'minimapSlider.background': textMuted + '20',
        'minimapSlider.hoverBackground': textMuted + '40',
        'minimapSlider.activeBackground': textMuted + '60',
        'minimapGutter.addedBackground': '#22c55e',
        'minimapGutter.modifiedBackground': accent,
        'minimapGutter.deletedBackground': '#ef4444',

        // Panel (Terminal, Output, Problems tabs)
        'panelSection.border': border,
        'panelSectionHeader.background': surface,
        'panelSectionHeader.foreground': textPrimary,
        'panelInput.border': border,

        // Symbolic icons
        'symbolIcon.arrayForeground': textSecondary,
        'symbolIcon.booleanForeground': accent,
        'symbolIcon.classForeground': highlight,
        'symbolIcon.colorForeground': accent,
        'symbolIcon.constantForeground': accent,
        'symbolIcon.constructorForeground': highlight,
        'symbolIcon.enumeratorForeground': accent,
        'symbolIcon.enumeratorMemberForeground': accent,
        'symbolIcon.eventForeground': highlight,
        'symbolIcon.fieldForeground': textSecondary,
        'symbolIcon.fileForeground': textSecondary,
        'symbolIcon.folderForeground': textSecondary,
        'symbolIcon.functionForeground': accent,
        'symbolIcon.interfaceForeground': highlight,
        'symbolIcon.keyForeground': accent,
        'symbolIcon.keywordForeground': accent,
        'symbolIcon.methodForeground': accent,
        'symbolIcon.moduleForeground': textSecondary,
        'symbolIcon.namespaceForeground': textSecondary,
        'symbolIcon.nullForeground': textMuted,
        'symbolIcon.numberForeground': accent,
        'symbolIcon.objectForeground': highlight,
        'symbolIcon.operatorForeground': textSecondary,
        'symbolIcon.packageForeground': textSecondary,
        'symbolIcon.propertyForeground': textSecondary,
        'symbolIcon.referenceForeground': highlight,
        'symbolIcon.snippetForeground': textSecondary,
        'symbolIcon.stringForeground': highlight,
        'symbolIcon.structForeground': highlight,
        'symbolIcon.textForeground': textPrimary,
        'symbolIcon.typeParameterForeground': highlight,
        'symbolIcon.unitForeground': accent,
        'symbolIcon.variableForeground': textSecondary,

        // Debug icons
        'debugIcon.breakpointForeground': '#ef4444',
        'debugIcon.breakpointDisabledForeground': textMuted,
        'debugIcon.startForeground': '#22c55e',
        'debugIcon.pauseForeground': accent,
        'debugIcon.stopForeground': '#ef4444',
        'debugIcon.disconnectForeground': '#ef4444',
        'debugIcon.restartForeground': '#22c55e',
        'debugIcon.stepOverForeground': accent,
        'debugIcon.stepIntoForeground': accent,
        'debugIcon.stepOutForeground': accent,
        'debugIcon.continueForeground': accent,

        // Bracket colors
        'editorBracketMatch.background': highlight + '30',
        'editorBracketMatch.border': accent,
        'editorBracketHighlight.foreground1': accent,
        'editorBracketHighlight.foreground2': highlight,
        'editorBracketHighlight.foreground3': textSecondary,
        'editorBracketHighlight.foreground4': accent,
        'editorBracketHighlight.foreground5': highlight,
        'editorBracketHighlight.foreground6': textSecondary,

        // Diff editor
        'diffEditor.insertedTextBackground': '#22c55e20',
        'diffEditor.removedTextBackground': '#ef444420',
        'diffEditor.insertedLineBackground': '#22c55e15',
        'diffEditor.removedLineBackground': '#ef444415',

        // Testing
        'testing.iconFailed': '#ef4444',
        'testing.iconErrored': '#ef4444',
        'testing.iconPassed': '#22c55e',
        'testing.iconQueued': textMuted,
        'testing.iconUnset': textMuted,
        'testing.iconSkipped': textMuted,

        // Charts
        'charts.foreground': textPrimary,
        'charts.lines': textSecondary,
        'charts.red': '#ef4444',
        'charts.blue': accent,
        'charts.yellow': '#eab308',
        'charts.orange': '#f97316',
        'charts.green': '#22c55e',
        'charts.purple': highlight,

        // Chat (AI Chat - Copilot, etc.)
        'chat.requestBackground': surface,
        'chat.requestBorder': border,
        'chat.slashCommandBackground': accent + '30',
        'chat.slashCommandForeground': accent,
        'chat.avatarBackground': accent,
        'chat.avatarForeground': '#ffffff',

        // Inline Chat
        'inlineChat.background': panel,
        'inlineChat.border': border,
        'inlineChat.shadow': '#00000030',
        'inlineChat.regionHighlight': highlight + '20',
        'inlineChatInput.background': surface,
        'inlineChatInput.border': border,
        'inlineChatInput.focusBorder': accent,
        'inlineChatInput.placeholderForeground': textMuted,

        // Interactive Editor (AI responses)
        'interactive.activeCodeBorder': accent,
        'interactive.inactiveCodeBorder': border,

        // Notebook (for AI code blocks)
        'notebook.cellBorderColor': border,
        'notebook.cellEditorBackground': background,
        'notebook.cellHoverBackground': surface + '50',
        'notebook.cellInsertionIndicator': accent,
        'notebook.cellStatusBarItemHoverBackground': surface,
        'notebook.cellToolbarSeparator': border,
        'notebook.focusedCellBackground': surface + '30',
        'notebook.focusedCellBorder': accent,
        'notebook.focusedEditorBorder': accent,
        'notebook.inactiveFocusedCellBorder': border,
        'notebook.outputContainerBackgroundColor': panel,
        'notebook.outputContainerBorderColor': border,
        'notebook.selectedCellBackground': surface + '50',
        'notebook.selectedCellBorder': accent,
        'notebook.symbolHighlightBackground': highlight + '30',

        // Table colors (for markdown tables in chat)
        'editorTable.background': panel,
        'editorTable.foreground': textPrimary,
        'editorTable.border': border,
        'editorTable.headerBackground': surface,
        'editorTable.headerForeground': textPrimary,
        'editorTable.rowOddBackground': surface + '30',
        'editorTable.rowEvenBackground': panel,
    };
}

/**
 * Ajusta el brillo de un color hex
 */
function adjustBrightness(hex: string, percent: number): string {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, Math.max(0, (num >> 16) + amt));
    const G = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amt));
    const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));
    return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`;
}

/**
 * Mezcla dos colores hex
 */
function mixColors(hex1: string, hex2: string, ratio: number = 0.5): string {
    const num1 = parseInt(hex1.replace('#', ''), 16);
    const num2 = parseInt(hex2.replace('#', ''), 16);

    const R1 = (num1 >> 16) & 255;
    const G1 = (num1 >> 8) & 255;
    const B1 = num1 & 255;

    const R2 = (num2 >> 16) & 255;
    const G2 = (num2 >> 8) & 255;
    const B2 = num2 & 255;

    const R = Math.round(R1 * (1 - ratio) + R2 * ratio);
    const G = Math.round(G1 * (1 - ratio) + G2 * ratio);
    const B = Math.round(B1 * (1 - ratio) + B2 * ratio);

    return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`;
}

/**
 * Rota el matiz de un color (hue shift)
 */
function rotateHue(hex: string, degrees: number): string {
    const num = parseInt(hex.replace('#', ''), 16);
    let R = (num >> 16) & 255;
    let G = (num >> 8) & 255;
    let B = num & 255;

    // Convertir RGB a HSL
    R /= 255; G /= 255; B /= 255;
    const max = Math.max(R, G, B), min = Math.min(R, G, B);
    let h = 0, s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case R: h = ((G - B) / d + (G < B ? 6 : 0)) / 6; break;
            case G: h = ((B - R) / d + 2) / 6; break;
            case B: h = ((R - G) / d + 4) / 6; break;
        }
    }

    // Rotar hue
    h = (h + degrees / 360) % 1;
    if (h < 0) h += 1;

    // Convertir HSL de vuelta a RGB
    let r, g, b;
    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    const toHex = (x: number) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Interface para reglas de color de tokens
 */
export interface TokenColorRule {
    scope: string | string[];
    settings: {
        foreground?: string;
        fontStyle?: string;
    };
}

/**
 * Genera colores de sintaxis (tokens) desde los colores semilla
 * Crea colores MUY distintos para cada tipo de token
 */
export function generateTokenColors(
    seedColors: [string, string, string, string, string],
    type: 'dark' | 'light'
): TokenColorRule[] {
    const [background, panel, surface, accent, highlight] = seedColors;

    // === COLORES DE SINTAXIS DERIVADOS ===
    // Usamos rotación de color para crear variedad máxima

    // Color 1: Keywords (accent) - Palabras reservadas (más oscuro en light)
    const keywordColor = type === 'dark' ? accent : adjustBrightness(accent, -15);

    // Color 2: Strings (highlight) - Cadenas de texto (más oscuro en light)
    const stringColor = type === 'dark' ? highlight : adjustBrightness(highlight, -20);

    // Color 3: Functions - Rotado 60° desde accent para diferenciarse
    const functionColor = adjustBrightness(rotateHue(accent, 60), type === 'dark' ? 20 : -20);

    // Color 4: Types/Classes - Mezcla de accent y highlight (más oscuro en light)
    const typeColor = type === 'dark'
        ? mixColors(accent, highlight, 0.4)
        : adjustBrightness(mixColors(accent, highlight, 0.4), -15);

    // Color 5: Numbers - Rotado desde highlight (más oscuro en light)
    const numberColor = type === 'dark'
        ? rotateHue(highlight, -45)
        : adjustBrightness(rotateHue(highlight, -45), -15);

    // Color 6: Properties - Versión más suave del highlight (más oscura en light)
    const propertyColor = adjustBrightness(highlight, type === 'dark' ? -15 : -25);

    // Color 7: Variables - Texto claro/oscuro según el tema
    const variableColor = type === 'dark' ? '#d4d4d4' : '#1f1f1f';

    // Color 8: Attributes - Rotado desde function
    const attributeColor = rotateHue(accent, 120);

    // Color 9: Comments - Gris oscuro para ambos temas (legible)
    const commentColor = type === 'dark' ? '#6b7280' : '#6b7280';

    // Color 10: Operators - Gris oscuro
    const operatorColor = type === 'dark' ? '#9ca3af' : '#4b5563';

    return [
        // ═══════════════════════════════════════════════════════════
        // KEYWORDS - export, return, const, function, if, else, etc.
        // ═══════════════════════════════════════════════════════════
        {
            scope: [
                'keyword',
                'keyword.control',
                'keyword.control.import',
                'keyword.control.export',
                'keyword.control.from',
                'keyword.control.default',
                'keyword.control.return',
                'keyword.control.conditional',
                'keyword.control.loop',
                'keyword.operator.new',
                'keyword.function',
                'storage.type',
                'storage.modifier',
                'storage.type.function',
                'storage.type.class',
                'storage.type.interface',
                'storage.type.type'
            ],
            settings: {
                foreground: keywordColor
            }
        },

        // ═══════════════════════════════════════════════════════════
        // STRINGS - "texto", 'texto', `template`
        // ═══════════════════════════════════════════════════════════
        {
            scope: [
                'string',
                'string.quoted',
                'string.quoted.single',
                'string.quoted.double',
                'string.template',
                'string.quoted.template',
                'punctuation.definition.string'
            ],
            settings: {
                foreground: stringColor
            }
        },

        // ═══════════════════════════════════════════════════════════
        // COMMENTS - Gris e itálica
        // ═══════════════════════════════════════════════════════════
        {
            scope: [
                'comment',
                'comment.line',
                'comment.line.double-slash',
                'comment.block',
                'comment.block.documentation',
                'punctuation.definition.comment'
            ],
            settings: {
                foreground: commentColor,
                fontStyle: 'italic'
            }
        },

        // ═══════════════════════════════════════════════════════════
        // FUNCTIONS - nombreFuncion(), onClick(), useState()
        // ═══════════════════════════════════════════════════════════
        {
            scope: [
                'entity.name.function',
                'entity.name.function.member',
                'support.function',
                'support.function.console',
                'meta.function-call',
                'meta.function-call.generic',
                'variable.function'
            ],
            settings: {
                foreground: functionColor
            }
        },

        // ═══════════════════════════════════════════════════════════
        // VARIABLES - Variables y parámetros
        // ═══════════════════════════════════════════════════════════
        {
            scope: [
                'variable',
                'variable.other',
                'variable.other.readwrite',
                'variable.parameter',
                'variable.language.this',
                'variable.language.super'
            ],
            settings: {
                foreground: variableColor
            }
        },

        // ═══════════════════════════════════════════════════════════
        // TYPES & CLASSES - React, Component, string, number
        // ═══════════════════════════════════════════════════════════
        {
            scope: [
                'entity.name.type',
                'entity.name.type.class',
                'entity.name.type.interface',
                'entity.name.type.alias',
                'entity.name.class',
                'support.type',
                'support.class',
                'support.type.primitive',
                'entity.name.type.enum'
            ],
            settings: {
                foreground: typeColor
            }
        },

        // ═══════════════════════════════════════════════════════════
        // NUMBERS & BOOLEAN - 123, true, false, null
        // ═══════════════════════════════════════════════════════════
        {
            scope: [
                'constant.numeric',
                'constant.numeric.integer',
                'constant.numeric.float',
                'constant.numeric.decimal',
                'constant.numeric.hex',
                'constant.language',
                'constant.language.boolean',
                'constant.language.null',
                'constant.language.undefined'
            ],
            settings: {
                foreground: numberColor
            }
        },

        // ═══════════════════════════════════════════════════════════
        // PROPERTIES - className, onClick, ref
        // ═══════════════════════════════════════════════════════════
        {
            scope: [
                'variable.other.property',
                'variable.other.object.property',
                'meta.object-literal.key',
                'support.type.property-name.json'
            ],
            settings: {
                foreground: propertyColor
            }
        },

        // ═══════════════════════════════════════════════════════════
        // HTML/JSX TAGS - <div>, <Header>, <Card>
        // ═══════════════════════════════════════════════════════════
        {
            scope: [
                'entity.name.tag',
                'entity.name.tag.html',
                'entity.name.tag.js',
                'entity.name.tag.tsx',
                'entity.name.tag.jsx',
                'support.class.component',
                'support.class.component.tsx',
                'support.class.component.jsx'
            ],
            settings: {
                foreground: keywordColor
            }
        },

        // ═══════════════════════════════════════════════════════════
        // ATTRIBUTES - class="", id="", onClick={}
        // ═══════════════════════════════════════════════════════════
        {
            scope: [
                'entity.other.attribute-name',
                'entity.other.attribute-name.html',
                'entity.other.attribute-name.tsx',
                'entity.other.attribute-name.jsx',
                'entity.other.attribute-name.js'
            ],
            settings: {
                foreground: attributeColor,
                fontStyle: 'italic'
            }
        },

        // ═══════════════════════════════════════════════════════════
        // OPERATORS - =, +, -, *, /, ===, !==
        // ═══════════════════════════════════════════════════════════
        {
            scope: [
                'keyword.operator',
                'keyword.operator.assignment',
                'keyword.operator.arithmetic',
                'keyword.operator.logical',
                'keyword.operator.comparison',
                'keyword.operator.ternary',
                'keyword.operator.spread'
            ],
            settings: {
                foreground: operatorColor
            }
        },

        // ═══════════════════════════════════════════════════════════
        // PUNCTUATION - (, ), {, }, [, ], ;, ,
        // ═══════════════════════════════════════════════════════════
        {
            scope: [
                'punctuation',
                'punctuation.definition.block',
                'punctuation.definition.parameters',
                'punctuation.section',
                'punctuation.separator',
                'punctuation.accessor',
                'meta.brace'
            ],
            settings: {
                foreground: type === 'dark' ? '#808080' : '#444444'
            }
        },

        // ═══════════════════════════════════════════════════════════
        // CSS PROPERTIES
        // ═══════════════════════════════════════════════════════════
        {
            scope: [
                'support.type.property-name.css',
                'support.type.vendored.property-name.css',
                'meta.property-name.css'
            ],
            settings: {
                foreground: propertyColor
            }
        },

        // ═══════════════════════════════════════════════════════════
        // CSS VALUES
        // ═══════════════════════════════════════════════════════════
        {
            scope: [
                'support.constant.property-value.css',
                'support.constant.font-name.css',
                'constant.numeric.css',
                'constant.other.color.rgb-value.css'
            ],
            settings: {
                foreground: numberColor
            }
        },

        // ═══════════════════════════════════════════════════════════
        // CSS SELECTORS
        // ═══════════════════════════════════════════════════════════
        {
            scope: [
                'entity.name.tag.css',
                'entity.other.attribute-name.class.css',
                'entity.other.attribute-name.id.css'
            ],
            settings: {
                foreground: keywordColor
            }
        },

        // ═══════════════════════════════════════════════════════════
        // JSON KEYS
        // ═══════════════════════════════════════════════════════════
        {
            scope: [
                'support.type.property-name.json'
            ],
            settings: {
                foreground: propertyColor
            }
        },

        // ═══════════════════════════════════════════════════════════
        // MARKDOWN
        // ═══════════════════════════════════════════════════════════
        {
            scope: [
                'markup.heading',
                'markup.heading.markdown',
                'entity.name.section.markdown'
            ],
            settings: {
                foreground: keywordColor
            }
        },
        {
            scope: [
                'markup.bold',
                'markup.bold.markdown'
            ],
            settings: {
                foreground: functionColor,
                fontStyle: 'bold'
            }
        },
        {
            scope: [
                'markup.italic',
                'markup.italic.markdown'
            ],
            settings: {
                foreground: attributeColor,
                fontStyle: 'italic'
            }
        },
        {
            scope: [
                'markup.inline.raw',
                'markup.inline.raw.markdown'
            ],
            settings: {
                foreground: stringColor
            }
        },

        // ═══════════════════════════════════════════════════════════
        // JSX/TSX - Texto dentro de elementos
        // ═══════════════════════════════════════════════════════════
        {
            scope: [
                'meta.jsx.children',
                'meta.jsx.children.tsx',
                'string.unquoted.jsx',
                'string.unquoted.tsx',
                'text.embedded.jsx',
                'text.embedded.tsx',
                'source.js.jsx',
                'source.tsx'
            ],
            settings: {
                foreground: type === 'dark' ? '#e0e0e0' : '#1a1a1a'
            }
        },
        // JSX Tags - <Component>, </Component>
        {
            scope: [
                'entity.name.tag.jsx',
                'entity.name.tag.tsx',
                'support.class.component.jsx',
                'support.class.component.tsx',
                'punctuation.definition.tag.jsx',
                'punctuation.definition.tag.tsx',
                'punctuation.definition.tag.begin.jsx',
                'punctuation.definition.tag.end.jsx',
                'punctuation.definition.tag.begin.tsx',
                'punctuation.definition.tag.end.tsx'
            ],
            settings: {
                foreground: keywordColor
            }
        },
        // JSX Attributes - className, onClick
        {
            scope: [
                'entity.other.attribute-name.jsx',
                'entity.other.attribute-name.tsx',
                'meta.tag.attributes.jsx',
                'meta.tag.attributes.tsx'
            ],
            settings: {
                foreground: attributeColor
            }
        },
        // Plain text (fallback for text content)
        {
            scope: [
                'text',
                'text.html',
                'text.html.basic',
                'text.html.derivative'
            ],
            settings: {
                foreground: type === 'dark' ? '#e0e0e0' : '#1a1a1a'
            }
        }
    ];
}
