---
layout: page
title: Data Engineer Things
subtitle: 
slack_members: 7.5K+
medium_followers: 30K+
linkedin_followers: 40K+
newsletter_subscribers: 7.5K+
---

<link rel="stylesheet" href="det-join-section.css">
  <script src="det-join-section.js"></script>

<h2 style="font-size:1.3rem; color:#003366; font-weight:400; margin-top:0; margin-bottom:2rem;">
  <span id="typewriter-subtitle"></span>
</h2>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const text = "Created & curated by Data Engineers... For Data Engineers...";
  const el = document.getElementById("typewriter-subtitle");
  let i = 0;
  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 20); // Faster typing speed
    }
  }
  type();
});
</script>

### What is DET

**Data Engineer Things** (DET) is a global data engineering community for data professionals to connect and learn. Read about our story [here]({% link our-story.md %}).

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
  <a href="https://www.linkedin.com/company/data-engineer-things/" target="_blank" style="flex: 1; min-width: 180px; text-decoration: none;">
    <div style="background: #f5f5f5; border-radius: 10px; padding: 1.5rem; text-align: center;">
      <div style="font-size: 2.5rem; font-weight: bold; color: rgb(10, 149, 65);">{{page.linkedin_followers}}</div>
      <div style="font-size: 1.1rem; color: #222;">LinkedIn Followers</div>
    </div>
  </a>
  <a href="https://dataengineerthings.substack.com" target="_blank" style="flex: 1; min-width: 180px; text-decoration: none;">
    <div style="background: #f5f5f5; border-radius: 10px; padding: 1.5rem; text-align: center;">
      <div style="font-size: 2.5rem; font-weight: bold; color:rgb(10, 149, 65);">{{page.newsletter_subscribers}}</div>
      <div style="font-size: 1.1rem; color: #222;">Newsletter Subscribers</div>
    </div>
  </a>
  <a href="https://medium.com/data-engineer-things" target="_blank" style="flex: 1; min-width: 180px; text-decoration: none;">
    <div style="background: #f5f5f5; border-radius: 10px; padding: 1.5rem; text-align: center;">
      <div style="font-size: 2.5rem; font-weight: bold; color:rgb(10, 149, 65);">{{page.medium_followers}}</div>
      <div style="font-size: 1.1rem; color: #222;">Medium Followers</div>
    </div>
  </a>
</div>

<div style="margin-bottom: 2.5rem;"></div>

### Why join DET?
<div style="margin-top: 1.5rem; margin-bottom: 1.5rem; font-size: 1.15rem; color: #444; text-align: left;">
  Discover the benefits of being part of a vibrant, supportive, and growing data engineering community.
</div>

<div style="display: flex; flex-wrap: wrap; gap: 2rem; margin-bottom: 2rem;">

  <div style="flex: 1 1 250px; background: #f5f5f5; border-radius: 10px; padding: 1.5rem; min-width: 220px; text-align: left;">
    <div style="font-size: 2rem;">💬</div>
    <h4>Active Slack Community</h4>
    <p>
      Join our <a href="http://join.det.life" target="_blank"><strong>Slack</strong></a> group with {{ page.slack_members }} members. Ask questions, discuss data engineering topics, and connect with professionals worldwide.
    </p>
  </div>

  <div style="flex: 1 1 250px; background: #f5f5f5; border-radius: 10px; padding: 1.5rem; min-width: 220px; text-align: left;">
    <div style="font-size: 2rem;">📰</div>
    <h4>Newsletters & Publications</h4>
    <p>
      Stay updated with our <a href="https://dataengineerthings.substack.com/" target="_blank"><strong>newsletter</strong></a> and read insights from data engineers on our <a href="https://medium.com/data-engineer-things" target="_blank"><strong>Medium publication</strong></a>.
    </p>
  </div>

  <div style="flex: 1 1 250px; background: #f5f5f5; border-radius: 10px; padding: 1.5rem; min-width: 220px; text-align: left;">
    <div style="font-size: 2rem;">🎥</div>
    <h4>Webinars & Events</h4>
    <p>
      Attend regular <a href="https://www.youtube.com/@data-engineer-things/streams" target="_blank"><strong>webinars</strong></a> and events featuring domain experts in data engineering.
    </p>
  </div>

  <div style="flex: 1 1 250px; background: #f5f5f5; border-radius: 10px; padding: 1.5rem; min-width: 220px; text-align: left;">
    <div style="font-size: 2rem;">🤝</div>
    <h4>Networking & Support</h4>
    <p>
      Build meaningful connections, get support, and grow together with a welcoming community of data professionals.
    </p>
  </div>

</div>

  <!-- What Members Are Saying Section -->
  <section class="testimonials-section">
      <div class="container">
          <!-- Section Header -->
          <div class="section-header">
              <h2 class="section-title">What Members Are Saying</h2>
              <p class="section-description">
                  Hear from real data engineers about how DET has supported their growth, learning, and connection in the community.
              </p>
          </div>

      <!-- Navigation Controls -->
      <div class="testimonial-controls">
          <button class="control-btn" id="prevBtn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 18l-6-6 6-6"></path>
              </svg>
          </button>
          
          <span class="page-indicator" id="pageIndicator">1 of 5</span>
          
          <button class="control-btn" id="nextBtn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6"></path>
              </svg>
          </button>
      </div>

      <!-- Testimonials Grid -->
      <div class="testimonials-grid" id="testimonialsGrid">
          <!-- Testimonials will be inserted here by JavaScript -->
      </div>

      <!-- Page Indicators -->
      <div class="page-dots" id="pageDots">
          <!-- Dots will be inserted here by JavaScript -->
      </div>
    </div>
  </section>


### Our Partners

<a href="https://www.databricks.com"><img src="/assets/img/logo/databricks-logo.png" alt="Databricks Logo" height="100"></a>
<a href="http://donut.com/"><img src="/assets/img/logo/donut-logo.png" alt="Donut Logo" height="100"></a>
