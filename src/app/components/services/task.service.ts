import { Injectable, signal } from '@angular/core';
import { TaskItem } from '../../models/task-item.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // constructor() { }
  tasks = signal<TaskItem[]>([]);

  addTask(task: string, status: string) {
    this.tasks.update((prev) => {
      return [...prev, { task, status}];
  });
  }
}
