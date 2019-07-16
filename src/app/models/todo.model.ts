import {Label} from './label.model';

export const BACKLOG = 'backlog';
export const IN_PROGRESS = 'in_progress';
export const OPEN = 'open';
export const DONE = 'done';

export interface Todo {
  id: string;
  title: string;
  description: string;
  assigneeId: string;
  status?: string;
  labels: Array<Label>;
}
