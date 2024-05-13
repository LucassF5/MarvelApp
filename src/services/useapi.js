// // import {private_key, public_key} from "../../.env"

// // md5.js
// const crypto = require('crypto');

// function calcularMD5(param1, param2, param3) {
//     const concatenado = param1.toString() + param2.toString() + param3.toString();
//     const hash = crypto.createHash('md5').update(concatenado).digest('hex');
//     return hash;
// }

// // Exemplo de uso:
// const parametro1 = Math.round(Date.now() / 1000);
// const parametro2 = '1b1a4e094ee9f7b97c013ad5645ec69eb0f650b6';
// const parametro3 = 'e184a7c7a12b356caeb1fed10b4c5c26';


// // USANDO API

// const ts = 
// const apikey = 'e184a7c7a12b356caeb1fed10b4c5c26' //PUBLIC_KEY
// const private = '1b1a4e094ee9f7b97c013ad5645ec69eb0f650b6' //PRIVATE_KEY
// const hash = calcularMD5(ts, apikey, private);
// console.log("TIMESTAMP-->\t" + ts + "\n");
// console.log("APIKEY-->\t" + apikey + "\n");
// console.log("HASH-->\t\t" + hash + "\n");

// url = "http://gateway.marvel.com/v1/public/comics?ts=" + ts + "&apikey=" + apikey + "&hash=" + hash
// URL1 = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`
// console.log(URL1)
// console.log()


// // http://gateway.marvel.com/v1/public/comics?ts=1715016875&apikey=e184a7c7a12b356caeb1fed10b4c5c26&hash=d00ffa62ad5826a547c10f5aad993ce4