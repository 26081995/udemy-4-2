const request=require('request');

const yargs=require('yargs');

const argv=yargs
.options({
  a:{
      demand:true,
      alias:'address',
      describe:'address for weather',
      string:true

  }
})
.help()
.alias('help','h')
.argv;

//console.log(argv);
var encodedaddress = encodeURIComponent(argv.a);
//console.log(encodedaddress);

request({
  //url:`https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadephia`,
  url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedaddress}`,
  json:true
},(error,response,body) =>{
  //console.log(body);
  //console.log(JSON.stringify(response, undefined , 2));
  console.log(`Address : ${body.results[0].formatted_address}`);
  console.log(`Lat : ${body.results[0].geometry.location.lat}`);
  console.log(`Lng : ${body.results[0].geometry.location.lng}`);

});