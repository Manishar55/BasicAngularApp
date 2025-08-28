import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { TaskService } from '../services/task.service';

import { Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent {

  taskService = inject(TaskService);

  // Your logic here

taskForm = new FormGroup({
  task: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  status: new FormControl('Todo', { nonNullable: true })
});

  onSubmit() {
    console.log(this.taskForm.getRawValue());
    const rawValue=this.taskForm.getRawValue();
    this.taskService.addTask( rawValue.task, rawValue.status);
    this.taskForm.reset();
  }

}