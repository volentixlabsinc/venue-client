import Vue from "vue";
import Buefy from "buefy";

// TODO Import the components individually but also set the defaultIconPack

// Vue.component(Buefy.Modal.name, Buefy.Modal);
// Vue.component(Buefy.Field.name, Buefy.Field);
// Vue.component(Buefy.Input.name, Buefy.Input);
// Vue.component(Buefy.Checkbox.name, Buefy.Checkbox);
// Vue.component(Buefy.Table.name, Buefy.Table);
// Vue.component(Buefy.Table.name, Buefy.Table);
// Vue.component(Buefy.TableColumn.name, Buefy.TableColumn);

Vue.use(Buefy, {
  defaultIconPack: "fas"
});
