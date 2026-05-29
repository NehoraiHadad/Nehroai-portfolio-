'use client';

import { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';
const EVENT = 'nehorai:themechange';

// The theme lives on <html data-theme> (set pre-hydration by ThemeScript).
// We treat the DOM as the source of truth and subscribe to our own event,
// so there is no setState-in-effect and no hydration mismatch warning.
const subscribe = (onChange: () => void) => {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
};
const getSnapshot = (): Theme =>
  document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
const getServerSnapshot = (): Theme => 'dark';

export const ThemeToggle = ({ className = '' }: { className?: string }) => {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isLight = theme === 'light';

  const toggle = () => {
    const next: Theme = isLight ? 'dark' : 'light';
    if (next === 'light') {
      document.documentElement.dataset.theme = 'light';
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — runtime toggle still works for the session */
    }
    window.dispatchEvent(new Event(EVENT));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      title={isLight ? 'Dark' : 'Light'}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-[var(--r-1)] border border-line text-fg-1 transition-colors hover:bg-surface-raised hover:text-fg-0 ${className}`}
    >
      {isLight ? <Moon className="h-4 w-4" strokeWidth={1.5} /> : <Sun className="h-4 w-4" strokeWidth={1.5} />}
    </button>
  );
};
