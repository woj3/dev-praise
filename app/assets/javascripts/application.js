//= require rails-ujs
//= require_tree .
//= require clipboard
//= require turbolinks

const button = document.getElementById('copy-button')

const changeText = () => {
  button.addEventListener('click', (event) => {
    event.currentTarget.innerText = "Copied!"
  });
}

changeText();


const copyClipboard = () => {
  var clipboard = new Clipboard('.clipboard-btn');
  console.log(clipboard);
}

copyClipboard();
