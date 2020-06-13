import { useState, useEffect, useCallback } from 'react';

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
 * You can change the theme by calling the setTheme function with
 * one of the possible values - 'light' or 'dark'.
 *
 * @returns {[ThemeValues, handleThemeChange]} - The current color scheme and a function to
 *                                               to update it.
 */
const useTheming = () => {
  const [theme, setTheme] = useState('light');

  /**
   * Checks if the system already supports the
   * prefers-color-scheme media query. If so, returns
   * the query itself.
   * Returns 'light' otherwise.
   *
   * @returns {(ThemeValues)} - The system theme.
   */
  const getSystemTheme = () => {
    // If the browser doesn't support CSS media queries,
    // returns 'light'.
    if (!window.matchMedia) return 'light';

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  };

  /**
   * Checks if a theme is saved on the local storage.
   * If no theme is set, fallbacks to the system theme.
   *
   * @returns {(ThemeValues)}
   */
  const getLocalStorageTheme = useCallback(() => {
    const localStorageTheme = localStorage.getItem('theme');
    if (localStorageTheme) return localStorageTheme;

    // If no theme is stored, use the system one.
    return getSystemTheme();
  }, []);

  /**
   * @param {ThemeValues} newTheme
   */
  const setLocalStorageTheme = (newTheme) => {
    localStorage.setItem('theme', newTheme);
  };

  /**
   * Updates the app theme and the document attributes.
   *
   * @param {ThemeValues} newTheme
   */
  const handleThemeChange = useCallback((newTheme) => {
    // Sets the document data-theme attribute.
    // This attribute changes the CSS variables.
    document.documentElement.setAttribute('data-theme', newTheme);
    setLocalStorageTheme(newTheme);

    setTheme(newTheme);
  }, []);

  useEffect(() => {
    const predefinedTheme = getLocalStorageTheme();

    handleThemeChange(predefinedTheme);
  }, [getLocalStorageTheme, handleThemeChange]);

  return [theme, handleThemeChange];
};

export default useTheming;
