import {Task} from './task';
import {tasks} from './data';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


// http://localhost:8888/data.json
@Injectable()
export class TaskService {
    constructor(private http: HttpClient) {
    }

    configUrl = 'http://localhost:8000/api/todo';
    configUrlAdd = 'http://localhost:8888/add.php';
    configUrlDelete = 'http://localhost:8888/delete.php';

    getTasks() {
        return this.http.get<Task[]>(this.configUrl);
    }

    createTask(title: string) {
        return this.http.get<Task>(this.configUrlAdd, {params: {title: title}});
    }

    deleteTask(id: number) {
        return this.http.get(this.configUrlDelete, {params: {id: id.toString()}});
    }

    toggleTask(task: Task) {
        console.log('toggleTask ' + task);
    }

}
