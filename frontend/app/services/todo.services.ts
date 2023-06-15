import axios from 'axios';
import { API_ROUTES } from '../utils/const';

export async function getAllTodoCards(): Promise<[any, null] | [null, any]> {
  try {
    const res = await axios.get(API_ROUTES.GET_ALL_TODO_CARDS);
    return [res.data.data, null];
  } catch (error: any) {
    return [null, error];
  }
}

export async function addTodoCards(payload: {
  taskName: string;
  comment: string;
  date: string;
}): Promise<[any, null] | [null, any]> {
  try {
    const res = await axios.post(API_ROUTES.ADD_TODO_CARD, payload);
    return [res.data.data, null];
  } catch (error: any) {
    return [null, error];
  }
}

export async function editTodoCards(payload: {
  id: string;
  taskName: string;
  comment: string;
  date: string;
}): Promise<[any, null] | [null, any]> {
  try {
    const res = await axios.put(API_ROUTES.UPDATE_TODO_CARD, payload);
    return [res.data.data, null];
  } catch (error: any) {
    return [null, error];
  }
}

export async function deleteTodoCards(payload: {
  id: string;
}): Promise<[any, null] | [null, any]> {
  try {
    const res = await axios.post(API_ROUTES.DELETE_TODO_CARD, payload);
    return [res.data.data, null];
  } catch (error: any) {
    return [null, error];
  }
}
