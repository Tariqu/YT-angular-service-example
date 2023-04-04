import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform',
})
export class TaskService {
  private data: string[];

  constructor() {
    this.data = [];
  }

  getTasks(): string[] {
    return this.data;
  }

  addTask(task: string) {
    this.data.push(task);
  }
}
