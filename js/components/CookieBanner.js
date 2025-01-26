export default {
    template: `
    <div id="cookie-banner" class="cookie-banner" v-if="!cookiesAccepted">
        <p>
            This website uses cookies to enhance your experience, including third-party cookies from embedded YouTube videos.
        </p>
        <router-link to="/privacy-policy" class="nav-link">Learn more</router-link>
        <button id="accept-cookies" @click="acceptCookies">Accept Cookies</button>
    </div>
    `,
    data() {
        return {
            cookiesAccepted: !!localStorage.getItem("cookiesAccepted"),
        };
    },
    methods: {
        acceptCookies() {
            localStorage.setItem("cookiesAccepted", "true");
            this.cookiesAccepted = true;
        }
    }
};
