
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import '../assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css';
import '../assets/css/preloader.min.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/icons.min.css';
import '../assets/css/app.min.css';
import '../assets/js/app.js';
import '../assets/libs/jquery/jquery.min.js';
import '../assets/libs/bootstrap/js/bootstrap.bundle.min.js';
import '../assets/libs/metismenu/metisMenu.min.js';
import '../assets/libs/simplebar/simplebar.min.js';
import '../assets/libs/node-waves/waves.min.js';
// import '../assets/libs/feather-icons/feather.min.js';
import '../assets/libs/pace-js/pace.min.js';
import '../assets/libs/apexcharts/apexcharts.min.js';
import '../assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js';
import '../assets/libs/admin-resources/jquery.vectormap/maps/jquery-jvectormap-world-mill-en.js'; 
import '../assets/js/pages/dashboard.init.js';
import '../assets/js/app.js';

createInertiaApp({
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    return createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
});

