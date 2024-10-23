const crypto = require('crypto');
const requestBodyParser = require('../utils/body-parser');
const wrireToFile = require('../utils/write-to-file');
module.exports = async(req,res)=>{
    if(req.url === '/api/movies'){
        try {
            console.log("body",req.body);
            let body = await requestBodyParser(req);
             console.log(body); 
             body.id = crypto.randomUUID();
             req.movies.push(body);
             wrireToFile(req.movies);
             res.writeHead(201,{'Content-Type':"application/json"});
             res.write(JSON.stringify(req.movies));
             res.end();
        } catch (error) {
            res.writeHead(400,{'Content-Type':"application/json"});
            res.end(JSON.stringify({title:"Request body is not valid",message:"UUID is not created"}));
        }
    } else {
        res.writeHead(404,{'Content-Type':'application/json'});
        res.end(JSON.stringify({
            title:"Not Found",
            message:"Route not found"
        }));
    }
    
}