import { Component } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskService } from './components/services/task.service';
import { inject } from '@angular/core';
import { computed } from '@angular/core';

@Component({
  selector: 'app-root',
  // imports: [TaskFormComponent, TaskListComponent],
  // standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'task-manager';

  taskService=inject(TaskService);
  private tasks=this.taskService.tasks;

  todoItems=computed(() => { 
    const tasks=this.tasks();
    return tasks.filter(x => x.status==='Todo')
  });

   inProgessItems=computed(() => { 
    const tasks=this.tasks();
    return tasks.filter(x => x.status==='InProgress')
  });

   completedItems=computed(() => { 
    const tasks=this.tasks();
    return tasks.filter(x => x.status==='Completed')
  });
}
