const requestBodyParser = require('../utils/body-parser');
const writeToFile = require("../utils/write-to-file");

module.exports =async (req,res)=>{
  const baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  let id = req.url.split("/")[3];
  const regexv4 = new RegExp(
    /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
  );
  if(!regexv4.test(id)){
    res.writeHead(400,{'Content-Type':'application/json'});
    res.end(JSON.stringify({
        title:"UUID Not Found",
        message:"Route not found for the given UUID"
    }));
} else if ('/api/movies/' === baseUrl && regexv4.test(id)) {
    try {
        let body = await requestBodyParser(req);
        const index = req.movies.findIndex((movie)=>{
            return movie.id === id;
        });
        if(index === -1){
            res.statusCode = 404;
            res.write(JSON.stringify({title:"Movie Id Not Found",message: "Movies id  Not Found"}));
            res.end();
        } else{
            req.movies[index] = {id, ...body};
            writeToFile(req.movies);
            res.writeHead(200, {"Content-type":"application/json"});
            res.end(JSON.stringify(req.movies[index]));
        }
    } catch (error) {
        console.log("error"); 
        res.writeHead(400,{'Content-Type':"application/json"});
        res.end(JSON.stringify({title:"validation failed",message:"Request body is not valid"}));
    }
}else {
    res.writeHead(404,{'Content-Type':'application/json'});
    res.end(JSON.stringify({
        title:"Not Found",
        message:"Route not found"
    }));
}
}