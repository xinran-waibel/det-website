// If asset() is not already defined (e.g. this file used alone), define it.
// If det-join-section.js is loaded on this page, it will reuse that one.
(function () {
  if (window.asset) return;

  function detectBase() {
    if (window.BASE_URL) return String(window.BASE_URL).replace(/\/$/, '');
    const m = location.pathname.match(/^\/[^/]+/);
    return m ? m[0] : '';
  }

  window.asset = function (p) {
    if (!p) return '';
    const base = detectBase();
    if (/^https?:\/\//i.test(p)) return p;
    if (p.startsWith('/')) return `${base}${p}`;
    return base ? `${base}/${p}` : p;
  };
})();

// 1) Mentors data
const mentors = [
  {
    id: "m1",
    name: "Alfonso Ramirez",
    title: "Sr. Data Architect",
    company: "Intuitive Surgical",
    text: "I traversed positions from analyst, to engineer, to tech lead, and now Senior Data Architect at the leading company in Robotic Surgery Technology. I work on Snowflake & Databricks. I take a strategic and friendly approach with mentees!",
    avatar: "/assets/img/mentors/AlfonsoRamirez.jpeg", 
    linkedinUrl: "https://www.linkedin.com/in/ponsoramirez/"
  },
  {
    id: "m2",
    name: "Swetha Sekhar",
    title: "Staff Data Engineer",
    company: "OpenAI",
    text: "Swetha is a Staff Data Engineer at OpenAI working in the Safety Systems team. She builds data pipelines for harm metrics for various stakeholders and also architects pipelines for feature data stores for ML pipelines and new classifiers.",
    avatar: "/assets/img/mentors/SwethaSekhar.jpg",
    linkedinUrl: "https://www.linkedin.com/in/swetha-sekhar"
  },
  {
    id: "m3",
    name: "Balachandar Paulraj",
    title: "Staff Data Engineer",
    company: "PlayStation",
    text: "Passionate about sharing insights,he actively shares his expertise through Medium articles [https://balachandar-paulraj.medium.com/]. He has reviewed an O’Reilly database book and contributed to conferences as a reviewer & author.",
    avatar: "/assets/img/mentors/BalachandarPaulraj.jpg",
    linkedinUrl: "https://www.linkedin.com/in/balachandar-paulraj-b8a26727"
  },
  {
    id: "m4",
    name: "Sanchit Burkule",
    title: "Senior Data Engineer",
    company: "IPG",
    text: "Sanchit works with cross-functional teams to drive automation and custom tooling in MarTech and AdTech.",
    avatar: "/assets/img/mentors/SanchitBurkule.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sanchitburkule"
  },
  {
    id: "m5",
    name: "Vipul Javeri",
    title: "Sr. Staff Data Platform Engineer",
    company: "Outreach",
    text: "Hey there! I’m a data engineering leader with 15+ years of experience. I’ve helped build and modernize data platforms at Outreach, Glassdoor, and Verizon.",
    avatar: "/assets/img/mentors/VipulJaveri.png",
    linkedinUrl: "https://www.linkedin.com/in/vipuljaveri/"
  },
  {
    id: "m6",
    name: "Annu Joshi",
    title: "Data Engineer",
    company: "Doordash",
    text: "Annu enjoys building scalable data applications and distributed systems. She's passionate about helping others navigate their career in tech.",
    avatar: "/assets/img/mentors/AnnuJoshi.jpg",
    linkedinUrl: "https://www.linkedin.com/in/annu-joshi/"
  },
  {
    id: "m7",
    name: "Xinran Waibel",
    title: "Senior Data Engineer",
    company: "Netflix",
    text: "As a member of the Personalization Data Engineering team at Netflix, I design and build event-streaming microservices and batch-driven data pipelines to enable personalization algorithms.",
    avatar: "/assets/img/mentors/XinranWaibel.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/xinranwaibel/"
  },
  // add more mentors
];

// 2) 
class MentorsCarousel {
  constructor() {
    this.currentIndex = 0;
    this.mentorsPerPage = 2; 
    this.totalPages = Math.ceil(mentors.length / this.mentorsPerPage);

    this.grid = document.getElementById('mentorGrid');
    this.prevBtn = document.getElementById('mentorPrevBtn');
    this.nextBtn = document.getElementById('mentorNextBtn');
    this.pageIndicator = document.getElementById('mentorPageIndicator');
    this.dotsContainer = document.getElementById('mentorPageDots');

    // if no such element, skip 
    if (!this.grid || !this.prevBtn || !this.nextBtn || !this.pageIndicator || !this.dotsContainer) {
      return;
    }

    this.init();
  }

  init() {
    this.renderMentors();
    this.renderPageDots();
    this.updatePageIndicator();
    this.bindEvents();
  }

  bindEvents() {
    this.prevBtn.addEventListener('click', () => this.handlePrevious());
    this.nextBtn.addEventListener('click', () => this.handleNext());
  }

  getCurrentMentors() {
    const start = this.currentIndex * this.mentorsPerPage;
    return mentors.slice(start, start + this.mentorsPerPage);
  }

  renderMentors() {
    const current = this.getCurrentMentors();
    this.grid.innerHTML = current.map(m => `
      <div class="testimonial-card">
        <div class="testimonial-content">
          <div class="testimonial-header">
            <div class="testimonial-avatar">
              <img src="${m.avatar || ''}" alt="${m.name}"
                ${m.avatar ? '' : 'style="display:none;"'}
                onload="this.style.removeProperty('display');"
                onerror="this.style.display='none';">

            </div>
            <div class="testimonial-info">
              <div class="testimonial-details">
                <div class="testimonial-name">${m.name}</div>
                <div class="testimonial-title">${m.title}</div>
                <div class="testimonial-company">${m.company}</div>
              </div>
              ${m.linkedinUrl ? `
              <a href="${m.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="linkedin-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>` : ''}
            </div>
          </div>

          <div class="testimonial-text">
            "${m.text}"
          </div>
        </div>
      </div>
    `).join('');
  }

  renderPageDots() {
    const pages = this.totalPages;
    this.dotsContainer.innerHTML = Array.from({ length: pages }, (_, i) => `
      <button class="page-dot ${i === this.currentIndex ? 'active' : ''}" data-page="${i}"></button>
    `).join('');

   
    this.dotsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('page-dot')) {
        const page = parseInt(e.target.dataset.page, 10);
        this.goToPage(page);
      }
    });
  }

  updatePageIndicator() {
    this.pageIndicator.textContent = `${this.currentIndex + 1} of ${this.totalPages}`;
  }

  updatePageDots() {
    const dots = this.dotsContainer.querySelectorAll('.page-dot');
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
    this.renderMentors();
    this.updatePageIndicator();
    this.updatePageDots();
  }
}

// 3) Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new MentorsCarousel();
});
