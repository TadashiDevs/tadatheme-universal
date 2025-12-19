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
    const textSecondary = type === 'dark' ? '#a0a0a0' : '#666666';
    const textMuted = type === 'dark' ? '#707070' : '#999999';
    const border = type === 'dark'
        ? adjustBrightness(panel, 15)
        : adjustBrightness(panel, -10);

    return {
        // Activity Bar
        'activityBar.background': background,
        'activityBar.foreground': textPrimary,
        'activityBar.inactiveForeground': textMuted,
        'activityBarBadge.background': accent,
        'activityBarBadge.foreground': '#ffffff',

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
        'editor.selectionBackground': highlight + '40',
        'editor.lineHighlightBackground': surface + '30',
        'editorCursor.foreground': accent,

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

        // Status Bar
        'statusBar.background': accent,
        'statusBar.foreground': '#ffffff',
        'statusBar.noFolderBackground': surface,
        'statusBarItem.hoverBackground': highlight,

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
        'list.hoverBackground': surface + '80',
        'list.focusBackground': highlight + '40',
        'list.inactiveSelectionBackground': surface,

        // Quick Pick
        'quickInput.background': panel,
        'quickInput.foreground': textPrimary,
        'quickInputList.focusBackground': highlight + '40',

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
        'terminal.ansiBrightBlack': type === 'dark' ? '#525252' : '#737373',
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
        'editorWidget.border': border,
        'editorHoverWidget.background': panel,
        'editorHoverWidget.border': border,

        // Peek View
        'peekView.border': accent,
        'peekViewEditor.background': background,
        'peekViewResult.background': panel,
        'peekViewTitle.background': surface,

        // Git Decorations
        'gitDecoration.modifiedResourceForeground': accent,
        'gitDecoration.untrackedResourceForeground': highlight,
        'gitDecoration.deletedResourceForeground': '#f44336',

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
        'menu.selectionBorder': 'transparent',
        'menu.separatorBackground': border,
        'menu.border': border,
        'menubar.selectionBackground': surface,
        'menubar.selectionForeground': textPrimary,

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

    // Color 1: Keywords (accent directo) - Palabras reservadas
    const keywordColor = accent;

    // Color 2: Strings (highlight directo) - Cadenas de texto
    const stringColor = highlight;

    // Color 3: Functions - Rotado 60° desde accent para diferenciarse
    const functionColor = adjustBrightness(rotateHue(accent, 60), type === 'dark' ? 20 : -10);

    // Color 4: Types/Classes - Mezcla de accent y highlight
    const typeColor = mixColors(accent, highlight, 0.4);

    // Color 5: Numbers - Rotado desde highlight
    const numberColor = rotateHue(highlight, -45);

    // Color 6: Properties - Versión más suave del highlight
    const propertyColor = adjustBrightness(highlight, type === 'dark' ? -15 : 15);

    // Color 7: Variables - Texto claro/oscuro según el tema
    const variableColor = type === 'dark' ? '#d4d4d4' : '#1f1f1f';

    // Color 8: Attributes - Rotado desde function
    const attributeColor = rotateHue(accent, 120);

    // Color 9: Comments - Siempre gris suave
    const commentColor = type === 'dark' ? '#6b7280' : '#9ca3af';

    // Color 10: Operators - Gris medio
    const operatorColor = type === 'dark' ? '#9ca3af' : '#6b7280';

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
                foreground: type === 'dark' ? '#808080' : '#666666'
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
        }
    ];
}
