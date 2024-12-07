

const fortunes = require('./fortunes.json');


const getFortune = () => {
    const randomize = Math.floor(Math.random() * fortunes.length);
    const randomFortune = fortunes[randomize];
    return randomFortune;
};

module.exports = getFortune;
