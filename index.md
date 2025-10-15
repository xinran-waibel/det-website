---
layout: page
title: Data Engineer Things
subtitle: 
slack_members: 7.5K+
medium_followers: 30K+
linkedin_followers: 40K+
newsletter_subscribers: 10K+
---

<script>window.BASE_URL = "{{ '' | absolute_url }}";</script>
<link rel="stylesheet" href="{{ '/assets/css/det-join-section.css' | absolute_url }}">
<script src="{{ '/assets/js/det-join-section.js' | absolute_url }}" defer></script>

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

  <!-- Why Join DET Section -->
  <section class="why-join-section">
      <div class="container">
          <!-- Header -->
          <div class="section-header">
              <h2 class="section-title">Why Join DET?</h2>
              <p class="section-description">
                  Discover the benefits of being part of a vibrant, supportive, and growing data engineering community.
              </p>
          </div>

        <!-- Tiles Grid -->
        <div class="tiles-grid">
            <div class="tile">
                <div class="tile-content">
                    <div class="tile-header">
                        <div class="tile-icon">
                            <span class="emoji">💬</span>
                        </div>
                        <div class="tile-info">
                            <h3 class="tile-title">Slack Community</h3>
                            <p class="tile-description">Enagage in data engineering discussions with 7.5K+ data professionals across the global.</p>
                        </div>
                    </div>
                    
                    <div class="tile-footer">
                        <a href="http://slack.dataengineerthings.org/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                            <b>Join Slack</b>
                            <svg class="external-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M7 17L17 7"></path>
                                <path d="M7 7h10v10"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="tile">
                <div class="tile-content">
                    <div class="tile-header">
                        <div class="tile-icon">
                            <span class="emoji">📧</span>
                        </div>
                        <div class="tile-info">
                            <h3 class="tile-title">Newsletter</h3>
                            <p class="tile-description">Stay up to date with the latest in data engineering and AI: industry trends, events, expert interviews, and learning resources.</p>
                        </div>
                    </div>
                    
                    <div class="tile-footer">
                        <a href="https://dataengineerthings.substack.com/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                            <b>Subscribe Now</b>
                            <svg class="external-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M7 17L17 7"></path>
                                <path d="M7 7h10v10"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="tile">
                <div class="tile-content">
                    <div class="tile-header">
                        <div class="tile-icon">
                            <span class="emoji">📖</span>
                        </div>
                        <div class="tile-info">
                            <h3 class="tile-title">Blogs</h3>
                            <p class="tile-description">Read technical articles and career stories written by community members. You can contribute to the DET Medium publication too!</p>
                        </div>
                    </div>
                    
                    <div class="tile-footer">
                        <a href="https://medium.com/data-engineer-things" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                            <b>Read Articles</b>
                            <svg class="external-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M7 17L17 7"></path>
                                <path d="M7 7h10v10"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="tile">
                <div class="tile-content">
                    <div class="tile-header">
                        <div class="tile-icon">
                            <span class="emoji">📅</span>
                        </div>
                        <div class="tile-info">
                            <h3 class="tile-title">Meetups & Webinars</h3>
                            <p class="tile-description">Attend in-person and virtual events to hear from industry experts and connect with the local data engineering community.</p>
                        </div>
                    </div>
                    
                    <div class="tile-footer">
                        <a href="https://www.dataengineerthings.org/event-landing-page/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                            <b>View Events</b>
                            <svg class="external-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M7 17L17 7"></path>
                                <path d="M7 7h10v10"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="tile">
                <div class="tile-content">
                    <div class="tile-header">
                        <div class="tile-icon">
                            <span class="emoji">🛠️</span>
                        </div>
                        <div class="tile-info">
                            <h3 class="tile-title">Resource Hub</h3>
                            <p class="tile-description">Recommended materials to help you expand the breath and depth of your data engineering skills.</p>
                        </div>
                    </div>
                    
                    <div class="tile-footer">
                        <a href="https://www.dataengineerthings.org/resource-hub/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                            <b>Read Resource</b>
                              <svg class="external-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M7 17L17 7"></path>
                                <path d="M7 7h10v10"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="tile">
                <div class="tile-content">
                    <div class="tile-header">
                        <div class="tile-icon">
                            <span class="emoji">🤝</span>
                        </div>
                        <div class="tile-info">
                            <h3 class="tile-title">Mentorship</h3>
                            <p class="tile-description">Get personalized guidance from seasoned professionals and make meaningful professional connections.</p>
                        </div>
                    </div>
                    
                    <div class="tile-footer">
                        <button class="btn btn-primary disabled" disabled>
                            <b>Coming Soon</b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>

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
      <!-- Controls -->
      <div class="testimonial-controls">
        <button class="control-btn" id="prevBtn">Prev</button>
        <span class="page-indicator" id="pageIndicator">1 of 5</span>
        <button class="control-btn" id="nextBtn">Next</button>
      </div>

      <!-- Grid -->
      <div class="testimonials-grid" id="testimonialsGrid"></div>

      <!-- Dots -->
      <div class="page-dots" id="pageDots"></div>
    </div>
  </section>


<!-- ### Our Partners

<a href="https://www.databricks.com"><img src="{{ '/assets/img/logo/databricks-logo.png' | absolute_url }}" alt="Databricks Logo" height="100"></a>
<a href="http://donut.com/"><img src="{{ '/assets/img/logo/donut-logo.png' | absolute_url }}" alt="Donut Logo" height="100"></a> -->
