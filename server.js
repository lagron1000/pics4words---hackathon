var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');





const SERVER_PORT = 8080;

mongoose.connect('mongodb://localhost/pics4wordsDB', function() {
  console.log("DB connection established!!!");
})

// Requirements to Models 
var Comment = require('./models/commentModel');
var Image = require('./models/imageModel');
var Day = require('./models/dayModel');



var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// var image = new Image({
//    url: '\1526374347174.jpg',
//    user: 'David',
//    rating: 5,
//    comments: []
  
//   })
// image.save();


// You will need to create 5 server routes
// These will define your API:

//1) to handle getting all photos and their comments

     app.get('/days',function (req, res){
                    
          Day.find(function (req, day){
             res.send(day);
          })
     })


//2) to handle getting a specific Date

    app.get('/days/:date',function (req, res){
                        
        var date = req.params.date;
        Day.find({day : date}, function (req, day){
           res.send(day);
        })
    })



//3) to handle deleting an Image

     app.delete('/days/:date/images:id', function (req,res){
    
        var id = req.params.id;
            
        Image.find({ _id: id}, (req,res) =>{
          console.log(res)
        })
        
        Image.remove({ _id : id}, function(err, res1){
           if(err)
             res.send("failed")
           else{
            
            console.log ("removed")
            res.send("Deleted")
           }
        })
  })   

  //handle posting day
  app.post('/days', function(req, res){
    console.log(req.body)
    var newDay = new Day(req.body)
    newDay.save(function(err, result){
      if (err){
        console.log(err)
      } else {
        res.send(newDay)
      }
    })
  })

//Function used to configure the middleware storage
var storage = multer.diskStorage({
  destination: function(req, file, callback){
      callback(null, './public/uploads'); // set the destination
  },
  filename: function(req, file, callback){
      
      callback(null, Date.now() + '.jpg'); // set the file name and extension
  }
});
var upload = multer({storage: storage});

app.post('/add', upload.single('imagename'), function(req, res, next) {
  console.log("updating photo ////")
  var image = req.file.filename;
  var newImgObj = {url: image, user: "req.file"}
  var img = new Image(newImgObj)
  img.save(function (err, respond){
    if(err)
        res.send("failed")
    else{
      var currentDay = new Date()
      var getFullDay = currentDay.getMonth()+1 + '-' + currentDay.getDate() + '-' + currentDay.getFullYear()
      res.send("Saved")
      Day.findOneAndUpdate({date: getFullDay}, { $push: { images: img }})
    }
  })
 /** rest */ 
});




app.listen(SERVER_PORT, () => {
  console.log("Server started on port " + SERVER_PORT);
});
