// Data for the gallery items (16 items for demonstration)
const initialImages = [
    { id: 1, category: "Books", title: "Actionable Gamification: Beyond Points, Badges, and Leaderboards", src: "img/Book-Image.webp", description: "Gamification and 8 octalysis principals.", href: "https://share.google/U0llW8DudzucCDkCj" },
    { id: 2, category: "Videos", title: "TEDx talk : Gamification to improve our world", src: "img/yu-kai2-800x400.jpg", description: "Yu-kai Chou at TEDxLausanne", href: "https://www.youtube.com/watch?v=v5Qjuegtiyc&t=2s" },
    { id: 3, category: "Articles", title: "+188% growth in ecommerce revenue", src: "img/vive-sub-banner.avif", description: "Case Study in Gamified Marketing within HTC VIVE eCommerce.", href: "https://octalysisgroup.com/htc-vive/" },
    { id: 4, category: "Articles", title: "Octalysis Group Service", src: "img/groupbusiness.png", description: "Science-backed gamification solutions for lasting business impact.", href: "https://octalysisgroup.com/case-studies/" },

    { id: 5, category: "Mentions & Contributions", title: "Keynote Speech at Stanford", src: "img/siliconvalley.png", description: "What does Asia mean for Silicon Valley in 2013?", href: "https://asia.stanford.edu/course/entrepreneurship-in-asian-high-tech-industries/2013-entrepreneurship-in-asian-high-tech-industries/what-does-asia-mean-for-silicon-valley-in-2013/" },
    { id: 6, category: "Articles", title: "The Neuroscience Behind Octalysis Gamification", src: "img/dime.png", description: "Neurotransmitters involved in (dis-)engagement, (de)motivation and gamification.", href: "https://octalysisgroup.com/2015/04/the-neuro-science-behind-octalysis-gamification/" },
    { id: 7, category: "Videos", title: "Talks at Google : A Framework on Actionable Gamification", src: "img/gotalk.png", description: "why so many products are function-focused (as opposed to human-focused) and fail to become an engaging experience.", href: "https://youtu.be/u4acIpWrnzo?si=8HmUHfhry26wuWxA" },
    { id: 8, category: "Books", title: "10,000 Hours of Play: \"Unlock Your Real-Life Legendary Success\"", src: "img/book-10000.jpg", description: "Improve your life quality with fun.", href: "https://share.google/9h5UHRkamgMCUcGeV" },

    { id: 9, category: "Mentions & Contributions", title: "Harvard EDU : Engage Your Students with Some Healthy Competition", src: "img/harvardblog.png", description: "Tips for Harnessing the Power of Gamification More Effectively.", href: "https://hbsp.harvard.edu/inspiring-minds/boost-student-engagement-gamification-strategies" },
    { id: 10, category: "Mentions & Contributions", title: "A bibliometric analysis of the use of the Gamification Octalysis Framework in training", src: "img/stat.webp", description: "Deep insight into WoS-indexed journals from 2017 to 2023", href: "https://www.nature.com/articles/s41599-023-02243-3" },
    { id: 11, category: "Videos", title: "Anyreach Interview : Gamification, AI & Human Motivation ", src: "img/billion.png", description: "The Psychology Behind Engagement", href: "https://youtu.be/v6UBe8mTkuo?si=Gk4HTcTjj2pNoMpg" },
    { id: 12, category: "Articles", title: "Yu-kai Chou’s Octalysis, a proven gamification method (en français)", src: "img/usabilis.webp", description: "UX methodology of Octalysis", href: "https://usabilis.com/l-octalysis-de-yu-kai-chou-methode-de-gamification/" },
    
    { id: 13, category: "Mentions & Contributions", title: "Yale-Ipsos Tink Tank : The Motivating Power of Games", src: "img/yale.webp", description: "Practical applications of behavioral science.", href: "https://som.yale.edu/blog/the-motivating-power-of-games" },
    { id: 14, category: "Videos", title: "Applying the Octalysis Framework", src: "img/revenuecat.jpg", description: "Tap into user motivation and design engaging, gamified experiences like those behind Duolingo.", href: "https://youtu.be/-hz96Sx7S5U" },
    { id: 15, category: "Mentions & Contributions", title: "Use gamification principles to motivate (en français)", src: "img/nunny.jpg", description: "Breath new life to education with Octalysis", href: "https://hal.science/hal-02986312v1/document" },
    { id: 17, category: "Videos", title: "How To Get People To Take Action", src: "img/gouplabs.jpg", description: "Unpacking Gamification & Behavioral Design with Yu-Kai Chou", href: "https://youtu.be/M0Z1Mx7NmY4?si=5NElTrWH4RHXjOYK" }
];

let currentImages = [...initialImages];
// Reference elements using the new prefixed IDs
const galleryElement = document.getElementById('mg-gallery');
const filterContainer = document.getElementById('mg-filter-controls');
const totalImages = initialImages.length;


/**
 * Renders the image gallery based on the provided array of images.
 * @param {Array<Object>} imagesToRender - The array of image objects to display.
 */
function renderGallery(imagesToRender) {
    if (!galleryElement) return;

    // Clear existing items
    galleryElement.innerHTML = '';
    
    // Generate HTML for each image
    const fragment = document.createDocumentFragment();
    imagesToRender.forEach(image => {
        const item = document.createElement('div');
        // Use custom CSS class 'mg-item' which contains all card styling now
        item.className = 'mg-item'; 
        
        // Content structure - using new custom classes for internal content
        // Wrap the whole card in a link so clicking the item opens the external href
        const href = image.href || '#';
        item.innerHTML = `
            <a class="mg-link" href="${href}" target="_blank" rel="noopener noreferrer">
                <img 
                    src="${image.src}" 
                    alt="${image.title}" 
                    class="mg-image" 
                    loading="lazy"
                    onerror="this.onerror=null; this.src='https://placehold.co/400x400/aaaaaa/444444?text=Load+Error';"
                >
                <div class="mg-card-content">
                    <h3>${image.title}</h3>
                    <p class="mg-category">${image.category}</p>
                    <p class="mg-description">${image.description}</p>
                </div>
            </a>
        `;
        fragment.appendChild(item);
    });
    
    galleryElement.appendChild(fragment);
}

/**
 * Filters the gallery and updates the active button style.
 * This function is globally exposed via the HTML 'onclick' attributes.
 * @param {string} category - The category to filter by ("All" to show everything).
 * @param {HTMLElement} clickedButton - The button element that was clicked.
 */
function filterGallery(category, clickedButton) {
    // 1. Filter the image data
    let filteredImages;
    if (category === 'All') {
        filteredImages = initialImages;
    } else {
        filteredImages = initialImages.filter(img => img.category === category);
    }
    currentImages = filteredImages;
    
    // 2. Re-render the gallery
    renderGallery(currentImages);

    // 3. Update active button style (using mg-filter-button and mg-active)
    document.querySelectorAll('.mg-filter-button').forEach(btn => {
        btn.classList.toggle('mg-active', btn === clickedButton);
    });

    // Reset all buttons to their default counts
    document.querySelectorAll('.mg-filter-button').forEach(btn => {
        const cat = btn.getAttribute('data-category');
        if (cat === 'All') {
            btn.textContent = `All (${totalImages})`;
        } else {
            const count = initialImages.filter(img => img.category === cat).length;
            btn.textContent = `${cat} (${count})`;
        }
    });

    // Update the currently active button to show its filtered count
    clickedButton.textContent = `${category} (${filteredImages.length})`;

    // Scroll back to the top of the gallery for better UX
    galleryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}



/**
 * Initializes the gallery on window load.
 */
window.onload = () => {
    // 1. Initial render of all images
    renderGallery(initialImages);
    
    // 2. Attach filterGallery function to the window object so it's accessible globally from HTML
    window.filterGallery = filterGallery;

    // 3. Update all button counts on load
    document.querySelectorAll('.mg-filter-button').forEach(btn => {
        const cat = btn.getAttribute('data-category');
        if (cat === 'All') {
            btn.textContent = `All (${totalImages})`;
        } else {
            const count = initialImages.filter(img => img.category === cat).length;
            btn.textContent = `${cat} (${count})`;
        }
    });

    // 4. Optional: Re-render on window resize (important for CSS column-count layout stability)
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        // Debounce to prevent excessive re-rendering during resizing
        resizeTimer = setTimeout(() => {
            renderGallery(currentImages);
        }, 250);
    });
};