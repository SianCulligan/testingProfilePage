// import { EmojiButton } from './dist/index.js';

// const trigger = document.querySelector('#trigger');

// const removePlugin = {
//   render(picker) {
//     const button = document.createElement('button');
//     button.innerHTML = 'Remove';
//     button.addEventListener('click', () => {
//       trigger.innerHTML = '';
//       picker.hidePicker();
//     });

//     return button;
//   }
// };

// const picker = new EmojiButton({
//   plugins: [removePlugin]
// });

// picker.on('emoji', selection => {
//   trigger.innerHTML = selection.emoji;
// });

// trigger.addEventListener('click', () => picker.togglePicker(trigger));;

// tinymce.init({
//     selector: "#trigger",
//     plugins: "emoticons autoresize",
//     toolbar: "emoticons",
//     toolbar_location: "bottom",
//     menubar: false,
//     statusbar: false
//   });

  document.getElementById('testTrigger').addEventListener('click', alertFunction);
  
  function alertFunction() {
    alert(`it's alive`);
  }


//creates new year, used in span el. <span id="currentYear">
let date = new Date();
document.getElementById('currentYear').innerHTML = date.getFullYear();