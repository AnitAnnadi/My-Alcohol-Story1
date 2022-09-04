import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide title'],
      maxlength: 50,
    },
    body: {
      type: String,
      required: [true, 'Please provide body'],
      maxlength: 100,
    },
  },
  { timestamps: true }
)

export default mongoose.model('Job', JobSchema)
