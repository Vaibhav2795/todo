import { requirePanic } from '../utils/helper';
import Todo from '../models/todo';

export async function getAllTodoCards() {
  const data = await Todo.find().sort({ date: -1 });
  return data;
}

export async function addTodoCard(payload: {
  taskName: string;
  comment: string;
  date: Date;
}) {
  requirePanic(payload, ['taskName', 'comment', 'date']);
  const { taskName, comment, date } = payload;

  const todo = new Todo({
    taskName,
    comment,
    date: new Date(date),
  });
  const data = await todo.save();

  return { message: 'Todo added successfully!', data };
}

export async function updateTodoCard(payload: {
  id: string;
  taskName: string;
  comment: string;
  date: Date;
}) {
  requirePanic(payload, ['id', 'taskName', 'comment', 'date']);
  const { id, taskName, comment, date } = payload;

  const todoCard = await Todo.findById(id);
  if (!todoCard) {
    throw new Error('Todo card not found');
  }

  todoCard.taskName = taskName;
  todoCard.comment = comment;
  todoCard.date = date;

  const data = await todoCard.save();

  return { message: 'Todo updated successfully!', data };
}

export async function deleteTodoCard(payload: { id: string }) {
  requirePanic(payload, ['id']);
  const { id } = payload;

  await Todo.findByIdAndDelete({ _id: id });
  return { message: 'Todo deleted successfully!' };
}
