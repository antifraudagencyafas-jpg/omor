const Jimp = require('jimp');

Jimp.read('https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/1pvb_owmqqf.jpg')
  .then(image => {
    console.log('Width:', image.bitmap.width);
    console.log('Height:', image.bitmap.height);
    let blackPixels = 0;
    let whitePixels = 0;
    let otherPixels = 0;
    for (let y = 0; y < image.bitmap.height; y++) {
      for (let x = 0; x < image.bitmap.width; x++) {
        let hex = image.getPixelColor(x, y);
        let rgba = Jimp.intToRGBA(hex);
        if (rgba.r < 10 && rgba.g < 10 && rgba.b < 10) blackPixels++;
        else if (rgba.r > 245 && rgba.g > 245 && rgba.b > 245) whitePixels++;
        else otherPixels++;
      }
    }
    console.log('Black Pixels:', blackPixels);
    console.log('White Pixels:', whitePixels);
    console.log('Other Pixels:', otherPixels);
  })
  .catch(err => {
    console.error(err);
  });
