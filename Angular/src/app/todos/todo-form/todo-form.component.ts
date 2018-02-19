import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Task} from '../../shared/task';

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.css']
})

export class TodoFormComponent {

    title: string = '';
    @Input() tasks: Task[];
    @Output() create: EventEmitter<string> = new EventEmitter();

    onSubmit() {
        this.create.emit(this.title);
    }
}