import assert from 'assert';
import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import shortid from 'shortid';

import * as events from './events.js'
import * as highlight from './highlight.js'

const router = express.Router();
const url = 'mongodb://localhost:27017/ticket';

router.get('/events', events.findAll);
router.get('/events/:id', events.findById);
router.post('/events', events.addEvent);
router.put('/events/:id', events.updateEvent);
router.delete('/events/:id', events.deleteEvent);

router.get('/highlight', highlight.findAll);
router.get('/highlight/:id', highlight.findById);
router.post('/highlight', highlight.addHighlight);
router.put('/highlight/:id', highlight.updateHighlight);
router.delete('/highlight/:id', highlight.deleteHighlight);

export default router;
