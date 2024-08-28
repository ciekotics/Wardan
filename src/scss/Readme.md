# SCSS 7-1 Folder Structure

## Overview

This repository utilizes the SCSS 7-1 folder structure to maintain scalable and manageable stylesheets. This structure helps keep styles organized, modular, and easy to update, supporting a clean and efficient workflow for production-level CSS.

## Folder Structure

The SCSS directory is organized as follows:


## Guidelines

### Base Structure

- **Do not change the base files** (e.g., `_variables.scss`, `_mixins.scss`, `_functions.scss`) unless explicitly authorized. These files contain global styles and utility functions used throughout the project and any modifications here could affect the entire stylesheet.

### Adding New Components

- To add a new component, create a new SCSS file in the `components/` directory. For example, if you are adding a new card component, create `_card.scss` inside `components/`.

### Page-Specific Styles

- For styles specific to individual pages, either create new SCSS files or modify existing ones in the `pages/` directory. For example, `_about.scss` for the About page.

### Layout Styles

- For styles related to layout elements like headers, footers, or grids, make changes in the `layout/` directory. Ensure that layout-related modifications are handled here to maintain consistency across the project.

### Theme Styles

- For theme-specific styles, work within the `themes/` directory. You can create new theme files or adjust existing ones as necessary to implement or modify themes.

### Vendor Overrides

- To override styles from third-party libraries, make changes in the `vendors/` directory. Avoid altering the core files of third-party libraries directly.

## How to Contribute

1. **Create a Branch**: Start by creating a new branch for your changes to keep the main codebase clean and organized.
2. **Make Your Changes**: Add or modify SCSS files in the appropriate directories based on the nature of your changes.
3. **Test Your Changes**: Ensure your changes work across different pages and do not negatively impact existing styles.
4. **Submit a Pull Request**: When your changes are ready and tested, submit a pull request for review and integration.

## Important Notes

- Review existing styles before making changes to avoid duplication and ensure consistency.
- Coordinate with the team or project lead before making any modifications to the base files.
- Ensure that new styles are consistent with the project's design guidelines and adhere to best practices.

## Contact

For any questions or clarifications regarding the SCSS structure or style changes, please contact the project lead or the designated team member responsible for styles.

---

Thank you for adhering to these guidelines and contributing to the maintenance and growth of our codebase!
