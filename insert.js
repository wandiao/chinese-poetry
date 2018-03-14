const query = require('./query');
const fs = require('fs');

// 导入词人
const ci_poets = require('./ci/author.song.json');
ci_poets.forEach((i, index) => {
  query(`insert into poems_author (name, intro, short_intro, dynasty) values ('${i.name}', '${i.description}', '${i.short_description}', 'S');`).then(res => {
    if (res.insertId) {
      console.log(`成功导入词人：${i.name}`);
    }
  });
});

// 导入词
const ci_group = fs.readdirSync('./ci').filter(i => i.indexOf('ci.song') !== -1);
ci_group.forEach(i => {
  const cis = require(`./ci/${i}`);
  cis.forEach(j => {
    const content = j.paragraphs.join('\n');
    query(`insert into poems (title, content, dynasty, author) values ('${j.rhythmic}', '${content}', 'S', '${j.author}')`).then(res => {
      if (res.insertId) {
        console.log(`成功导入词： ${j.rhythmic} -- ${j.author}`);
      }
    });
  });
});



// 导入诗人
const poetry_song_poets = require('./poetry/authors.song.json');
const poetry_tang_poets = require('./poetry/authors.tang.json');
poetry_song_poets.forEach((i, index) => {
  query(`insert into poetry_author (name, intro, dynasty) values ('${i.name}', '${i.desc}', 'S');`).then(res => {
    if (res.insertId) {
      console.log(`成功导入诗人：${i.name}`);
    }
  });
});
poetry_tang_poets.forEach((i, index) => {
  query(`insert into poetry_author (name, intro, dynasty) values ('${i.name}', '${i.desc}', 'T');`).then(res => {
    if (res.insertId) {
      console.log(`成功导入诗人：${i.name}`);
    }
  });
});

// 导入诗
const poetry_files = fs.readdirSync('./poetry');
const poetry_song_group = poetry_files.filter(i => i.indexOf('poet.song') !== -1);
const poetry_tang_group = poetry_files.filter(i => i.indexOf('poet.tang') !== -1);
poetry_song_group.forEach(i => {
  const poetries = require(`./poetry/${i}`);
  poetries.forEach(j => {
    const content = j.paragraphs.join('\n');
    const strains = j.strains.join('\n');
    query(`insert into poetry (title, yunlv_rule, content, dynasty, author) values ('${j.title}', '${content}', '${strains}', 'S', '${j.author}')`).then(res => {
      if (res.insertId) {
        console.log(`成功导入诗： ${j.title} -- ${j.author}`);
      }
    });
  });
});
poetry_tang_group.forEach(i => {
  const poetries = require(`./poetry/${i}`);
  poetries.forEach(j => {
    const content = j.paragraphs.join('\n');
    const strains = j.strains.join('\n');
    query(`insert into poetry (title, yunlv_rule, content, dynasty, author) values ('${j.title}', '${strains}', '${content}', 'T', '${j.author}')`).then(res => {
      if (res.insertId) {
        console.log(`成功导入诗： ${j.title} -- ${j.author}`);
      }
    });
  });
});

