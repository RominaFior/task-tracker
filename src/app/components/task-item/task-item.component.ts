import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../interfaces/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input()
  task!: Task;
  @Output() onDelete = new EventEmitter();
  @Output() onToggle = new EventEmitter();

  onClick(task: Task): void {
    this.onDelete.emit(task);
  }

  onToggleTask(task: Task): void {
    this.onToggle.emit(task);
  }
}
