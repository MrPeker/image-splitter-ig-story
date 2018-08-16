const jimp = require('jimp');
const image = process.argv[2];
const name = process.argv[3];

jimp.read(image, (err, image) => {
    if (err) throw err;
    let { width, height } = image.bitmap;
    console.log(width, width/1080, 1080/1920, 1920*(width/1080), 1920/(width/1080));
    let splitHeight = 1920*(width/1080);
    let imageCount = height/splitHeight;
    for (let i = 1; i <= imageCount; i++) {
        console.log("Creating " + i + ". image");
        image.clone()
            .crop(0, splitHeight*(i-1), width, splitHeight)
            .write(name + '/' + i + '.jpg', (err, res) => {
                if(err) throw err;
                else console.log("Created " + i + ". image");
            });
    }
});