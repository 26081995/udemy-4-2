var getUser=(id,callback)=>{
    var user={
        id:id,
          name: 'milan'
    };

    callback(user);
};


getUser(31,(userobject) => {
  console.log(userobject);
});
