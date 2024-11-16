import { FormGroupInput, Card, DropDown, Button } from '../components/index';
import Vue, { VueConstructor } from 'vue';
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(VueInstance: VueConstructor<Vue>) {
    VueInstance.component('fg-input', FormGroupInput);
    VueInstance.component('drop-down', DropDown);
    VueInstance.component('card', Card);
    VueInstance.component('p-button', Button);
  },
};

export default GlobalComponents;
