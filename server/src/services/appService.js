const App = require("../models/app");

exports.getAll = async () => {
  const binds = await App.find().lean();

  return binds;
};

exports.create = async (orderData) => {
  orderData.likes = 0;
  orderData.likedBy = Array;
  const App = await App.create(orderData);
  console.log(App);
  return App;
};





exports.getSingleBind = (id) => App.findById(id);


exports.update = (bindId, bindData) => App.findByIdAndUpdate(bindId, bindData);


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