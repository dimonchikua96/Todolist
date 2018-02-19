import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import {AppComponent} from './app.component';
import {TodoListComponent} from './todos/todo-list/todo-list.component';
import {TodoFormComponent} from './todos/todo-form/todo-form.component';
import {TodosComponent} from './todos/todos.component';
import {TaskService} from './shared/task.service';


@NgModule({
    declarations: [
        AppComponent,
        TodoFormComponent,
        TodoListComponent,
        TodosComponent
    ],
    imports: [
        BrowserModule, FormsModule, HttpClientModule
    ],
    providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
