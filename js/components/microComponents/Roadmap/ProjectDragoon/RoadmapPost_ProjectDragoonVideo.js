export default {
template: `

<figure>
    <h3><span class="timelineAttachment"></span><span class="image-title">Concept</span> <time
            datetime="2025-14-1"><span class="posted">Posted:</span> January 14,
            2025</time> :</h3>
    <figcaption><strong>Project Dragoon:</strong> Created in <strong>Unreal Engine 5</strong>, this
        desolate desert scene guards a solemn mystery. A <strong>lone sword rests in stone</strong>,
        surrounded by <strong>ancient seals</strong> that must never be broken. As a
        <strong>tattered flag</strong> flutters in the arid winds, whispers of a <strong>forbidden
            past</strong> echo through the sands. <strong>Final assets may
            differ.</strong>
    </figcaption>
    <div class="youtube-container">
        <div class="youtube-thumbnail" onclick="loadVideo()">
            <img src="/assets/images/Scene.webp" width="3840" height="2160" alt="Video Thumbnail" loading="lazy">
            <button class="play-button">▶</button>
        </div>
        <div class="youtube-iframe" id="youtube-iframe" style="display: none;">
            <iframe src="" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
        </div>
    </div>
</figure>

`,
};