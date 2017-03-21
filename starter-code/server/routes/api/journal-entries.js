const express       = require('express');
const router        = express.Router();
const mongoose = require('mongoose');

const Journal = require('../../models/journal-entry');

router.get('/journal-entries', (req, res, next) => {
  Journal.find((err, journalList) => {
    if(err) {
      res.json(err);
      return;
    }
    res.json(journalList);
  });
});

router.get('/journal-entries/:id', (req, res, next) => {
  const id = req.params.id;
  Journal.findById({ _id : id }, (err, journalEntry) => {
    if(err) {
      res.json(err);
      return;
    }
    res.json(journalEntry);
  });
});

module.exports = router;
