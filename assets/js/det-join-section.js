// prefix /<repo> for project sites
(function () {
  function detectBase() {
    // 1) If set in HTML: <script>window.BASE_URL="{{ '' | absolute_url }}"</script>
    if (window.BASE_URL) return String(window.BASE_URL).replace(/\/$/, '');

    // 2) Infer from this script tag's src (e.g., "/website-test/assets/js/det-join-section.js")
    const s = document.querySelector('script[src*="det-join-section.js"]');
    if (s && s.src) {
      try {
        const u = new URL(s.src, location.origin);
        const parts = u.pathname.split('/').filter(Boolean); // ["website-test","assets","js","det-join-section.js"]
        if (parts.length > 1) return `/${parts[0]}`; // "/website-test"
      } catch (_) {}
    }

    // 3) Fallback to the first path segment of the current page
    const m = location.pathname.match(/^\/[^/]+/);
    return m ? m[0] : '';
  }

  window.asset = function (p) {
    if (!p) return '';
    const base = detectBase();
    if (/^https?:\/\//i.test(p)) return p;       // absolute URL
    if (p.startsWith('/')) return `${base}${p}`; // "/assets/..." -> "/<repo>/assets/..."
    return base ? `${base}/${p}` : p;            // "assets/..."  -> "/<repo>/assets/..." (or stays relative)
  };
})();

// Testimonials data
const testimonials = [
  {
    id: "1",
    name: "Shachar Meir",
    title: "Data Advisor",
    company: "Shachar Meir",
    text: "DET is the community I wish I had when I started my career 20+ years ago! It helped me connect with awesome Data Engineers in my area and beyond, and with really awesome learning experiences.",
    avatar: "/assets/img/testimonial/shachar-meir.png",
    linkedinUrl: "https://linkedin.com/in/shachar-meir"
  },
  {
    id: "2",
    name: "Yaakov Bressler",
    title: "Editor in Chief", 
    company: "Capital One",
    text: "DET makes me a better version of myself (and a better engineer). It provides an opportunity to give back to the tech community by building the exact resources I wish I had when I first started my career. Now, I can support the next generation of data engineers while also elevating the very writers who helped kickstart my own journey.",
    avatar: "/assets/img/testimonial/yaakov-bressler.png",
    linkedinUrl: "https://linkedin.com/in/yaakov-bressler"
  },
  {
    id: "3",
    name: "Shivananda D",
    title: "Data Engineer",
    company: "CVS Health",
    text: "The DET community is amazing - has connected me with excellent professionals whose energy is inspiring. Personally, Xinran's early encouragement and guidance gave me the confidence to grow as both an editor and writer - finding mentors like that is rare, and DET made it easy. Being part of the community has honed my writing skills in conveying technical topics more clearly.",
    avatar: "/assets/img/testimonial/shivananda-d.png",
    linkedinUrl: "https://linkedin.com/in/shivananda-d"
  },
  {
    id: "4",
    name: "Aminat Lawal",
    title: "Data Engineer",
    company: "Yaadang",
    text: "The community has helped me connect with people who have become not just peers but friends, and has given me access to incredible individuals across every corner of data engineering. DET has attracted some of the brightest minds in the field, and being able to tap into their knowledge, experience, and network has been invaluable.",
    avatar: "/assets/img/testimonial/aminat-lawal.png",
    linkedinUrl: "https://linkedin.com/in/aminat-lawal"
  },
  {
    id: "5",
    name: "Nandini Raja",
    title: "Data Engineer",
    company: "Alef Education - Abu Dhabi",
    text: "Being part of DET has been a journey of growth, collaboration, and creativity. It gave me the space to try new ideas like co-founding the book club with Amina, where we not only explored two thought-provoking books but also connected with brilliant minds from across the data engineering world. The conversations, the exchange of real-world project experiences, and the diverse perspectives opened my mind in ways I didn't expect.",
    avatar: "/assets/img/testimonial/nandini-raja.png",
    linkedinUrl: "https://linkedin.com/in/nandini-raja"
  },
  {
    id: "6",
    name: "Vu Trinh",
    title: "Data Engineer",
    company: "Vu Trinh newsletter",
    text: "For me, Data Engineering Things is currently the leading data engineering community. With high-quality articles from skilled writers and a dedicated editorial team, it's my top recommendation for anyone looking to learn about data engineering. I submit nearly every article I write to this publication—it's the ideal place to share my experiences and learn from others.",
    avatar: "/assets/img/testimonial/vu-trinh.png",
    linkedinUrl: "https://linkedin.com/in/vu-trinh"
  },
  {
    id: "7",
    name: "Praveen Bhushan",
    title: "Cloud Data Architect",
    company: "Rackspace Technology",
    text: "DET community has been a valuable partner in my learning journey — offering not just technical insights into modern data engineering practices, but also fresh perspectives on leading and mentoring teams. Through its events, discussions, and connections, I've been able to exchange real-world lessons with peers, discover innovative approaches and stay ahead on trends.",
    avatar: "/assets/img/testimonial/praveen-bhushan.png",
    linkedinUrl: "https://linkedin.com/in/praveen-bhushan"
  },
  {
    id: "8",
    name: "Michelle Winters",
    title: "Distinguished Architect, Data & AI Infrastructure",
    company: "eBay",
    text: "Data has never been more important—or more impactful—than it is today. DET is a welcoming community where we can connect with fellow data engineers, stay current on the latest trends and developments, learn from trusted experts, and accelerate our professional growth. I wholeheartedly encourage anyone working in data engineering or adjacent spaces to join this community.",
    avatar: "/assets/img/testimonial/michelle-winters.png",
    linkedinUrl: "https://linkedin.com/in/michelle-winters"
  },
  {
    id: "9",
    name: "Jai Balani",
    title: "Data Engineer",
    company: "Netflix Inc",
    text: "I have found the newsletter and the conferences/workshops quite useful and a great way to connect with other Data Engineers. I also joined the community as a mentor and it was highly fulfilling to work with young talent in this space.",
    avatar: "/assets/img/testimonial/jai-balani.png",
    linkedinUrl: "https://linkedin.com/in/jai-balani"
  },
  {
    id: "10",
    name: "Anurag Sengupta",
    title: "Senior Software Engineer",
    company: "Walmart Labs",
    text: "Two years ago, I met Xinran at a coffee shop in Los Gatos, and our warm conversation opened up resources and ideas that helped me navigate a transition from a mid-sized startup. One of the key takeaways was the book Designing Data-Intensive Applications, which truly shaped my thinking. That spark from the DET community has come full circle—today, I lead the data platforms at Walmart.",
    avatar: "/assets/img/testimonial/anurag-sengupta.png",
    linkedinUrl: "https://linkedin.com/in/anurag-sengupta"
  }
];

// Testimonial carousel functionality
class TestimonialCarousel {
  constructor() {
    this.currentIndex = 0;
    this.testimonialsPerPage = 3;
    this.totalPages = Math.ceil(testimonials.length / this.testimonialsPerPage);
    
    this.init();
  }
  
  init() {
    this.renderTestimonials();
    this.renderPageDots();
    this.updatePageIndicator();
    this.bindEvents();
  }
  
  bindEvents() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.addEventListener('click', () => this.handlePrevious());
    nextBtn.addEventListener('click', () => this.handleNext());
  }
  
  getCurrentTestimonials() {
    const start = this.currentIndex * this.testimonialsPerPage;
    return testimonials.slice(start, start + this.testimonialsPerPage);
  }
  
  renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    const currentTestimonials = this.getCurrentTestimonials();
    
    grid.innerHTML = currentTestimonials.map(testimonial => `
      <div class="testimonial-card">
        <div class="testimonial-content">
          <div class="testimonial-header">
            <div class="testimonial-avatar">
              <img src="${asset(testimonial.avatar)}" alt="${testimonial.name}" onload="this.style.removeProperty('display'); const f=this.nextElementSibling; if (f) f.style.display='none';" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div style="display:none; align-items:center; justify-content:center; width:100%; height:100%; background:#f5f5f5; border-radius:50%; font-weight:600; font-size:1.125rem; color:#666;">
                ${testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            
            <div class="testimonial-info">
              <div class="testimonial-meta">
                <div class="testimonial-details">
                  <div class="testimonial-name">${testimonial.name}</div>
                  <div class="testimonial-title">${testimonial.title}</div>
                  <div class="testimonial-company">${testimonial.company}</div>
                </div>
                
                <a href="${testimonial.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="linkedin-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div class="testimonial-text">
            "${testimonial.text}"
          </div>
        </div>
      </div>
    `).join('');
  }
  
  renderPageDots() {
    const dotsContainer = document.getElementById('pageDots');
    
    dotsContainer.innerHTML = Array.from({ length: this.totalPages }, (_, i) => `
      <button class="page-dot ${i === this.currentIndex ? 'active' : ''}" data-page="${i}"></button>
    `).join('');
    
    // Bind dot click events
    dotsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('page-dot')) {
        const page = parseInt(e.target.dataset.page);
        this.goToPage(page);
      }
    });
  }
  
  updatePageIndicator() {
    const indicator = document.getElementById('pageIndicator');
    indicator.textContent = `${this.currentIndex + 1} of ${this.totalPages}`;
  }
  
  updatePageDots() {
    const dots = document.querySelectorAll('.page-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === this.currentIndex);
    });
  }
  
  handlePrevious() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.totalPages - 1;
    this.update();
  }
  
  handleNext() {
    this.currentIndex = this.currentIndex < this.totalPages - 1 ? this.currentIndex + 1 : 0;
    this.update();
  }
  
  goToPage(pageIndex) {
    this.currentIndex = pageIndex;
    this.update();
  }
  
  update() {
    this.renderTestimonials();
    this.updatePageIndicator();
    this.updatePageDots();
  }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new TestimonialCarousel();
});