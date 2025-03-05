// express framework

const express=require('express')
const mongoose=require('mongoose');
const Product=require('./models/product.model.js');
const app=express()


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.get('/',(req,res)=>{
res.send("Hello from node api");
});


app.get('/api/products',async(req,res)=>{
    try{
        await Product.find({});
}
catch(error){
    res.status(500).json({message:error.message});
}
});


// read api id
app.get('/api/product/:id', async(req,res)=>{
    try{
        const{id}=req.params;
        const product =await Product.findById(id);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});



app.post('/api/products',async(req,res)=>{
    try{
        const product=await Product.create(req.body);
        res.status(200).json(product);
    } catch(error){
    res.status(500).json({message:error.message});
    }
});



// update a product
app.put('/api/product/:id',async(req,res)=>{
    try{
        const {id}=req.params;
       const product= await Product.findByIdAndUpdate(id,req.body);
       if(!product){
        return res.status(404).json({message:"Product not found"});
       }

     const updatedProduct=  await Product.findById(id);
     res.status(200).json(updatedProduct);
       

    } catch(error){
       res.status(500).json({message: error.message}); 
    }
})






// delete a product
app.delete('/api/product/:id',async(req,res)=>{
    try{
        const{id}=req.params;
      const product=  awaitProduct.findByIdAndDelete(id);

        if(!product){
            return res.status(404).json({message:"Product not found"});

        }
        res.status(200).json({message:"Product deleted successfully"});

    } catch(error){
        res.status(500).json({message:error.message});
    }
});





mongoose.connect("mongodb+srv://Sakshi:<abc123qwe>@backend.cmufw.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Backend")
.then(()=>{
    console.log("connected to database!");
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    });
})
.catch(()=>{
    console.log("connection failed!");
});