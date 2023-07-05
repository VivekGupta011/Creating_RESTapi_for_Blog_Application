const express=require("express");
// calling this module
const app=express();
const mongoose=require("mongoose");
const userRouter=require("./route/userRouter");

//this line parse data into json format so that out 'req.body()' can access for further process..
app.use(express.json());
app.use("/users",userRouter);

app.get("/",(req,res)=>{
    res.send("Hello Vivekk!")
})

// mongoose.connect("mongodb+srv://viveksite01:ADMIN@cluster0.vqcq9c2.mongodb.net/?retryWrites=true&w=majority")
mongoose.connect("mongodb+srv://vivekguputa789:DB8lkbGtdkywsnrh@cluster0.antxjlu.mongodb.net/?retryWrites=true&w=majority")

.then(()=>{

    app.listen(4000,()=>{
        console.log("Server Started!");
    })
    

})
.catch((error)=>{
    console.log(error);
})