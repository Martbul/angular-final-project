

const App = require("../models/app");

exports.getAll = async () => {
  const apps = await App.find().lean();

  return apps;
};

exports.create = async (appData) => {
  appData.likes = 0;
  appData.likedBy = Array;
  appData.comments={}
  console.log(appData);
  const newApp = await App.create(appData);
  console.log(App);
  return newApp;
};





exports.getSingleApp = (id) => App.findById(id);


exports.update = (appId, appData) => App.findByIdAndUpdate(appId, appData);


exports.delete = (appId) => App.findByIdAndDelete(appId);

exports.addLikeToApp = async(appId,email) =>{
  console.log(appId);
  const app = await this.getSingleApp(appId)
  console.log(app);
  if (app.likedBy.includes(email)) {
    console.log('email is in the likedBy array');
    app.likes -= 1
   
    let index = app.likedBy.indexOf(email);
    if (index > -1) {
      app.likedBy.splice(index, 1);
       return app.save();
    }
  } else {
     console.log("email is NOT IN LIKEDBY");
    app.likes += 1
  app.likedBy.push(email);
  return app.save();
  

  }



}