// Data for the 8 Core Drives
const CORE_DRIVES_DATA = {
    1: {
        title: "Epic Meaning & Calling",
        type: "Core 1 / 8",
        brain: "Left brain",
        hat: "Dark hat",
        colorClass: "color-group-1",
        summary: "Motivation from feeling part of something bigger or believing you are chosen for a special purpose.",
        details: [
            "Humans have always searched for purpose—through spirituality, religion, or existential reflection. We all want to feel meaningful or chosen for something greater.",
            "In gamification, the simplest way to use this drive is by creating a story or narrative with a clear goal, helping users feel that their actions matter. Meaning can also come from highlighting how a user’s journey sets them apart from others—for example, the friendly rivalry between iPhone and Android users."
        ],
        contentImageUrl: "img/oct-svg-handcloud.svg", // ADDED: Specific image for content
        examples: [
            { name: "Duolingo – Save Your Streak + global learning mission", url: "https://www.duolingo.com/", desc: "Users feel part of a worldwide movement to make education free for everyone." },
            { name: "Wikipedia – Volunteer Contribution", url: "https://www.wikipedia.org/", desc: "Editors contribute for a sense of purpose, not money—helping build the world’s knowledge base." },
            { name: "Foldit (University of Washington)", url: "https://fold.it/", desc: "Players solve protein-folding puzzles that support real scientific research." },
        ]
    },
    2: {
        title: "Development & Accomplishment",
        type: "Core 2 / 8",
        brain: "Left brain",
        hat: "White hat",
        colorClass: "color-group-2",
        summary: "The internal drive for progress, mastery, and overcoming challenges.",
        details: [
            "This drive includes badges, achievements, skill trees, and milestones. It's the feeling of getting better at something or finishing a challenge.",
            "It's crucial that achievements feel earned and not just handed out. If challenges are too easy or too hard, motivation is lost."
        ],
        contentImageUrl: "img/oct-svg-treasure.svg", // ADDED: Specific image for content
        examples: [
            { name: "LinkedIn progress bars", url: "https://www.linkedin.com/", desc: "Shows you how close your profile is to being 'All-Star'." },
            { name: "Codecademy courses", url: "https://www.codecademy.com/", desc: "Structured learning paths with immediate feedback and completion certificates." },
            { name: "Fitness trackers (e.g., Apple Watch)", url: "#", desc: "Closing activity rings provides clear, daily goals for accomplishment." },
        ]
    },
    3: {
        title: "Empowerment of Creativity & Feedback",
        type: "Core 3 / 8",
        brain: "Left brain",
        hat: "White hat",
        colorClass: "color-group-3",
        summary: "Users are engaged when they are involved in a creative process, and can constantly refine that process.",
        details: [
            "This involves providing tools for user creativity, like customization options, user-generated content, or sandbox environments.",
            "The key is the feedback loop: the user creates, sees the result, and modifies it. This creates a powerful feeling of control and ownership over the outcome."
        ],
        contentImageUrl: "img/oct-svg-skeleton.svg", // ADDED: Specific image for content
        examples: [
            { name: "Minecraft", url: "#", desc: "Pure creative freedom to build anything in a vast open world." },
            { name: "Legos / Modding tools", url: "#", desc: "Giving users the components and rules to build complex systems." },
            { name: "Figma or design tools", url: "https://www.figma.com/", desc: "Tools that allow users to design and iterate rapidly." },
        ]
    },
    4: {
        title: "Ownership & Possession",
        type: "Core 4 / 8",
        brain: "Left brain",
        hat: "White hat",
        colorClass: "color-group-4",
        summary: "The desire to own, accumulate, protect, and show off virtual or real goods.",
        details: [
            "This includes collecting currencies, assets, virtual goods, and having exclusive access to certain areas or features.",
            "Users will spend time to acquire, customize, and protect what they own, often spending real money or time to avoid losing their collection."
        ],
        contentImageUrl: "img/oct-svg-lockedbook.svg", // ADDED: Specific image for content
        examples: [
            { name: "Virtual currencies (e.g., in-game gold)", url: "#", desc: "Accumulating and spending currency provides a clear sense of progress and wealth." },
            { name: "NFTs and Digital Collectibles", url: "#", desc: "Provides verifiable digital ownership and scarcity." },
            { name: "Frequent Flyer Miles", url: "#", desc: "A system for accumulating and owning benefits based on past activity." },
        ]
    },
    5: {
        title: "Social Influence & Relatedness",
        type: "Core 5 / 8",
        brain: "Right brain",
        hat: "White hat",
        colorClass: "color-group-5",
        summary: "All social elements that motivate people, including mentorship, social acceptance, companionship, and even competition.",
        details: [
            "Humans are inherently social. We are motivated by what others do, think, or create. This drive is leveraged through things like leaderboards, community forums, and gift-giving.",
            "A strong sense of community can turn a functional product into a long-term habit."
        ],
        contentImageUrl: "img/oct-svg-catandskeleton.svg", // ADDED: Specific image for content
        examples: [
            { name: "Facebook likes/reactions", url: "https://www.facebook.com/", desc: "Feedback provides immediate social acceptance and validation." },
            { name: "Twitch streaming", url: "https://www.twitch.tv/", desc: "Building a following and community around a shared interest." },
            { name: "Collaborative editing (Google Docs)", url: "https://docs.google.com/", desc: "The ability to work with others towards a shared goal." },
        ]
    },
    6: {
        title: "Scarcity & Impatience",
        type: "Core 6 / 8",
        brain: "Right brain",
        hat: "Dark hat",
        colorClass: "color-group-6",
        summary: "The motivation that comes from wanting something simply because you can’t have it right now.",
        details: [
            "This includes limited-time offers, exclusive access, disappearing content (like Snapchat stories), and invitations.",
            "The fear of missing out (FOMO) is a powerful mechanism rooted in this core drive. It encourages immediate action."
        ],
        contentImageUrl: "img/oct-svg-death.svg", // ADDED: Specific image for content
        examples: [
            { name: "Snapchat Stories", url: "https://www.snapchat.com/", desc: "Content disappears after 24 hours, encouraging users to check frequently." },
            { name: "Limited edition sales/drops", url: "#", desc: "Creates artificial demand and urgency." },
            { name: "Waiting lists (e.g., Clubhouse)", url: "#", desc: "Exclusivity makes the product feel more desirable." },
        ]
    },
    7: {
        title: "Unpredictability & Curiosity",
        type: "Core 7 / 8",
        brain: "Right brain",
        hat: "Dark hat",
        colorClass: "color-group-7",
        summary: "The psychological craving for novelty and the unknown.",
        details: [
            "When you don't know what's coming next, your brain stays engaged. This is the foundation of gambling, mystery boxes, and random rewards.",
            "It's essential that the rewards are surprising, but not completely random—there must be a sense that the user can influence the outcome."
        ],
        contentImageUrl: "img/oct-svg-magicball.svg", // ADDED: Specific image for content
        examples: [
            { name: "Loot boxes/Gacha games", url: "#", desc: "The excitement of opening a box without knowing the exact contents." },
            { name: "Social Media Feeds (Instagram/TikTok)", url: "#", desc: "The unpredictable nature of content keeps users scrolling." },
            { name: "Email notifications", url: "#", desc: "The element of surprise when checking who sent a message." },
        ]
    },
    8: {
        title: "Loss & Avoidance",
        type: "Core 8 / 8",
        brain: "Right brain",
        hat: "Dark hat",
        colorClass: "color-group-8",
        summary: "The motivation to act simply to avoid a negative outcome, such as losing status, progress, or access.",
        details: [
            "This includes the fear of losing a progress streak (like Duolingo's), missing a deadline, or seeing your reputation drop.",
            "The stronger the feeling of ownership (Core 4), the more powerful the drive to avoid losing it."
        ],
        contentImageUrl: "img/oct-svg-crow.svg", // ADDED: Specific image for content
        examples: [
            { name: "Duolingo Streaks", url: "https://www.duolingo.com/", desc: "Users continue learning to avoid losing their daily progress streak." },
            { name: "Critical deadlines", url: "#", desc: "The motivation to complete a task before a punitive date." },
            { name: "Insurance policies", url: "#", desc: "Financial motivation to avoid the potential loss of assets." },
        ]
    }
};

/**
 * Updates the display elements with data for the selected Core Drive.
 * @param {number} driveId - The ID of the core drive (1-8).
 */
const updateContent = (driveId) => {
    const drive = CORE_DRIVES_DATA[driveId];
    if (!drive) return;

    // 1. Update Core Summary
    document.querySelector('.core-type').textContent = drive.type;
    document.querySelector('.core-title').textContent = drive.title;

    // Update Labels
    const labelBrain = document.querySelector('.label-brain');
    labelBrain.textContent = drive.brain;
    // Clear existing classes and set the new one (left or right)
    labelBrain.className = `label-brain ${drive.brain === 'Left brain' ? 'left' : 'right'}`;

    const labelHat = document.querySelector('.label-hat');
    labelHat.textContent = drive.hat;
    // Clear existing classes and set the new one (white or black)
    labelHat.className = `label-hat ${drive.hat === 'White hat' ? 'white' : 'black'}`;

    // 2. Generate Core Content Details
    const coreContentDiv = document.querySelector('.core-content');
    
    // Generate the main content HTML
    let contentHTML = `<p class="initial-text">${drive.summary}</p>`;
    
    // Updated Image Handling: onerror replaces the <img> tag with the styled <span>
    const fallbackHtml = `<span class="placeholder-text">Image Not Found: ${drive.contentImageUrl}</span>`;

    contentHTML += `
        <div class="image-placeholder">
            <img 
                src="${drive.contentImageUrl}" 
                alt="${drive.title} illustration" 
                class="core-drive-image" 
            >
        </div>
    `;
    
    drive.details.forEach(detail => {
        contentHTML += `<p>${detail}</p>`;
    });

    // 3. Generate Examples List
    const hatClass = drive.hat === 'White hat' ? 'white-hat-example' : 'dark-hat-example';

    let examplesHTML = `<div class="examples-container">
                            <h3 class="examples-heading">Examples</h3>
                            <div id="examples-list">`;
    
    drive.examples.forEach(example => {
        examplesHTML += `
            <div class="example-item ${hatClass}">
                <strong><a href="${example.url}" target="_blank" rel="noopener noreferrer">${example.name}</a></strong>
                <p>${example.desc}</p>
            </div>
        `;
    });
    examplesHTML += `</div></div>`;
    
    // Combine and update the inner HTML of .core-content
    coreContentDiv.innerHTML = contentHTML + examplesHTML;

    // 4. Highlight the active slice (Applied to the path element)
    document.querySelectorAll('.slice-path').forEach(slice => slice.classList.remove('active-slice'));
    document.querySelector(`#slice-${driveId}`)?.classList.add('active-slice');
};

/**
 * Draws the 8 slices of the Octagon SVG using the user's custom vertex and group logic,
 * rotating the structure so Core 1 is at the top.
 */
const drawOctagon = () => {
    const slices = document.getElementById('slices');
    if (!slices) return;
    
    // Clear existing slices before drawing
    slices.innerHTML = ''; 

    // Constants
    const C = 8, cx = 100, cy = 100, r = 80;
    const IMG_SIZE = 30;

    function vert(i){
        // MODIFIED: Start angle at -112.5 degrees so that the slice between V[0] and V[1] 
        // is centered at -90 (top), placing Core 1 correctly.
        const a = (i * 360 / C - 112.5) * Math.PI/180; 
        return {x: cx + r * Math.cos(a), y: cy + r * Math.sin(a)};
    }

    const V = Array.from({length: C}, (_, i) => vert(i));

    for (let i = 0; i < C; i++) {
        const driveId = i + 1;
        const driveData = CORE_DRIVES_DATA[driveId];
        
        const v1 = V[i];
        const v2 = V[(i + 1) % C];

        // 1. Create Group (g)
        const g = document.createElementNS('http://www.w3.org/2000/svg','g');
        g.classList.add('slice-group');
        g.setAttribute('id', `slice-group-${driveId}`);

        // Hover/Translate logic
        const midX = (v1.x + v2.x)/2 - cx;
        const midY = (v1.y + v2.y)/2 - cy;
        const len = Math.sqrt(midX*midX + midY*midY) || 1;
        const ux = (midX/len)*6;
        const uy = (midY/len)*6;
        g.dataset.ux = ux; g.dataset.uy = uy;
        g.addEventListener('mouseenter', ()=> g.setAttribute('transform', `translate(${ux},${uy})`));
        g.addEventListener('mouseleave', ()=> g.setAttribute('transform', `translate(0,0)`));

        // 2. Create Path (p)
        const p = document.createElementNS('http://www.w3.org/2000/svg','path');
        p.setAttribute('d', `M ${cx} ${cy} L ${v1.x} ${v1.y} L ${v2.x} ${v2.y} Z`);
        
        // Apply styling classes and ID for selection
        p.classList.add('slice-path', driveData.colorClass);
        p.setAttribute('id', `slice-${driveId}`); 

        p.setAttribute('tabindex','0');
        p.setAttribute('role','button');
        p.setAttribute('aria-label', driveData.title);

        // Click handler
        p.addEventListener('click', ()=>{
            p.classList.add('flash'); 
            setTimeout(()=>{p.classList.remove('flash'); updateContent(driveId);}, 180); 
        });
        
        // Keydown handler
        p.addEventListener('keydown', (e)=>{ 
            if(e.key==='Enter'||e.key===' '){ 
                e.preventDefault(); 
                p.click(); 
            } 
        });

        g.appendChild(p);

        // 3. Create Image (im)
        const imgX = (cx + v1.x + v2.x)/3;
        const imgY = (cy + v1.y + v2.y)/3;
        const im = document.createElementNS('http://www.w3.org/2000/svg','image');
        
        // Use the local image file name for SVG icons
        im.setAttribute('href', `img/oct-img-${driveId}.png`); 
        
        im.setAttribute('width', String(IMG_SIZE));
        im.setAttribute('height', String(IMG_SIZE));
        im.setAttribute('x', String(imgX-IMG_SIZE/2));
        im.setAttribute('y', String(imgY-IMG_SIZE/2));
        im.setAttribute('preserveAspectRatio','xMidYMid meet');
        im.classList.add('slice-img');

        g.appendChild(im);
        slices.appendChild(g);
    }
};

// Initialization using the DOMContentLoaded pattern
document.addEventListener('DOMContentLoaded', () => {
    drawOctagon();
    // Initialize content display with Core 1
    updateContent(1); 
});