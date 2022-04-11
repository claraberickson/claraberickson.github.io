async function getQuote() {
  console.log("quote button was clicked");
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json.message);
  }catch(err) {
    console.log(err)
    alert('Failed');
  }
}
function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);

// looking for a click event on this button and when that happens we are going to run getQuote
// we can use this on quoteButton
