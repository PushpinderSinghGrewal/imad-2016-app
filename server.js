var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

/*var articles={ 
    
    'article-one' :{ title: 'Article one',
  heading:  'Article one',
  date:'Sep 5,2016',
  content:`Hello,This is the content of my first  article
  `,
    
    
    
},
    'article-two': {title: 'Article two',
  heading:  'Article two',
  date:'Sep 6,2016 <pre>',
  content:`Hello,This is the content of my second  article <br>
  Hello,This is the content of my second article`,
    
    
    },
    'article-three':{title: 'Article three',
  heading:  'Article three',
  date:'Sep 7,2016',
  content:`Hello,This is the content of my third  article <br>
  Hello,This is the content of my third article <br>
  Hello,This is the content of my third article`
    
    
    }
};

function createTemplate(data){
  var title=data.title;
  var date=data.date;
  var heading=data.heading;
  var content=data.content;
  


var htmlTemplate=`<!Doctype html>
<html>
<head>
<link href="/ui/style.css" rel="stylesheet" />

<title>
${title}
</title>
<meta name="viewport" content="width=device-width,initial-scale=1" />

</head>
<body>
<div class="container">
<div>
<a href="/">Home </a>
</div>  
<hr/>
<h3>${heading}</h3>
<div>
${date}   
</div>    
<div>
${content }  
</div>
</div>
</body>
</html>  
`;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
var names=[];
app.get('/submit-name',function(req,res){//URl:/submit-name?name=xxxx
    //Get the name from the request
    var name=req.query.name;
    names.push(name);
    //JSON; javacript object notation
    res.send(JSON.stringify(names));
    
    
    
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/gyanni.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'gyanni.jpg'));
});
app.get('/ui/pinder.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'pinder.jpg'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

*/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/happybirthday.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'happybirthday.jpg'));
});
app.get('/ui/ghumana.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ghumana.jpg'));
});
app.get('/ui/ghuman.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ghuman.jpg'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
