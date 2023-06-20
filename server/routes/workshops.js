// routes/workshops.js

const express = require('express');
const router = express.Router();
const Workshop = require('../models/Workshop');

// Get all workshops
router.get('/', async (req, res) => {
  try {
    const workshops = await Workshop.find();
    res.status(200).json(workshops);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new workshop
router.post('/', async (req, res) => {
  try {
    const { title, description, instructor, startDate, endDate } = req.body;

    const workshop = new Workshop({
      title,
      description,
      instructor,
      startDate,
      endDate,
    });

    await workshop.save();
    res.status(201).json(workshop);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a specific workshop
router.get('/:workshopId', async (req, res) => {
  try {
    const workshop = await Workshop.findById(req.params.workshopId);
    if (!workshop) {
      return res.status(404).json({ error: 'Workshop not found' });
    }
    res.status(200).json(workshop);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a workshop
router.put('/:workshopId', async (req, res) => {
  try {
    const { title, description, instructor, startDate, endDate } = req.body;

    const workshop = await Workshop.findByIdAndUpdate(
      req.params.workshopId,
      { title, description, instructor, startDate, endDate },
      { new: true }
    );

    if (!workshop) {
      return res.status(404).json({ error: 'Workshop not found' });
    }

    res.status(200).json(workshop);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a workshop
router.delete('/:workshopId', async (req, res) => {
  try {
    const workshop = await Workshop.findByIdAndDelete(req.params.workshopId);
    if (!workshop) {
      return res.status(404).json({ error: 'Workshop not found' });
    }
    res.status(200).json({ message: 'Workshop deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
