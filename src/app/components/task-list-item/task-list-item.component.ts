import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskItem } from 'src/app/models/task-item.model';

@Component({
  selector: 'app-task-list-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {
  @Input() taskItem!: TaskItem;

  statusValue: ('Todo' | 'InProgress' | 'Completed')[] = ['Todo', 'InProgress', 'Completed'];

  get availableActions(): ('Todo' | 'InProgress' | 'Completed')[] {
    return this.statusValue.filter(x => x !== this.taskItem.status);
  }
}