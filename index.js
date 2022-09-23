const express = require('express');
const app= express();
const port = 5000

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
