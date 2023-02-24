const models = require('../models')

const browse = (req, res) => {
  models.characters
    .browseAll()
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const add = (req, res) => {
  const character = req.body
  console.info(character)
  // TODO validations (length, format...)

  models.characters
    .insert(character)
    .then(([result]) => {
      res.status(201).json({ id: result.insertId, ...character })
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
module.exports = { browse, add }
