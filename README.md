<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>UNIIMIZE — The Ultimate Digital Toolkit</title>
    <meta name="description"
        content="Free, private, and local-first digital tools. Edit PDFs and Images securely in your browser with Uniimize." />
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet" />
    <link rel="icon" type="image/svg+xml" href="https://raw.githubusercontent.com/UNIIMIZE/UNIIMIZE/598623fc3bcd4259bc646f7b3f845e915c860538/favicon.svg" />

    <style>
        :root {
            --primary: #4f46e5;
            /* Indigo 600 */
            --primary-light: #e0e7ff;
            --secondary: #ec4899;
            /* Pink 500 */
            --bg: #ffffff;
            --surface: #f8fafc;
            /* Slate 50 */
            --text: #0f172a;
            /* Slate 900 */
            --text-muted: #64748b;
            /* Slate 500 */
            --border: #e2e8f0;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background: var(--bg);
            color: var(--text);
            line-height: 1.6;
            overflow-x: hidden;
        }

        h1,
        h2,
        h3 {
            line-height: 1.2;
        }

        a {
            text-decoration: none;
            color: inherit;
            transition: 0.3s;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* Hero Background */
        .bg-glow {
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            overflow: hidden;
            z-index: -1;
            background: linear-gradient(to bottom, #fff, #f1f5f9);
        }

        .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.6;
            /* Higher opacity for light theme */
            animation: float 20s infinite alternate;
        }

        .orb-1 {
            width: 800px;
            height: 800px;
            background: #e0e7ff;
            /* Very light indigo */
            top: -20%;
            left: -10%;
        }

        .orb-2 {
            width: 600px;
            height: 600px;
            background: #fce7f3;
            /* Very light pink */
            bottom: -10%;
            right: -10%;
            animation-delay: -5s;
        }

        @keyframes float {
            0% {
                transform: translate(0, 0);
            }

            100% {
                transform: translate(40px, 40px);
            }
        }

        /* Navbar */
        nav {
            padding: 24px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 800;
            letter-spacing: -0.03em;
            color: var(--primary);
        }

        /* Hero Section */
        .hero {
            padding: 120px 0 80px;
            text-align: center;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            padding: 6px 16px;
            background: var(--primary-light);
            color: var(--primary);
            border-radius: 100px;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 32px;
        }

        h1 {
            font-size: clamp(3.5rem, 8vw, 6rem);
            font-weight: 800;
            letter-spacing: -0.04em;
            margin-bottom: 24px;
            background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .lead {
            font-size: 1.25rem;
            color: var(--text-muted);
            max-width: 600px;
            margin: 0 auto 60px;
        }

        /* Toolkits Grid */
        .toolkit-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
            margin-bottom: 80px;
        }

        .toolkit-card {
            background: #ffffff;
            border: 1px solid var(--border);
            border-radius: 32px;
            padding: 48px;
            display: flex;
            flex-direction: column;
            box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
            transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            text-decoration: none;
        }

        .toolkit-card:hover {
            transform: translateY(-8px);
            border-color: transparent;
        }

        .toolkit-card h2 {
            font-size: 2.5rem;
            margin-bottom: 12px;
            font-weight: 700;
        }

        .toolkit-card p {
            color: var(--text-muted);
            font-size: 1.1rem;
            margin-bottom: 40px;
            flex-grow: 1;
        }

        .card-footer {
            display: flex;
            align-items: center;
            font-weight: 700;
            gap: 12px;
        }

        /* Specific Card Styles */
        .card-pdfory h2 {
            color: #ff6a00;
        }

        .card-pdfory .card-footer {
            color: #ff6a00;
        }

        .card-pdfory:hover {
            box-shadow: 0 25px 50px -12px rgba(255, 106, 0, 0.15);
        }

        .card-editaroo h2 {
            color: #0ea5e9;
        }

        .card-editaroo .card-footer {
            color: #0ea5e9;
        }

        .card-editaroo:hover {
            box-shadow: 0 25px 50px -12px rgba(14, 165, 233, 0.15);
        }


        /* Value Props */
        .features {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            border-top: 1px solid var(--border);
            padding-top: 80px;
            margin-bottom: 100px;
        }

        .feature-icon {
            width: 48px;
            height: 48px;
            background: var(--surface);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16px;
            color: var(--primary);
        }

        .feature h3 {
            font-size: 1.2rem;
            margin-bottom: 8px;
            color: var(--text);
            font-weight: 700;
        }

        .feature p {
            color: var(--text-muted);
            font-size: 0.95rem;
        }

        footer {
            text-align: center;
            padding: 40px 0;
            color: var(--text-muted);
            font-size: 0.9rem;
            border-top: 1px solid var(--border);
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 3rem;
            }

            .features {
                grid-template-columns: 1fr;
                text-align: center;
            }

            .feature-icon {
                margin: 0 auto 16px;
            }

            .toolkit-card {
                padding: 32px;
                min-height: 250px;
            }
        }

        /* Search Styles */
        .search-container {
            position: relative;
            max-width: 500px;
            margin: 0 auto 40px;
            text-align: left;
        }

        .search-input {
            width: 100%;
            padding: 16px 24px;
            padding-left: 54px;
            font-size: 1.1rem;
            border: 1px solid var(--border);
            border-radius: 100px;
            background: white;
            box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
            font-family: inherit;
            color: var(--text);
        }

        .search-input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 10px 30px -5px rgba(79, 70, 229, 0.15);
        }

        .search-icon {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-muted);
            pointer-events: none;
        }

        .search-results {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            margin-top: 12px;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.1);
            border: 1px solid var(--border);
            overflow: hidden;
            display: none;
            z-index: 100;
        }

        .result-item {
            padding: 16px 24px;
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
            transition: 0.2s;
            border-bottom: 1px solid var(--surface);
            color: var(--text);
        }

        .result-item:last-child {
            border-bottom: none;
        }

        .result-item:hover {
            background: var(--surface);
        }

        .result-tag {
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            padding: 4px 8px;
            border-radius: 6px;
            margin-left: auto;
        }

        .tag-pdf {
            background: #fff7ed;
            color: #c2410c;
        }

        .tag-img {
            background: #f0f9ff;
            color: #0284c7;
        }
    </style>
</head>

<body>
    <div class="bg-glow">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
    </div>

    <div class="container">

        <section class="hero">
            <span class="badge">v2.0 Now Available</span>
            <h1>The Ultimate<br>Digital Toolkit.</h1>
            <p class="lead">A suite of powerful tools for your documents and images. <br>Processing happens entirely on
                your device.</p>

            <div class="search-container">
                <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" class="search-input" id="search-input"
                    placeholder="Search for tools (e.g. 'merge', 'crop')...">
                <div class="search-results" id="search-results"></div>
            </div>
        </section>

        <div class="toolkit-grid">
            <a href="./pdfory/index.html" class="toolkit-card card-pdfory">
                <h2>PDFORY</h2>
                <p>Merge, split, compress, and convert PDF documents with zero data transfer. The professional standard
                    for secure document handling.</p>
                <div class="card-footer">
                    Open PDF Toolkit
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </div>
            </a>

            <a href="./editaroo/index.html" class="toolkit-card card-editaroo">
                <h2>EDITAROO</h2>
                <p>Resize, crop, filter, and edit images instantly. From memes to watermarks, everything you need to
                    polish your visuals.</p>
                <div class="card-footer">
                    Open Image Toolkit
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </div>
            </a>
        </div>

        <div class="features">
            <div class="feature">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                </div>
                <h3>No Uploads</h3>
                <p>Your files never leave your computer. We use WebAssembly to process everything locally in your
                    browser.</p>
            </div>
            <div class="feature">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                </div>
                <h3>Lightning Fast</h3>
                <p>Zero network latency. Edits happens as fast as your processor can handle them.</p>
            </div>
            <div class="feature">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                        <line x1="12" y1="2" x2="12" y2="12"></line>
                    </svg>
                </div>
                <h3>Works Offline</h3>
                <p>No internet? No problem. The entire toolkit loads into memory and works without a connection.</p>
            </div>
        </div>

        <footer>
            <p>&copy; 2026 UNIIMIZE Inc. All rights reserved.</p>
        </footer>
    </div>

    <script>
        const tools = [
            // PDF Tools
            { name: "Merge PDF", tags: "combine join pdf", url: "./pdfory/tools/merge-pdf.html", type: "pdf" },
            { name: "Split PDF", tags: "separate cut extract pdf", url: "./pdfory/tools/split-pdf.html", type: "pdf" },
            { name: "Compress PDF", tags: "shrink reduce size optimize pdf", url: "./pdfory/tools/compress-pdf.html", type: "pdf" },
            { name: "Images to PDF", tags: "convert jpg png to pdf", url: "./pdfory/tools/images-to-pdf.html", type: "pdf" },
            { name: "PDF to Images", tags: "convert pdf to jpg png", url: "./pdfory/tools/pdf-to-images.html", type: "pdf" },
            { name: "Add Image to PDF", tags: "insert photo stamp pdf", url: "./pdfory/tools/add-image-pdf.html", type: "pdf" },
            { name: "Rotate PDF", tags: "turn orientation fix pdf", url: "./pdfory/tools/rotate-pdf.html", type: "pdf" },
            { name: "Watermark PDF", tags: "stamp protect logo pdf", url: "./pdfory/tools/watermark-pdf.html", type: "pdf" },
            { name: "Unlock PDF", tags: "decrypt remove password pdf", url: "./pdfory/tools/unlock-pdf.html", type: "pdf" },
            { name: "Protect PDF", tags: "encrypt lock password pdf", url: "./pdfory/tools/protect-pdf.html", type: "pdf" },
            { name: "Number Pages", tags: "pagination count pdf", url: "./pdfory/tools/number-pages.html", type: "pdf" },
            { name: "Delete Pages", tags: "remove cut pdf", url: "./pdfory/tools/delete-pages.html", type: "pdf" },

            // Image Tools
            { name: "Compress Image", tags: "shrink reduce size optimize jpg png", url: "./editaroo/tools/compress-image.html", type: "img" },
            { name: "Convert Image", tags: "format change jpg png webp", url: "./editaroo/tools/convert-image.html", type: "img" },
            { name: "Resize Image", tags: "scale dimensions width height", url: "./editaroo/tools/resize-image.html", type: "img" },
            { name: "Crop Image", tags: "cut trim selection", url: "./editaroo/tools/crop-image.html", type: "img" },
            { name: "Filter Image", tags: "effects instagram grayscale", url: "./editaroo/tools/filter-image.html", type: "img" },
            { name: "Rotate Image", tags: "turn orientation", url: "./editaroo/tools/rotate-image.html", type: "img" },
            { name: "Flip Image", tags: "mirror reflect", url: "./editaroo/tools/flip-image.html", type: "img" },
            { name: "Watermark Image", tags: "stamp protect logo", url: "./editaroo/tools/watermark-image.html", type: "img" },
            { name: "Meme Generator", tags: "funny caption text", url: "./editaroo/tools/meme-generator.html", type: "img" },
            { name: "Color Picker", tags: "eyedropper hex rgb palette", url: "./editaroo/tools/color-picker.html", type: "img" }
        ];

        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (query.length < 2) {
                searchResults.style.display = 'none';
                return;
            }

            const results = tools.filter(tool =>
                tool.name.toLowerCase().includes(query) ||
                tool.tags.includes(query)
            );

            if (results.length > 0) {
                searchResults.innerHTML = results.slice(0, 5).map(tool => `
                    <div class="result-item" onclick="window.location.href='${tool.url}'">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            ${tool.type === 'pdf'
                        ? '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>'
                        : '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>'}
                        </svg>
                        ${tool.name}
                        <span class="result-tag tag-${tool.type}">${tool.type.toUpperCase()}</span>
                    </div>
                `).join('');
                searchResults.style.display = 'block';
            } else {
                searchResults.style.display = 'none';
            }
        });

        // Click outside to close
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                searchResults.style.display = 'none';
            }
        });
    </script>
</body>
