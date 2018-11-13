import Vue from "vue";
const mixin = {
  install(Vue) {
    Vue.mixin({
      methods: {
        localizedRoute: (route, locale) => {
          let localePrefix = "";
          if (locale !== "en") {
            localePrefix = "/" + locale;
          }
          return localePrefix + route;
        }
      }
    });
  }
};

Vue.use(mixin);
