import Notify from 'vue-notifyjs';
import SideBar from '@/components/SidebarPlugin';
import GlobalComponents from './globalComponents';
import GlobalDirectives from './globalDirectives';
import 'es6-promise/auto';

// css assets
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/sass/paper-dashboard.scss';
import '@/assets/css/themify-icons.css';
import Vue, { VueConstructor } from 'vue';

export default {
  install(VueInstance: VueConstructor<Vue>) {
    VueInstance.use(GlobalComponents);
    VueInstance.use(GlobalDirectives);
    VueInstance.use(SideBar);
    VueInstance.use(Notify);
  },
};
