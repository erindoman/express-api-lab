const { deleteOne } = require('../../models/kitty')
const Kitty = require('../../models/kitty')

module.exports = {
    index, 
    show,
    create,
    delete: deleteCat,
    update
}

function index(req, res) {
    Kitty.find({}, function(err, kitties) {
        res.status(200).json(kitties)
    })
}

function show(req, res) {
    Kitty.findById(req.params.id)
    .then(function(kitty) {
        res.status(200).json(kitty)
    })
}

function create(req, res) {
    Kitty.create(req.body)
    .then(function(kitty) {
        res.status(201).json(kitty)
    })
}

function deleteCat(req, res) {
    Kitty.findByIdAndRemove(req.params.id)
    .then(function(kitty) {
        res.status(200).json(kitty)
    })
}

function update(req, res) {
    Kitty.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(function(kitty) {
        res.status(200).json(kitty)
    })
}