

const yargs=require('yargs');
const geocode =require('./geocode/geocode.js');
const weather =require('./weather/weather.js');

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

geocode.geocodeaddress(argv.a,(errorMessage,results) => {
  if(errorMessage)
  {
    console.log(errorMessage);
  }
  else {
    //console.log(JSON.stringify(results) , undefined , 2);
    console.log(results.address);

    weather.getweather(results.latitude,results.langitude,(errorMessage,weatherresults) =>{
      if(errorMessage)
      {
          console.log(errorMessage);
      }
      else {
        //console.log(JSON.stringify(weatherresults),undefined,2);
        console.log(`It's currently ${weatherresults.temperature}. It feels like ${weatherresults.apparenttemperature} `);
      }
    });
  }
});



//console.log(argv);
//8d4a0a167c379ad97bfcf74fd5836cfa
