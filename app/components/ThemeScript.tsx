// Server component: emits a tiny blocking script that sets the theme on
// <html> before first paint, so there's no light/dark flash on load.
// Dark is the default (no attribute); only `light` is written explicitly.
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}if(t==='light'){document.documentElement.dataset.theme='light';}else{document.documentElement.removeAttribute('data-theme');}}catch(e){}})();`;

export const ThemeScript = () => (
  <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
);
