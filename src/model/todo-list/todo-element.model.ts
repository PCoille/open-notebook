import { GenericTodo } from './generic-todo.model';

export class TodoElement implements GenericTodo{
  startDate: string;
  endDate: string;
  text: string;
}
