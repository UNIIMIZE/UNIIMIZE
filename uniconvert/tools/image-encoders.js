/**
 * Simple client-side image encoders.
 */

const ImageEncoders = {
    /**
     * Converts a canvas to a BMP Blob.
     * Supports 24-bit RGB.
     */
    toBMP: function (canvas) {
        const width = canvas.width;
        const height = canvas.height;
        const ctx = canvas.getContext('2d');
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;

        // BGR 24-bit (3 bytes per pixel)
        // Row size must be multiple of 4 bytes
        const rowSize = Math.floor((24 * width + 31) / 32) * 4;
        const fileSize = 54 + rowSize * height;

        const buffer = new ArrayBuffer(fileSize);
        const view = new DataView(buffer);

        // BITMAPFILEHEADER
        view.setUint16(0, 0x4D42, true); // "BM"
        view.setUint32(2, fileSize, true);
        view.setUint32(10, 54, true);

        // BITMAPINFOHEADER
        view.setUint32(14, 40, true);
        view.setInt32(18, width, true);
        view.setInt32(22, -height, true);
        view.setUint16(26, 1, true);
        view.setUint16(28, 24, true);
        view.setUint32(34, rowSize * height, true);

        let offset = 54;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const i = (y * width + x) * 4;
                view.setUint8(offset++, data[i + 2]); // B
                view.setUint8(offset++, data[i + 1]); // G
                view.setUint8(offset++, data[i]);     // R
            }
            const padding = rowSize - (width * 3);
            for (let p = 0; p < padding; p++) view.setUint8(offset++, 0);
        }

        return new Blob([buffer], { type: 'image/bmp' });
    },

    /**
     * Converts a canvas to an ICO Blob (PNG container).
     */
    toICO: async function (canvas) {
        return new Promise((resolve) => {
            canvas.toBlob((pngBlob) => {
                const reader = new FileReader();
                reader.readAsArrayBuffer(pngBlob);
                reader.onload = () => {
                    const pngData = new Uint8Array(reader.result);
                    const fileSize = 22 + pngData.length;
                    const buffer = new ArrayBuffer(fileSize);
                    const view = new DataView(buffer);

                    view.setUint16(2, 1, true); // Type 1 (Icon)
                    view.setUint16(4, 1, true); // Count 1

                    let w = canvas.width > 255 ? 0 : canvas.width;
                    let h = canvas.height > 255 ? 0 : canvas.height;

                    view.setUint8(6, w);
                    view.setUint8(7, h);
                    view.setUint16(10, 1, true); // Planes
                    view.setUint16(12, 32, true); // BPP
                    view.setUint32(14, pngData.length, true);
                    view.setUint32(18, 22, true);

                    new Uint8Array(buffer).set(pngData, 22);
                    resolve(new Blob([buffer], { type: 'image/x-icon' }));
                };
            }, 'image/png');
        });
    },

    /**
     * Converts a canvas to TGA (TARGA).
     * Uncompressed 24-bit RGB.
     */
    toTGA: function (canvas) {
        const width = canvas.width;
        const height = canvas.height;
        const ctx = canvas.getContext('2d');
        const data = ctx.getImageData(0, 0, width, height).data;

        const header = new Uint8Array(18);
        header[2] = 2; // Uncompressed True-Color Image
        header[12] = width & 0xFF;
        header[13] = (width >> 8) & 0xFF;
        header[14] = height & 0xFF;
        header[15] = (height >> 8) & 0xFF;
        header[16] = 24; // 24 bits per pixel

        // Image descriptors: top-left origin (bit 5 set)
        header[17] = 0x20;

        const pixelData = new Uint8Array(width * height * 3);
        let offset = 0;
        for (let i = 0; i < data.length; i += 4) {
            pixelData[offset++] = data[i + 2]; // B
            pixelData[offset++] = data[i + 1]; // G
            pixelData[offset++] = data[i];     // R
        }

        const buffer = new Uint8Array(header.length + pixelData.length);
        buffer.set(header, 0);
        buffer.set(pixelData, header.length);

        return new Blob([buffer], { type: 'image/x-tga' });
    },

    /**
     * Converts to SVG (Vectors wrapping a Raster image).
     */
    toSVG: function (canvas) {
        const dataURL = canvas.toDataURL('image/png');
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}">
            <image href="${dataURL}" width="100%" height="100%" />
        </svg>`;
        return new Blob([svg], { type: 'image/svg+xml' });
    },

    /**
     * Converts to EPS (Encapsulated PostScript).
     */
    toEPS: function (canvas) {
        const width = canvas.width;
        const height = canvas.height;
        const ctx = canvas.getContext('2d');
        const data = ctx.getImageData(0, 0, width, height).data;

        let eps = `%!PS-Adobe-3.0 EPSF-3.0
%%BoundingBox: 0 0 ${width} ${height}
%%Pages: 1
%%Title: Converted Image
%%Creator: Uniconvert
%%EndComments
/DeviceRGB setcolorspace
${width} ${height} scale
${width} ${height} 8 [${width} 0 0 -${height} 0 ${height}]
{<`;

        // Hex data
        let hex = "";
        for (let i = 0; i < data.length; i += 4) {
            let r = data[i].toString(16).padStart(2, '0');
            let g = data[i + 1].toString(16).padStart(2, '0');
            let b = data[i + 2].toString(16).padStart(2, '0');
            hex += r + g + b;
            if (hex.length > 70) { // Wrap lines
                eps += hex + '\n';
                hex = "";
            }
        }

        eps += hex + `>} false 3 colorimage
showpage
%%EOF`;

        return new Blob([eps], { type: 'application/postscript' });
    },

    /**
     * Converts to WBMP (Wireless Bitmap).
     * 1-bit monochrome.
     */
    toWBMP: function (canvas) {
        const width = canvas.width;
        const height = canvas.height;
        const ctx = canvas.getContext('2d');
        const data = ctx.getImageData(0, 0, width, height).data;

        // Header: Type 0, Fixed Header 0
        const header = [0, 0];

        // Variable Int encoding for width and height
        const encodeInt = (n) => {
            const bytes = [];
            bytes.push(n & 0x7F);
            n >>= 7;
            while (n > 0) {
                bytes.unshift((n & 0x7F) | 0x80);
                n >>= 7;
            }
            return bytes;
        };

        header.push(...encodeInt(width));
        header.push(...encodeInt(height));

        // Data
        const rowSize = Math.ceil(width / 8);
        const pixelData = new Uint8Array(rowSize * height);

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const i = (y * width + x) * 4;
                const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                if (avg > 127) { // White (1)
                    const bitIndex = x % 8;
                    const byteIndex = (y * rowSize) + Math.floor(x / 8);
                    pixelData[byteIndex] |= (1 << (7 - bitIndex));
                }
            }
        }

        const buffer = new Uint8Array(header.length + pixelData.length);
        buffer.set(header, 0);
        buffer.set(pixelData, header.length);

        return new Blob([buffer], { type: 'image/vnd.wap.wbmp' });
    },

    /**
     * Converts to Uncompressed TIFF (Tag Image File Format).
     */
    toTIFF: function (canvas) {
        const width = canvas.width;
        const height = canvas.height;
        const ctx = canvas.getContext('2d');
        const data = ctx.getImageData(0, 0, width, height).data;

        // Simple Little-Endian TIFF
        const buffer = new ArrayBuffer(1024 + width * height * 4); // ample space for headers + data
        const view = new DataView(buffer);
        let offset = 0;

        // Header
        view.setUint16(0, 0x4949, true); // "II" (Little Endian)
        view.setUint16(2, 42, true); // 42
        view.setUint32(4, 8, true); // Offset to IFD (8)
        offset += 8;

        // IFD (Image File Directory)
        const entries = 12;
        view.setUint16(offset, entries, true); offset += 2;

        const writeEntry = (tag, type, count, value) => {
            view.setUint16(offset, tag, true);
            view.setUint16(offset + 2, type, true);
            view.setUint32(offset + 4, count, true);
            view.setUint32(offset + 8, value, true);
            offset += 12;
        };

        const stripOffset = offset + entries * 12 + 4; // Data starts after IFD

        writeEntry(256, 3, 1, width); // Width
        writeEntry(257, 3, 1, height); // Height
        writeEntry(258, 3, 3, stripOffset + width * height * 3); // BitsPerSample (offset to array [8,8,8])
        writeEntry(259, 3, 1, 1); // Compression (1=None)
        writeEntry(262, 3, 1, 2); // PhotometricInterpretation (2=RGB)
        writeEntry(273, 4, 1, stripOffset); // StripOffsets
        writeEntry(277, 3, 1, 3); // SamplesPerPixel
        writeEntry(278, 4, 1, height); // RowsPerStrip
        writeEntry(279, 4, 1, width * height * 3); // StripByteCounts
        writeEntry(282, 5, 1, stripOffset + width * height * 3 + 6); // XResolution (offset)
        writeEntry(283, 5, 1, stripOffset + width * height * 3 + 14); // YResolution (offset)
        writeEntry(296, 3, 1, 2); // ResolutionUnit (2=Inch)

        view.setUint32(offset, 0, true); // Next IFD (0)
        offset = stripOffset;

        // Pixel Data (RGB) - TIFF is typically RGB
        for (let i = 0; i < data.length; i += 4) {
            view.setUint8(offset++, data[i]);
            view.setUint8(offset++, data[i + 1]);
            view.setUint8(offset++, data[i + 2]);
        }

        // Extra Data (BitsPerSample array [8,8,8])
        view.setUint16(offset, 8, true); offset += 2;
        view.setUint16(offset, 8, true); offset += 2;
        view.setUint16(offset, 8, true); offset += 2;

        // Resolutions (72/1)
        view.setUint32(offset, 72, true); offset += 4;
        view.setUint32(offset, 1, true); offset += 4;
        view.setUint32(offset, 72, true); offset += 4;
        view.setUint32(offset, 1, true); offset += 4;

        return new Blob([buffer.slice(0, offset)], { type: 'image/tiff' });
    }
};
