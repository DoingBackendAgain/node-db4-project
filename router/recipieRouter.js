express = require("express")
const table = require("./recipieHelper")
const router = express.Router()

router.get("/", (req, res)=> {
    table.getRecipie()
        .then(rec => {
            res.json(rec)
        })
        .catch(err => {
            res.status(500).json({
                message: "failed bc of server"
            })
        })
});

router.get("/:id", (req, res)=> {
    const {id} = req.params;

    table.getRecipieById(id)
        .then(rec => {
            res.status(201).json(rec)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error getting that Recipie"
            })
        })
})


router.get("/:id/shoppinglist", (req, res)=> {
    const {id} = req.params;

    table.getShoppingList(id)
        .then(list => {
            if(list){
                res.json(list)
            }
            else {
                res.status(404).json({
                    message: "there's no list with this id"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "failed bc of server"
            })
        })
})

router.get("/:id/instructions", (req, res) => {
    const {id} = req.params;
    table.getInstructions(id)

        .then(instructions => {
            if(instructions) {
                res.json(instructions)
            }
            else {
                res.status(404).json({
                    message: "Oh no! There's no instructions!"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "server failure"
            })
        })
})

 module.exports = router