# Changelog

All notable changes to TadaTheme Universal will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2024-12-24

### Added
- ✨ **4 new light themes**:
  - **Mint Fresh**: Fresh mint green, clean and natural
  - **Sand Dune**: Desert sand beige, warm and elegant
  - **Terracotta**: Italian terracotta, Mediterranean warmth
  - **Notion**: Minimalist Notion-style with coral accents
- 🎨 **AI Chat theming** - Chat panels, inline chat, and code blocks now themed
- 📊 **Table colors** - Markdown tables in chat are now readable
- 🖥️ **Extended status bar theming** - All elements including remote, debug, and error states
- 📝 **JSX/TSX text rules** - Explicit color rules for text inside JSX elements
- 🔲 **Comprehensive widget colors** - Suggest widgets, parameter hints, and code lens

### Fixed
- 🔧 **Light theme text visibility** - All syntax colors now darker for better contrast
- 📋 **Context menu selection border** - Now uses theme accent color instead of default red
- 🎯 **Activity Bar inactive icons** - Now show theme color at 70% opacity instead of gray
- 💬 **Hover widget text** - Tooltip text now properly colored in all themes
- 📑 **Table borders in light themes** - Increased contrast for table lines
- 🔤 **JSX text content** - Text like "Loading..." inside JSX now visible in light themes
- 📝 **Quick Pick descriptions** - Labels like "recently used" now darker in light themes

### Changed
- 📈 Total themes increased from **34 to 38**
- 🎨 Light theme syntax colors now 15-25% darker for readability
- 🔲 Border color for light themes now 25% darker (was 10%)

## [1.0.0] - 2025-12-19

### Added
- 🎉 Initial release
- 🎨 **34 professional preset themes** across 7 categories:
  - **TadaTheme Signature**: TadaTheme Dark, TadaTheme Light
  - **Classics**: Monokai Pro, Dracula, GitHub Dark, Nord, One Dark Pro
  - **Neon**: Synthwave, Cyber, Midnight, Aurora, Nebula, Tokyo Night
  - **Soft & Pastel**: Catppuccin Mocha, Rose Gold, Rose Dark, Lavender, Ocean, Glacier
  - **Nature**: Forest, Sunset, Emerald, Copper, Obsidian, Crimson
  - **Minimal**: Monochrome
  - **Special & Retro**: Hacker Dark, Gameboy Dark, Cosmic Dark, Solarized Dark, Palenight Dark, Ubuntu Dark, Discord Dark, Spirit Dark
- ⚡ Quick Pick interface for fast theme selection
- 🎯 Full workbench color customization (UI, menus, notifications)
- 🖌️ Syntax highlighting with procedural token colors
- ↺ Theme reset functionality to restore original VS Code appearance
- 🔧 Procedural theme generation from 5 seed colors
- 💾 100% local operation - no external dependencies
