export const fallbackLng = 'en';
export const languages = ['en']; // Place 'en' first as the primary default
export const defaultNS = 'common';
export const cookieName = 'i18next';

// ----------------------------------------------------------------------

export function i18nOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    lng,
    fallbackLng,
    ns,
    defaultNS,
    fallbackNS: defaultNS,
    supportedLngs: languages,
  };
}

// ----------------------------------------------------------------------

export const changeLangMessages = {
  id: {
    success: 'Bahasa telah diubah!',
    error: 'Kesalahan saat mengubah bahasa!',
    loading: 'Memuat...',
  },
  en: {
    success: 'Language has been changed!',
    error: 'Error changing language!',
    loading: 'Loading...',
  },
};
