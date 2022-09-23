const express = require('express');
const app= express();
const bodyParser = require ('body-parser');
const port = 5000

app.use(bodyParser.json());
app.listen(port, ()=>{
    console.log(`server started on port ${port}`)
})
 
//localhost: 5000/qudus => qudus, how are you
//localhost: 5000/transaction/payment => what transaction do you want to perform?

app.get(`/qudus`, (req, res) => {
    res.send(`qudus, how are you?`)
})

app.get(`/transaction/payment`, (req, res) => {
    res.send (`what transaction do you want to perform?`)
})

app.post(`/create`, (req, res) => {
    const data = req.body
    if(data.firstname == "" || data.lastname =="" || data.email == ""){
        res.send({ 
            message: "All fields are required"
        })
    }else{
        res.send({
            message: `User information accepted, Welcome user ${data.firstname}, ${data.lastname}`
        })
    }
})

app.get(`/today`, (req, res) =>{
    let today =new Date()
    res.send(today)
})