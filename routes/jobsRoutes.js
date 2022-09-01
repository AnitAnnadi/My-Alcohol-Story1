import express from 'express'
const router = express.Router()

import {
  createJob,
  deleteJob,
  updateJob
} from '../controllers/jobsController.js'

router.route("/").post(createJob);

// remember about :id
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router
