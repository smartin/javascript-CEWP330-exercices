let bandInfo;

// Add your code here
const band = {
  name: 'The Tragically Hip',
  nationality: 'Canadian',
  genre: 'Rock',
  members: 5,
  formed: 1985,
  split: 2018,
  albums: [{
    name: 'Up to Here',
    date: 1989
  }, {
    name: 'Road Apples',
    date: 1991
  }]
};

bandInfo = `The ${band.nationality} ${band.genre.toLowerCase()} band ${band.name}
were active ${band.formed}-${band.split}. Their first album,
${band.albums[0].name}, was released in ${band.albums[0].date}.
Their follow-up album, ${band.albums[1].name}, was released
in ${band.albums[1].date}.`;

// Don't edit the code below here!
const section = document.querySelector('section');
const para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);
