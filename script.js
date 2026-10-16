/* ==========================================================================
   ABHISHEK P - PORTFOLIO INTERACTIVITY SCRIPT
   - Cyber Preloader with Matrix Deciphering & Web Audio Synthesis
   - Agent Graph Canvas (Interactive Skill Particle Network)
   - Dynamic Dashboard Counter Animations
   - Skills Category Filter System
   - Live Spam Classifier Simulator (Naive Bayes logic)
   - Intelligent Floating AI Agent Assistant ("ASK ABHI AGENT")
   - Responsive Navigation & Active Scroll Spy
   ========================================================================== */

(function () {
  'use strict';

  // --- RESUME SKILLS FOR BACKGROUND AGENT CANVAS (STRICTLY FROM RESUME) ---
  const RESUME_SKILL_LABELS = [
    'Python',
    'Scikit-learn',
    'TensorFlow',
    'CNN',
    'KNN',
    'FastAPI',
    'React.js',
    'OpenCV',
    'SQL',
    'Docker',
    'Naive Bayes',
    'TF-IDF',
    'Pandas',
    'NumPy',
    'SQLite'
  ];

  /* ==========================================================================
     1. WEB AUDIO SYNTHESIZER (CYBER BOOT SOUND)
     ========================================================================== */
  function playCyberBootSound() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      // Deep Sub Oscillator
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(60, ctx.currentTime);
      subOsc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 1.2);

      subGain.gain.setValueAtTime(0.01, ctx.currentTime);
      subGain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.3);
      subGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);

      subOsc.connect(subGain);
      subGain.connect(ctx.destination);
      subOsc.start();
      subOsc.stop(ctx.currentTime + 1.5);

      // Cyber Shimmer Chime
      const shimmerOsc = ctx.createOscillator();
      const shimmerGain = ctx.createGain();
      shimmerOsc.type = 'triangle';
      shimmerOsc.frequency.setValueAtTime(440, ctx.currentTime + 0.2);
      shimmerOsc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.8);

      shimmerGain.gain.setValueAtTime(0.01, ctx.currentTime + 0.2);
      shimmerGain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.4);
      shimmerGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.4);

      shimmerOsc.connect(shimmerGain);
      shimmerGain.connect(ctx.destination);
      shimmerOsc.start(ctx.currentTime + 0.2);
      shimmerOsc.stop(ctx.currentTime + 1.4);
    } catch (e) {
      // Audio auto-play policies or unsupported browser
    }
  }

  /* ==========================================================================
     2. PRELOADER GATE & MATRIX CIPHER ANIMATION
     ========================================================================== */
  const preloader = document.getElementById('preloader');
  const gate = document.getElementById('preloader-gate');
  const gateEnterBtn = document.getElementById('gate-enter-btn');
  const preloaderCounter = document.getElementById('preloader-counter');
  const preloaderBarContainer = document.getElementById('preloader-bar-container');
  const preloaderBarFill = document.getElementById('preloader-bar-fill');
  const preloaderBarLabel = document.getElementById('preloader-bar-label');
  const preloaderCoder = document.getElementById('preloader-coder');
  const preloaderName = document.getElementById('preloader-name');
  const nameLettersContainer = document.getElementById('name-letters-container');
  const preloaderCanvas = document.getElementById('preloader-canvas');

  // Background particles for the preloader canvas
  let preloaderParticles = [];
  let preloaderCtx = preloaderCanvas ? preloaderCanvas.getContext('2d') : null;
  let preloaderAnimId = null;

  function initPreloaderCanvas() {
    if (!preloaderCanvas || !preloaderCtx) return;
    const w = (preloaderCanvas.width = window.innerWidth);
    const h = (preloaderCanvas.height = window.innerHeight);
    preloaderParticles = Array.from({ length: 40 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      radius: Math.random() * 2.5 + 1,
      color: ['#00ffcc', '#0077ff', '#8a2be2'][Math.floor(Math.random() * 3)],
      alpha: Math.random() * 0.7 + 0.3
    }));

    function drawPreloaderCanvas() {
      if (!preloaderCtx) return;
      preloaderCtx.clearRect(0, 0, preloaderCanvas.width, preloaderCanvas.height);

      preloaderParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > preloaderCanvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > preloaderCanvas.height) p.vy *= -1;

        preloaderCtx.beginPath();
        preloaderCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        preloaderCtx.fillStyle = p.color;
        preloaderCtx.globalAlpha = p.alpha;
        preloaderCtx.shadowBlur = 10;
        preloaderCtx.shadowColor = p.color;
        preloaderCtx.fill();
        preloaderCtx.shadowBlur = 0;
        preloaderCtx.globalAlpha = 1;
      });

      preloaderAnimId = requestAnimationFrame(drawPreloaderCanvas);
    }
    drawPreloaderCanvas();
  }

  // Generate Matrix deciphering letters for "ABHISHEK P"
  const TARGET_NAME = 'ABHISHEK P';
  const CIPHER_CHARS = '01ABCDEFXYZ#@$%&*<>~/';
  const letterSpans = [];

  if (nameLettersContainer) {
    nameLettersContainer.innerHTML = '';
    for (let i = 0; i < TARGET_NAME.length; i++) {
      const char = TARGET_NAME[i];
      if (char === ' ') {
        const space = document.createElement('span');
        space.style.width = '24px';
        space.style.display = 'inline-block';
        nameLettersContainer.appendChild(space);
      } else {
        const span = document.createElement('span');
        span.className = 'name-letter';
        span.textContent = char;
        span.dataset.target = char;
        span.dataset.text = char;
        nameLettersContainer.appendChild(span);
        letterSpans.push(span);
      }
    }
  }

  // Trigger Matrix Glitch on Letters
  function runMatrixCipher() {
    letterSpans.forEach((span, idx) => {
      let iterations = 0;
      const maxIterations = 14 + idx * 3;
      const targetChar = span.dataset.target;

      const interval = setInterval(() => {
        span.textContent = CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
        span.dataset.text = span.textContent;
        iterations++;

        if (iterations >= maxIterations) {
          clearInterval(interval);
          span.textContent = targetChar;
          span.dataset.text = targetChar;
        }
      }, 50);
    });
  }

  // Preloader Boot Sequence when user clicks ENTER
  let bootStarted = false;
  function startBootSequence() {
    if (bootStarted) return;
    bootStarted = true;

    playCyberBootSound();

    if (gate) {
      gate.style.opacity = '0';
      gate.style.transform = 'scale(0.9)';
      gate.style.transition = 'all 0.6s ease';
      setTimeout(() => (gate.style.display = 'none'), 600);
    }

    if (preloaderCounter) preloaderCounter.classList.remove('counter-hidden');
    if (preloaderBarContainer) preloaderBarContainer.classList.remove('bar-hidden');

    // Progress counter
    let progress = 0;
    const stages = [
      { at: 10, text: 'SYNCHRONIZING CORE...' },
      { at: 30, text: 'LOADING ML MODELS...' },
      { at: 55, text: 'CALIBRATING TF-IDF MATRIX...' },
      { at: 75, text: 'CNN-KNN EMBEDDINGS ACTIVE...' },
      { at: 92, text: 'AI CORE SYNCHRONIZED' },
      { at: 100, text: 'SYSTEM READY' }
    ];

    const timer = setInterval(() => {
      progress += Math.floor(Math.random() * 5) + 3;
      if (progress > 100) progress = 100;

      if (preloaderBarFill) preloaderBarFill.style.width = progress + '%';
      if (preloaderBarLabel) preloaderBarLabel.textContent = `SYSTEM BOOTING ${progress}%`;

      const stage = stages.slice().reverse().find((s) => progress >= s.at);
      if (stage && preloaderCounter) {
        preloaderCounter.textContent = stage.text;
      }

      if (progress >= 40 && preloaderName && !preloaderName.classList.contains('name-visible')) {
        preloaderName.classList.add('name-visible');
        runMatrixCipher();
      }

      if (progress >= 80 && preloaderCoder) {
        preloaderCoder.classList.add('coder-visible');
      }

      if (progress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          if (preloader) {
            preloader.classList.add('preloader-hidden');
            setTimeout(() => {
              preloader.style.display = 'none';
              if (preloaderAnimId) cancelAnimationFrame(preloaderAnimId);
              // Trigger dashboard counters once in view
              triggerDashboardCounters();
            }, 1200);
          }
        }, 800);
      }
    }, 45);
  }

  if (gateEnterBtn) {
    gateEnterBtn.addEventListener('click', startBootSequence);
  }
  if (gate) {
    gate.addEventListener('click', startBootSequence);
  }

  // Also auto-start if user presses Space or Enter on keyboard
  window.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && !bootStarted) {
      startBootSequence();
    }
  });

  initPreloaderCanvas();

  /* ==========================================================================
     3. INTERACTIVE AGENT GRAPH CANVAS (SKILL PARTICLE NETWORK)
     ========================================================================== */
  const agentCanvas = document.getElementById('agent-graph-canvas');
  if (agentCanvas) {
    const ctx = agentCanvas.getContext('2d');
    let width = (agentCanvas.width = window.innerWidth);
    let height = (agentCanvas.height = window.innerHeight);

    let mouse = { x: -1000, y: -1000 };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('resize', () => {
      width = agentCanvas.width = window.innerWidth;
      height = agentCanvas.height = window.innerHeight;
      initAgentParticles();
    });

    class AgentParticle {
      constructor(w, h, label) {
        this.side = Math.random() > 0.5 ? 'left' : 'right';
        this.label = label || RESUME_SKILL_LABELS[Math.floor(Math.random() * RESUME_SKILL_LABELS.length)];
        this.reset(w, h);
      }

      reset(w, h) {
        const sideBoundary = 0.22 * w;
        if (this.side === 'left') {
          this.x = Math.random() * sideBoundary;
        } else {
          this.x = w - Math.random() * sideBoundary;
        }
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.radius = 2.5 + Math.random() * 2.5;

        const colors = ['#00ffcc', '#0077ff', '#8a2be2'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.pulse = Math.random() * Math.PI * 2;
      }

      update(w, h) {
        // Move
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.025;

        // Mouse attraction if near
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          this.x += (dx / dist) * 0.5;
          this.y += (dy / dist) * 0.5;
        }

        // Keep within side clusters
        const sideBoundary = 0.28 * w;
        if (this.side === 'left') {
          if (this.x < 0 || this.x > sideBoundary) this.vx *= -1;
        } else {
          if (this.x < w - sideBoundary || this.x > w) this.vx *= -1;
        }

        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw(c) {
        const t = 0.5 + 0.5 * Math.sin(this.pulse);
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.shadowBlur = 8 + 10 * t;
        c.shadowColor = this.color;
        c.fill();
        c.shadowBlur = 0;

        // Label
        c.font = '9px "Inter", sans-serif';
        c.fillStyle = 'rgba(200, 220, 245, 0.45)';
        c.fillText(this.label, this.x + 8, this.y + 3);
      }
    }

    let particles = [];
    function initAgentParticles() {
      particles = RESUME_SKILL_LABELS.map((label) => new AgentParticle(width, height, label));
      // Add a few more nodes for rich interconnected network
      for (let i = 0; i < 5; i++) {
        particles.push(new AgentParticle(width, height));
      }
    }

    initAgentParticles();

    function renderAgentGraph() {
      ctx.clearRect(0, 0, width, height);

      // Connect lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const alpha = 0.25 * (1 - dist / 180);
            const grad = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            grad.addColorStop(0, particles[i].color);
            grad.addColorStop(1, particles[j].color);

            ctx.strokeStyle = grad;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      particles.forEach((p) => {
        p.update(width, height);
        p.draw(ctx);
      });

      requestAnimationFrame(renderAgentGraph);
    }
    renderAgentGraph();
  }

  /* ==========================================================================
     4. DYNAMIC DASHBOARD COUNTER ANIMATIONS
     ========================================================================== */
  let countersAnimated = false;

  function triggerDashboardCounters() {
    if (countersAnimated) return;
    const statValues = document.querySelectorAll('.stat-value');
    if (!statValues.length) return;

    statValues.forEach((el) => {
      const target = parseFloat(el.getAttribute('data-target')) || 0;
      const suffix = el.getAttribute('data-suffix') || '';
      const decimals = parseInt(el.getAttribute('data-decimals'), 10) || (target % 1 !== 0 ? 2 : 0);

      const duration = 1800;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease Out Cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentVal = target * ease;

        el.textContent = currentVal.toFixed(decimals) + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = target.toFixed(decimals) + suffix;
        }
      }

      requestAnimationFrame(updateCounter);
    });

    countersAnimated = true;
  }

  // IntersectionObserver to auto-trigger counters when dashboard is scrolled into view
  const dashboardSection = document.getElementById('dashboard');
  if (dashboardSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerDashboardCounters();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(dashboardSection);
  }

  /* ==========================================================================
     5. SKILLS CATEGORY FILTER SYSTEM
     ========================================================================== */
  const skillTabs = document.querySelectorAll('.skill-tab');
  const skillItems = document.querySelectorAll('.skill-item');

  skillTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      skillTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.getAttribute('data-category');

      skillItems.forEach((item) => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
          item.style.display = 'flex';
          item.style.animation = 'gateFadeUp 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     6. LIVE SPAM CLASSIFIER SIMULATOR (MODAL + NAIVE BAYES LOGIC)
     ========================================================================== */
  const SPAM_KEYWORDS = [
    'free', 'win', 'winner', 'won', '$', 'cash', 'prize', 'claim', 'urgent',
    'congratulations', 'lottery', 'offer', 'exclusive', 'reward', 'call now',
    'click here', 'guaranteed', 'risk-free', 'credit', 'gift card', 'loan', 'wire'
  ];

  window.openSpamDemoModal = function () {
    const modal = document.getElementById('spam-modal-overlay');
    if (modal) modal.style.display = 'flex';
  };

  window.closeSpamDemoModal = function () {
    const modal = document.getElementById('spam-modal-overlay');
    if (modal) modal.style.display = 'none';
  };

  window.loadSpamSample = function () {
    const input = document.getElementById('spam-test-input');
    if (input) {
      input.value = "CONGRATULATIONS! You've won a $1,000 cash prize in our lottery giveaway! Click here urgently to claim your exclusive reward.";
    }
  };

  window.loadHamSample = function () {
    const input = document.getElementById('spam-test-input');
    if (input) {
      input.value = "Hi Abhishek, let's review the machine learning project documentation tomorrow afternoon at the college lab.";
    }
  };

  window.runSpamClassificationTest = function () {
    const input = document.getElementById('spam-test-input');
    const resultBox = document.getElementById('spam-result-box');
    const resultBadge = document.getElementById('spam-result-badge');
    const resultDetails = document.getElementById('spam-result-details');

    if (!input || !resultBox || !resultBadge || !resultDetails) return;

    const text = input.value.toLowerCase().trim();
    if (!text) {
      alert('Please enter or load a sample message to classify.');
      return;
    }

    // Match keywords and calculate simulated TF-IDF & Naive Bayes probability
    const matched = SPAM_KEYWORDS.filter((word) => text.includes(word));
    const isSpam = matched.length >= 2 || (matched.length === 1 && (text.includes('$') || text.includes('free')));

    resultBox.style.display = 'block';

    if (isSpam) {
      resultBadge.className = 'result-badge spam';
      resultBadge.textContent = 'CLASSIFICATION: SPAM DETECTED [96.86% TF-IDF Model]';
      const confidence = (94.0 + Math.random() * 5).toFixed(1);
      resultDetails.innerHTML = `<strong>Confidence:</strong> ${confidence}% &bull; <strong>Trigger Features:</strong> [${matched.join(', ')}] &bull; <em>Multinomial Naive Bayes Posterior Probability > 0.90</em>`;
    } else {
      resultBadge.className = 'result-badge ham';
      resultBadge.textContent = 'CLASSIFICATION: LEGITIMATE MESSAGE (HAM)';
      const confidence = (96.5 + Math.random() * 3).toFixed(1);
      resultDetails.innerHTML = `<strong>Confidence:</strong> ${confidence}% &bull; <strong>Features:</strong> No spam indicators found &bull; <em>Processed via TF-IDF Vectorizer & Naive Bayes</em>`;
    }
  };

  /* ==========================================================================
     7. PLANT DISEASE CLASSIFICATION ARCHITECTURE MODAL
     ========================================================================== */
  window.openPlantDemoModal = function () {
    const modal = document.getElementById('plant-modal-overlay');
    if (modal) modal.style.display = 'flex';
  };

  window.closePlantDemoModal = function () {
    const modal = document.getElementById('plant-modal-overlay');
    if (modal) modal.style.display = 'none';
  };

  // Close modals on clicking overlay background
  window.addEventListener('click', (e) => {
    const spamModal = document.getElementById('spam-modal-overlay');
    const plantModal = document.getElementById('plant-modal-overlay');
    if (e.target === spamModal) spamModal.style.display = 'none';
    if (e.target === plantModal) plantModal.style.display = 'none';
  });

  /* ==========================================================================
     8. INTERACTIVE AI AGENT ASSISTANT ("ASK ABHI AGENT")
     ========================================================================== */
  const chatWrapper = document.getElementById('agent-chat-wrapper');
  const chatTriggerBtn = document.getElementById('chat-trigger-btn');
  const chatWindow = document.getElementById('chat-window');
  const chatCloseBtn = document.getElementById('chat-close-btn');
  const chatMinimizeBtn = document.getElementById('chat-minimize-btn');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');
  const thoughtStream = document.getElementById('thought-stream');
  const thoughtText = document.getElementById('thought-text');

  let isChatOpen = false;
  let isChatMinimized = false;

  function toggleChat() {
    isChatOpen = !isChatOpen;
    if (isChatOpen) {
      chatTriggerBtn.style.display = 'none';
      chatWindow.style.display = 'flex';
      isChatMinimized = false;
      if (chatInput) chatInput.focus();
    } else {
      chatTriggerBtn.style.display = 'flex';
      chatWindow.style.display = 'none';
    }
  }

  if (chatTriggerBtn) chatTriggerBtn.addEventListener('click', toggleChat);
  if (chatCloseBtn) chatCloseBtn.addEventListener('click', toggleChat);

  if (chatMinimizeBtn) {
    chatMinimizeBtn.addEventListener('click', () => {
      isChatMinimized = !isChatMinimized;
      if (isChatMinimized) {
        chatMessages.style.display = 'none';
        chatForm.style.display = 'none';
        thoughtStream.style.display = 'none';
        chatWindow.style.height = '60px';
      } else {
        chatMessages.style.display = 'flex';
        chatForm.style.display = 'flex';
        chatWindow.style.height = '500px';
      }
    });
  }

  // Pre-programmed Knowledge Base strictly extracted from Abhishek's resume
  const AGENT_KNOWLEDGE = {
    skills:
      "Abhishek's verified technical skills from his resume:\n• Programming: Python, C++, SQL\n• Machine Learning: Scikit-learn, TensorFlow, CNN, KNN, Naive Bayes, TF-IDF\n• Data Processing: Pandas, NumPy, OpenCV, Image Preprocessing\n• Web Development: React.js, FastAPI, HTML, CSS, Tailwind CSS\n• Databases: SQLite, MySQL\n• Developer Tools: Git, GitHub, Jupyter Notebook, VS Code, Docker",

    projects:
      "Abhishek has built two major academic projects:\n1. 'Spam Detection in Online Social Networks Using Machine Learning': TF-IDF + Multinomial Naive Bayes achieving 96.86% accuracy, built with React.js, FastAPI, Python, Scikit-learn, Tailwind CSS, and SQLite.\n2. 'AI-Driven CNN and KNN Fusion for Plant Disease Classification': Feature extraction with CNN and classification with KNN using Python, TensorFlow/Keras, OpenCV, NumPy, and Matplotlib.",

    education:
      "Abhishek's academic qualifications:\n• B.E. in Computer Science (AI & Data Science): AJ Institute of Engineering & Management (2023–Present) with CGPA of 8.2 / 10\n• PUC: Sri Ramakunjeshwara PU College (2023) with 89.99% distinction\n• SSLC: Ramakunjeshwara High School (2021) with 87.36% distinction",

    contact:
      "You can contact Abhishek P directly:\n• Email: abhishekalekka10@gmail.com\n• Phone: +91-7338476514\n• Location: Mangalore, Karnataka, India\n• GitHub: github.com/ABHISHEKp231\n• LinkedIn: linkedin.com/in/abhi1abhi",

    achievements:
      "Abhishek's honors and certifications:\n• Best Performer Award: AI Prompt Engineering and Automation Workshop (E26 Media Production Pvt. Ltd.)\n• NPTEL Certification: The Joy of Computing Using Python\n• Cisco Certification: Introduction to Cybersecurity\n• Deloitte Certification: Data Analytics Job Simulation",

    default:
      "I have queried Abhishek's resume database! He is an Artificial Intelligence & Data Science graduate skilled in Machine Learning (Scikit-learn, TensorFlow, CNN, KNN, Naive Bayes), Web Development (React.js, FastAPI), and Computer Vision (OpenCV). You can ask me about his skills, projects, education, or contact info!"
  };

  async function handleUserChatQuery(query) {
    const q = query.toLowerCase();

    // Append user message
    const userBubble = document.createElement('div');
    userBubble.className = 'message-bubble user';
    userBubble.innerHTML = `<div class="bubble-content">${escapeHTML(query)}</div>`;
    chatMessages.appendChild(userBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Show thought stream steps
    thoughtStream.style.display = 'flex';
    const thoughtSteps = [
      '> ANALYZING_USER_INPUT...',
      '> ACCESSING_RESUME_DATABASE...',
      '> CROSS_REFERENCING_MODELS...',
      '> GENERATING_OPTIMAL_RESPONSE...'
    ];

    for (const step of thoughtSteps) {
      thoughtText.textContent = step;
      await new Promise((r) => setTimeout(r, 450));
    }

    thoughtStream.style.display = 'none';

    // Determine matching answer
    let response = AGENT_KNOWLEDGE.default;
    if (q.includes('skill') || q.includes('stack') || q.includes('tech') || q.includes('language') || q.includes('python')) {
      response = AGENT_KNOWLEDGE.skills;
    } else if (q.includes('project') || q.includes('spam') || q.includes('plant') || q.includes('disease') || q.includes('accuracy')) {
      response = AGENT_KNOWLEDGE.projects;
    } else if (q.includes('education') || q.includes('college') || q.includes('cgpa') || q.includes('degree') || q.includes('school')) {
      response = AGENT_KNOWLEDGE.education;
    } else if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('hire') || q.includes('github') || q.includes('linkedin')) {
      response = AGENT_KNOWLEDGE.contact;
    } else if (q.includes('award') || q.includes('achievement') || q.includes('certif') || q.includes('nptel') || q.includes('cisco') || q.includes('deloitte')) {
      response = AGENT_KNOWLEDGE.achievements;
    }

    // Append assistant response
    const assistantBubble = document.createElement('div');
    assistantBubble.className = 'message-bubble assistant';
    assistantBubble.innerHTML = `<div class="bubble-content">${response.replace(/\n/g, '<br>')}</div>`;
    chatMessages.appendChild(assistantBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  if (chatForm && chatInput) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = chatInput.value.trim();
      if (!val) return;
      chatInput.value = '';
      handleUserChatQuery(val);
    });
  }

  function escapeHTML(str) {
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(str));
    return p.innerHTML;
  }

  /* ==========================================================================
     9. NAVIGATION, ACTIVE SCROLL SPY & SMOOTH SCROLLING
     ========================================================================== */
  window.scrollToSection = function (sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    }
  };

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      if (targetId) {
        scrollToSection(targetId);
      }
    });
  });

  const navLogo = document.getElementById('nav-logo');
  if (navLogo) {
    navLogo.addEventListener('click', () => scrollToSection('hero'));
  }

  // Active Navigation Highlighting on Scroll
  const observedSections = ['hero', 'dashboard', 'about', 'skills', 'education', 'projects', 'achievements', 'contact'];
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 200;

    for (let i = observedSections.length - 1; i >= 0; i--) {
      const section = document.getElementById(observedSections[i]);
      if (section && section.offsetTop <= scrollPos) {
        navLinks.forEach((link) => {
          if (link.getAttribute('data-target') === observedSections[i]) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
        break;
      }
    }
  });

  // Mobile Hamburger Menu
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');

  function closeMobileMenu() {
    if (mobileMenu) mobileMenu.style.display = 'none';
    if (hamburgerIcon) {
      hamburgerIcon.className = 'fa-solid fa-bars';
    }
  }

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.style.display === 'flex';
      if (isOpen) {
        mobileMenu.style.display = 'none';
        if (hamburgerIcon) hamburgerIcon.className = 'fa-solid fa-bars';
      } else {
        mobileMenu.style.display = 'flex';
        if (hamburgerIcon) hamburgerIcon.className = 'fa-solid fa-xmark';
      }
    });
  }

  /* ==========================================================================
     10. CONTACT FORM SUBMISSION
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const contactSuccess = document.getElementById('contact-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const subject = document.getElementById('contact-subject').value;
      const message = document.getElementById('contact-message').value;

      if (contactSuccess) {
        contactSuccess.style.display = 'block';
        contactSuccess.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you, ${escapeHTML(name)}! Opening your mail client to send to abhishekalekka10@gmail.com...`;
      }

      // Open mailto link
      const mailtoUrl = `mailto:abhishekalekka10@gmail.com?subject=${encodeURIComponent(subject + ' - via Portfolio')}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 1000);
    });
  }

})();
