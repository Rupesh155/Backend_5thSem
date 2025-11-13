// // console.log("hello");
// //  let fs  = require('fs')
// //  fs.writeFileSync('index.txt',"hello ")
// //    let data= fs.readFileSync("index.txt")
// //    console.log(data.toString());
// //         fs.appendFileSync("index.txt","")
// //         fs.unlinkSync('index.txt')
   
// //  console.log(fs);
 
// // npm i -g nodemon
// // let os = require('os')
// // console.log(os.homedir());
// let express= require('express')
//     let app=       express()
//     app.use(express.json())


//     // app.use('/',(req,res,next)=>{
//     //     // res.send("mai nhi jane dungaa")
//     //     next()
//     // })

//     // app.get('/:id',(req,res)=>{

//     //    let {id}=    req.params
      
       
//     //     res.send(id)
//     // })
//     let arr=['ankit jain',"ankit","pravesh","tiwari" ,"pravesh tiwari"]

// //     app.get('/search',(req,res)=>{
// //          let {firstName,lastName}=   req.query
// //          console.log(`firstName: ${firstName} lastName: ${lastName}`);
// //          res.send(`firstName: ${firstName} lastName: ${lastName}`)
// //  // http://localhost:4000/search?firstName=ankit&lastName=om

// //     })

// app.post('/data',(req,res)=>{
//     let val=   req.body
//     console.log(val);
    
// })

//     // app.get('/dog',(req,res)=>{
//     //     res.send("dog.....")

//     // })
//     // app.post('/',(req,res)=>{
//     //     res.send("postt....")
//     // })
//     app.get('/home',(req,res)=>{
//         res.send("hello mmai hu don")

//     })
//     app.listen(4000,()=>{
//         console.log("server running on prt no 4000");
        
//     })

//     // app.use('/',(req,res,next)=>{
//     //     res.send("mai bilkul nhi jane dunga")
//     //     // next()

//     // })
         





// htts://google.com/?first=ankit


 let express=  require('express')
     let mongoose=      require('mongoose')
    let cors=   require('cors')

   let User=    require('./user')
   let bcrypt=    require('bcrypt')
   let sendOtp=    require('./twillioService')




// npm i mongoose
// npm i bcrypt
// npm i express

 let app=     express()
 app.use(cors())
   
 app.use(express.json())

 mongoose.connect("mongodb://127.0.0.1:27017/5thSem").
 then(()=>{
    console.log("db conneted...");
 })


 app.get('/',(req,res)=>{
    res.send("hiii")

 })
 app.post('/create',  async(req,res)=>{
          let {userName,email,passWord}=   req.body
      console.log(userName,email ,"heheh");
      
     let user=     await  User.findOne({email})
     console.log(user,"hiiii");
     
     if(user){
        res.send("user jinda haiii")
     }
         let updatedP=     await  bcrypt.hash(passWord,10)
         console.log(updatedP,"HEH");
         
        let userData=   new  User({
            userName,
            email,
            passWord:updatedP
         })
              await userData.save()
              res.send("account ban gya hai....")
            //   console.log(userName,email, passWord);
            
 })

 app.post("/login",async(req,res)=>{
    let {email,passWord}=   req.body
    console.log(email,passWord);
    


       let userInfo=    await User.findOne({email})
       console.log(userInfo,"kyaa milegaaaaaaaa");
       
       if(!userInfo){
         res.send("user not found")
       }else{
        let validPass=   await bcrypt.compare(passWord,userInfo.passWord,)
        if(validPass){
         res.send("login ho gyaa")
        }else{
         res.send("pass sahi nhi haiiii")
        }
       }
        
 })



 app.post('/send-otp', async (req, res) => {
  const { phoneNumber } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000);
  try {
    await sendOtp(phoneNumber, otp);
    res.status(200).send({ message: 'OTP sent successfully', otp });
  } catch (error) {
    res.status(500).send({ error: 'Failed to send OTP' });
  }
});

  
 app.listen(4000,()=>{
    console.log("server running on port no 4000");
    
 })






//  if([]){
//     console.log("hiii");
    
//  }else{
//     console.log("hello");
    
//  }


 

// let express= require('express')
// let mongoose= require('mongoose')
// //npm i mongoose
//   let app=      express()
//   mongoose.connect("mongodb://127.0.0.1:27017/5thSem").
//   then(()=>{
//    console.log("db....");
//   })
//   app.get('/',(req,res)=>{
//    res.send("hello")

//   })
//   app.listen("4000",()=>{
//    console.log("server running on port no 4000");
   
//   })

//   // show dbs 

//   // use dbName 
  
  // show collections 

  // db.collectionsName.find()