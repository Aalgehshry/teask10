
var arrayQuotes = [
{
  'textone': 'Elbert Hubbard',
  'texttow' : 'A friend is someone who knows all about you and still loves you.'
},
{
  'textone': 'Mark Twain',
  'texttow' :'If you tell the truth, you dont have to remember anything.'
},
{
  'textone': 'Robert Frost',
  'texttow' :'In three words I can sum up everything Ive learned about life: it goes on.'
},
{
  'textone': 'Mae West',
  'texttow' :'Be the change that you wish to see in the world. '
},
{
  'textone': 'Mahatma Gandhi',
  'texttow' :'Be the change that you wish to see in the world.'
},
{
  'textone': 'Marcus Tullius Cicero',
  'texttow' :'A room without books is like a body without a soul.'
},
{
  'textone': 'Frank Zappa',
  'texttow' :'So many books, so little time.'
},

];

function quotesMain() {
var random = Number.parseInt(Math.random()*arrayQuotes.length+1);
document.querySelector('#quotesTextOne').textContent = `\"${arrayQuotes[random].textone}\"`;
document.querySelector('#quotesTextTow').textContent = `--${arrayQuotes[random].texttow}`;
}