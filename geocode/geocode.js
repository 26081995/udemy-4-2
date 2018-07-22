const request=require('request');

var geocodeaddress = (address,callback) => {

  var encodedaddress = encodeURIComponent(address);
  //console.log(encodedaddress);

  request({
    //url:`https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadephia`,
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedaddress}`,
    json:true
  },(error,response,body) =>{
    //console.log(body);
    //console.log(JSON.stringify(response, undefined , 2));
      if(error)
      {
          //console.log('enable to connect to google server');
          callback('enable to connect to google server')
      }
      else if(body.status ===  'ZERO_RESULTS')
      {
        //console.log('enable to find address');
        callback('enable to find address');
      }
      else if(body.status ===  'OK'){
        /*console.log(`Address : ${body.results[0].formatted_address}`);
        console.log(`Lat : ${body.results[0].geometry.location.lat}`);
        console.log(`Lng : ${body.results[0].geometry.location.lng}`);*/
        callback(undefined, {
          address:body.results[0].formatted_address,
          latitude:body.results[0].geometry.location.lat,
          langitude:body.results[0].geometry.location.lng
        });
      }


  });


};

module.exports.geocodeaddress=geocodeaddress;
