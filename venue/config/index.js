const en = require("../lang/en-CA.js");

const I18N = {
  locales: [
    {
      code: "en",
      iso: "en-CA",
      name: "English"
    }
  ],
  detectBrowserLanguage: {
    useCookie: false
  },
  defaultLocale: "en",
  vueI18n: {
    fallbackLocale: "en",
    messages: { en }
  }
};

module.exports = {
  I18N
};
