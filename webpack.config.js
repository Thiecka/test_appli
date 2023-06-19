const path = require('path');
const http = require('stream-http');
const stream = require('stream-browserify');
const url = require('url');
const util = require('util');




module.exports = {
    entry: './index.js',
    mode:'development',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
    },
  
  

 

     
  
     fallback: { 
          "querystring": require.resolve("querystring-es3") ,
          "path": require.resolve("path-browserify"),
          "buffer": require.resolve("buffer/"),
          "crypto": require.resolve("crypto-browserify"),
          "http": require.resolve("stream-http"),
          "stream": require.resolve("stream-browserify"),
          "url": require.resolve("url/"),
          "util": require.resolve("util/"),

     }

  
    };
  
   
    
  
  
  


