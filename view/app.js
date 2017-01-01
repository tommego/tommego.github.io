var reader = new FileReader();

// Closure to capture the file information.
// Closure to capture the file information.
// reader.onload = (function(theFile) {
//   return function(e) {
//     console.console.log(theFile,'aaaaaaaaaa');
//     // Render thumbnail.
//     // var span = document.createElement('span');
//     // span.innerHTML = ['<img class="thumb" src="', e.target.result,
//     //                   '" title="', escape(theFile.name), '"/>'].join('');
//     // document.getElementById('list').insertBefore(span, null);
//   };
// })("../source/test.md");

// uploadData is a form element
// fileChooser is input element of type 'file'
var file = new File([1,11,1],"../sourece/test.md");

// alternative syntax can be
// var file = document.forms['uploadData']['fileChooser'].files.item(0);

if(file)
{
  // Perform file ops
  console.log(file,"ddddddddddd");
}

// var blod = new Blod();
// console.log(blod);

// Read in the image file as a data URL.
reader.readAsText(new Blod());


hljs.initHighlightingOnLoad();
var articleStr;
new Vue({
  el: '#md-viewer',
  data: {
    input: '',
    article: "### aaaa"
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.article, {
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false,
        highlight: function(code){
            var result = hljs.highlightAuto(code,["c++"]).value;
            console.log(result,aaaaaaaaaaaaaa);
            return result;
        }})
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
})


function laodArticle(art){
  articleStr = art;
}
