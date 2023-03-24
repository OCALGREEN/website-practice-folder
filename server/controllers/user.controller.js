const { User } = require("./../models/user.model") 

module.exports.homePage = (req, res) => {
    res.json("Home Page") 
}

// CREATE 
module.exports.createOne = (req, res) => {
    User.create(req.body) 
        .then(response => res.json(response))
        .catch(err => err.status(400).json(err)) 
}

// READ ONE 
module.exports.readOne = (req, res) => {
    const id = req.params.id 
    User.findOne({_id: id}) 
        .then(response => res.json(response))
        .catch(err => err.status(400).json(err)) 
}

// READ ALL 
module.exports.readAll = (req, res) => {
    User.find() 
        .then(response => res.json(response)) 
        .catch(err => res.status(400).json(err)) 
}

// UPDATE 
module.exports.updateOne = (req, res) => {
    const id = req.params.id 
    User.findOneAndUpdate(
        {_id: id}, // filter out the user with the id 
        req.body, // the data to be udpated 
        {new: true, runValidators: true} // running the validators 
    )
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}

// DELETE
module.exports.deleteOne = (req, res) => {
    User.deleteOne({_id: req.params.id}) 
        .then(response => res.json(response)) 
        .catch(err => res.status(400).json(err)) 
}