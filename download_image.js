const https = require('https');
const fs = require('fs');

https.get('https://res.cloudinary.com/dccvdkffu/image/upload/v1773068038/10pvb-1_azicqu.jpg', (res) => {
  let data = [];
  res.on('data', chunk => data.push(chunk));
  res.on('end', () => {
    let buffer = Buffer.concat(data);
    fs.writeFileSync('test_image.jpg', buffer);
    console.log('Image saved to test_image.jpg');
  });
});
