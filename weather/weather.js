const request=require('request');

var getweather = (lat,lan,callback) =>{
  request({
    url:`https://api.darksky.net/forecast/8d4a0a167c379ad97bfcf74fd5836cfa/${lat},${lan}`,
    json:true
  },(error,response,body) => {
      if(error)
      {
        callback('cannot connect to internate');
      }
      else if(response.statusCode === 400)
      {
        callback('unable to fetch weather');
      }
      else if(response.statusCode === 200)
      {
        callback(undefined,{
          temperature:body.currently.temperature,
          apparenttemperature:body.currently.apparentTemperature
        });
        
      }

    //console.log(body.currently.temperature);
  });

};

module.exports.getweather=getweather;
