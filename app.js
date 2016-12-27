
var menusObj = [
  {"text":"Articles", "url":""},
  {"text":"My works", "url":""},
  {"text":"Life", "url":""},
  {"text":"Minds", "url":""},
  {"text":"Tools", "url":""},
  {"text":"Github", "url":""},
  {"text":"About me", "url":""},
];


var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    menus: menusObj
  }
});


