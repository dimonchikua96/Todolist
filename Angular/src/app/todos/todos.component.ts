import {Component, OnInit} from '@angular/core';
import {TaskService} from './../shared/task.service';
import {Task} from './../shared/task';
import {tasks} from '../shared/data';

@Component({
    moduleId: module.id,
    selector: 'todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
    tasks: Task[];

    constructor(private taskService: TaskService) {
        this.tasks = [];
    }

    ngOnInit() {
        this.taskService.getTasks().subscribe(data =>
                this.tasks = data,
            error => alert('o my garable')
        );
    }

    create(title: string) {
        this.taskService.createTask(title)
            .subscribe(results => this.tasks.push(results));
    }

    delete(task: Task) {

        console.log(task);
        this.taskService.deleteTask(task.id)
            .subscribe(results => {
                let index = this.tasks.indexOf(task);
                console.log(index);
                this.tasks.splice(index, 1);
            });
    }

    toggle(task: Task) {
        this.taskService.toggleTask(task);
    }

}