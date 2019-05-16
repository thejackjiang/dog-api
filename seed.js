const mongoose = require('mongoose');
require('dotenv').config()

const { Dog } = require('./models/index')
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/doggos', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to mongo db: doggos')
});

const names = [
  'Rocket', 'Ruff', 'Jayce', 'Porkchop', 'Bear', 'Ace', 'Bandit', 'Bud'
]

const breeds = [
  'german shepherd', 'husky', 'malteese', 'pitbull', 'boston terrier', 'labrador', 'golden retriever'
]

const owners = [
  'Steve', 'Lily', 'Lucy', 'Ella', 'Eve', 'Dan', 'Emily', 'Nina'
]

const imageUrl = {
  'german shepherd': 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/german-shepherd-dog-detail.jpg?bust=1535565817&width=355',
  'husky': 'https://cdn.orvis.com/images/DBS_SibHusky.jpg',
  'malteese': 'https://upload.wikimedia.org/wikipedia/commons/8/86/Maltese_puppy.jpeg',
  'pitbull': 'https://americanbullydaily.com/wp-content/uploads/2018/04/This-Pitbull-is-Not-Dangerous.jpg',
  'boston terrier': 'https://vetstreet.brightspotcdn.com/dims4/default/cf608a3/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Ffe%2Fe4%2Fa3f63ddc46499d4b3bc6d6b67d1c%2Fboston-terrier-AP-RKTUFF-645sm12913.jpg',
  'labrador': 'https://upload.wikimedia.org/wikipedia/commons/2/26/YellowLabradorLooking_new.jpg',
  'golden retriever': 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12133017/Golden-Care.jpg'
}

const dogs = []

for (let i = 0; i < names.length; i++) {
  for (let j = 0; j < breeds.length; j++) {
    for (let k = 0; k < owners.length; k++) {
      const dog = {
        name: names[i],
        breed: breeds[j],
        imageUrl: imageUrl[breeds[j]],
        owner: owners[k]
      }
      dogs.push(dog)
    }
  }
}

Dog.insertMany(dogs)
  .then(res => console.log(res))
  .catch(err => console.log(err))
