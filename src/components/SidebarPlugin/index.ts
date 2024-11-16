import Sidebar from './SideBar.vue';
import SidebarLink from './SidebarLink.vue';
import Vue, { VueConstructor } from 'vue';

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [],
  displaySidebar(value: boolean) {
    this.showSidebar = value;
  },
};

const SidebarPlugin = {
  install(VueInstance: VueConstructor<Vue>) {
    const app = new VueInstance({
      data: {
        sidebarStore: SidebarStore,
      },
    });

    VueInstance.prototype.$sidebar = app.sidebarStore;
    VueInstance.component('side-bar', Sidebar);
    VueInstance.component('sidebar-link', SidebarLink);
  },
};

export default SidebarPlugin;
