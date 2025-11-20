let mongoose=     require('mongoose')
 let userSchema=   mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true

    },passWord:{
        type:String,

    },
    role:{
        type:String,
        enum:['admin','student','instructor'],
        default:'student'
    },
    resetToken: String,
  resetTokenExpiry: Date,
})

let User=  mongoose.model('user',userSchema)
module.exports=User




// //--------------------------------------
// // 1xx – INFORMATIONAL
// //--------------------------------------

// res.status(100).send("Continue"); 
// // 100 – Request sahi hai, aage continue karo

// res.status(101).send("Switching Protocols");
// // 101 – Protocol switch ho raha (WebSocket)

// res.status(102).send("Processing");
// // 102 – Request chal rahi, process time lega

// //--------------------------------------
// // 2xx – SUCCESS
// //--------------------------------------

// res.status(200).send("OK");
// // 200 – Request successfully completed

// res.status(201).send("Created");
// // 201 – New resource create ho gaya (POST success)

// res.status(202).send("Accepted");
// // 202 – Request accepted but baad me process hoga

// res.status(203).send("Non-Authoritative Information");
// // 203 – Data modified version client ko mila

// res.status(204).send();
// // 204 – Success but NO content

// res.status(205).send();
// // 205 – Client ko page reset karna hai (form reset)

// res.status(206).send("Partial Content");
// // 206 – File ka partial content (video streaming)

// //--------------------------------------
// // 3xx – REDIRECTION
// //--------------------------------------

// res.status(300).send("Multiple Choices");
// // 300 – Multiple resource options

// res.status(301).redirect("/new-url");
// // 301 – Permanent redirect

// res.status(302).redirect("/temp-url");
// // 302 – Temporary redirect

// res.status(303).redirect("/see-other");
// // 303 – Redirect using GET

// res.status(304).send();
// // 304 – Not modified (cache use karo)

// res.status(307).redirect("/same-method");
// // 307 – Temporary redirect (method change nahi)

// res.status(308).redirect("/same-method-permanent");
// // 308 – Permanent redirect (method change nahi)

// //--------------------------------------
// // 4xx – CLIENT ERRORS
// //--------------------------------------

// res.status(400).send("Bad Request");
// // 400 – Client ne galat data bheja (validation error)

// res.status(401).send("Unauthorized");
// // 401 – Token missing / login required

// res.status(402).send("Payment Required");
// // 402 – Payment related (abhi rarely used)

// res.status(403).send("Forbidden");
// // 403 – Permission nahi (role issue)

// res.status(404).send("Not Found");
// // 404 – Route ya resource nahi mila

// res.status(405).send("Method Not Allowed");
// // 405 – Wrong HTTP method used

// res.status(406).send("Not Acceptable");
// // 406 – Client ka format accept nahi

// res.status(408).send("Request Timeout");
// // 408 – Client ne time pe request nahi bheji

// res.status(409).send("Conflict");
// // 409 – Duplicate conflict (email already exists)

// res.status(410).send("Gone");
// // 410 – Resource permanently chala gaya

// res.status(411).send("Length Required");
// // 411 – Content-length header missing

// res.status(412).send("Precondition Failed");
// // 412 – Condition fail (etag, if-match)

// res.status(413).send("Payload Too Large");
// // 413 – Body/file upload too large

// res.status(414).send("URI Too Long");
// // 414 – URL too long

// res.status(415).send("Unsupported Media Type");
// // 415 – File type/format not supported

// res.status(429).send("Too Many Requests");
// // 429 – Rate limit cross

// //--------------------------------------
// // 5xx – SERVER ERRORS
// //--------------------------------------

// res.status(500).send("Internal Server Error");
// // 500 – Server crash / unknown error

// res.status(501).send("Not Implemented");
// // 501 – Server feature implemented nahi

// res.status(502).send("Bad Gateway");
// // 502 – Wrong response from upstream server

// res.status(503).send("Service Unavailable");
// // 503 – Server down / maintenance

// res.status(504).send("Gateway Timeout");
// // 504 – Upstream time out

// res.status(505).send("HTTP Version Not Supported");
// // 505 – Old version support nahi
