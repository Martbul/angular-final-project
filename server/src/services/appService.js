

const App = require("../models/app");

exports.getAll = async () => {
  const apps = await App.find().lean();

  return apps;
};

exports.create = async (appData) => {
  appData.likes = 0;
  appData.likedBy = Array;
  console.log(appData);
  const newApp = await App.create(appData);
  console.log(App);
  return newApp;
};





exports.getSingleApp = (id) => App.findById(id);


exports.update = (appId, appData) => App.findByIdAndUpdate(appId, appData);


exports.delete = (bindId) => App.findByIdAndDelete(bindId);

exports.addLikeToBind = async(bindId,email) =>{

  const bind = await this.getSingleBind(bindId)
  if(bind.likedBy.includes(email)){
    return
  }
bind.likes += 1
  bind.likedBy.push(email)
  return bind.save()
  



}