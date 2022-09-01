import express from 'express'
const router = express.Router()

import {
  createJob,
  deleteJob,
  updateJob
} from '../controllers/jobsController.js'


// remember about :id
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router
