'use client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const languages = ['en', 'ko'];

const resources: Record<string, Record<string, any>> = {};
languages.forEach(language => {
  resources[language] = {
    common: require(`../lang/${language}/common.json`),
    navigation: require(`../lang/${language}/navigation.json`),
    assess: require(`../lang/${language}/assess.json`),
    hire: require(`../lang/${language}/hire.json`),
    profile: require(`../lang/${language}/profile.json`),
    auth: require(`../lang/${language}/auth.json`),
    talent_search: require(`../lang/${language}/talent_search.json`),
    sequence: require(`../lang/${language}/sequence.json`),
    meetings: require(`../lang/${language}/meetings.json`),
    notification: require(`../lang/${language}/notification.json`),
    wallet: require(`../lang/${language}/wallet.json`),
    integration: require(`../lang/${language}/integration.json`),
    pricing_plan: require(`../lang/${language}/pricing_plan.json`),
  };
});
let localLanguage = 'en';

try {
  localLanguage = localStorage.getItem('langMode') ?? 'en';
} catch (e) {
  localLanguage = 'en';
}
i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  resources,
  interpolation: {
    escapeValue: false,
  },

  // force the language to be en. remove this to enable the language translations.: Rakesh
  lng: 'en',
});

export default i18n;
