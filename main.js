/* ==========================================================================
   ALLEN BERSHO A P — PORTFOLIO INTERACTIVE SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. LENIS SMOOTH SCROLL INITIALIZATION
  let lenis;
  if (window.Lenis) {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // 2. MOBILE NAVIGATION DRAWER
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Close menu when clicking nav links
    document.querySelectorAll('.nav-item').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // 3. HERO CANVAS: AGENT WORKFLOW NODE ANIMATION
  const canvas = document.getElementById('heroAgentCanvas');
  const activeNodeLabel = document.getElementById('activeNodeLabel');

  if (canvas) {
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    function resizeCanvas() {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Nodes setup
    const nodes = [
      { id: 'user', label: 'User Intent', x: 0.15, y: 0.5, color: '#00F0FF' },
      { id: 'planner', label: 'LangGraph Supervisor', x: 0.4, y: 0.3, color: '#8B5CF6' },
      { id: 'mcp', label: 'MCP Server', x: 0.4, y: 0.7, color: '#F59E0B' },
      { id: 'agent_sec', label: 'Security Agent', x: 0.7, y: 0.25, color: '#00F0FF' },
      { id: 'agent_code', label: 'Code Analyst', x: 0.7, y: 0.5, color: '#8B5CF6' },
      { id: 'backend', label: 'FastAPI Backend', x: 0.7, y: 0.75, color: '#10B981' },
      { id: 'output', label: 'Audit Result', x: 0.9, y: 0.5, color: '#10B981' }
    ];

    const connections = [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
      { from: 1, to: 3 },
      { from: 1, to: 4 },
      { from: 2, to: 5 },
      { from: 3, to: 6 },
      { from: 4, to: 6 },
      { from: 5, to: 6 }
    ];

    let pulseProgress = 0;
    let activeConnIndex = 0;

    function drawGraph() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      // Draw connections
      connections.forEach((conn, idx) => {
        const fromNode = nodes[conn.from];
        const toNode = nodes[conn.to];

        const x1 = fromNode.x * w;
        const y1 = fromNode.y * h;
        const x2 = toNode.x * w;
        const y2 = toNode.y * h;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = (idx === activeConnIndex) ? 'rgba(0, 240, 255, 0.8)' : 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = (idx === activeConnIndex) ? 2 : 1;
        ctx.stroke();
      });

      // Draw animated signal pulse along active connection
      const activeConn = connections[activeConnIndex];
      const fromNode = nodes[activeConn.from];
      const toNode = nodes[activeConn.to];

      const px = (fromNode.x + (toNode.x - fromNode.x) * pulseProgress) * w;
      const py = (fromNode.y + (toNode.y - fromNode.y) * pulseProgress) * h;

      ctx.beginPath();
      ctx.arc(px, py, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#00F0FF';
      ctx.shadowColor = '#00F0FF';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0; // reset

      // Draw Nodes
      nodes.forEach((n, idx) => {
        const nx = n.x * w;
        const ny = n.y * h;

        ctx.beginPath();
        ctx.arc(nx, ny, 10, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(nx, ny, 14, 0, Math.PI * 2);
        ctx.strokeStyle = (activeConn.from === idx || activeConn.to === idx) ? '#00F0FF' : 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Node Label
        ctx.font = '11px "IBM Plex Mono", monospace';
        ctx.fillStyle = '#94A3B8';
        ctx.textAlign = 'center';
        ctx.fillText(n.label, nx, ny + 26);
      });

      // Update pulse state
      pulseProgress += 0.015;
      if (pulseProgress >= 1) {
        pulseProgress = 0;
        activeConnIndex = (activeConnIndex + 1) % connections.length;
        
        // Update overlay text
        const targetNode = nodes[connections[activeConnIndex].to];
        if (activeNodeLabel) {
          activeNodeLabel.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Routing via MCP to [${targetNode.label}]...`;
        }
      }

      animationFrameId = requestAnimationFrame(drawGraph);
    }

    drawGraph();
  }

  // 4. ARCHITECTURE REWOO VS REACT SIMULATOR
  const simReWooBtn = document.getElementById('simReWooBtn');
  const simReActBtn = document.getElementById('simReActBtn');
  const simOutputBox = document.getElementById('simOutputBox');

  if (simReWooBtn && simReActBtn && simOutputBox) {
    simReWooBtn.addEventListener('click', () => {
      simReWooBtn.classList.add('active');
      simReActBtn.classList.remove('active');
      simOutputBox.innerHTML = `
        <span class="sim-line cyan">&gt; Initiating ReWOO Plan Phase...</span>
        <span class="sim-line">&gt; Step 1 [Planner]: Generated DAG: [Tool_A, Tool_B] -&gt; [Synthesizer]</span>
        <span class="sim-line green">&gt; Step 2 [Worker Engine]: Executed Tool_A &amp; Tool_B concurrently (0.4s)</span>
        <span class="sim-line violet">&gt; Step 3 [Solver]: Final response assembled. Total time: 0.6s | Tokens: 420</span>
      `;
    });

    simReActBtn.addEventListener('click', () => {
      simReActBtn.classList.add('active');
      simReWooBtn.classList.remove('active');
      simOutputBox.innerHTML = `
        <span class="sim-line cyan">&gt; Initiating ReAct Iterative Loop...</span>
        <span class="sim-line">&gt; Step 1 [Thought]: "Need to query Tool_A first."</span>
        <span class="sim-line">&gt; Step 2 [Action]: Invoked Tool_A -&gt; Observation received (0.4s)</span>
        <span class="sim-line">&gt; Step 3 [Thought]: "Now invoking Tool_B based on result."</span>
        <span class="sim-line green">&gt; Step 4 [Action]: Invoked Tool_B -&gt; Observation received (0.4s)</span>
        <span class="sim-line violet">&gt; Step 5 [Final Thought]: Output compiled. Total time: 1.3s | Tokens: 890</span>
      `;
    });
  }

  // 5. RESUME MODAL & PRINT HANDLERS
  const resumeModal = document.getElementById('resumeModal');
  const openResumeBtn = document.getElementById('openResumeBtn');
  const heroDownloadBtn = document.getElementById('heroDownloadBtn');
  const contactResumeBtn = document.getElementById('contactResumeBtn');
  const closeResumeBtn = document.getElementById('closeResumeBtn');
  const printResumeBtn = document.getElementById('printResumeBtn');

  function openModal() {
    if (resumeModal) resumeModal.classList.add('open');
  }

  function closeModal() {
    if (resumeModal) resumeModal.classList.remove('open');
  }

  if (openResumeBtn) openResumeBtn.addEventListener('click', openModal);
  if (heroDownloadBtn) heroDownloadBtn.addEventListener('click', openModal);
  if (contactResumeBtn) contactResumeBtn.addEventListener('click', openModal);
  if (closeResumeBtn) closeResumeBtn.addEventListener('click', closeModal);

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeModal();
    });
  }

  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // 6. INTERACTIVE "ASK MY PORTFOLIO" AI AGENT CHATBOT
  const chatWidget = document.getElementById('chatWidget');
  const chatLauncher = document.getElementById('chatLauncher');
  const chatWindow = document.getElementById('chatWindow');
  const chatCloseBtn = document.getElementById('chatCloseBtn');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatBody = document.getElementById('chatBody');
  const heroChatBtn = document.getElementById('heroChatBtn');

  function toggleChat() {
    if (chatWindow) chatWindow.classList.toggle('open');
  }

  if (chatLauncher) chatLauncher.addEventListener('click', toggleChat);
  if (chatCloseBtn) chatCloseBtn.addEventListener('click', toggleChat);
  if (heroChatBtn) heroChatBtn.addEventListener('click', () => {
    if (chatWindow && !chatWindow.classList.contains('open')) {
      chatWindow.classList.add('open');
    }
  });

  // Pre-indexed local RAG knowledge base for Allen Bersho
  const knowledgeBase = [
    {
      keywords: ['project', 'built', 'work', 'devpulse', 'cognicast', 'job copilot'],
      response: `Allen has built 3 production-shaped agentic platforms:
<br>1. <strong>DevPulse</strong>: Multi-agent GitHub intelligence platform (LangGraph + MCP + FastAPI).
<br>2. <strong>CogniCast</strong>: Agentic educational content generator (FastAPI + FAISS + Ollama).
<br>3. <strong>Job Copilot</strong>: AI-powered resume parsing & ATS application tracker (ReactJS + FastAPI + SQLite).`
    },
    {
      keywords: ['devpulse', 'github'],
      response: `<strong>DevPulse Architecture:</strong>
<br>• Uses a <strong>LangGraph supervisor graph</strong> to orchestrate Code Analyst, Security Audit, and PR Reviewer agents.
<br>• Standardized tool execution via <strong>Model Context Protocol (MCP)</strong> servers interfacing directly with GitHub REST & GraphQL APIs.`
    },
    {
      keywords: ['cognicast', 'education', 'ollama'],
      response: `<strong>CogniCast Architecture:</strong>
<br>• Autonomous research & script generation pipeline using <strong>FAISS vector search</strong> and <strong>local LLMs via Ollama</strong>.
<br>• Asynchronous FastAPI backend for non-blocking concurrent media summary workflows.`
    },
    {
      keywords: ['rewoo', 'react', 'think', 'architecture'],
      response: `<strong>Why Allen prefers ReWOO over ReAct:</strong>
<br>ReWOO (Reasoning W/O Observation) decouples planning from execution, generating a full tool execution DAG upfront. This reduces token consumption by ~40% and latency by ~50% compared to ReAct's step-by-step re-prompting loops.`
    },
    {
      keywords: ['skill', 'stack', 'python', 'fastapi', 'langgraph', 'mcp'],
      response: `<strong>Allen's Key Skills:</strong>
<br>• <strong>Agentic AI</strong>: LangGraph, CrewAI, AutoGen, ReAct, ReWOO, Agentic RAG, MCP Protocol.
<br>• <strong>Programming</strong>: Python (Advanced, Asyncio), Java, C, SQL.
<br>• <strong>AI/ML & Vector DBs</strong>: PyTorch, LangChain, FAISS, Prompt Engineering, Ollama.
<br>• <strong>Backend & Infrastructure</strong>: FastAPI, Docker, Linux, Git, MySQL, MongoDB.`
    },
    {
      keywords: ['education', 'college', 'vit', 'gpa', 'degree'],
      response: `Allen is pursuing a <strong>B.Tech in Computer Science (AI & Robotics)</strong> at <strong>Vellore Institute of Technology (VIT), Chennai</strong> (Aug 2023 - Present) with a GPA of <strong>8.56/10</strong>.`
    },
    {
      keywords: ['cert', 'ibm', 'achievement', 'dsa', 'leetcode'],
      response: `<strong>Certifications & Achievements:</strong>
<br>• <strong>IBM Certification</strong>: Building Agents with Agentic AI (July 2026).
<br>• <strong>Competitive Programming</strong>: 200+ algorithmic and data structure problems solved.`
    },
    {
      keywords: ['contact', 'email', 'phone', 'linkedin', 'github', 'reach'],
      response: `You can reach Allen directly via:
<br>• 📧 <strong>Email</strong>: <a href="mailto:allenbersho@gmail.com">allenbersho@gmail.com</a>
<br>• 📱 <strong>Phone</strong>: +91 9381998797
<br>• 💼 <strong>LinkedIn</strong>: <a href="https://linkedin.com/in/allen-bersho" target="_blank">linkedin.com/in/allen-bersho</a>
<br>• 🐙 <strong>GitHub</strong>: <a href="https://github.com/allenbersho" target="_blank">github.com/allenbersho</a>`
    }
  ];

  function getBotResponse(input) {
    const text = input.toLowerCase();
    for (let item of knowledgeBase) {
      if (item.keywords.some(kw => text.includes(kw))) {
        return item.response;
      }
    }
    return `I am familiar with Allen's agentic AI engineering work, FastAPI backend projects, LangGraph state machines, MCP protocols, and resume details. Could you specify if you'd like details on <strong>DevPulse</strong>, <strong>CogniCast</strong>, <strong>Job Copilot</strong>, or his <strong>skills</strong>?`;
  }

  function appendMessage(sender, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}`;

    if (sender === 'bot') {
      msgDiv.innerHTML = `
        <div class="msg-avatar"><i class="fa-solid fa-robot"></i></div>
        <div class="msg-content">${text}</div>
      `;
    } else {
      msgDiv.innerHTML = `<div class="msg-content">${text}</div>`;
    }

    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  if (chatForm && chatInput) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userText = chatInput.value.trim();
      if (!userText) return;

      appendMessage('user', userText);
      chatInput.value = '';

      // Typing indicator delay
      setTimeout(() => {
        const botReply = getBotResponse(userText);
        appendMessage('bot', botReply);
      }, 400);
    });
  }

  // Handle suggestion buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('sug-btn')) {
      const query = e.target.getAttribute('data-query');
      if (query) {
        appendMessage('user', query);
        setTimeout(() => {
          const botReply = getBotResponse(query);
          appendMessage('bot', botReply);
        }, 300);
      }
    }
  });

});
