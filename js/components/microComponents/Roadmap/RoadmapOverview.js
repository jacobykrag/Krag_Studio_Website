import Concept from './TheForgottenRoom/RoadmapPost_Concept.js';
import ScenePreview from './TheForgottenRoom/RoadmapPost_ScenePreview.js';
import Models from './TheForgottenRoom/RoadmapPost_Models.js';
import ReleaseDate from './TheForgottenRoom/RoadmapPost_ReleaseDate.js';
import AssetPackProgressUpdate from './TheForgottenRoom/RoadmapPost_AssetPackProgressUpdate.js';
import ProjectDragoonVideo from './ProjectDragoon/RoadmapPost_ProjectDragoonVideo.js';

export default {

components: { Concept, ScenePreview, Models, ReleaseDate, AssetPackProgressUpdate, ProjectDragoonVideo},
template: `

<div class="next">
    <h2>Overview and roadmap:</h2>
    <h3><span class="product">N<sup>O</sup>1</span> The Forgotten Room <span class="highlight_2">(Work in
            progress)</span></h3>
    <div class="roadmap">
        <aside class="timeline"></aside>
        <aside class="roadmap-content">
            <Concept />
            <ScenePreview />
            <Models />
            <ReleaseDate />
            <AssetPackProgressUpdate />
        </aside>
    </div>
    <div class="divider">
        <div class="dashed-line effect1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <h3><span class="product">N<sup>O</sup>2</span> Project Dragoon <span class="highlight_2">(Work in
            progress)</span></h3>
    <div class="roadmap">
        <aside class="timeline"></aside>
        <aside class="roadmap-content">
            <ProjectDragoonVideo />
        </aside>
    </div>
</div>

`,
};