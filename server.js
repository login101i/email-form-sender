const express = require('express')
const path=require('path')
const sendMail =require('./mail')

const app=express()

const PORT=8080;
const log=console.log

// 2
// Data parsing  za każdym razem jak html będzie mi chciało coś wysłać wysyłamy to:
app.use(express.urlencoded({
    extended:false
}))
app.use(express.json())

app.post('/email', (req,res)=>{
    // TODO
    // send email here
    const {subject, email, text}=req.body
    console.log("Data", req.body)


    sendMail(email, subject, text, function(err, data){
        if(err){
            res.status(500).json({message: "Wewnętrzny błąd"})
        }else{
            res.json({message: "wiadomość jest wysłana!"})
        }
    });
    // res.json({message:"Wiadomość wysłana"})
});





app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.listen(PORT, ()=>log('Server wystartował', 8080))