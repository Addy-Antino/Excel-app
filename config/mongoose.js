const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://exceladmin:adminpass@excel-app.ylczay7.mongodb.net/?retryWrites=true&w=majority',{

useNewUrlParser: true,


}).then((data )=>{
console.log(`connected to the database!${data.connection.host}`)
})
.catch((e)=>{
    console.log(e)
})