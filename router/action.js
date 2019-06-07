const router = require('express').Router();
const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

router.get("/", (req, res) => {

    db("action")
      .then(pro => {
        res.status(200).json(pro);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  router.post('/', (req, res) => {
      console.log('here')
    db('action')
        .insert(req.body)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.status(500).json({ message: 'Internal server error'})
            console.error(error)
        })
})

router.put("/:id", (req, res) => {
    db("action")
      .where({ id: req.params.id })
      .update(req.body)
      .then(count => {
        if (count > 0) {
          res.status(200).json({
            message: `${count} ${count > 1 ? "project" : "project"} updated`
          });
        } else {
          res.status(400).json({ message: "no such project exists" });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

router.delete("/:id", (req, res) => {
    db("action")
      .where({ id: req.params.id })
      .del()
      .then(count => {
        if (count > 0) {
          res.status(200).json({
            message: `${count} ${count > 1 ? "action" :"action"} deleted`
          });
        } else {
          res.status(404).json({ message: "no such project exists" });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
 
  router.get("/:id", (req, res) => {
    db("action")
      .where({ id: req.params.id })
      .first()
      .then(project => {
        if (project) {
          res.status(200).json(project);
        } else {
          res.status(404).json({ message: "no such project yet" });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });


  module.exports = router;  