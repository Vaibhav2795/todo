import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true,
    },
    comment: String,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
