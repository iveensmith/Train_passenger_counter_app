// intialize the count as 0
let count = 0;

// listen for clicks on the increment button , increment the count variable when the button is clicked, change the count-el in the HTML to reflect the new count
document.getElementById('increment-btn').addEventListener('click', () => {
  count += 1;
  document.getElementById('count-el').innerHTML = count;
});

