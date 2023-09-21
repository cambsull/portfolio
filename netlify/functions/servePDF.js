//Check for blank User-Agent, ensure refferer comes from within domain before serving
//PDF in order to deter bot scraping.
const fs = require('fs');
const path = require('path');

function logReferrer(referrer) {
  console.log('Referrer:', referrer); }

function logHeaders(headers) {
    console.log('Headers: ', headers)
}

exports.handler = async function (event) {
    const referrer = event.headers.referer || event.headers.referrer;
    logHeaders(event.headers);
    logReferrer(referrer);
    
    
    
  // User-Agent Checking
  const userAgent = event.headers['user-agent'];
  if (!userAgent) {
      return {
          statusCode: 403,
          body: 'Access Denied'
      };
  }

  // Referrer Checking 
  if (!referrer || !referrer.startsWith('https://digitalchemistweb.net') 
    && !referrer.startsWith('http://localhost:1234')) {
      return {
          statusCode: 403,
          body: 'Access Denied'
      };
  } 

  // If all checks pass, serve the PDF
  const pdfPath = './public/Cambria_Sullivan_Resume.pdf';
  const pdfBuffer = await fs.promises.readFile(pdfPath);

  return {
      statusCode: 200,
      headers: {
          'Content-type': 'application/pdf',
          'Content-Disposition': 'inline'
      },
      body: pdfBuffer.toString('base64'),
      isBase64Encoded: true
  };
};