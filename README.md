
# Dark/Light Theme Switcher

This project is a simple **Dark/Light Theme Switcher** built using **pure HTML, CSS, and JavaScript**. The application uses the `prefers-color-scheme` media query to set the default theme based on the user's system preferences, but also allows users to manually switch between **Light**, **Dark**, and **System** themes. 

## Features

- **Auto Theme Detection**: The application automatically detects the user's preferred color scheme using the `prefers-color-scheme` media query. If the user has set their system to dark mode, the site will default to dark mode, and vice versa.
  
- **Manual Theme Selection**: Users can override the system theme by selecting one of the three available options:
  - **Light Mode**
  - **Dark Mode**
  - **System Mode**: Resets the theme to follow the user's system settings.

- **Font Awesome Icons**: The theme switcher buttons are enhanced with icons from **Font Awesome**, which are included via the **Font Awesome CDN**.

## How It Works

- The current theme is dynamically applied using JavaScript. When a user selects a theme, the choice is stored in `localStorage` so that their preference persists across sessions.
- The `System` option allows the user to revert back to their system's theme preference if they have previously selected Light or Dark mode.

## Technologies Used

- **HTML**: For structuring the page.
- **CSS**: For styling and theme definitions.
- **JavaScript**: For switching between themes and handling user interactions.
- **Font Awesome**: Icons for theme switching buttons (loaded via CDN).