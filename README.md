<!-- =========================
 UNIIMIZE — Tool Hub README
 Hosted on GitHub
========================= -->

<div align="center">

# 🚀 UNIIMIZE
### One Platform. Multiple Utilities. Zero Friction.

<p>
A growing ecosystem of fast, privacy-focused, no-nonsense tools — built to save time and scale productivity.
</p>

<input 
  type="text" 
  id="toolSearch" 
  placeholder="Search tools..." 
  style="
    width: 70%;
    max-width: 420px;
    padding: 12px 14px;
    font-size: 16px;
    border-radius: 10px;
    border: 1px solid #ddd;
    outline: none;
    margin: 20px 0;
  "
  onkeyup="filterTools()"
/>

</div>

---

<style>
  .tool-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }

  .tool-card {
    border: 1px solid #e5e5e5;
    border-radius: 14px;
    padding: 18px;
    background: #ffffff;
    transition: all 0.25s ease;
    box-shadow: 0 8px 22px rgba(0,0,0,0.04);
  }

  .tool-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 40px rgba(0,0,0,0.08);
  }

  .tool-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  .tool-desc {
    font-size: 14px;
    color: #555;
    margin-bottom: 14px;
  }

  .tool-link {
    display: inline-block;
    padding: 8px 14px;
    font-size: 14px;
    border-radius: 8px;
    text-decoration: none;
    background: #ff6a00;
    color: #fff;
    font-weight: 500;
  }

  .tool-link:hover {
    background: #e85d00;
  }

  .category {
    font-size: 12px;
    font-weight: 600;
    color: #ff6a00;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
</style>

---

## 🧩 Available Tools

<div class="tool-grid" id="toolGrid">

  <div class="tool-card" data-name="pdf to image pdfory">
    <div class="category">PDF Tools</div>
    <div class="tool-title">PDF to Image</div>
    <div class="tool-desc">
      Convert every PDF page into high-quality PNG images instantly.
    </div>
    <a class="tool-link" href="https://pdfory.uniimize.in" target="_blank">
      Open Tool →
    </a>
  </div>

  <div class="tool-card" data-name="image compressor">
    <div class="category">Image Tools</div>
    <div class="tool-title">Image Compressor</div>
    <div class="tool-desc">
      Reduce image size without visible quality loss.
    </div>
    <a class="tool-link" href="https://imgcompress.uniimize.in" target="_blank">
      Open Tool →
    </a>
  </div>

  <div class="tool-card" data-name="pdf merger">
    <div class="category">PDF Tools</div>
    <div class="tool-title">PDF Merger</div>
    <div class="tool-desc">
      Merge multiple PDFs into a single file in seconds.
    </div>
    <a class="tool-link" href="https://pdfmerge.uniimize.in" target="_blank">
      Open Tool →
    </a>
  </div>

  <div class="tool-card" data-name="text utilities">
    <div class="category">Text Tools</div>
    <div class="tool-title">Text Utilities</div>
    <div class="tool-desc">
      Clean, format, and transform text with precision.
    </div>
    <a class="tool-link" href="https://texttools.uniimize.in" target="_blank">
      Open Tool →
    </a>
  </div>

</div>

---

<script>
  function filterTools() {
    const input = document.getElementById("toolSearch").value.toLowerCase();
    const cards = document.querySelectorAll(".tool-card");

    cards.forEach(card => {
      const name = card.getAttribute("data-name");
      card.style.display = name.includes(input) ? "block" : "none";
    });
  }
</script>

---

## 🔒 Core Principles

- No unnecessary data collection  
- Client-side processing wherever possible  
- Minimal UI, maximum speed  
- Built for scale, not gimmicks  

---

## 📌 Roadmap

- More PDF utilities  
- Offline-first tools  
- Unified dashboard  
- API access for power users  

---

## 🌐 Official Website
**https://uniimize.in**

---

<div align="center">
  <sub>© UNIIMIZE — Build tools that respect time.</sub>
</div>
