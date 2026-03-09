const fs = require('fs');
const https = require('https');

https.get('https://res.cloudinary.com/dccvdkffu/image/upload/v1773068038/10pvb-1_azicqu.jpg', (res) => {
  let data = [];
  res.on('data', chunk => data.push(chunk));
  res.on('end', () => {
    let buffer = Buffer.concat(data);
    // Just print the first few bytes to see if it's a valid JPEG
    console.log(buffer.slice(0, 10).toString('hex'));
  });
});
