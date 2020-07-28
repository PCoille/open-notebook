import { GenericTodo } from './generic-todo.model';

export class CompositeTodo implements GenericTodo{
  startDate: string;
  endDate: string;
  text: string;
}
