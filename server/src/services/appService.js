

const App = require("../models/app");

exports.getAll = async () => {
  const apps = await App.find().lean();

  return apps;
};

exports.create = async (appData) => {
  appData.likes = 0;
  appData.likedBy = Array;
  appData.comments={}
 
  const newApp = await App.create(appData);
  
  return newApp;
};





exports.getSingleApp = (id) => App.findById(id);


exports.update = (appId, appData) => App.findByIdAndUpdate(appId, appData);


exports.delete = (appId) => App.findByIdAndDelete(appId);

exports.addLikeToApp = async(appId,email) =>{
 
  const app = await this.getSingleApp(appId)
 
  // if (app.likedBy.includes(email)) {
  // ;
  //   app.likes -= 1
   
  //   let index = app.likedBy.indexOf(email);
  //   if (index > -1) {
  //     app.likedBy.splice(index, 1);
  //      return app.save();
  //   }
  // } else {
     
  //   app.likes += 1
  //   app.likedBy.push(email);
    

  // return app.save();
  

  // }
   app.likes += 1
    app.likedBy.push(email);
    

  return app.save();


}