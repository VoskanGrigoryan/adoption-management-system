# @repo/ui-components

Shared UI components (wrappers around Mantine primitives) for apps in this monorepo.

Usage:

1. Build the package: `pnpm -w -F @repo/ui-components build`
2. In an app, add dependency: `pnpm -w -F frontend-vite add @repo/ui-components`
3. Import and use:

```tsx
import { Button } from "@repo/ui-components";

<Button>Shared Button</Button>
```

Notes:
- This package uses peerDependencies for React and Mantine; apps must provide them.
- Keep API minimal and generic; theme and global CSS should be provided by each app's MantineProvider.
