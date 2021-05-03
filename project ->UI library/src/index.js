// importing css file
import Tooltip from'/src/ninja-ui/tooltip';
import Dropdown from'/src/ninja-ui/dropdown';
import Tabs from '/src/ninja-ui/tabs';
import Snackbar from '/src/ninja-ui/snackbar';


// create tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

// create tooltip
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// create snackbar
const snackbar=new Snackbar();
snackbar.init();

const button =document.querySelector('button');
button.addEventListener('click',()=>{
     snackbar.show('you clicked me!')
})