const express = require('express');

const app = express();
const PORT = 3000;

const LIFE_QUOTES = [
  {
    quote: 'Life isn\'t about finding yourself. Life is about creating yourself.',
    attributed: 'George Bernard Shaw',
  },
  {
    quote: 'Our prime purpose in this life is to help others. And if you can\'t help them, at least don\'t hurt them.',
    attributed: 'Dalai Lama',
  },
  {
    quote: 'The good life is one inspired by love and guided by knowledge.',
    attributed: 'Bertrand Russell',
  },
  {
    quote: 'The story of life is quicker than the blink of an eye, the story of love is hello, goodbye.',
    attributed: 'Jimi Hendrix',
  },
  {
    quote: 'Our life is what our thoughts make it.',
    attributed: 'Marcus Aurelius',
  },
];

let previousIndex = 0;

function getRandomQuote() {
  let index;

   do {
    index = Math.floor(Math.random() * LIFE_QUOTES.length);
  } while (index === previousIndex);

  previousIndex = index;
  return LIFE_QUOTES[index];
}

app.get('/', (request, response) => {
  const quote = getRandomQuote();

  response.send(`
    <!DOCTYPE html>
    <head></head>
    <body>
      <div>
        <h3>Quote of the day</h3>
        <main>
          ${quote.quote}
          <p style="font-size: smaller;">
            ${quote.attributed}
          </p>
        </main>
      </div>
    </body>
  `);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
