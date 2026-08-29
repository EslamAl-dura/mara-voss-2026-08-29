import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Locale = 'en' | 'ar';
const ThemeContext = createContext<{theme: Theme; toggle: () => void}>({ theme: 'dark', toggle: () => undefined });
const I18nContext = createContext<{locale: Locale; setLocale: (locale: Locale) => void}>({ locale: 'en', setLocale: () => undefined });
export function ThemeProvider({ children }: { children: ReactNode }) { const [theme, setTheme] = useState<Theme>('dark'); useEffect(() => { document.documentElement.classList.toggle('dark', theme === 'dark'); }, [theme]); return <ThemeContext.Provider value={{ theme, toggle: () => setTheme(theme === 'dark' ? 'light' : 'dark') }}>{children}</ThemeContext.Provider>; }
export function I18nProvider({ children }: { children: ReactNode }) { const [locale, setLocale] = useState<Locale>('en'); useEffect(() => { document.documentElement.lang = locale; document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'; }, [locale]); return <I18nContext.Provider value={{ locale, setLocale }}>{children}</I18nContext.Provider>; }
export const useTheme = () => useContext(ThemeContext);
export const useI18n = () => useContext(I18nContext);