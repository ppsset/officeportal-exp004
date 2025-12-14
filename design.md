# WAG Portal - Design Style Guide

## Design Philosophy

### Visual Language
- **Professional Minimalism**: Clean, uncluttered interface that prioritizes functionality while maintaining visual appeal
- **Enterprise-Grade Aesthetics**: Sophisticated color palette and typography that conveys trust and reliability
- **Intuitive Navigation**: Clear visual hierarchy with consistent patterns throughout all modules
- **Data-Driven Design**: Visual elements that enhance information comprehension and decision-making

### Color Palette
- **Primary**: Deep Slate Blue (#334155) - Professional, trustworthy, calming
- **Secondary**: Warm Gray (#64748B) - Neutral, sophisticated, readable
- **Accent**: Sage Green (#10B981) - Success states, positive actions, growth
- **Warning**: Amber (#F59E0B) - Attention, pending states, caution
- **Error**: Coral (#EF4444) - Urgent issues, critical alerts, rejection
- **Background**: Off-White (#FAFAFA) - Clean, spacious, modern
- **Surface**: Pure White (#FFFFFF) - Cards, modals, elevated elements

### Typography
- **Display Font**: Inter (700-900 weight) - Modern, geometric, highly legible for headings
- **Body Font**: Inter (400-600 weight) - Excellent readability, professional appearance
- **Monospace**: JetBrains Mono - Code, IDs, technical data
- **Font Sizes**: 
  - H1: 2.5rem (40px) - Page titles
  - H2: 2rem (32px) - Section headers
  - H3: 1.5rem (24px) - Card titles
  - Body: 1rem (16px) - Standard text
  - Small: 0.875rem (14px) - Labels, metadata

## Visual Effects & Styling

### Used Libraries
- **Anime.js**: Smooth micro-interactions and state transitions
- **ECharts.js**: Professional data visualization with consistent color schemes
- **Typed.js**: Dynamic text effects for announcements and notifications
- **Splide.js**: Smooth carousels for image galleries and announcements
- **p5.js**: Subtle background animations and visual flourishes
- **Matter.js**: Physics-based interactions for engaging UI elements
- **Pixi.js**: Advanced visual effects for dashboard widgets

### Animation & Motion
- **Micro-interactions**: Subtle hover effects on buttons and cards (2-4px elevation)
- **State Transitions**: Smooth color and opacity changes (200-300ms duration)
- **Loading States**: Elegant skeleton screens and progress indicators
- **Scroll Animations**: Gentle reveal effects for content sections
- **Data Visualization**: Animated chart updates and real-time data feeds

### Header & Navigation Effects
- **Glass Morphism**: Subtle backdrop blur for floating navigation
- **Gradient Overlays**: Soft gradients on hero sections and cards
- **Shadow Depth**: Layered shadows for visual hierarchy
- **Color Cycling**: Dynamic accent colors for active states
- **Smooth Transitions**: Seamless navigation between modules

### Interactive Elements
- **Button States**: 
  - Default: Clean background with subtle shadow
  - Hover: Elevated shadow with slight scale (1.02x)
  - Active: Pressed state with inner shadow
  - Disabled: Reduced opacity with muted colors
- **Form Fields**:
  - Focus: Highlighted border with accent color
  - Error: Red border with error message
  - Success: Green border with checkmark icon
- **Cards**: 
  - Hover: Gentle lift with expanded shadow
  - Selected: Accent border with background tint

### Data Visualization Style
- **Chart Colors**: Consistent with brand palette, maximum 3 colors per chart
- **Grid Lines**: Subtle gray lines for reference
- **Data Points**: Clear markers with hover tooltips
- **Animations**: Smooth data updates and transitions
- **Accessibility**: High contrast ratios and screen reader support

### Layout & Spacing
- **Grid System**: 12-column responsive grid with consistent gutters
- **Spacing Scale**: 4px base unit (4, 8, 16, 24, 32, 48, 64px)
- **Container Max Width**: 1200px for optimal readability
- **Breakpoints**: 
  - Mobile: 320px+
  - Tablet: 768px+
  - Desktop: 1024px+
  - Large: 1440px+

### Component Styling
- **Cards**: Rounded corners (8px), subtle shadows, clean borders
- **Buttons**: Consistent padding, clear hierarchy, accessible contrast
- **Forms**: Grouped fields, clear labels, helpful validation
- **Tables**: Alternating row colors, sortable headers, responsive design
- **Modals**: Centered overlay, backdrop blur, smooth animations

### Iconography
- **Style**: Outline icons with 2px stroke weight
- **Size**: 16px, 20px, 24px standard sizes
- **Color**: Inherits text color or uses accent colors for actions
- **Library**: Heroicons for consistency and quality

### Accessibility Features
- **Color Contrast**: Minimum 4.5:1 ratio for all text
- **Focus Indicators**: Clear visual focus for keyboard navigation
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Motion Preferences**: Respect user's reduced motion settings
- **Font Scaling**: Support for browser zoom up to 200%

### Mobile Optimization
- **Touch Targets**: Minimum 44px for all interactive elements
- **Gesture Support**: Swipe navigation where appropriate
- **Responsive Typography**: Fluid font sizes that scale with viewport
- **Simplified Navigation**: Collapsible menu with clear hierarchy
- **Optimized Forms**: Large input fields and clear labels

## Brand Personality
- **Professional**: Clean, reliable, enterprise-ready
- **Innovative**: Modern tools with cutting-edge features
- **Collaborative**: Designed for team productivity
- **Efficient**: Streamlined workflows and intuitive interfaces
- **Trustworthy**: Secure, stable, and dependable