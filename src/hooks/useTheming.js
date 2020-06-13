// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

/**
 * @typedef {'light'|'dark'} ThemeValues
 */

/**
 * A hooks to customize the app theming.
 * The app theme is customized using CSS variables inside a [data-theme='dark']
 * block, e.g.:
 *
 * ```css
 *  :root {
 *    --shadow-color: blue;
 *  }
 *
 *  [data-theme="dark"] {
 *    --shadow-color: red;
 *  }
 * ```
 *
 * @returns {[ThemeValues, setTheme]} - The current color scheme and a function to
 *                                to update it.
 */
const useTheming = () => {
  const [theme, setTheme] = useState('light');

  /**
   * Checks if the system already supports the
   * prefers-color-scheme media query. If so, returns
   * the query itself.
   * Returns null if the system doesn't support it yet.
   *
   * @returns {(ThemeValues|null)} - The system theme.
   */
  const getSystemTheme = () => {
    // If the browser doesn't support CSS media queries,
    // returns false.
    if (!window.matchMedia) return null;

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  };

  /**
   * Checks if a theme is saved on the local storage.
   * This function is used as a fallback if the system theme
   * isn't available.
   *
   * @returns {(ThemeValues)} - The theme stored in the local storage.
   */
  const getLocalStorageTheme = () => {
    const localStorageTheme = localStorage.getItem('theme');
    if (localStorageTheme) return localStorageTheme;

    // Sets 'light' as the stored theme if no one
    // is already defined.
    localStorage.setItem('theme', 'light');
    return 'light';
  };

  /**
   * Updates the app theme and the document attributes.
   *
   * @param {ThemeValues} newTheme
   */
  const handleThemeChange = (newTheme) => {
    // Sets the document data-theme attribute to the
    // new theme. This attribute changes the CSS variables.
    document.documentElement.setAttribute('data-theme', newTheme);

    setTheme(newTheme);
  };

  useEffect(() => {
    let predefinedTheme = getSystemTheme();

    if (!predefinedTheme) {
      predefinedTheme = getLocalStorageTheme();
    }

    handleThemeChange(predefinedTheme);
  }, []);

  return [theme, handleThemeChange];
};

export default useTheming;
