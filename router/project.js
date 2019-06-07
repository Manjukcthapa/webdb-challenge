const router = require('express').Router();
const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

router.get("/", (req, res) => {

    db("project")
      .then(pro => {
        res.status(200).json(pro);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  router.post('/', (req, res) => {
    db('project')
        .insert(req.body)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.status(500).json({ message: 'Internal server error'})
            console.error(error)
        })
})

 

  module.exports = router;  