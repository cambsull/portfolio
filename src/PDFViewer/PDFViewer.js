import React, { useEffect, useRef } from 'react';
import * as pdfjs from 'pdfjs-dist';

const PDFViewer = ({ url }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const renderPDF = async () => {
            const loadingTask = pdfjs.getDocument(url);
            const pdf = await loadingTask.promise;
            
            const pageNumber = 1; 
            const page = await pdf.getPage(pageNumber);

            const scale = 1.5; 
            const viewport = page.getViewport({ scale });

            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            await page.render(renderContext);
        };

        renderPDF();

        return () => {
           
        };
    }, [url]);

    return <canvas ref={canvasRef} />;
};

export default PDFViewer;