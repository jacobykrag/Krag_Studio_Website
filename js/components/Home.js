export default {
template: `
<main>
    <section class="Home">
        <video autoplay muted loop playsinline class="background-video">
            <source src="assets/videos/TheForestCompressed.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="hero-section">
            <h1 class="textanimation">Where Ideas Take Shape</h1>
            <div class="theme-divider fadeIn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p class="fadeIn">Great projects are built on <strong>collaboration</strong>. My goal is to turn
                <strong>your
                    vision</strong> into reality with 3D models
                that are crafted for <strong>detail, efficiency, and style.</strong>
            </p>
        </div>
    </section>
    <section class="next-section">
        <div class="intro">
            <div>
                <h3>The Vision Behind <span class="highlight_1">Krag Studio</span></h3>
                <p>
                    At <strong>Krag Studio</strong>, the goal is simple: to create <strong>high-quality 3D assets</strong> 
                    that blend seamlessly into immersive worlds. Every model is designed with 
                    <strong>atmosphere, storytelling, and usability</strong> in mind—allowing creators to focus on their vision 
                    without technical limitations.
                </p>
                <p>
                    Rather than mass-producing assets, Krag Studio follows a 
                    <strong>thoughtful and artistic approach</strong>, ensuring that each model feels 
                    <strong>crafted with purpose</strong>. The focus is on <strong>quality over quantity</strong>, 
                    delivering assets that enhance the <strong>mood, immersion, and storytelling</strong> of 
                    games, films, and animations.
                </p>
                <p>
                    The vision is to build a <strong>library of meaningful, versatile, and optimized assets</strong>—made 
                    for creators who value <strong>detail, atmosphere, and timeless design</strong>.
                </p>
            </div>
        </div>

        <div class="floating-divider"></div>
    </section>
    <section class="assets">
        <div class="products">
            <div>
                <h2>Products</h2>
                <div class="theme-divider fadeIn">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="assetpack">
                    <span><img src="assets/svgs/package.svg"></span><router-link to="/forgottenroom"><button>The Forgotten Room</button></router-link>
                </div>
                <div class="assetpack2">
                    <span><img src="assets/svgs/package.svg"></span><p>More coming soon ◎</p>
                </div>
            </div>
            <img class="productImage" src="assets/images/MechSculpture.webp" width="1000px" height="1000px" alt="Mecha by Krag Studio.">
        </div>
        <div class="floating-divider"></div>
    </section>
</main>

`,
};