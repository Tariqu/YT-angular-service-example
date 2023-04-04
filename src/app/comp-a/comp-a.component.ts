import { Component, inject } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss'],
})
export class CompAComponent {
  public _task: TaskService = inject(TaskService);
  constructor() {}
}
