const express = require("express");
const router = new express.Router();

const items = require("./fakedb.js");

router.get("/", (req, res) => {
    res.json({Items: items});
})

router.post("/", (req, res) => {
    let newItem = req.body
    items.push(newItem)
    res.json({"added":{newItem}})
})

router.get("/:name", (req, res) => {
    subjItem = req.params.name
    const foundItemByName = items.find(obj => obj.name === subjItem)
    res.json({foundItemByName})
})

router.patch("/:name", (req, res) => {
    let updateItemSubj = req.body
    let subjItem = req.params.name
    let foundItemByName = items.find(obj => obj.name === subjItem)
    let itemToBeUpdatedIndex = items.indexOf(foundItemByName)

    items[itemToBeUpdatedIndex] = updateItemSubj

    res.json({"updated": {"name": updateItemSubj['name'], "price": updateItemSubj['price']}})
})

router.delete("/:name", (req, res) => {
    let subjItem = req.params.name
    let foundItemByName = items.find(obj => obj.name === subjItem)
    let itemToBeUpdatedIndex = items.indexOf(foundItemByName)

    
    if(itemToBeUpdatedIndex < 0){
        res.json({"Message": `${subjItem} does not exist`})
    } else {
    items.splice(itemToBeUpdatedIndex, 1)
    res.json({"Message": "Deleted"})
    }
})

module.exports = router;
