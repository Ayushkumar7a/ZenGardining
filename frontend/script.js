/* ==========================================================================
   🌿 ZENGardening Shared global script
   ========================================================================== */

// ── DEFAULT DATA SEEDING ──────────────────────────────────────────────────
const defaultPlants = [
    {id:1,name:'Rose',sci:'Rosa',cat:'Flower',season:'Spring',diff:'Medium',status:'Active'},
    {id:2,name:'Chilli Pepper',sci:'Capsicum annuum',cat:'Vegetable',season:'Summer',diff:'Easy',status:'Active'},
    {id:3,name:'Lavender',sci:'Lavandula',cat:'Herb',season:'All Year',diff:'Easy',status:'Active'},
    {id:4,name:'Dahlia',sci:'Dahlia pinnata',cat:'Flower',season:'Summer',diff:'Advanced',status:'Active'},
    {id:5,name:'Spinach',sci:'Spinacia oleracea',cat:'Vegetable',season:'Winter',diff:'Easy',status:'Inactive'},
    {id:6,name:'Tulip',sci:'Tulipa',cat:'Flower',season:'Spring',diff:'Medium',status:'Active'},
    {id:7,name:'Carrot',sci:'Daucus carota',cat:'Vegetable',season:'All Year',diff:'Easy',status:'Active'},
    {id:8,name:'Basil',sci:'Ocimum basilicum',cat:'Herb',season:'Summer',diff:'Easy',status:'Active'}
];

const defaultCourses = [
    {id:1,title:'Rose Gardening',cat:'Flower',price:199,students:284,rating:'4.9',status:'Published',description:'Master the art of growing vibrant roses in terrace spaces.',image:'rose.jpg'},
    {id:2,title:'Chilli Pepper Power',cat:'Vegetable',price:149,students:198,rating:'4.7',status:'Published',description:'Spice up your terrace garden with vibrant chilli peppers. From seed to harvest.',image:'chilli-course.jpg'},
    {id:3,title:'Dahlia Gardening',cat:'Flower',price:149,students:142,rating:'4.8',status:'Published',description:'Master the art of growing beautiful dahlias in containers.',image:'dahlia.jpg'},
    {id:4,title:'Spinach Success',cat:'Vegetable',price:99,students:87,rating:'4.6',status:'Published',description:'Grow organic spinach and leafy greens in limited space.',image:'spinach-course.jpg'},
    {id:5,title:'Lavender Gardening',cat:'Herb',price:99,students:63,rating:'4.5',status:'Published',description:'Learn how to cultivate fragrant lavender on balconies.',image:'lavender.jpg'},
    {id:6,title:'Marigold Gardening',cat:'Flower',price:49,students:45,rating:'4.3',status:'Published',description:'Grow vibrant marigolds that also repel garden pests.',image:'marigold.jpg'},
    {id:7,title:'Brinjal Bonanza',cat:'Vegetable',price:129,students:112,rating:'4.6',status:'Published',description:'Grow heavy-yielding brinjals (eggplants) in grow bags.',image:'brinjal-course.jpg'},
    {id:8,title:'Radish Rapid Results',cat:'Vegetable',price:89,students:94,rating:'4.5',status:'Published',description:'Learn how to harvest crisp radishes in less than 30 days.',image:'radish-course.jpg'},
    {id:9,title:'Carrot Care',cat:'Vegetable',price:99,students:76,rating:'4.7',status:'Published',description:'Grow sweet, crunchy carrots in deep planters.',image:'carrot-course.jpg'},
    {id:10,title:'Pea Perfection',cat:'Vegetable',price:119,students:82,rating:'4.8',status:'Published',description:'Step-by-step tutorial on trellising and harvesting sweet peas.',image:'pea-course.jpg'},
    {id:11,title:'Sunflower Splendor',cat:'Flower',price:79,students:54,rating:'4.6',status:'Published',description:'Grow tall, stunning sunflowers in large pots and terrace beds.',image:'sunflower.jpg'},
    {id:12,title:'Tulip Terrific',cat:'Flower',price:169,students:88,rating:'4.8',status:'Published',description:'Learn the chilling techniques and potting care for growing spring tulips.',image:'tulip.jpg'},
    {id:13,title:'Orchid Masterclass',cat:'Flower',price:249,students:72,rating:'4.9',status:'Published',description:'Grow exotic, long-blooming orchids with expert humidity control tips.',image:'placeholder-profile.jpg'},
    {id:14,title:'Jasmine Fragrance Guide',cat:'Flower',price:119,students:108,rating:'4.7',status:'Published',description:'Cultivate climbing jasmine vines for maximum aroma and daily fresh blooms.',image:'gardening.jpg'}
];

const defaultBlogs = [
    {id:1,title:'Choosing the Right Roses for Your Terrace Garden',cat:'flowers',author:'Ayush Kumar',views:2400,status:'Published',date:'Mar 25, 2025',excerpt:'A comprehensive guide to selecting, planting and caring for rose varieties that thrive in containers and terrace conditions.',image:'rose.jpg'},
    {id:2,title:'Growing Chilli Peppers in Pots – A Complete Guide',cat:'vegetables',author:'Ayush Kumar',views:1800,status:'Published',date:'Mar 18, 2025',excerpt:'Everything you need to know about growing fiery chilli peppers right on your balcony. From choosing varieties to harvest.',image:'chilli-course.jpg'},
    {id:3,title:'10 Essential Watering Tips Every Gardener Should Know',cat:'tips',author:'Ayush Kumar',views:1200,status:'Published',date:'Mar 10, 2025',excerpt:'Overwatering is the #1 killer of terrace plants. Learn how to water smarter, not harder.',image:'gardening.jpg'},
    {id:4,title:'Starting Your Own Herb Garden: Basil, Mint & More',cat:'herbs',author:'Ayush Kumar',views:950,status:'Published',date:'Feb 28, 2025',excerpt:'Herbs are the perfect starting point for new gardeners. Low maintenance, fast-growing, and useful.',image:'lavender.jpg'},
    {id:5,title:'Natural Pest Control: How Marigolds Protect Your Garden',cat:'pest',author:'Ayush Kumar',views:870,status:'Published',date:'Feb 15, 2025',excerpt:'Discover how planting marigolds alongside your vegetables acts as nature\'s own pest repellent.',image:'marigold.jpg'}
];

const defaultUsers = [
    {id:1,name:'Priya Sharma',email:'priya@example.com',role:'Student',courses:3,joined:'Jan 2025',status:'Active'},
    {id:2,name:'Rahul Verma',email:'rahul@example.com',role:'Student',courses:1,joined:'Feb 2025',status:'Active'},
    {id:3,name:'Sunita Patel',email:'sunita@example.com',role:'Student',courses:5,joined:'Mar 2025',status:'Active'},
    {id:4,name:'Dev Kumar',email:'dev@example.com',role:'Student',courses:2,joined:'Mar 2025',status:'Suspended'},
    {id:5,name:'Anita Singh',email:'anita@example.com',role:'Admin',courses:0,joined:'Jan 2024',status:'Active'}
];

const defaultMessages = [
    {from:'Sunita Patel',email:'sunita@example.com',topic:'Course Enquiry',preview:'I wanted to ask about the rose course content…',received:'2h ago',status:'Unread'},
    {from:'Priya Sharma',email:'priya@example.com',topic:'Feedback',preview:'The lavender guide was absolutely amazing!…',received:'5h ago',status:'Read'},
    {from:'Rakesh Gupta',email:'rakesh@example.com',topic:'Technical Support',preview:'I am unable to access my enrolled courses…',received:'1d ago',status:'Unread'}
];

const defaultOrders = [
    {student:'Priya Sharma',course:'Rose Gardening',amount:'₹199',method:'UPI',date:'Mar 25, 2025',status:'Completed'},
    {student:'Rahul Verma',course:'Chilli Pepper Power',amount:'₹149',method:'Card',date:'Mar 20, 2025',status:'Completed'},
    {student:'Sunita Patel',course:'Lavender Gardening',amount:'₹99',method:'NetBanking',date:'Mar 18, 2025',status:'Pending'}
];

// Initialize localStorage arrays
function initializeDatabase() {
    if (!localStorage.getItem('zen-plants')) localStorage.setItem('zen-plants', JSON.stringify(defaultPlants));
    
    // Auto-update courses in localStorage if missing any default courses
    if (!localStorage.getItem('zen-courses')) {
        localStorage.setItem('zen-courses', JSON.stringify(defaultCourses));
    } else {
        const stored = JSON.parse(localStorage.getItem('zen-courses') || '[]');
        let modified = false;
        defaultCourses.forEach(dc => {
            if (!stored.some(sc => sc.title === dc.title)) {
                stored.push(dc);
                modified = true;
            }
        });
        if (modified) {
            localStorage.setItem('zen-courses', JSON.stringify(stored));
        }
    }
    
    if (!localStorage.getItem('zen-blogs')) localStorage.setItem('zen-blogs', JSON.stringify(defaultBlogs));
    if (!localStorage.getItem('zen-users')) localStorage.setItem('zen-users', JSON.stringify(defaultUsers));
    if (!localStorage.getItem('zen-messages')) localStorage.setItem('zen-messages', JSON.stringify(defaultMessages));
    if (!localStorage.getItem('zen-orders')) localStorage.setItem('zen-orders', JSON.stringify(defaultOrders));
}
initializeDatabase();

// ── SIDEBAR CONTROLS ───────────────────────────────────────────────────────
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar) sidebar.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
}

function toggleSidebar() {
    toggleMenu();
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar) sidebar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
}

// ── THEME MANAGER ─────────────────────────────────────────────────────────
function toggleTheme() {
    const h = document.documentElement;
    const isDark = h.getAttribute('data-theme') === 'dark';
    h.setAttribute('data-theme', isDark ? 'light' : 'dark');
    
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        themeBtn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    }
    localStorage.setItem('zen-theme', isDark ? 'light' : 'dark');
    showToast(isDark ? '☀️ Light mode enabled' : '🌙 Dark mode enabled');
}

// Apply theme before DOM loads to prevent screen flash
(function() {
    const savedTheme = localStorage.getItem('zen-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

// Update icon after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('zen-theme') || 'light';
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        themeBtn.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
});

// ── TOAST NOTIFICATION HELPERS ─────────────────────────────────────────────
function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = message;
    toast.classList.add('show');
    
    // Clear existing timer if any
    if (window.toastTimer) clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 3200);
}

// ── SCROLL TO TOP ──────────────────────────────────────────────────────────
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
    const btn = document.getElementById('goTopBtn');
    if (btn) {
        btn.style.display = (window.scrollY > 200) ? 'flex' : 'none';
    }
});

// ── HORIZONTAL SCROLL CHECKS ──────────────────────────────────────────────
function scrollLeft(btnEl) {
    const wrapper = btnEl ? btnEl.closest('.course-wrapper') : null;
    const container = wrapper ? wrapper.querySelector('.course-container') : document.querySelector('.course-container');
    if (container) container.scrollBy({ left: -320, behavior: 'smooth' });
}

function scrollRight(btnEl) {
    const wrapper = btnEl ? btnEl.closest('.course-wrapper') : null;
    const container = wrapper ? wrapper.querySelector('.course-container') : document.querySelector('.course-container');
    if (container) container.scrollBy({ left: 320, behavior: 'smooth' });
}

// ── COURSE DETAILS MODAL ──────────────────────────────────────────────────
function openModal(title, imageSrc, description) {
    let modal = document.getElementById('courseModal');
    if (!modal) {
        // Build modal dynamically if it doesn't exist
        modal = document.createElement('div');
        modal.id = 'courseModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header-section">
                    <h2 id="courseTitle"></h2>
                    <span class="close" onclick="closeModal()">&times;</span>
                </div>
                <div class="modal-image-wrap">
                    <img id="courseImage" src="" alt="Course Image">
                </div>
                <div class="modal-info-wrap">
                    <p id="courseDescription"></p>
                    <button class="learn-more-btn" onclick="enrollNow()">Enroll In Course</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
    
    document.getElementById('courseTitle').innerText = title;
    document.getElementById('courseImage').src = imageSrc.startsWith('http') || imageSrc.startsWith('/') ? imageSrc : '/' + imageSrc;
    document.getElementById('courseDescription').innerText = description;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('courseModal');
    if (modal) modal.style.display = 'none';
}

function enrollNow() {
    const title = document.getElementById('courseTitle').innerText;
    // Redirect to enroll page passing the course title
    window.location.href = `/enroll?course=${encodeURIComponent(title)}`;
}
