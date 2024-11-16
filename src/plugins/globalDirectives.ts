import { directive as vClickOutside } from 'vue-clickaway';
import Vue, { VueConstructor } from 'vue';

/**
 * You can register global directives here and use them as a plugin in your main Vue instance
 */

const GlobalDirectives = {
  install(VueInstance: VueConstructor<Vue>) {
    VueInstance.directive('click-outside', vClickOutside);
  },
};

export default GlobalDirectives;
