<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>UNIIMIZE — A Platform for Practical Tools</title>

<meta name="description"
content="UNIIMIZE is a multi-domain platform offering practical online tools across documents, media, productivity, utilities, and more." />

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

<link rel="icon" type="image/svg+xml"
href="https://raw.githubusercontent.com/UNIIMIZE/UNIIMIZE/598623fc3bcd4259bc646f7b3f845e915c860538/favicon.svg">

<style>
:root{
  --bg:#ffffff;
  --surface:#f8fafc;
  --glass:rgba(255,255,255,.65);
  --border:#e2e8f0;
  --text:#0f172a;
  --muted:#64748b;
  --accent:#4f46e5;
  --accent-2:#ec4899;
  --radius:24px;
  --ease:cubic-bezier(.2,.8,.2,1);
}

*{margin:0;padding:0;box-sizing:border-box}

body{
  font-family:Inter,system-ui,sans-serif;
  color:var(--text);
  background:
    radial-gradient(1200px 500px at 10% -10%,#eef2ff,transparent),
    radial-gradient(800px 400px at 90% 0%,#fce7f3,transparent),
    var(--bg);
  line-height:1.6;
}

a{color:inherit;text-decoration:none}

.container{max-width:1240px;margin:0 auto;padding:0 24px}

/* NAV */
nav{
  padding:28px 0;
  display:flex;
  align-items:center;
}

.logo{
  font-weight:900;
  font-size:1.4rem;
  letter-spacing:-.03em;
  background:linear-gradient(135deg,var(--accent),var(--accent-2));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* HERO */
.hero{
  padding:120px 0 90px;
  text-align:center;
}

.hero h1{
  font-size:clamp(3rem,7vw,4.8rem);
  font-weight:900;
  letter-spacing:-.045em;
  margin-bottom:28px;
}

.hero p{
  max-width:760px;
  margin:0 auto 56px;
  font-size:1.2rem;
  color:var(--muted);
}

/* SEARCH */
.search{
  max-width:620px;
  margin:0 auto;
  position:relative;
}

.search input{
  width:100%;
  padding:20px 26px;
  border-radius:999px;
  border:1px solid var(--border);
  background:white;
  font-size:1.05rem;
}

.search input:focus{
  outline:none;
  border-color:var(--accent);
  box-shadow:0 0 0 4px rgba(79,70,229,.15);
}

/* PLATFORM SECTIONS */
.section{
  margin-top:120px;
}

.section-header{
  max-width:700px;
  margin-bottom:48px;
}

.section-header h2{
  font-size:2.2rem;
  letter-spacing:-.03em;
  margin-bottom:12px;
}

.section-header p{
  color:var(--muted);
}

/* CATEGORY GRID */
.categories{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  gap:32px;
}

.category{
  background:
    linear-gradient(180deg,rgba(255,255,255,.9),var(--surface));
  border:1px solid var(--border);
  border-radius:32px;
  padding:48px;
  display:flex;
  flex-direction:column;
  min-height:280px;
  transition:transform .45s var(--ease),box-shadow .45s var(--ease);
}

.category:hover{
  transform:translateY(-10px);
  box-shadow:0 40px 80px -30px rgba(15,23,42,.25);
}

.category h3{
  font-size:1.9rem;
  margin-bottom:14px;
}

.category p{
  color:var(--muted);
  flex-grow:1;
}

.category span{
  margin-top:28px;
  font-weight:700;
  font-size:.95rem;
}

/* VALUES */
.values{
  margin:140px 0;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:48px;
}

.value h4{
  font-size:1.1rem;
  margin-bottom:10px;
}

.value p{
  color:var(--muted);
  font-size:.95rem;
}

/* FOOTER */
footer{
  border-top:1px solid var(--border);
  padding:44px 0;
  background:var(--surface);
  text-align:center;
  font-size:.85rem;
  color:var(--muted);
}

/* HARD RULE */
a:hover,
h1:hover,
h2:hover,
h3:hover,
p:hover{
  text-decoration:none !important;
}

/* MOBILE */
@media(max-width:640px){
  .hero{padding:80px 0}
  .category{padding:36px}
}
</style>
</head>

<body>
<div class="container">

<nav>
  <div class="logo">UNIIMIZE</div>
</nav>

<section class="hero">
  <h1>A Platform of Useful Tools.</h1>
  <p>
    UNIIMIZE brings together practical online tools across multiple domains —
    documents, media, productivity, utilities, and beyond — under one clean interface.
  </p>

  <div class="search">
    <input placeholder="Search tools, categories, or features…" />
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>Tool Categories</h2>
    <p>
      Each category is a focused toolkit designed to solve real-world problems
      efficiently and without unnecessary complexity.
    </p>
  </div>

  <div class="categories">
    <a class="category" href="./pdfory/index.html">
      <h3 style="color:#ff6a00">Documents</h3>
      <p>PDFs and document utilities built for accuracy, speed, and reliability.</p>
      <span>Explore Document Tools →</span>
    </a>

    <a class="category" href="./editaroo/index.html">
      <h3 style="color:#0ea5e9">Media</h3>
      <p>Image and visual tools for editing, conversion, and enhancement.</p>
      <span>Explore Media Tools →</span>
    </a>

    <div class="category">
      <h3 style="color:#22c55e">Productivity</h3>
      <p>Time, planning, conversion, and workflow utilities for everyday tasks.</p>
      <span>In Development</span>
    </div>

    <div class="category">
      <h3 style="color:#a855f7">Utilities</h3>
      <p>General-purpose tools across multiple technical and non-technical fields.</p>
      <span>Expanding Platform</span>
    </div>
  </div>
</section>

<section class="values">
  <div class="value">
    <h4>Platform-First Design</h4>
    <p>Built to support hundreds of tools without fragmentation.</p>
  </div>
  <div class="value">
    <h4>Focused Experiences</h4>
    <p>Each tool solves one problem well instead of doing everything poorly.</p>
  </div>
  <div class="value">
    <h4>Scalable Architecture</h4>
    <p>New domains and categories can be added without redesign.</p>
  </div>
</section>

<footer>
  © 2026 UNIIMIZE Inc. All rights reserved.
</footer>

</div>
</body>
