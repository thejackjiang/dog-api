const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const express = require('express')
const router = express.Router();

const { Dog } = require('../models/index')

router.get('/findAll', async (req, res, next) => {
  const limit = Number(req.query.limit) || 20
  try {
    const dogs = await Dog.find({}).limit(limit)
    res.json(dogs)
  } catch (err) {
    next(err)
  }
})

router.get('/find/:id', async (req, res, next) => {
  const _id = req.params.id
  try {
    const dogs = await Dog.findOne({ _id })
    res.json(dogs)
  } catch (err) {
    next(err)
  }
})

router.get('/find/breed/:breed', async (req, res, next) => {
  const breed = req.params.breed
  const limit = Number(req.query.limit) || 20

  try {
    const dogs = await Dog.find({ breed }).limit(limit)
    res.json(dogs)
  } catch (err) {
    next(err)
  }
})

router.post('/create', async (req, res, next) => {
  const newDoc = req.body
  const newDog = new Dog(newDoc);
  try {
    await newDog.save()
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})

router.put('/update/:id', async (req, res, next) => {
  const _id = req.params.id
  const updatedDoc = req.body
  const options = { new: true }
  try {
    const updated = await Dog.findOneAndUpdate({ _id }, updatedDoc, options)
    res.status(202).json(updated)
  } catch (err) {
    next(err)
  }
})

router.delete('/delete/:id', async (req, res, next) => {
  const _id = req.params.id
  try {
    await Dog.deleteOne({ _id })
    res.sendStatus(202)
  } catch (err) {
    next(err)
  }
})



module.exports = router
