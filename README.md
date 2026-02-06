<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>UNIIMIZE — Digital Tools, Simplified</title>

<meta name="description"
content="Fast and privacy-aware PDF and Image tools that run directly in your browser. Built for clarity, speed, and modern workflows." />

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

<link rel="icon" type="image/svg+xml"
href="https://raw.githubusercontent.com/UNIIMIZE/UNIIMIZE/598623fc3bcd4259bc646f7b3f845e915c860538/favicon.svg">

<style>
:root {
    --bg: #ffffff;
    --surface: #f8fafc;
    --surface-2: #eef2f7;
    --border: #e2e8f0;
    --text: #0f172a;
    --muted: #64748b;
    --accent: #4f46e5;
    --accent-2: #ec4899;
    --radius: 20px;
    --ease: cubic-bezier(.2,.8,.2,1);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Inter, system-ui, sans-serif;
    background:
        radial-gradient(1000px 500px at 10% -10%, #eef2ff, transparent),
        radial-gradient(800px 400px at 90% 0%, #fce7f3, transparent),
        var(--bg);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

.container {
    max-width: 1200px;
    padding: 0 24px;
    margin: 0 auto;
}

/* NAV */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px 0;
}

.logo {
    font-weight: 900;
    font-size: 1.35rem;
    letter-spacing: -0.03em;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* HERO */
.hero {
    padding: 100px 0 80px;
    text-align: center;
}

.hero h1 {
    font-size: clamp(2.6rem, 7vw, 4.2rem);
    font-weight: 900;
    letter-spacing: -0.045em;
    margin-bottom: 24px;
}

.hero p {
    max-width: 640px;
    margin: 0 auto 48px;
    color: var(--muted);
    font-size: 1.15rem;
}

/* SEARCH */
.search {
    max-width: 520px;
    margin: 0 auto;
    position: relative;
}

.search input {
    width: 100%;
    padding: 18px 24px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: white;
    color: var(--text);
    font-size: 1rem;
    transition: border .3s var(--ease), box-shadow .3s var(--ease);
}

.search input:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 4px rgba(79,70,229,.15);
}

.results {
    position: absolute;
    top: calc(100% + 12px);
    left: 0;
    right: 0;
    background: white;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    display: none;
    z-index: 20;
    box-shadow: 0 20px 40px -12px rgba(0,0,0,.12);
}

.result {
    padding: 14px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: background .2s;
}

.result:hover {
    background: var(--surface);
}

.tag {
    font-size: .7rem;
    font-weight: 700;
    padding: 4px 8px;
    border-radius: 999px;
}

.tag.pdf { background: #fff7ed; color: #c2410c; }
.tag.img { background: #f0f9ff; color: #0284c7; }

/* TOOL GRID */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 28px;
    margin-top: 80px;
}

.card {
    background: linear-gradient(180deg, white, var(--surface));
    border: 1px solid var(--border);
    border-radius: 28px;
    padding: 44px;
    display: flex;
    flex-direction: column;
    min-height: 260px;
    transition: transform .4s var(--ease), box-shadow .4s var(--ease);
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 60px -20px rgba(15,23,42,.2);
}

.card h2 {
    font-size: 2rem;
    margin-bottom: 12px;
}

.card p {
    color: var(--muted);
    flex-grow: 1;
}

.card span {
    font-weight: 700;
    margin-top: 24px;
}

/* FEATURES */
.features {
    margin: 120px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
    gap: 40px;
}

.feature h3 {
    margin-bottom: 8px;
    font-size: 1.1rem;
}

.feature p {
    color: var(--muted);
    font-size: .95rem;
}

/* FOOTER */
footer {
    border-top: 1px solid var(--border);
    padding: 40px 0;
    text-align: center;
    color: var(--muted);
    font-size: .85rem;
    background: var(--surface);
}

/* HARD RULE: NO TEXT DECORATION */
a:hover,
h1:hover,
h2:hover,
h3:hover,
p:hover {
    text-decoration: none !important;
}

/* MOBILE */
@media (max-width: 640px) {
    .hero {
        padding: 70px 0;
    }
    .card {
        padding: 32px;
    }
}
</style>
</head>

<body>
<div class="container">

<nav>
    <div class="logo">UNIIMIZE</div>
</nav>

<section class="hero">
    <h1>Clean Tools.<br>Real Productivity.</h1>
    <p>
        Edit PDFs and images directly in your browser with modern,
        privacy-aware workflows designed for speed and clarity.
    </p>

    <div class="search">
        <input id="search" placeholder="Search tools (merge, compress, resize…)" />
        <div class="results" id="results"></div>
    </div>
</section>

<section class="grid">
    <a class="card" href="./pdfory/index.html">
        <h2 style="color:#ff6a00">PDFORY</h2>
        <p>Merge, split, compress, and protect PDF documents with precision.</p>
        <span>Open PDF Toolkit →</span>
    </a>

    <a class="card" href="./editaroo/index.html">
        <h2 style="color:#0ea5e9">EDITAROO</h2>
        <p>Resize, crop, convert, and enhance images without unnecessary steps.</p>
        <span>Open Image Toolkit →</span>
    </a>
</section>

<section class="features">
    <div class="feature">
        <h3>Privacy-Aware</h3>
        <p>Designed to reduce unnecessary data transfer.</p>
    </div>
    <div class="feature">
        <h3>High Performance</h3>
        <p>Optimized for modern browsers and devices.</p>
    </div>
    <div class="feature">
        <h3>Simple by Default</h3>
        <p>No clutter. No learning curve.</p>
    </div>
</section>

<footer>
    © 2026 UNIIMIZE Inc. All rights reserved.
</footer>

</div>

<script>
const tools = [
    { name:"Merge PDF", url:"./pdfory/tools/merge-pdf.html", type:"pdf" },
    { name:"Compress PDF", url:"./pdfory/tools/compress-pdf.html", type:"pdf" },
    { name:"Split PDF", url:"./pdfory/tools/split-pdf.html", type:"pdf" },
    { name:"Resize Image", url:"./editaroo/tools/resize-image.html", type:"img" },
    { name:"Crop Image", url:"./editaroo/tools/crop-image.html", type:"img" },
    { name:"Convert Image", url:"./editaroo/tools/convert-image.html", type:"img" }
];

const input = document.getElementById("search");
const results = document.getElementById("results");

input.addEventListener("input", e => {
    const q = e.target.value.toLowerCase();
    if (q.length < 2) {
        results.style.display = "none";
        return;
    }

    const matches = tools.filter(t => t.name.toLowerCase().includes(q));
    if (!matches.length) {
        results.style.display = "none";
        return;
    }

    results.innerHTML = matches.map(t => `
        <div class="result" onclick="location.href='${t.url}'">
            ${t.name}
            <span class="tag ${t.type}">${t.type.toUpperCase()}</span>
        </div>
    `).join("");
    results.style.display = "block";
});

document.addEventListener("click", e => {
    if (!e.target.closest(".search")) results.style.display = "none";
});
</script>

</body>
