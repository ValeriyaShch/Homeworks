const express = require('express');
const TodosModel = require('./mongo/todo.model');
const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb+srv://topolka311:Fomv3ZCPCekMBlKH@cluster0.kdvb2ly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
connect.then(() => console.log('Connected'))
const cors = require('cors');
const {response} = require("express");
const app = express();
app.listen(5000, () => {
    console.log('Server is running')
})
app.use(express.json())
app.use(cors())

app.get('/todos', (req, res) => {
    TodosModel.find().then(
        response => res.send(response)
    )
})

app.post('/todos', (req, res) => {
    const todo = new TodosModel(req.body);
    todo.save().then(
        response => res.send(response)
    )
})

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    TodosModel.deleteOne({_id: id}).then(
        response => {
            if (response.deletedCount === 0) {
                res.status(404).send({message: 'Error!'})
            } else {
                res.status(200).send({message: 'Success!'})
            }
        }
    )
})

app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    TodosModel.updateOne({_id: id}, req.body)
        .then(() => TodosModel.findById(id))
        .then((response) => res.status(200).send({message: 'Success!', data: response}))
})
