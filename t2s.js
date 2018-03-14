const OpenCC = require('opencc');

const opencc = new OpenCC('t2s.json');

const fs = require('fs');

if (!fs.existsSync('./poetry')) {
  fs.mkdir('./poetry');
}

const files = fs.readdirSync('./json');

files.forEach(i => {
  const data = fs.readFileSync(`./json/${i}`);
  const convertData = opencc.convertSync(data.toString());
  fs.writeFile(`./poetry/${i}`, convertData, err => {
    if (err) {
      return console.log(err);
    }
    console.log(`成功转换文件${i}`);
  });
});