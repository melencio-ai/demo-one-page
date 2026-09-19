# Demo One-Page Projects

This repository is organized as a multi-project workspace for static website rebuilds and demos.

## Structure

```text
.
├── projects/
│   └── ordio/
│       ├── index.html
│       ├── styles.css
│       └── script.js
├── Dockerfile
├── nginx.conf.template
└── README.md
```

## Project convention

Every new website gets its own folder under `projects/`:

```text
projects/<project-slug>/
```

Example:

```text
projects/
├── ordio/
├── next-client/
└── another-brand/
```

Keep project-specific HTML, CSS, JavaScript, images, and other assets inside that project's folder.

Shared deployment or server configuration stays at the repository root.

## Current deployment

The Ordio source now lives in `projects/ordio/`.

The existing deployed path remains:

```text
/one-page-demo/
```

The Dockerfile copies the Ordio project from its subfolder into that existing public path so the current demo URL does not change.
