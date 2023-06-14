const http = require('http');
const fs = require ("fs")
const getCharById = require ('./controllers/getCharById.js')
const getCharDetail = require ('./controllers/getCharDetail')


http
    .createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
     const {url} = req;
    if ( url.includes("onsearch")) {
             
      const ido= (url.split("/").at(-1));
          
         
      getCharById(res,ido)
      
    }
    if ( url.includes("detail")) {
             
        const ido= (url.split("/").at(-1));
            
           
        getCharDetail(res,ido)
        
      }
  
})
    .listen(3001,"localhost");
  
