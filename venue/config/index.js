const en = require("../lang/en-CA.js");
const tr = require("../lang/tr-TR.js");

const I18N = {
  locales: [
    {
      code: "en",
      iso: "en-CA",
      name: "English"
    },
    {
      code: "tr",
      iso: "tr-TR",
      name: "Türk"
    }
  ],
  detectBrowserLanguage: {
    useCookie: false
  },
  defaultLocale: "en",
  vueI18n: {
    fallbackLocale: "en",
    messages: { en, tr }
  }
};

module.exports = {
  I18N
};
