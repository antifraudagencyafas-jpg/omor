import https from 'https';

https.get('https://res.cloudinary.com/dccvdkffu/image/upload/v1773049630/Ommm_p2g9w8.jpg', (res) => {
  const chunks: Buffer[] = [];
  res.on('data', (chunk) => chunks.push(chunk));
  res.on('end', () => {
    const buffer = Buffer.concat(chunks);
    console.log('Image downloaded, size:', buffer.length);
    // Let's just print the first few bytes to see if it's a valid JPEG
    console.log(buffer.slice(0, 20));
  });
});
