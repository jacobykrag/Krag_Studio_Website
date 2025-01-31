import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import NotFound from './components/NotFound.js';
import PrivacyPolicy from './components/privacy_policy.js';
import CookieBanner from './components/CookieBanner.js'; // Import the CookieBanner component

// Define the routes
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/privacy-policy', component: PrivacyPolicy },

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

// Register components
app.component('cookie-banner', CookieBanner);

// Use the router
app.use(router);

// Mount the app
app.mount('#app');
