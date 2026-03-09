const https = require('https');

https.get('https://res.cloudinary.com/dccvdkffu/image/upload/v1773068038/10pvb-1_azicqu.jpg', (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);
  let data = [];
  res.on('data', chunk => data.push(chunk));
  res.on('end', () => {
    let buffer = Buffer.concat(data);
    console.log('Size:', buffer.length);
  });
}).on('error', (e) => {
  console.error(e);
});
