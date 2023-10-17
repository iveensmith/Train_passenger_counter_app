// intialize the count as 0
let count = 0;

// listen for clicks on the increment button , increment the count variable when the button is clicked, change the count-el in the HTML to reflect the new count
document.getElementById('increment-btn').addEventListener('click', () => {
  count += 1;
  document.getElementById('count-el').textContent = count;
});

// Create a variable that contains both the count and the dash separator, i.e. "12 - , Render the variable in the saveEl using textContext
document.getElementById('save-btn').addEventListener('click', () => {
  let countStr = count + ' - ';
  count = 0;
  document.getElementById('count-el').textContent = count;
  document.getElementById('save-el').textContent += countStr;
});

//reset the previous entries
document.getElementById('reset-btn').addEventListener('click', () => {
  count = 0;
  document.getElementById('count-el').textContent = count;
  document.getElementById('save-el').textContent = 'Previous entires: ';
});
