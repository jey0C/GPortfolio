<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Portfolio — README</title>
  <meta name="description" content="README for my portfolio GitHub repository." />
  <style>
    :root{
      --bg: #0b0d12;
      --panel: rgba(255,255,255,.06);
      --border: rgba(255,255,255,.10);
      --text: #eef1f6;
      --muted: rgba(238,241,246,.72);
      --code-bg: rgba(255,255,255,.07);
      --radius: 16px;
      --max: 860px;
    }
    *{ box-sizing:border-box; }
    html,body{ height:100%; }
    body{
      margin:0;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Apple Color Emoji", "Segoe UI Emoji";
      background: radial-gradient(900px 500px at 20% 10%, rgba(124,92,255,.18), transparent 55%),
                  radial-gradient(900px 500px at 80% 15%, rgba(255,138,91,.14), transparent 50%),
                  var(--bg);
      color: var(--text);
      line-height: 1.6;
    }
    .wrap{
      max-width: var(--max);
      margin: 0 auto;
      padding: 56px 20px 72px;
    }
    header{
      margin-bottom: 18px;
    }
    h1{
      margin: 0 0 6px;
      font-size: clamp(2rem, 3.6vw, 2.6rem);
      letter-spacing: -0.02em;
    }
    .subtitle{
      margin: 0;
      color: var(--muted);
      font-size: 1rem;
    }
    .card{
      margin-top: 22px;
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 22px 22px;
      box-shadow: 0 14px 40px rgba(0,0,0,.28);
    }
    h2{
      margin: 22px 0 10px;
      font-size: 1.25rem;
      letter-spacing: -0.01em;
    }
    h2:first-of-type{ margin-top: 0; }
    p{ margin: 0 0 12px; }
    ul{
      margin: 8px 0 14px 20px;
      padding: 0;
    }
    li{ margin: 6px 0; }
    code, pre{
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
      font-size: .95em;
    }
    pre{
      margin: 10px 0 16px;
      padding: 14px 14px;
      border-radius: 12px;
      background: var(--code-bg);
      border: 1px solid rgba(255,255,255,.08);
      overflow:auto;
    }
    .note{
      color: var(--muted);
      font-size: .95rem;
    }
    footer{
      margin-top: 18px;
      color: var(--muted);
      font-size: .9rem;
    }
  </style>
</head>
<body>
  <main class="wrap">
    <header>
      <h1>Portfolio</h1>
      <p class="subtitle">README for my portfolio GitHub repository</p>
    </header>

    <section class="card">
      <p>This repository contains the source code for my personal portfolio website.</p>

      <p>
        The site serves as a living archive of my work as a software engineer and creative technologist,
        showcasing selected projects, experiments, and design thinking across systems, interaction,
        and product development.
      </p>

      <h2>Overview</h2>
      <p>The portfolio is designed to be:</p>
      <ul>
        <li><strong>Clear and focused</strong> — content-forward with minimal visual noise</li>
        <li><strong>System-oriented</strong> — reflecting how I think about architecture, performance, and maintainability</li>
        <li><strong>Iterative</strong> — continuously refined as projects evolve</li>
      </ul>

      <h2>Tech Stack</h2>
      <ul>
        <li>HTML / CSS / JavaScript</li>
        <li>React (where applicable)</li>
        <li>Modern CSS layout and animation techniques</li>
      </ul>

      <h2>Structure</h2>
      <ul>
        <li><code>pages/</code> — individual site pages</li>
        <li><code>assets/</code> — images, icons, and static resources</li>
        <li><code>components/</code> — reusable UI components</li>
        <li><code>styles/</code> — global styles and page-specific styling</li>
      </ul>
      <p class="note">(Structure may evolve as the site grows.)</p>

      <h2>Development</h2>
      <p>To run locally:</p>
      <pre><code># install dependencies
npm install

# start development server
npm run dev</code></pre>

      <h2>Notes</h2>
      <p>
        This portfolio is intentionally kept lightweight and framework-agnostic where possible.
        Design and implementation decisions favor clarity, performance, and long-term maintainability
        over trend-driven complexity.
      </p>

      <h2>Contact</h2>
      <p>If you’d like to get in touch, you can find my contact details on the website.</p>
    </section>

    <footer>
      <p>Last updated: <span id="date"></span></p>
    </footer>
  </main>

  <script>
    // Small touch: auto-fill a readable date (optional)
    const d = new Date();
    document.getElementById("date").textContent =
      d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  </script>
</body>
</html>
