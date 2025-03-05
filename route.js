const express=require("express");
const app=express();


//  app.get("/profile",(req,res)=>{
//     const {username}=req.query;
//     console.log(username);
//     //search username in database
//     res.send("Profile page of "+username);
//  })

// app.get("/profile",(req,res)=>{
//     const {username,clas,group}=req.query;
//     console.log(username);
//     //search username in database
//     res.send("Profile page of "+username+clas+group);
//  })

// app.get("/profile/:id/:username",(req,res)=>{
//     const {id,username}=req.params;
//     console.log(id);
//     res.send("profile page of user"+ id+" "+username);
// })

// app.get("/profile/:id",(req,res)=>{
//         const {id}=req.params;
//         console.log(id);
//         res.send("profile page of user"+ id);
//     })

// app.listen(3333,()=>{
   
//     console.log("Server is running on port 3333");
// })










//Continue Query Parameters
// let userData=[
//     {
//         id:1,
//         name:"Raghav",
//         adress:"Delhi"
//     },
//     {
//         id:2,
//         name:"Ram",
//         adress:"Faridabad"
//     },
//     {
//         id:3,
//         name:"Sita",
//         adress:"Hisar"
//     }
// ]

// app.get("/allUsers",(req,res)=>{
//     res.send(userData);
// })

// app.get("/oneid_only",(req,res)=>{
//     let {id}=req.query;
//     console.log(id);
//     for(let i=0;i<userData.length;i++){
//         if(userData[i].id==id){
//             return res.send(userData[i]);
//         }
//     }
//     return res.send("NO user found");
    
// })

// app.listen(5675,()=>{
//     console.log("port started");
// })




//Blog data HW
let BlogData=[
        {
            id:1,
            name:"Raghav",
            adress:"Delhi",
      
        },
        {
            id:2,
            name:"Ram",
            adress:"Faridabad",
     
        },
        {
            id:3,
            name:"sita",
            adress:"Hisar",
       
        },
        {
            id:4,
            name:"Param",
            adress:"Canada",
      
        }
    ]
    
    app.get("/all",(req,res)=>{
        res.send(BlogData);
    })
    
    // app.get("/one_Blogger_Data",(req,res)=>{
    //     let {id}=req.query;
    //     console.log(id);
    //     for(let i=0;i<BlogData.length;i++){
    //         if(BlogData[i].id==id){
    //             return res.send(BlogData[i]);
    //         }
    //     }
    //     return res.send("NO user found");
        
    // })
    app.get("/delete_id",(req,res)=>{
        let {id}=req.query;
        console.log(id);
        for(let i=0;i<BlogData.length;i++){
            if(BlogData[i].id==id){
               BlogData.splice(i,1);
                return res.send("user deleted");
            }
        }
        return res.send("NO user found");
        
    })
    app.get("/adduser",(req,res)=>{
        const {id , name ,address }=req.query;
        let newuser={
            id:id,
            name:name,
            address:address
        }
        BlogData.push(newuser);
        res.send("user added");
    })
    

    app.listen(5675,()=>{
        console.log("port started");
    })