import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-list-item',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {
 @Input() text!: string;
}
