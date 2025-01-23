import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import NotFound from './components/NotFound.js';


// Define the routes
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },

    // Catch-all route for 404
    { path: '/:pathMatch(.*)*', component: NotFound },
];

// Create the router instance
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(), // Use hash-based routing for simplicity
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            // If there's a saved scroll position (e.g., back/forward button), use it
            return savedPosition;
        } else {
            // Scroll to the top of the page by default
            return { top: 0, left: 0 };
        }
    },
});

// Create the Vue app
const app = Vue.createApp({});
app.use(router);
app.mount('#app');
