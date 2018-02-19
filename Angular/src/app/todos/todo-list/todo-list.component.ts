import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from './../../shared/task';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {

    @Input() tasks: Task[];
    @Output() delete: EventEmitter<Task> = new EventEmitter();
    @Output() toggle: EventEmitter<Task> = new EventEmitter();

    onDelete(task: Task) {
        this.delete.emit(task);
    }

    onToggle(task: Task) {
        this.toggle.emit(task);
    }

}