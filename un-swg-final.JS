// SWG Testing Worker v12 - Refined Multi-Method Detection
// -----------------------------------------------------------------------------
// 3-Method Voting: Image Load | Script Load | Link Prefetch
// Dark Futuristic UI with Matrix-style aesthetics
// -----------------------------------------------------------------------------

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === '/healthz') {
      return new Response(JSON.stringify({
        ok: true,
        version: 'v12-refined-3method',
        ts: Date.now()
      }), {
        headers: { 'content-type': 'application/json' }
      });
    }

    return new Response(getRefinedHtml(), {
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'x-content-type-options': 'nosniff',
        'cache-control': 'no-cache, no-store, must-revalidate'
      }
    });
  }
};

function getRefinedHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SWG Security Analysis</title>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --bg-primary: #000000;
    --bg-secondary: #0a0a0a;
    --bg-tertiary: #111111;
    --surface: rgba(20, 20, 20, 0.8);
    --surface-glass: rgba(30, 30, 30, 0.6);
    --border: rgba(255, 255, 255, 0.08);
    --border-bright: rgba(255, 255, 255, 0.15);

    --text: #ffffff;
    --text-dim: #888888;
    --text-muted: #555555;

    --success: #ffffff;
    --error: #666666;
    --warning: #aaaaaa;
    --info: #cccccc;
  }

  @keyframes matrix-flow {
    0% { transform: translateY(-100%); opacity: 0; }
    10% { opacity: 0.3; }
    90% { opacity: 0.3; }
    100% { transform: translateY(100vh); opacity: 0; }
  }

  @keyframes glow-pulse {
    0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.2); }
    50% { box-shadow: 0 0 40px rgba(255, 255, 255, 0.3); }
  }

  @keyframes scan-line {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }

  body {
    font-family: 'Space Grotesk', -apple-system, system-ui, sans-serif;
    background: var(--bg-primary);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
  }

  /* Grid background effect */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: 0;
    pointer-events: none;
  }

  .container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 60px 30px;
    position: relative;
    z-index: 1;
  }

  /* Header styling */
  .header {
    text-align: center;
    margin-bottom: 60px;
    position: relative;
  }

  .header::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 2px;
    background: linear-gradient(90deg,
      transparent,
      rgba(255, 255, 255, 0.8),
      transparent
    );
  }

  h1 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 4px;
    position: relative;
    display: inline-block;
  }

  .subtitle {
    color: var(--text-dim);
    font-size: 14px;
    font-family: 'JetBrains Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.7;
  }

  /* Method banner */
  .method-banner {
    background: var(--surface-glass);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-bright);
    padding: 32px;
    border-radius: 16px;
    margin-bottom: 40px;
    position: relative;
    overflow: hidden;
  }

  .method-banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
    animation: shine 3s infinite;
  }

  @keyframes shine {
    0% { left: -100%; }
    50%, 100% { left: 200%; }
  }

  .method-banner h3 {
    color: #ffffff;
    font-size: 18px;
    margin-bottom: 16px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .method-banner p {
    color: var(--text-dim);
    font-size: 14px;
    margin-bottom: 20px;
    line-height: 1.8;
  }

  .methods-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
  }

  .method-item {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
    padding: 20px;
    border-radius: 12px;
    border: 1px solid var(--border);
    transition: all 0.3s ease;
    position: relative;
  }

  .method-item:hover {
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-4px);
  }

  .method-item::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.8)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .method-item:hover::after {
    opacity: 1;
  }

  .method-name {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 8px;
    color: var(--text);
  }

  .method-desc {
    font-size: 12px;
    color: var(--text-dim);
    font-family: 'JetBrains Mono', monospace;
  }

  /* Alert box */
  .alert-box {
    background: rgba(255, 170, 0, 0.1);
    border: 1px solid var(--warning);
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 30px;
    display: none;
    align-items: center;
    gap: 16px;
    backdrop-filter: blur(10px);
    animation: glow-pulse 2s infinite;
  }

  .alert-box.show { display: flex; }

  .alert-content { flex: 1; }

  .alert-title {
    font-weight: 600;
    margin-bottom: 6px;
    font-size: 16px;
    color: var(--warning);
  }

  .alert-desc {
    font-size: 13px;
    color: var(--text-dim);
    font-family: 'JetBrains Mono', monospace;
  }

  .alert-action {
    padding: 12px 24px;
    background: linear-gradient(135deg, #ffffff, #cccccc);
    border: none;
    border-radius: 8px;
    color: #000;
    font-weight: 700;
    cursor: pointer;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
  }

  .alert-action:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  }

  /* Controls */
  .controls {
    display: flex;
    gap: 16px;
    margin-bottom: 40px;
    flex-wrap: wrap;
  }

  .btn {
    padding: 16px 32px;
    background: var(--surface-glass);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-bright);
    color: var(--text);
    cursor: pointer;
    font: inherit;
    font-weight: 600;
    transition: all 0.3s ease;
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 13px;
    position: relative;
    overflow: hidden;
  }

  .btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }

  .btn:hover::before {
    width: 300px;
    height: 300px;
  }

  .btn:hover {
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(255, 255, 255, 0.2);
  }

  .btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;
  }

  .btn-primary {
    background: linear-gradient(135deg, #ffffff, #cccccc);
    border: none;
    color: #000;
    font-weight: 700;
  }

  .btn-primary:hover {
    box-shadow: 0 8px 40px rgba(255, 255, 255, 0.4);
  }

  /* Stats */
  .stats {
    display: flex;
    gap: 24px;
    padding: 30px 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    margin-bottom: 40px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 20px 40px;
    background: var(--surface-glass);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    border: 1px solid var(--border);
    transition: all 0.3s ease;
  }

  .stat-item:hover {
    transform: translateY(-4px);
  }

  .stat-value {
    font-size: 42px;
    font-weight: 700;
    font-family: 'JetBrains Mono', monospace;
    text-shadow: 0 0 20px currentColor;
  }

  .stat-item.blocked .stat-value {
    color: var(--success);
  }

  .stat-item.allowed .stat-value {
    color: var(--error);
  }

  .stat-item.unclear .stat-value {
    color: var(--warning);
  }

  .stat-label {
    font-size: 12px;
    color: var(--text-dim);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
  }

  /* Tests grid */
  .tests {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  }

  .test-card {
    background: var(--surface-glass);
    backdrop-filter: blur(15px);
    border: 1px solid var(--border);
    padding: 28px;
    border-radius: 16px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .test-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.5)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .test-card:hover {
    border-color: var(--border-bright);
    transform: translateY(-4px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  }

  .test-card:hover::before {
    opacity: 1;
  }

  .test-card.testing {
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
  }

  .test-card.testing::before {
    opacity: 1;
    animation: rainbow-flow 2s linear infinite;
  }

  @keyframes rainbow-flow {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }

  .test-card.blocked {
    border-color: rgba(255, 255, 255, 0.5);
    background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.08) 0%,
      var(--surface-glass) 100%
    );
  }

  .test-card.allowed {
    border-color: rgba(102, 102, 102, 0.5);
    background: linear-gradient(135deg,
      rgba(102, 102, 102, 0.08) 0%,
      var(--surface-glass) 100%
    );
  }

  .test-card.unclear {
    border-color: rgba(170, 170, 170, 0.5);
    background: linear-gradient(135deg,
      rgba(170, 170, 170, 0.08) 0%,
      var(--surface-glass) 100%
    );
  }

  /* Test header */
  .test-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
  }

  .test-info { flex: 1; }

  .test-badge {
    display: inline-block;
    padding: 6px 12px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 12px;
    font-weight: 600;
    color: #ffffff;
    font-family: 'JetBrains Mono', monospace;
  }

  .test-name {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--text);
  }

  .test-desc {
    font-size: 13px;
    color: var(--text-dim);
    font-family: 'JetBrains Mono', monospace;
  }

  /* Status badges */
  .status-badge {
    padding: 10px 18px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'JetBrains Mono', monospace;
    border: 1px solid;
  }

  .status-badge.pending {
    background: rgba(85, 85, 85, 0.2);
    color: var(--text-muted);
    border-color: var(--text-muted);
  }

  .status-badge.testing {
    background: rgba(255, 255, 255, 0.15);
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.3);
  }

  .status-badge .spinner {
    width: 14px;
    height: 14px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-top-color: currentColor;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .status-badge.blocked {
    background: rgba(255, 255, 255, 0.25);
    color: #ffffff;
    border-color: #ffffff;
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
    font-weight: 900;
  }

  .status-badge.allowed {
    background: rgba(102, 102, 102, 0.25);
    color: #666666;
    border-color: #666666;
    box-shadow: 0 0 30px rgba(102, 102, 102, 0.4);
    font-weight: 900;
  }

  .status-badge.unclear {
    background: rgba(170, 170, 170, 0.25);
    color: #aaaaaa;
    border-color: #aaaaaa;
    box-shadow: 0 0 30px rgba(170, 170, 170, 0.4);
    font-weight: 900;
  }

  /* Voting results */
  .voting-results {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid var(--border);
  }

  .voting-title {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'JetBrains Mono', monospace;
  }

  .vote-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    font-size: 13px;
  }

  .vote-method {
    color: var(--text-dim);
    font-family: 'JetBrains Mono', monospace;
  }

  .vote-result {
    padding: 4px 12px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 600;
    font-family: 'JetBrains Mono', monospace;
    border: 1px solid;
  }

  .vote-result.blocked {
    background: rgba(255, 255, 255, 0.15);
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.3);
  }

  .vote-result.allowed {
    background: rgba(102, 102, 102, 0.15);
    color: #888888;
    border-color: rgba(102, 102, 102, 0.3);
  }

  .vote-result.unclear {
    background: rgba(170, 170, 170, 0.15);
    color: #aaaaaa;
    border-color: rgba(170, 170, 170, 0.3);
  }

  .vote-summary {
    margin-top: 14px;
    padding: 14px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    border: 1px solid var(--border);
    font-family: 'JetBrains Mono', monospace;
  }

  /* Verify section */
  .verify-section {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid var(--border);
  }

  .verify-btn {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #ffffff, #cccccc);
    border: none;
    border-radius: 10px;
    color: #000;
    font-weight: 700;
    cursor: pointer;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
  }

  .verify-btn:hover {
    transform: scale(1.02);
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
  }

  .verify-result {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 16px;
  }

  .verify-result-btn {
    padding: 14px;
    border-radius: 8px;
    border: 2px solid;
    font-weight: 700;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .verify-result-btn.blocked {
    background: rgba(255, 255, 255, 0.1);
    border-color: #ffffff;
    color: #ffffff;
  }

  .verify-result-btn.blocked:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  }

  .verify-result-btn.allowed {
    background: rgba(102, 102, 102, 0.1);
    border-color: #888888;
    color: #888888;
  }

  .verify-result-btn.allowed:hover {
    background: rgba(102, 102, 102, 0.2);
    box-shadow: 0 0 30px rgba(102, 102, 102, 0.3);
  }

  @media (max-width: 768px) {
    .container { padding: 40px 20px; }
    h1 { font-size: 32px; }
    .tests { grid-template-columns: 1fr; }
    .methods-grid { grid-template-columns: 1fr; }
    .stats { gap: 12px; }
    .stat-item { padding: 16px 24px; }
  }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>SWG ANALYSIS</h1>
      <p class="subtitle">3-Method Voting Detection</p>
    </div>

    <div class="method-banner">
      <h3>Multi-Method Detection Engine</h3>
      <p>
        Simultaneous testing using three independent detection vectors.
        Results reported only when methods reach consensus.
      </p>
      <div class="methods-grid">
        <div class="method-item">
          <div class="method-name">Image Load</div>
          <div class="method-desc">Resource-level detection</div>
        </div>
        <div class="method-item">
          <div class="method-name">Script Load</div>
          <div class="method-desc">Executable-level detection</div>
        </div>
        <div class="method-item">
          <div class="method-name">Link Prefetch</div>
          <div class="method-desc">Prefetch-level detection</div>
        </div>
      </div>
    </div>

    <div class="alert-box" id="verifyAlert">
      <div class="alert-content">
        <div class="alert-title">Manual Verification Required</div>
        <div class="alert-desc">Methods disagreed on <span id="unclearCountAlert">0</span> test(s)</div>
      </div>
      <button class="alert-action" id="verifyAllBtn">Verify Now</button>
    </div>

    <div class="controls">
      <button class="btn btn-primary" id="startTest">
        Initiate Scan
      </button>
      <button class="btn" id="reset">Reset</button>
      <button class="btn" id="exportPDF">Export Report</button>
    </div>

    <div class="stats">
      <div class="stat-item blocked">
        <div class="stat-value" id="blockedCount">0</div>
        <div class="stat-label">Blocked</div>
      </div>
      <div class="stat-item allowed">
        <div class="stat-value" id="allowedCount">0</div>
        <div class="stat-label">Allowed</div>
      </div>
      <div class="stat-item unclear">
        <div class="stat-value" id="unclearCount">0</div>
        <div class="stat-label">Unclear</div>
      </div>
    </div>

    <div class="tests" id="tests"></div>
  </div>

  <script>
    const TESTS = [
      {
        id: 'malware_eicar',
        type: 'malware',
        name: 'Malware Detection',
        desc: 'EICAR standard antivirus test',
        url: 'https://secure.eicar.org/eicar.com',
        useCase: 'Malware Protection'
      },
      {
        id: 'gambling',
        type: 'category',
        name: 'Gambling',
        desc: 'Major betting platform',
        url: 'https://www.bet365.com/',
        useCase: 'Gambling Filtering'
      },
      {
        id: 'adult',
        type: 'category',
        name: 'Adult Content',
        desc: 'Adult entertainment site',
        url: 'https://www.pornhub.com/',
        useCase: 'Adult Content Filtering'
      },
      {
        id: 'weapons',
        type: 'category',
        name: 'Weapons',
        desc: 'Firearms marketplace',
        url: 'https://www.gunbroker.com/',
        useCase: 'Weapons Category'
      },
      {
        id: 'social',
        type: 'category',
        name: 'Social Media',
        desc: 'Professional networking',
        url: 'https://www.linkedin.com/',
        useCase: 'Social Media Control'
      },
      {
        id: 'genai',
        type: 'category',
        name: 'Generative AI',
        desc: 'AI chatbot platform',
        url: 'https://chatgpt.com/',
        useCase: 'AI Services'
      },
      {
        id: 'streaming',
        type: 'category',
        name: 'Video Streaming',
        desc: 'Entertainment streaming',
        url: 'https://www.netflix.com/',
        useCase: 'Streaming Control'
      }
    ];

    const state = {};
    let testExecutionTime = null;

    TESTS.forEach(test => {
      state[test.id] = {
        status: 'pending',
        votes: {},
        finalResult: null
      };
    });

    function createCard(test) {
      return \`
        <div class="test-card" id="card-\${test.id}">
          <div class="test-header">
            <div class="test-info">
              <div class="test-badge">\${test.type}</div>
              <div class="test-name">\${test.name}</div>
              <div class="test-desc">\${test.desc}</div>
            </div>
            <div class="status-badge pending" id="status-\${test.id}">
              Pending
            </div>
          </div>

          <div class="voting-results" id="voting-\${test.id}" style="display: none;">
            <div class="voting-title">Detection Methods</div>
            <div id="votes-\${test.id}"></div>
            <div class="vote-summary" id="summary-\${test.id}"></div>
          </div>

          <div class="verify-section" id="verify-\${test.id}" style="display: none;">
            <button class="verify-btn" onclick="openForVerify('\${test.id}')">
              Manual Verification Required
            </button>
            <div class="verify-result" id="verify-result-\${test.id}" style="display: none;">
              <button class="verify-result-btn blocked" onclick="confirmResult('\${test.id}', 'blocked')">
                ✓ Blocked
              </button>
              <button class="verify-result-btn allowed" onclick="confirmResult('\${test.id}', 'allowed')">
                ✗ Allowed
              </button>
            </div>
          </div>
        </div>
      \`;
    }

    // 3-Method detection (removed Fetch - always unclear)
    async function multiMethodDetect(test) {
      const methods = await Promise.all([
        detectViaImage(test),
        detectViaScript(test),
        detectViaPrefetch(test)
      ]);

      return methods;
    }

    // Method 1: Image loading
    async function detectViaImage(test) {
      return new Promise((resolve) => {
        const startTime = Date.now();
        const img = new Image();

        const timeout = setTimeout(() => {
          img.src = '';
          resolve({
            method: 'Image',
            result: 'blocked',
            time: Date.now() - startTime,
            reason: 'timeout'
          });
        }, 5000);

        img.onload = () => {
          clearTimeout(timeout);
          resolve({
            method: 'Image',
            result: 'allowed',
            time: Date.now() - startTime,
            reason: 'loaded'
          });
        };

        img.onerror = () => {
          clearTimeout(timeout);
          const time = Date.now() - startTime;

          // Very fast error = CORS, not block
          if (time < 50) {
            resolve({
              method: 'Image',
              result: 'unclear',
              time,
              reason: 'cors-instant'
            });
          } else {
            resolve({
              method: 'Image',
              result: 'blocked',
              time,
              reason: 'load-error'
            });
          }
        };

        img.referrerPolicy = 'no-referrer';
        img.src = test.url + '?method=image&t=' + Date.now();
      });
    }

    // Method 2: Script loading
    async function detectViaScript(test) {
      return new Promise((resolve) => {
        const startTime = Date.now();
        const script = document.createElement('script');

        const timeout = setTimeout(() => {
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
          resolve({
            method: 'Script',
            result: 'blocked',
            time: Date.now() - startTime,
            reason: 'timeout'
          });
        }, 5000);

        script.onload = () => {
          clearTimeout(timeout);
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
          resolve({
            method: 'Script',
            result: 'allowed',
            time: Date.now() - startTime,
            reason: 'loaded'
          });
        };

        script.onerror = () => {
          clearTimeout(timeout);
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
          const time = Date.now() - startTime;

          if (time < 50) {
            resolve({
              method: 'Script',
              result: 'unclear',
              time,
              reason: 'fast-error'
            });
          } else {
            resolve({
              method: 'Script',
              result: 'blocked',
              time,
              reason: 'load-error'
            });
          }
        };

        script.src = test.url + '?method=script&t=' + Date.now();
        document.head.appendChild(script);
      });
    }

    // Method 3: Link prefetch
    async function detectViaPrefetch(test) {
      return new Promise((resolve) => {
        const startTime = Date.now();
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'document';

        const timeout = setTimeout(() => {
          if (link.parentNode) {
            link.parentNode.removeChild(link);
          }
          resolve({
            method: 'Prefetch',
            result: 'unclear',
            time: Date.now() - startTime,
            reason: 'timeout'
          });
        }, 5000);

        link.onload = () => {
          clearTimeout(timeout);
          if (link.parentNode) {
            link.parentNode.removeChild(link);
          }
          resolve({
            method: 'Prefetch',
            result: 'allowed',
            time: Date.now() - startTime,
            reason: 'loaded'
          });
        };

        link.onerror = () => {
          clearTimeout(timeout);
          if (link.parentNode) {
            link.parentNode.removeChild(link);
          }
          resolve({
            method: 'Prefetch',
            result: 'blocked',
            time: Date.now() - startTime,
            reason: 'error'
          });
        };

        link.href = test.url + '?method=prefetch&t=' + Date.now();
        document.head.appendChild(link);
      });
    }

    // Voting logic (adjusted for 3 methods)
    function analyzeVotes(votes) {
      const blockedVotes = votes.filter(v => v.result === 'blocked').length;
      const allowedVotes = votes.filter(v => v.result === 'allowed').length;
      const unclearVotes = votes.filter(v => v.result === 'unclear').length;

      const total = votes.length;

      // All 3 agree - high confidence
      if (blockedVotes === 3) {
        return { status: 'blocked', confidence: 'high', summary: \`All methods detected block\` };
      }

      if (allowedVotes === 3) {
        return { status: 'allowed', confidence: 'high', summary: \`All methods detected allowed\` };
      }

      // 2 out of 3 agree, none disagree - medium confidence
      if (blockedVotes === 2 && allowedVotes === 0) {
        return { status: 'blocked', confidence: 'medium', summary: \`\${blockedVotes}/\${total} methods detected block\` };
      }

      if (allowedVotes === 2 && blockedVotes === 0) {
        return { status: 'allowed', confidence: 'medium', summary: \`\${allowedVotes}/\${total} methods detected allowed\` };
      }

      // Disagreement or too many unclear
      return {
        status: 'unclear',
        confidence: 'low',
        summary: \`Methods disagreed (B:\${blockedVotes} A:\${allowedVotes} U:\${unclearVotes})\`
      };
    }

    function updateCard(testId) {
      const result = state[testId];
      const card = document.getElementById(\`card-\${testId}\`);
      const statusBadge = document.getElementById(\`status-\${testId}\`);
      const votingSection = document.getElementById(\`voting-\${testId}\`);
      const votesDiv = document.getElementById(\`votes-\${testId}\`);
      const summaryDiv = document.getElementById(\`summary-\${testId}\`);
      const verifySection = document.getElementById(\`verify-\${testId}\`);

      card.className = 'test-card';
      if (result.status === 'testing') {
        card.classList.add('testing');
      } else if (result.status === 'blocked') {
        card.classList.add('blocked');
      } else if (result.status === 'allowed') {
        card.classList.add('allowed');
      } else if (result.status === 'unclear') {
        card.classList.add('unclear');
      }

      statusBadge.className = \`status-badge \${result.status}\`;

      if (result.status === 'testing') {
        statusBadge.innerHTML = '<div class="spinner"></div> Testing';
      } else if (result.status === 'blocked') {
        statusBadge.innerHTML = '✓ Blocked';
      } else if (result.status === 'allowed') {
        statusBadge.innerHTML = '✗ Allowed';
      } else if (result.status === 'unclear') {
        statusBadge.innerHTML = 'Unclear';
      } else {
        statusBadge.innerHTML = 'Pending';
      }

      if (result.votes && Object.keys(result.votes).length > 0) {
        votingSection.style.display = 'block';

        votesDiv.innerHTML = Object.values(result.votes).map(vote => \`
          <div class="vote-item">
            <span class="vote-method">\${vote.method}</span>
            <span class="vote-result \${vote.result}">\${vote.result} (\${vote.time}ms)</span>
          </div>
        \`).join('');

        if (result.finalResult) {
          summaryDiv.textContent = result.finalResult.summary;
        }
      }

      if (result.status === 'unclear') {
        verifySection.style.display = 'block';
      } else {
        verifySection.style.display = 'none';
      }

      updateStats();
    }

    function updateStats() {
      const blocked = TESTS.filter(t => state[t.id].status === 'blocked').length;
      const allowed = TESTS.filter(t => state[t.id].status === 'allowed').length;
      const unclear = TESTS.filter(t => state[t.id].status === 'unclear').length;

      document.getElementById('blockedCount').textContent = blocked;
      document.getElementById('allowedCount').textContent = allowed;
      document.getElementById('unclearCount').textContent = unclear;
      document.getElementById('unclearCountAlert').textContent = unclear;

      const verifyAlert = document.getElementById('verifyAlert');
      if (unclear > 0) {
        const pending = TESTS.filter(t => state[t.id].status === 'pending' || state[t.id].status === 'testing').length;
        if (pending === 0) {
          verifyAlert.classList.add('show');
        }
      } else {
        verifyAlert.classList.remove('show');
      }
    }

    async function testSingle(testId) {
      const test = TESTS.find(t => t.id === testId);
      if (!test) return;

      state[testId].status = 'testing';
      updateCard(testId);

      const votes = await multiMethodDetect(test);

      state[testId].votes = votes.reduce((acc, vote, idx) => {
        acc[\`method\${idx}\`] = vote;
        return acc;
      }, {});

      const analysis = analyzeVotes(votes);
      state[testId].finalResult = analysis;
      state[testId].status = analysis.status;

      updateCard(testId);
    }

    async function startTesting() {
      document.getElementById('startTest').disabled = true;
      testExecutionTime = new Date();

      for (const test of TESTS) {
        await testSingle(test.id);
        await new Promise(r => setTimeout(r, 500));
      }

      document.getElementById('startTest').disabled = false;
      document.getElementById('startTest').textContent = 'Rescan';
    }

    function openForVerify(testId) {
      const test = TESTS.find(t => t.id === testId);
      window.open(test.url, '_blank', 'noopener,noreferrer');
      document.getElementById(\`verify-result-\${testId}\`).style.display = 'grid';
    }

    function confirmResult(testId, result) {
      state[testId].status = result;
      state[testId].finalResult = {
        ...state[testId].finalResult,
        summary: 'Manually verified'
      };
      updateCard(testId);
    }

    async function verifyAllUnclear() {
      const unclear = TESTS.filter(t => state[t.id].status === 'unclear');
      for (const test of unclear) {
        openForVerify(test.id);
        await new Promise(r => setTimeout(r, 800));
      }
    }

    function reset() {
      if (!confirm('Reset all results?')) return;

      TESTS.forEach(test => {
        state[test.id] = {
          status: 'pending',
          votes: {},
          finalResult: null
        };
        updateCard(test.id);
      });

      document.getElementById('startTest').textContent = 'Initiate Scan';
    }

    function exportPDF() {
      if (!window.jspdf) {
        alert('PDF library not loaded');
        return;
      }

      // Ask for user's name
      const userName = prompt('Enter your name for the report:', '');
      if (!userName || userName.trim() === '') {
        alert('Name is required to generate the report');
        return;
      }

      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      // Calculate statistics
      const blocked = TESTS.filter(t => state[t.id].status === 'blocked').length;
      const allowed = TESTS.filter(t => state[t.id].status === 'allowed').length;
      const unclear = TESTS.filter(t => state[t.id].status === 'unclear').length;
      const total = TESTS.length;

      // Header Box with Border
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.5);
      doc.rect(15, 15, 180, 40);

      // Title
      doc.setFontSize(24);
      doc.setFont('helvetica', 'bold');
      doc.text('SWG SECURITY ANALYSIS REPORT', 105, 28, { align: 'center' });

      // Horizontal line under title
      doc.setLineWidth(0.3);
      doc.line(20, 33, 190, 33);

      // Report Info
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text(\`Prepared by: \${userName.trim()}\`, 20, 40);
      doc.text(\`Generated: \${new Date().toLocaleString()}\`, 20, 45);

      if (testExecutionTime) {
        doc.text(\`Test Executed: \${testExecutionTime.toLocaleString()}\`, 20, 50);
      }

      // Summary Box
      doc.setFillColor(245, 245, 245);
      doc.rect(15, 60, 180, 30, 'F');
      doc.rect(15, 60, 180, 30);

      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('EXECUTIVE SUMMARY', 20, 68);

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text(\`Total Tests: \${total}\`, 20, 76);
      doc.text(\`Blocked: \${blocked}\`, 70, 76);
      doc.text(\`Allowed: \${allowed}\`, 120, 76);
      doc.text(\`Unclear: \${unclear}\`, 170, 76);

      // Protection percentage
      const protectionRate = total > 0 ? ((blocked / total) * 100).toFixed(1) : 0;
      doc.setFont('helvetica', 'bold');
      doc.text(\`Protection Rate: \${protectionRate}%\`, 20, 84);

      // Detailed Results
      let y = 100;
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('DETAILED TEST RESULTS', 20, y);
      y += 8;

      TESTS.forEach((test, i) => {
        // Check if we need a new page
        if (y > 260) {
          doc.addPage();
          y = 20;
        }

        const result = state[test.id];

        // Test box with border
        const boxHeight = result.finalResult ? 28 : 23;
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.2);
        doc.rect(15, y - 5, 180, boxHeight);

        // Test number and name
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text(\`\${i + 1}. \${test.name}\`, 20, y);
        y += 6;

        // Category badge
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.setFillColor(240, 240, 240);
        doc.roundedRect(20, y - 3, 25, 5, 1, 1, 'F');
        doc.text(test.type.toUpperCase(), 21, y);
        y += 5;

        // URL
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        const urlText = test.url.length > 70 ? test.url.substring(0, 70) + '...' : test.url;
        doc.text(\`URL: \${urlText}\`, 20, y);
        doc.setTextColor(0, 0, 0);
        y += 6;

        // Status with colored background
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');

        let statusText = '';
        let statusColor = [128, 128, 128];
        let bgColor = [240, 240, 240];

        if (result.status === 'blocked') {
          statusText = '✓ BLOCKED';
          statusColor = [0, 0, 0];
          bgColor = [230, 255, 230];
        } else if (result.status === 'allowed') {
          statusText = '✗ ALLOWED';
          statusColor = [100, 100, 100];
          bgColor = [255, 240, 240];
        } else if (result.status === 'unclear') {
          statusText = '⚠ UNCLEAR';
          statusColor = [150, 150, 150];
          bgColor = [255, 250, 230];
        } else {
          statusText = 'NOT TESTED';
        }

        doc.setFillColor(bgColor[0], bgColor[1], bgColor[2]);
        doc.roundedRect(20, y - 4, 40, 6, 1, 1, 'F');
        doc.setTextColor(statusColor[0], statusColor[1], statusColor[2]);
        doc.text(statusText, 22, y);
        doc.setTextColor(0, 0, 0);
        y += 6;

        // Analysis summary
        if (result.finalResult) {
          doc.setFontSize(8);
          doc.setFont('helvetica', 'italic');
          doc.setTextColor(80, 80, 80);
          doc.text(\`Analysis: \${result.finalResult.summary}\`, 20, y);
          doc.setTextColor(0, 0, 0);
          y += 5;
        }

        y += 7;
      });

      // Footer on last page
      const pageCount = doc.internal.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(150, 150, 150);
        doc.text(\`Page \${i} of \${pageCount}\`, 105, 290, { align: 'center' });
        doc.text('Confidential - For Internal Use Only', 105, 285, { align: 'center' });
        doc.setTextColor(0, 0, 0);
      }

      // Save with formatted filename
      const timestamp = new Date().toISOString().split('T')[0];
      doc.save(\`SWG-Report-\${userName.trim().replace(/\s+/g, '-')}-\${timestamp}.pdf\`);
    }

    function init() {
      const testsEl = document.getElementById('tests');
      testsEl.innerHTML = TESTS.map(createCard).join('');

      document.getElementById('startTest').onclick = startTesting;
      document.getElementById('verifyAllBtn').onclick = verifyAllUnclear;
      document.getElementById('reset').onclick = reset;
      document.getElementById('exportPDF').onclick = exportPDF;

      window.openForVerify = openForVerify;
      window.confirmResult = confirmResult;

      updateStats();
    }

    init();
  </script>
</body>
</html>`;
}
