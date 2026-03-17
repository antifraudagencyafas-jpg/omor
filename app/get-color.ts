import https from 'https';

https.get('https://res.cloudinary.com/dccvdkffu/image/upload/v1773742819/Picsart_26-03-17_11-05-57-578_lb0wyl.png', (res) => {
  const chunks: Buffer[] = [];
  res.on('data', (chunk) => chunks.push(chunk));
  res.on('end', () => {
    const buffer = Buffer.concat(chunks);
    console.log('Image downloaded, size:', buffer.length);
    // Let's just print the first few bytes to see if it's a valid JPEG
    console.log(buffer.slice(0, 20));
  });
});
