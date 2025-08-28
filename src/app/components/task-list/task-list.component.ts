import { Component} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { TaskItem } from '../../models/task-item.model';
import { TaskListItemComponent } from '../task-list-item/task-list-item.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TaskListItemComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() heading!: string;
  @Input() tasks: TaskItem[] = [];

}