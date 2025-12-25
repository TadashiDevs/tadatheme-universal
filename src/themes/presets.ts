import { PresetTheme } from '../types';

export const presetThemes: PresetTheme[] = [
    // ═══════════════════════════════════════════════════════════
    // TADATHEME SIGNATURE - Los temas oficiales de la extensión
    // ═══════════════════════════════════════════════════════════
    {
        id: 'tadatheme-dark',
        label: 'TadaTheme Dark',
        type: 'dark',
        // Tema oficial TadaTheme - Azul oscuro premium con cyan y magenta neón
        seedColors: ['#0d1117', '#161b22', '#21262d', '#4facfe', '#f093fb']
    },
    {
        id: 'tadatheme-light',
        label: 'TadaTheme Light',
        type: 'light',
        // Tema oficial TadaTheme Light - Blanco elegante con gradiente cyan-magenta
        seedColors: ['#ffffff', '#f6f8fa', '#eaeef2', '#0891b2', '#c026d3']
    },

    // ═══════════════════════════════════════════════════════════
    // CLÁSICOS & ESENCIALES
    // ═══════════════════════════════════════════════════════════
    {
        id: 'monokai',
        label: 'Monokai Pro',
        type: 'dark',
        // El clásico Monokai - verde lima, rosa, amarillo
        seedColors: ['#272822', '#3e3d32', '#49483e', '#f92672', '#a6e22e']
    },
    {
        id: 'dracula',
        label: 'Dracula',
        type: 'dark',
        // Púrpura vampírico con rosa y cyan
        seedColors: ['#282a36', '#44475a', '#515974', '#bd93f9', '#ff79c6']
    },
    {
        id: 'github-dark',
        label: 'GitHub Dark',
        type: 'dark',
        // GitHub moderno - azul brillante y verde
        seedColors: ['#0d1117', '#161b22', '#21262d', '#58a6ff', '#7ee787']
    },
    {
        id: 'nord',
        label: 'Nord',
        type: 'dark',
        // Paleta nórdica fría - cyans y azules
        seedColors: ['#2e3440', '#3b4252', '#434c5e', '#88c0d0', '#81a1c1']
    },
    {
        id: 'one-dark',
        label: 'One Dark Pro',
        type: 'dark',
        // Atom One Dark - azul suave y púrpura
        seedColors: ['#282c34', '#21252b', '#2c313a', '#61afef', '#c678dd']
    },

    // ═══════════════════════════════════════════════════════════
    // VIBRANT & NEON
    // ═══════════════════════════════════════════════════════════
    {
        id: 'synthwave',
        label: 'Synthwave',
        type: 'dark',
        // Retro 80s - rosa neón y cyan
        seedColors: ['#262335', '#2a2139', '#34294f', '#ff7edb', '#36f9f6']
    },
    {
        id: 'cyber',
        label: 'Cyber',
        type: 'dark',
        // Cyberpunk - cyan eléctrico y magenta
        seedColors: ['#0a0e14', '#0d1219', '#1a1f29', '#00ffff', '#ff00ff']
    },
    {
        id: 'midnight',
        label: 'Midnight',
        type: 'dark',
        // Medianoche - azul marino con turquesa y lavanda
        seedColors: ['#011627', '#0b2942', '#1d3b53', '#7fdbca', '#c792ea']
    },
    {
        id: 'aurora',
        label: 'Aurora',
        type: 'dark',
        // Aurora boreal - índigo con cyan brillante
        seedColors: ['#0f0f23', '#1a1a3e', '#2d2d5a', '#6366f1', '#22d3ee']
    },
    {
        id: 'nebula',
        label: 'Nebula',
        type: 'dark',
        // Nebulosa espacial - rojo coral con amarillo
        seedColors: ['#1b1b2f', '#1f1f3d', '#2d2d5a', '#e43f5a', '#ffc93c']
    },
    {
        id: 'tokyo-night',
        label: 'Tokyo Night',
        type: 'dark',
        // Tokio nocturno - azul neón y púrpura
        seedColors: ['#1a1b26', '#16161e', '#24283b', '#7aa2f7', '#bb9af7']
    },

    // ═══════════════════════════════════════════════════════════
    // SOFT & PASTEL
    // ═══════════════════════════════════════════════════════════
    {
        id: 'catppuccin-mocha',
        label: 'Catppuccin Mocha',
        type: 'dark',
        // Catppuccin suave - lavanda y rosa
        seedColors: ['#1e1e2e', '#181825', '#313244', '#cba6f7', '#f5c2e7']
    },
    {
        id: 'rose-gold',
        label: 'Rose Gold',
        type: 'light',
        // Rosa dorado elegante (claro)
        seedColors: ['#fff5f5', '#ffe4e6', '#fecdd3', '#e11d48', '#f43f5e']
    },
    {
        id: 'rose-dark',
        label: 'Rose Dark',
        type: 'dark',
        // Rosa oscuro elegante
        seedColors: ['#1a0a10', '#2d1520', '#451a2a', '#e11d48', '#fb7185']
    },
    {
        id: 'lavender',
        label: 'Lavender',
        type: 'light',
        // Lavanda suave y púrpura
        seedColors: ['#faf5ff', '#f3e8ff', '#e9d5ff', '#a855f7', '#c084fc']
    },
    {
        id: 'ocean',
        label: 'Ocean',
        type: 'dark',
        // Océano profundo - azul marino con cyan
        seedColors: ['#0a1628', '#0f2744', '#1a3a5c', '#06b6d4', '#22d3ee']
    },
    {
        id: 'glacier',
        label: 'Glacier',
        type: 'light',
        // Glaciar - azul hielo brillante
        seedColors: ['#f0f9ff', '#e0f2fe', '#bae6fd', '#0ea5e9', '#38bdf8']
    },
    {
        id: 'mint-fresh',
        label: 'Mint Fresh',
        type: 'light',
        // Menta fresca - verde menta limpio
        seedColors: ['#f0fdf4', '#dcfce7', '#bbf7d0', '#10b981', '#34d399']
    },
    {
        id: 'sand-dune',
        label: 'Sand Dune',
        type: 'light',
        // Arena del desierto - beige cálido
        seedColors: ['#fefcf3', '#fef3c7', '#fde68a', '#d97706', '#f59e0b']
    },
    {
        id: 'terracotta',
        label: 'Terracotta',
        type: 'light',
        // Terracota italiana - naranja arcilla
        seedColors: ['#fef7f0', '#fed7c3', '#fdba9a', '#ea580c', '#f97316']
    },
    {
        id: 'notion',
        label: 'Notion',
        type: 'light',
        // Estilo Notion - minimalista con coral
        seedColors: ['#ffffff', '#f7f6f3', '#ebeae6', '#eb5757', '#2f80ed']
    },

    // ═══════════════════════════════════════════════════════════
    // NATURE & ELEMENTS
    // ═══════════════════════════════════════════════════════════
    {
        id: 'forest',
        label: 'Forest',
        type: 'dark',
        // Bosque profundo - verdes naturales
        seedColors: ['#0d1117', '#0f1a0f', '#1a2f1a', '#22c55e', '#4ade80']
    },
    {
        id: 'sunset',
        label: 'Sunset',
        type: 'dark',
        // Atardecer cálido - naranjas y rojos
        seedColors: ['#1a0a0a', '#2d1515', '#451a1a', '#f97316', '#fb923c']
    },
    {
        id: 'emerald',
        label: 'Emerald',
        type: 'dark',
        // Esmeralda - verde joya intenso
        seedColors: ['#022c22', '#064e3b', '#065f46', '#10b981', '#34d399']
    },
    {
        id: 'copper',
        label: 'Copper',
        type: 'dark',
        // Cobre metálico - naranja y ámbar
        seedColors: ['#1c1917', '#292524', '#44403c', '#ea580c', '#f59e0b']
    },
    {
        id: 'obsidian',
        label: 'Obsidian',
        type: 'dark',
        // Obsidiana negra con acentos dorados
        seedColors: ['#0F0902', '#141414', '#1f1f1f', '#d4a84b', '#f5c73d']
    },
    {
        id: 'crimson',
        label: 'Crimson',
        type: 'dark',
        // Carmesí intenso - rojos profundos
        seedColors: ['#1a0a0a', '#2d0f0f', '#451a1a', '#dc2626', '#ef4444']
    },

    // ═══════════════════════════════════════════════════════════
    // MINIMAL
    // ═══════════════════════════════════════════════════════════
    {
        id: 'monochrome',
        label: 'Monochrome',
        type: 'dark',
        // Monocromático elegante - solo grises
        seedColors: ['#0a0a0a', '#171717', '#262626', '#737373', '#a3a3a3']
    },

    // ═══════════════════════════════════════════════════════════
    // SPECIAL & RETRO
    // ═══════════════════════════════════════════════════════════
    {
        id: 'hacker-dark',
        label: 'Hacker Dark',
        type: 'dark',
        // Matrix style - verde neón sobre negro
        seedColors: ['#0a0a0a', '#0d1a0d', '#1a2f1a', '#00ff00', '#39ff14']
    },
    {
        id: 'gameboy-dark',
        label: 'Gameboy Dark',
        type: 'dark',
        // Nintendo Gameboy LCD auténtico - 4 tonos de verde
        // Background oscuro, paneles medio, acentos claros
        seedColors: ['#0f380f', '#306230', '#8bac0f', '#9bbc0f', '#9bbc0f']
    },
    {
        id: 'cosmic-dark',
        label: 'Cosmic Dark',
        type: 'dark',
        // Espacio cósmico - púrpura profundo con estrellas
        seedColors: ['#0d0221', '#1a0533', '#2d1b4e', '#9d4edd', '#e0aaff']
    },
    {
        id: 'solarized-dark',
        label: 'Solarized Dark',
        type: 'dark',
        // Solarized clásico - azul verdoso con amarillo
        seedColors: ['#002b36', '#073642', '#586e75', '#268bd2', '#b58900']
    },
    {
        id: 'palenight-dark',
        label: 'Palenight Dark',
        type: 'dark',
        // Material Palenight - púrpura suave con verde lima
        seedColors: ['#292d3e', '#34324a', '#414863', '#ab47bc', '#c3e88d']
    },
    {
        id: 'ubuntu-dark',
        label: 'Ubuntu Dark',
        type: 'dark',
        // Ubuntu Yaru Dark - gris oscuro con naranja Ubuntu
        seedColors: ['#1d1d1d', '#2d2d2d', '#3d3d3d', '#e95420', '#f99b11']
    },
    {
        id: 'discord-dark',
        label: 'Discord Dark',
        type: 'dark',
        // Discord dark mode oficial - gris azulado con blurple
        seedColors: ['#202225', '#2c2f33', '#36393f', '#5865f2', '#57f287']
    },
    {
        id: 'spirit-dark',
        label: 'Spirit Dark',
        type: 'dark',
        // Espiritual y místico - índigo profundo con dorado
        seedColors: ['#0f0a1a', '#1a1428', '#2d2541', '#6366f1', '#fbbf24']
    }
];
