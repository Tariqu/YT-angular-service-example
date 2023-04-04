import { Component, inject } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss'],
})
export class CompBComponent {
  public _task: TaskService = inject(TaskService);
  constructor() {}
}
