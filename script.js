/* ==========================================
   PROWORK MARKETPLACE
   Vanilla JavaScript
========================================== */


/* ==========================================
   JOB DATA
========================================== */

const jobs = [
  {
    id: 1,
    title: "Build a modern SaaS analytics dashboard",
    category: "Development",
    budget: 2500,
    experience: "Intermediate",
    duration: "2–4 weeks",
    client: "Vertex Labs",
    initials: "VL",
    rating: "4.9",
    proposals: 8,
    posted: "2 hours ago",
    description:
      "We're looking for an experienced frontend developer to build a modern analytics dashboard for our SaaS platform. The dashboard should be fast, responsive and highly polished. You'll work closely with our product designer and backend engineer.",
    skills: ["React", "TypeScript", "Tailwind", "Charts"]
  },

  {
    id: 2,
    title: "Redesign our fintech mobile app",
    category: "Design",
    budget: 1800,
    experience: "Expert",
    duration: "2–4 weeks",
    client: "Finova",
    initials: "FN",
    rating: "5.0",
    proposals: 14,
    posted: "4 hours ago",
    description:
      "We need a senior product designer to completely rethink the UX of our mobile finance application. You will create user flows, high fidelity screens and a polished design system in Figma.",
    skills: ["Figma", "UX Design", "UI Design", "Prototyping"]
  },

  {
    id: 3,
    title: "SEO content strategy for B2B startup",
    category: "Marketing",
    budget: 950,
    experience: "Intermediate",
    duration: "1–2 weeks",
    client: "Northstar AI",
    initials: "NA",
    rating: "4.8",
    proposals: 11,
    posted: "7 hours ago",
    description:
      "Develop a practical SEO strategy for our AI startup. We need keyword research, competitor analysis, content clusters and a 90-day editorial roadmap.",
    skills: ["SEO", "Content Strategy", "Ahrefs", "Analytics"]
  },

  {
    id: 4,
    title: "Write landing page copy that converts",
    category: "Writing",
    budget: 650,
    experience: "Expert",
    duration: "Less than 1 week",
    client: "Launchly",
    initials: "LA",
    rating: "4.9",
    proposals: 17,
    posted: "9 hours ago",
    description:
      "We're launching a new productivity platform and need persuasive landing page copy. You should have experience writing SaaS copy and conversion-focused messaging.",
    skills: ["Copywriting", "SaaS", "Conversion", "Brand Voice"]
  },

  {
    id: 5,
    title: "Create a premium brand identity",
    category: "Design",
    budget: 3200,
    experience: "Expert",
    duration: "2–4 weeks",
    client: "Arc Studio",
    initials: "AS",
    rating: "5.0",
    proposals: 6,
    posted: "1 day ago",
    description:
      "We're looking for a brand designer to create a sophisticated visual identity including logo, typography, color system, social templates and brand guidelines.",
    skills: ["Branding", "Illustrator", "Typography", "Art Direction"]
  },

  {
    id: 6,
    title: "Full-stack e-commerce development",
    category: "Development",
    budget: 5000,
    experience: "Expert",
    duration: "1–3 months",
    client: "CommerceX",
    initials: "CX",
    rating: "4.9",
    proposals: 21,
    posted: "1 day ago",
    description:
      "Build a scalable e-commerce experience from the ground up. The ideal freelancer has strong experience with React, Node.js, payments and database architecture.",
    skills: ["React", "Node.js", "PostgreSQL", "Stripe"]
  },

  {
    id: 7,
    title: "Create animated product explainer",
    category: "Video",
    budget: 1200,
    experience: "Intermediate",
    duration: "1–2 weeks",
    client: "Orbit",
    initials: "OR",
    rating: "4.7",
    proposals: 9,
    posted: "2 days ago",
    description:
      "Produce a 60–90 second animated explainer video for our new software product. Storyboard, animation and final editing are required.",
    skills: ["After Effects", "Animation", "Storyboarding"]
  },

  {
    id: 8,
    title: "Build a conversion-focused Webflow site",
    category: "Development",
    budget: 2100,
    experience: "Intermediate",
    duration: "2–4 weeks",
    client: "Elevate",
    initials: "EL",
    rating: "4.9",
    proposals: 13,
    posted: "2 days ago",
    description:
      "Design and develop a premium Webflow marketing site. Strong visual attention and knowledge of conversion optimization are important.",
    skills: ["Webflow", "CSS", "UX", "SEO"]
  },

  {
    id: 9,
    title: "Virtual operations assistant",
    category: "Business",
    budget: 700,
    experience: "Entry",
    duration: "1–2 weeks",
    client: "ScaleUp",
    initials: "SU",
    rating: "4.8",
    proposals: 19,
    posted: "3 days ago",
    description:
      "Help our growing startup with research, documentation, scheduling and basic operational tasks.",
    skills: ["Research", "Notion", "Operations", "Excel"]
  },

  {
    id: 10,
    title: "Develop React Native fitness application",
    category: "Development",
    budget: 4200,
    experience: "Expert",
    duration: "1–3 months",
    client: "FitPulse",
    initials: "FP",
    rating: "4.9",
    proposals: 12,
    posted: "3 days ago",
    description:
      "We need an experienced React Native developer to build the first version of our fitness app for iOS and Android.",
    skills: ["React Native", "Firebase", "iOS", "Android"]
  },

  {
    id: 11,
    title: "Email marketing campaign setup",
    category: "Marketing",
    budget: 800,
    experience: "Intermediate",
    duration: "1–2 weeks",
    client: "GrowthDesk",
    initials: "GD",
    rating: "4.8",
    proposals: 7,
    posted: "4 days ago",
    description:
      "Create and optimize an automated email funnel including welcome series, lead nurturing and reactivation campaigns.",
    skills: ["Email Marketing", "Klaviyo", "Copywriting"]
  },

  {
    id: 12,
    title: "UX audit for productivity platform",
    category: "Design",
    budget: 1500,
    experience: "Expert",
    duration: "1–2 weeks",
    client: "FocusFlow",
    initials: "FF",
    rating: "5.0",
    proposals: 5,
    posted: "5 days ago",
    description:
      "Conduct a detailed UX audit of our productivity application and provide actionable recommendations for improving usability and conversion.",
    skills: ["UX Research", "Heuristic Analysis", "Figma"]
  }
];


/* ==========================================
   PROPOSALS
========================================== */

let proposals = JSON.parse(
  localStorage.getItem("proposals")
) || [
  {
    id: 101,
    jobId: 1,
    project: "Build a modern SaaS analytics dashboard",
    price: 2200,
    delivery: "3 weeks",
    status: "Pending",
    submitted: "Today"
  },

  {
    id: 102,
    jobId: 2,
    project: "Redesign our fintech mobile app",
    price: 1600,
    delivery: "2 weeks",
    status: "Accepted",
    submitted: "2 days ago"
  },

  {
    id: 103,
    jobId: 6,
    project: "Full-stack e-commerce development",
    price: 4500,
    delivery: "6 weeks",
    status: "Rejected",
    submitted: "5 days ago"
  }
];


/* ==========================================
   DOM
========================================== */

const jobsGrid = document.getElementById("jobsGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const budgetFilter = document.getElementById("budgetFilter");
const experienceFilter = document.getElementById("experienceFilter");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");

const jobModal = document.getElementById("jobModal");
const jobDetails = document.getElementById("jobDetails");

const proposalModal = document.getElementById("proposalModal");

const toast = document.getElementById("toast");
const toastTitle = document.getElementById("toastTitle");
const toastMessage = document.getElementById("toastMessage");


/* ==========================================
   RENDER JOBS
========================================== */

function renderJobs(list = jobs) {

  jobsGrid.innerHTML = "";

  resultsCount.textContent = list.length;

  if (!list.length) {

    emptyState.classList.remove("hidden");

    return;

  }

  emptyState.classList.add("hidden");


  list.forEach((job, index) => {

    const card = document.createElement("article");

    card.className = "job-card";

    card.style.animationDelay = `${index * 50}ms`;

    card.innerHTML = `

      <div class="job-top">

        <div class="client">

          <div class="client-avatar">
            ${job.initials}
          </div>

          <div>
            <strong>${job.client}</strong>
            <small>★ ${job.rating} · Verified client</small>
          </div>

        </div>

        <button
          class="save-job"
          data-save="${job.id}"
          aria-label="Save job"
        >
          ♡
        </button>

      </div>


      <h3 data-details="${job.id}">
        ${job.title}
      </h3>


      <div class="job-meta">

        <span class="category">
          ${job.category}
        </span>

        <span>◷ ${job.posted}</span>

        <span>◆ ${job.experience}</span>

      </div>


      <p class="job-description">
        ${job.description}
      </p>


      <div class="skills">

        ${job.skills.map(skill =>
          `<span class="skill">${skill}</span>`
        ).join("")}

      </div>


      <div class="job-bottom">

        <div class="budget">

          <strong>
            $${job.budget.toLocaleString()}
          </strong>

          <small>
            Fixed price · ${job.duration}
          </small>

        </div>


        <div class="proposals">

          <span>
            ${job.proposals} proposals
          </span>

          <br>

          <button
            class="apply-btn"
            data-apply="${job.id}"
          >
            Apply now →
          </button>

        </div>

      </div>

    `;

    jobsGrid.appendChild(card);

  });

}


/* ==========================================
   SEARCH + FILTER
========================================== */

function filterJobs() {

  const query =
    searchInput.value.trim().toLowerCase();

  const category =
    categoryFilter.value;

  const budget =
    budgetFilter.value;

  const experience =
    experienceFilter.value;


  const filtered = jobs.filter(job => {

    const searchable = `
      ${job.title}
      ${job.category}
      ${job.description}
      ${job.skills.join(" ")}
      ${job.client}
    `.toLowerCase();


    const matchesSearch =
      !query ||
      searchable.includes(query);


    const matchesCategory =
      category === "all" ||
      job.category === category;


    let matchesBudget = true;

    if (budget !== "all") {

      const amount = Number(budget);

      if (amount === 500) {
        matchesBudget = job.budget < 500;
      }

      if (amount === 1000) {
        matchesBudget =
          job.budget >= 500 &&
          job.budget <= 1000;
      }

      if (amount === 2000) {
        matchesBudget =
          job.budget > 1000 &&
          job.budget <= 2000;
      }

      if (amount === 5000) {
        matchesBudget = job.budget > 2000;
      }

    }


    const matchesExperience =
      experience === "all" ||
      job.experience === experience;


    return (
      matchesSearch &&
      matchesCategory &&
      matchesBudget &&
      matchesExperience
    );

  });


  renderJobs(filtered);

}


searchInput.addEventListener(
  "input",
  filterJobs
);

categoryFilter.addEventListener(
  "change",
  filterJobs
);

budgetFilter.addEventListener(
  "change",
  filterJobs
);

experienceFilter.addEventListener(
  "change",
  filterJobs
);

document.getElementById("searchBtn")
  .addEventListener("click", filterJobs);


/* Clear */

document.getElementById("clearFilters")
  .addEventListener("click", () => {

    searchInput.value = "";
    categoryFilter.value = "all";
    budgetFilter.value = "all";
    experienceFilter.value = "all";

    filterJobs();

  });


/* ==========================================
   SORT
========================================== */

document.querySelectorAll(".filter-chip")
  .forEach(button => {

    button.addEventListener("click", () => {

      document
        .querySelectorAll(".filter-chip")
        .forEach(btn =>
          btn.classList.remove("active")
        );

      button.classList.add("active");


      const type = button.textContent.trim();

      let sorted = [...jobs];


      if (type === "Newest") {

        sorted.reverse();

      }

      if (type === "Highest Budget") {

        sorted.sort(
          (a, b) => b.budget - a.budget
        );

      }


      renderJobs(sorted);

    });

  });


/* ==========================================
   ADVANCED FILTER
========================================== */

document.getElementById("advancedToggle")
  .addEventListener("click", () => {

    document
      .getElementById("advancedFilters")
      .classList.toggle("show");

  });


/* ==========================================
   JOB DETAILS
========================================== */

function openJobDetails(id) {

  const job = jobs.find(
    job => job.id === Number(id)
  );

  if (!job) return;


  jobDetails.innerHTML = `

    <div class="details-header">

      <span class="details-category">
        ${job.category}
      </span>

      <h2>
        ${job.title}
      </h2>

      <div class="details-client">

        <div class="client-avatar">
          ${job.initials}
        </div>

        <span>
          ${job.client} · ★ ${job.rating}
          · Verified client
        </span>

      </div>

    </div>


    <div class="details-body">

      <div class="details-content">

        <h3>About the project</h3>

        <p>
          ${job.description}
        </p>

        <br>

        <h3>Required skills</h3>

        <div class="skills detail-skills">

          ${job.skills.map(skill =>
            `<span class="detail-skill">${skill}</span>`
          ).join("")}

        </div>

      </div>


      <aside class="details-sidebar">

        <div class="detail-stat">
          <span>Budget</span>
          <strong>$${job.budget.toLocaleString()}</strong>
        </div>

        <div class="detail-stat">
          <span>Project type</span>
          <strong>Fixed price</strong>
        </div>

        <div class="detail-stat">
          <span>Experience</span>
          <strong>${job.experience}</strong>
        </div>

        <div class="detail-stat">
          <span>Timeline</span>
          <strong>${job.duration}</strong>
        </div>

        <div class="detail-stat">
          <span>Proposals</span>
          <strong>${job.proposals}</strong>
        </div>

        <div class="detail-stat">
          <span>Posted</span>
          <strong>${job.posted}</strong>
        </div>

      </aside>

    </div>


    <div class="details-actions">

      <button
        class="secondary-btn"
        onclick="closeJobModal()"
      >
        Close
      </button>

      <button
        class="primary-btn"
        onclick="openProposal(${job.id})"
      >
        Submit proposal →
      </button>

    </div>

  `;


  jobModal.classList.add("open");

  document.body.style.overflow = "hidden";

}


function closeJobModal() {

  jobModal.classList.remove("open");

  document.body.style.overflow = "";

}


document.getElementById("closeModal")
  .addEventListener("click", closeJobModal);


jobModal.addEventListener("click", e => {

  if (e.target === jobModal) {
    closeJobModal();
  }

});


/* Job click delegation */

jobsGrid.addEventListener("click", e => {

  const details = e.target.closest("[data-details]");

  if (details) {

    openJobDetails(details.dataset.details);

    return;

  }


  const apply = e.target.closest("[data-apply]");

  if (apply) {

    openProposal(apply.dataset.apply);

    return;

  }


  const save = e.target.closest("[data-save]");

  if (save) {

    save.classList.toggle("saved");

    if (save.classList.contains("saved")) {

      save.textContent = "♥";

      showToast(
        "Job saved",
        "Added to your saved jobs."
      );

    } else {

      save.textContent = "♡";

    }

  }

});


/* ==========================================
   PROPOSAL MODAL
========================================== */

function openProposal(id) {

  const job = jobs.find(
    job => job.id === Number(id)
  );

  if (!job) return;


  closeJobModal();


  document.getElementById("proposalJobId")
    .value = job.id;


  document.getElementById("proposalJobName")
    .textContent =
      `You're applying for: ${job.title}`;


  document.getElementById("proposalPrice")
    .value = job.budget;


  proposalModal.classList.add("open");

  document.body.style.overflow = "hidden";

}


function closeProposalModal() {

  proposalModal.classList.remove("open");

  document.body.style.overflow = "";

}


document.getElementById("closeProposal")
  .addEventListener(
    "click",
    closeProposalModal
  );


proposalModal.addEventListener("click", e => {

  if (e.target === proposalModal) {
    closeProposalModal();
  }

});


/* ==========================================
   SUBMIT PROPOSAL
========================================== */

document.getElementById("proposalForm")
  .addEventListener("submit", e => {

    e.preventDefault();


    const jobId =
      Number(
        document.getElementById("proposalJobId").value
      );

    const job =
      jobs.find(job => job.id === jobId);


    const cover =
      document.getElementById("coverLetter").value.trim();

    const price =
      Number(
        document.getElementById("proposalPrice").value
      );

    const delivery =
      document.getElementById("proposalDelivery").value;

    const skills =
      document.getElementById("proposalSkills").value.trim();


    if (cover.length < 40) {

      showToast(
        "Cover letter too short",
        "Write at least 40 characters."
      );

      return;

    }


    if (!price || price <= 0) {

      showToast(
        "Invalid price",
        "Please enter a valid proposed price."
      );

      return;

    }


    if (!delivery || !skills) {

      showToast(
        "Missing information",
        "Please complete all fields."
      );

      return;

    }


    const newProposal = {

      id: Date.now(),

      jobId,

      project: job.title,

      price,

      delivery,

      status: "Pending",

      submitted: "Just now"

    };


    proposals.unshift(newProposal);


    localStorage.setItem(
      "proposals",
      JSON.stringify(proposals)
    );


    updateProposalStats();

    renderProposals();


    document.getElementById("proposalForm")
      .reset();


    closeProposalModal();


    showToast(
      "Proposal submitted",
      "The client can now review your proposal."
    );

  });


/* ==========================================
   PROPOSALS
========================================== */

function renderProposals() {

  const list =
    document.getElementById("proposalsList");


  const filter =
    document.getElementById(
      "proposalStatusFilter"
    ).value;


  const filtered =
    filter === "all"
      ? proposals
      : proposals.filter(
          proposal => proposal.status === filter
        );


  if (!filtered.length) {

    list.innerHTML = `

      <div class="empty-state">

        <div class="empty-icon">↗</div>

        <h3>No proposals found</h3>

        <p>
          There are no proposals with this status.
        </p>

      </div>

    `;

    return;

  }


  list.innerHTML = filtered.map(proposal => `

    <div class="proposal-row">

      <div class="proposal-project">

        <strong>
          ${proposal.project}
        </strong>

        <small>
          Submitted ${proposal.submitted}
        </small>

      </div>


      <div class="proposal-info">

        <span>Your bid</span>

        <strong>
          $${proposal.price.toLocaleString()}
        </strong>

      </div>


      <div class="proposal-info">

        <span>Delivery</span>

        <strong>
          ${proposal.delivery}
        </strong>

      </div>


      <div>

        <span class="status ${proposal.status}">
          ${proposal.status}
        </span>

      </div>


      <div class="proposal-action">

        <button
          class="view-proposal"
          onclick="viewProposal(${proposal.id})"
        >
          View
        </button>

      </div>

    </div>

  `).join("");

}


function updateProposalStats() {

  const submitted =
    proposals.length;

  const pending =
    proposals.filter(
      p => p.status === "Pending"
    ).length;

  const accepted =
    proposals.filter(
      p => p.status === "Accepted"
    ).length;


  document.getElementById(
    "submittedStat"
  ).textContent = submitted;

  document.getElementById(
    "pendingStat"
  ).textContent = pending;

  document.getElementById(
    "acceptedStat"
  ).textContent = accepted;

  document.getElementById(
    "proposalCount"
  ).textContent = pending;

}


function viewProposal(id) {

  const proposal =
    proposals.find(
      p => p.id === id
    );

  if (!proposal) return;


  showToast(
    `Proposal: ${proposal.status}`,
    `Your bid is $${proposal.price.toLocaleString()} for ${proposal.delivery}.`
  );

}


document.getElementById(
  "proposalStatusFilter"
).addEventListener(
  "change",
  renderProposals
);


/* ==========================================
   POST JOB
========================================== */

const description =
  document.getElementById("jobDescription");

description.addEventListener(
  "input",
  () => {

    const count =
      description.value.length;

    document.getElementById(
      "descriptionCount"
    ).textContent = count;

    if (count > 1000) {

      description.value =
        description.value.substring(0, 1000);

    }

  }
);


/* Skills */

const skillInput =
  document.getElementById("skillInput");

const skillTags =
  document.getElementById("skillTags");

let selectedSkills = [];


skillInput.addEventListener(
  "keydown",
  e => {

    if (e.key !== "Enter") return;

    e.preventDefault();


    const value =
      skillInput.value.trim();


    if (
      value &&
      !selectedSkills.includes(value) &&
      selectedSkills.length < 8
    ) {

      selectedSkills.push(value);

      renderSkills();

    }


    skillInput.value = "";

  }
);


function renderSkills() {

  skillTags.innerHTML =
    selectedSkills.map(
      (skill, index) => `

        <span class="skill-tag">

          ${skill}

          <button
            type="button"
            onclick="removeSkill(${index})"
          >
            ×
          </button>

        </span>

      `
    ).join("");

}


function removeSkill(index) {

  selectedSkills.splice(index, 1);

  renderSkills();

}


/* Post form */

document.getElementById("postJobForm")
  .addEventListener("submit", e => {

    e.preventDefault();


    const title =
      document.getElementById("jobTitle")
        .value.trim();

    const category =
      document.getElementById("jobCategory")
        .value;

    const budget =
      Number(
        document.getElementById("jobBudget")
          .value
      );

    const jobDescription =
      document.getElementById("jobDescription")
        .value.trim();


    if (title.length < 10) {

      showToast(
        "Title too short",
        "Write a clearer project title."
      );

      return;

    }


    if (!category) {

      showToast(
        "Select a category",
        "Choose the category that best matches the job."
      );

      return;

    }


    if (!budget || budget < 10) {

      showToast(
        "Invalid budget",
        "Enter a budget of at least $10."
      );

      return;

    }


    if (jobDescription.length < 30) {

      showToast(
        "Description too short",
        "Add more details about your project."
      );

      return;

    }


    if (selectedSkills.length < 1) {

      showToast(
        "Add skills",
        "Add at least one required skill."
      );

      return;

    }


    const newJob = {

      id: Date.now(),

      title,

      category,

      budget,

      experience:
        document.getElementById(
          "jobExperience"
        ).value || "Intermediate",

      duration:
        document.getElementById(
          "jobDuration"
        ).value || "2–4 weeks",

      client: "Your Company",

      initials: "YC",

      rating: "New",

      proposals: 0,

      posted: "Just now",

      description: jobDescription,

      skills: [...selectedSkills]

    };


    jobs.unshift(newJob);


    renderJobs(jobs);


    e.target.reset();

    selectedSkills = [];

    renderSkills();


    showToast(
      "Job published",
      "Your new opportunity is now live."
    );


    switchSection("jobs");

  });


/* ==========================================
   NAVIGATION
========================================== */

const sectionMap = {

  jobs: "jobsSection",

  proposals: "proposalsSection",

  post: "postSection",

  manage: "manageSection",

  saved: "savedSection"

};


function switchSection(section) {

  const target =
    sectionMap[section];

  if (!target) return;


  document
    .querySelectorAll(".section")
    .forEach(section =>
      section.classList.remove("active")
    );


  document
    .getElementById(target)
    .classList.add("active");


  document
    .querySelectorAll(".nav-item")
    .forEach(item =>
      item.classList.remove("active")
    );


  const nav =
    document.querySelector(
      `.nav-item[data-section="${section}"]`
    );


  if (nav) nav.classList.add("active");


  const labels = {

    jobs: "Find Jobs",

    proposals: "My Proposals",

    post: "Post a Job",

    manage: "Manage Jobs",

    saved: "Saved Jobs"

  };


  document.getElementById(
    "breadcrumbText"
  ).textContent = labels[section];


  document
    .getElementById("sidebar")
    .classList.remove("open");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


document.addEventListener(
  "click",
  e => {

    const target =
      e.target.closest("[data-section]");

    if (!target) return;


    switchSection(
      target.dataset.section
    );

  }
);


/* ==========================================
   MOBILE MENU
========================================== */

document.getElementById("mobileMenu")
  .addEventListener("click", () => {

    document
      .getElementById("sidebar")
      .classList.toggle("open");

  });


/* ==========================================
   TOAST
========================================== */

let toastTimer;


function showToast(title, message) {

  toastTitle.textContent = title;

  toastMessage.textContent = message;

  toast.classList.add("show");


  clearTimeout(toastTimer);


  toastTimer = setTimeout(() => {

    toast.classList.remove("show");

  }, 3500);

}


/* ==========================================
   INITIALIZE
========================================== */

renderJobs();

renderProposals();

updateProposalStats();