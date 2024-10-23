module.exports = (req,res)=>{
    console.log(req.url);
    const baseUrl = req.url.substring(0,req.url.lastIndexOf('/') +1);
    console.log(baseUrl);
    let id = req.url.split('/')[3];
    console.log(id);
    const regexv4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i); 
    if(req.url === '/api/movies'){
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.write(JSON.stringify(req.movies));
        res.end();
    } 
    else if(!regexv4.test(id)){
        res.writeHead(400,{'Content-Type':'application/json'});
        res.end(JSON.stringify({
            title:"UUID Not Found",
            message:"Route not found for the given UUID"
        }));
    } else if('/api/movies/' === baseUrl && regexv4.test(id)){
        
        res.setHeader('Content-Type','application/json');
        let filteredMovie = req.movies.filter(movie=>{
            return movie.id === id;
        });
        if(filteredMovie.length>0){
            res.statusCode = 200;
            res.write(JSON.stringify(filteredMovie));
            res.end();
        }  else{
            res.statusCode = 404;
            res.write(JSON.stringify({title:"Movie Id Not Found",message: "Movies id  Not Found"}));
            res.end();

        }  
        
    }
    else {
        res.statusCode = 404;
        res.writeHead(404,{"Content-Type":"application/json"});
        res.end(JSON.stringify({title:"Not Found",message:"Get Movies Route Not Found"}));
    }
}