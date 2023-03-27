const ProductController = require("./../controllers/product.controller")

module.exports = app => {
    app.get("/product/readOne/:id", ProductController.readOne)    // read one
    app.get("/product/readAll", ProductController.readAll)        // read all 
    app.post("/product/createOne", ProductController.createOne)   // create one 
    app.put("/product/updateOne/:id", ProductController.updateOne)// update one 
    app.delete("/product/deleteOne/:id", ProductController.deleteOne)// delete one 
}