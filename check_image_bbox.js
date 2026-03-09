const Jimp = require('jimp');

Jimp.read('https://res.cloudinary.com/dccvdkffu/image/upload/v1773068038/10pvb-1_azicqu.jpg')
  .then(image => {
    let minX = image.bitmap.width, minY = image.bitmap.height, maxX = 0, maxY = 0;
    for (let y = 0; y < image.bitmap.height; y++) {
      for (let x = 0; x < image.bitmap.width; x++) {
        let hex = image.getPixelColor(x, y);
        let rgba = Jimp.intToRGBA(hex);
        if (!(rgba.r > 245 && rgba.g > 245 && rgba.b > 245)) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    console.log('Bounding Box:', { minX, minY, maxX, maxY });
    console.log('Width:', maxX - minX);
    console.log('Height:', maxY - minY);
  })
  .catch(err => {
    console.error(err);
  });
