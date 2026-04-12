# @well-played.gg/module-ui

A lightweight, zero-dependency React component library for building WellPlayed platform modules. All components are styled via CSS custom properties (`--wp-*`), making them automatically themeable by the host platform without requiring any CSS framework.

## Installation

```bash
# npm
npm install @well-played.gg/module-ui

# yarn
yarn add @well-played.gg/module-ui
```

### Peer Dependencies

| Package     | Version  |
|-------------|----------|
| `react`     | `^18.0.0` |
| `react-dom` | `^18.0.0` |

## What's Included

| Component | Description |
|-----------|-------------|
| `Button` | Themed button with variant and size options |
| `Card`, `CardHeader`, `CardContent` | Container with optional header/content sections |
| `Badge` | Inline status/label indicator |
| `Avatar`, `AvatarGroup` | User avatar with image or fallback initials; group with overflow count |
| `Input` | Text input with optional label and error state |
| `Select` | Native dropdown with label support |
| `Modal`, `ModalHeader`, `ModalBody`, `ModalFooter` | Portal-based modal dialog with overlay |
| `Table`, `TableHead`, `TableBody`, `TableRow`, `TableCell` | Styled HTML table primitives |
| `Alert` | Contextual alert banner (info/success/warning/error) |
| `Skeleton` | Loading placeholder with pulse animation |
| `Tooltip` | Hover tooltip with configurable position |

## Usage Examples

### Button

```tsx
import { Button } from '@well-played.gg/module-ui';

<Button variant="primary" size="md" onClick={handleClick}>
  Submit
</Button>

<Button variant="outline" size="sm" disabled>
  Cancel
</Button>
```

### Card

```tsx
import { Card, CardHeader, CardContent } from '@well-played.gg/module-ui';

<Card>
  <CardHeader>Team Overview</CardHeader>
  <CardContent>
    <p>Your team has 5 active members.</p>
  </CardContent>
</Card>
```

### Input with validation

```tsx
import { Input } from '@well-played.gg/module-ui';

<Input
  label="Email"
  type="email"
  placeholder="you@example.com"
  error={errors.email}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

### Modal

```tsx
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@well-played.gg/module-ui';

<Modal open={isOpen} onClose={() => setIsOpen(false)}>
  <ModalHeader>Confirm Action</ModalHeader>
  <ModalBody>Are you sure you want to proceed?</ModalBody>
  <ModalFooter>
    <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
    <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
  </ModalFooter>
</Modal>
```

### Avatar and AvatarGroup

```tsx
import { Avatar, AvatarGroup } from '@well-played.gg/module-ui';

<Avatar src="/avatar.jpg" alt="Jane" size="lg" />
<Avatar fallback="JD" size="md" />

<AvatarGroup max={3}>
  <Avatar src="/a1.jpg" alt="User 1" />
  <Avatar src="/a2.jpg" alt="User 2" />
  <Avatar src="/a3.jpg" alt="User 3" />
  <Avatar src="/a4.jpg" alt="User 4" />
</AvatarGroup>
```

### Table

```tsx
import { Table, TableHead, TableBody, TableRow, TableCell } from '@well-played.gg/module-ui';

<Table>
  <TableHead>
    <TableRow>
      <TableCell header>Name</TableCell>
      <TableCell header>Score</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Alice</TableCell>
      <TableCell>1500</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Alert, Badge, Tooltip, Skeleton

```tsx
import { Alert, Badge, Tooltip, Skeleton } from '@well-played.gg/module-ui';

<Alert variant="warning">Match starts in 5 minutes.</Alert>

<Badge variant="success">Active</Badge>

<Tooltip content="View profile" position="top">
  <span>Hover me</span>
</Tooltip>

<Skeleton width="100%" height={40} variant="rectangular" />
```

## How It Fits in the WellPlayed Module Ecosystem

The WellPlayed platform supports **marketplace modules** -- third-party extensions that render inside the platform UI. The SDK packages work together:

| Package | Role |
|---------|------|
| `@well-played.gg/module-sdk` | Runtime SDK -- context, GraphQL hooks, event bus, extension provider |
| **`@well-played.gg/module-ui`** | **UI components -- this package. Themed primitives for module UIs** |
| `@well-played.gg/component-sdk` | SDK for building standalone custom components |
| `create-wellplayed-module` | CLI scaffolding tool for new modules |

A typical module imports `@well-played.gg/module-sdk` for data and lifecycle, then uses `@well-played.gg/module-ui` components for its interface. Because every component reads `--wp-*` CSS custom properties, modules automatically adopt the host organization's theme (colors, radii, fonts, shadows) without any extra configuration.

## Theming (CSS Custom Properties)

All components reference CSS custom properties with sensible fallbacks. Override them in the host page or a wrapper element to theme every component at once.

| Property | Used by | Default |
|----------|---------|---------|
| `--wp-color-primary` | Button, Avatar | `#6366f1` |
| `--wp-color-primary-contrast` | Button, Avatar | `#ffffff` |
| `--wp-color-secondary` | Button | `#94a3b8` |
| `--wp-color-secondary-contrast` | Button | `#ffffff` |
| `--wp-color-text` | Most components | `#1e293b` |
| `--wp-color-border` | Input, Select, Card, Modal, Table | `#e2e8f0` |
| `--wp-color-surface` | Card, Modal | `#ffffff` |
| `--wp-color-surface-variant` | Badge, TableCell (header) | `#f1f5f9` / `#f8fafc` |
| `--wp-color-bg` | Input, Select | `#ffffff` |
| `--wp-color-skeleton` | Skeleton | `#e2e8f0` |
| `--wp-color-tooltip-bg` | Tooltip | `#1e293b` |
| `--wp-color-tooltip-text` | Tooltip | `#ffffff` |
| `--wp-color-info` / `-bg` / `-text` | Alert, Badge | blue tones |
| `--wp-color-success` / `-bg` / `-text` | Alert, Badge | green tones |
| `--wp-color-warning` / `-bg` / `-text` | Alert, Badge | amber tones |
| `--wp-color-error` / `-bg` / `-text` | Alert, Badge, Input | red tones |
| `--wp-radius` | Button, Card, Input, Modal, Select, Skeleton | `6px` / `8px` |
| `--wp-radius-sm` | Badge, Skeleton, Tooltip | `4px` |
| `--wp-shadow` | Card | `0 1px 3px rgba(0,0,0,0.1)` |
| `--wp-shadow-lg` | Modal | `0 10px 25px rgba(0,0,0,0.2)` |
| `--wp-font-family` | Most components | `inherit` |

## API Reference

### Button

Extends `React.ButtonHTMLAttributes<HTMLButtonElement>`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size preset |
| `children` | `ReactNode` | -- | Button content |

### Card / CardHeader / CardContent

Each extends `React.HTMLAttributes<HTMLDivElement>`.

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Content |

### Badge

Extends `React.HTMLAttributes<HTMLSpanElement>`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'success' \| 'warning' \| 'error'` | `'default'` | Color variant |
| `children` | `ReactNode` | -- | Badge label |

### Avatar

Extends `React.HTMLAttributes<HTMLDivElement>`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | -- | Image URL |
| `alt` | `string` | `'Avatar'` | Alt text; first character used as fallback |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Diameter (32 / 40 / 56 px) |
| `fallback` | `string` | -- | Custom fallback text (overrides `alt` initial) |

### AvatarGroup

Extends `React.HTMLAttributes<HTMLDivElement>`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | -- | `Avatar` elements |
| `max` | `number` | `3` | Max visible avatars; overflow shown as `+N` |

### Input

Extends `React.InputHTMLAttributes<HTMLInputElement>`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | -- | Label text above the input |
| `error` | `string` | -- | Error message; also turns border red |

### Select

Extends `React.SelectHTMLAttributes<HTMLSelectElement>`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | -- | Label text above the select |
| `options` | `{ value: string; label: string }[]` | -- | Dropdown options (required) |

### Modal

Extends `React.HTMLAttributes<HTMLDivElement>`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | -- | Controls visibility |
| `onClose` | `() => void` | -- | Called on overlay click |
| `children` | `ReactNode` | -- | Modal content |

Renders via `createPortal` into `document.body`. Locks body scroll while open.

### ModalHeader / ModalBody / ModalFooter

Each extends `React.HTMLAttributes<HTMLDivElement>`. No additional props.

### Table

Extends `React.TableHTMLAttributes<HTMLTableElement>`.

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Table sections |

### TableHead / TableBody

Extend `React.HTMLAttributes<HTMLTableSectionElement>`. No additional props.

### TableRow

Extends `React.HTMLAttributes<HTMLTableRowElement>`. No additional props.

### TableCell

Extends `React.TdHTMLAttributes<HTMLTableCellElement>`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `header` | `boolean` | `false` | Renders `<th>` instead of `<td>` with bold styling |

### Alert

Extends `React.HTMLAttributes<HTMLDivElement>`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Alert color scheme |
| `children` | `ReactNode` | -- | Alert content |

Renders with `role="alert"` for accessibility.

### Skeleton

Extends `React.HTMLAttributes<HTMLDivElement>`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `string \| number` | `'100%'` | Width (numbers treated as px) |
| `height` | `string \| number` | `'20px'` | Height (numbers treated as px) |
| `variant` | `'text' \| 'circular' \| 'rectangular'` | `'text'` | Shape preset |

Injects a `@keyframes skeleton-pulse` stylesheet on first render.

### Tooltip

Does **not** extend HTML attributes (wraps its child element).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string` | -- | Tooltip text |
| `children` | `ReactElement` | -- | Trigger element |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Tooltip placement |

## License

See the repository root for license information.
