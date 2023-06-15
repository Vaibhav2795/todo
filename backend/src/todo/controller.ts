import { Request, Response } from 'express';
import * as service from './service';

export async function getAllTodoCards(req: Request, res: Response) {
  try {
    const data = await service.getAllTodoCards();
    return res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function addTodoCard(req: Request, res: Response) {
  try {
    const data = await service.addTodoCard(req.body);
    return res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function updateTodoCard(req: Request, res: Response) {
  try {
    const data = await service.updateTodoCard(req.body);
    return res.status(200).json({ data });
  } catch (error) {
    console.log({ errorInController: error });
    res.status(400).json({ message: error.message });
  }
}

export async function deleteTodoCard(req: Request, res: Response) {
  try {
    const data = await service.deleteTodoCard(req.body);
    return res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
