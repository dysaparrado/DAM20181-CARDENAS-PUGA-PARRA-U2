import { Component } from '@angular/core';
import { NavController,AlertController,reorderArray ,ToastController} from 'ionic-angular';
import { ArchivedTodosPage} from "../archived-todos/archived-todos";
import { TodoService } from '../../providers/todo-service/todo-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos= [];
  public reorderIsEnabled=false;

  constructor(private toastController: ToastController,private todoService: TodoService,public navCtrl: NavController,private alertController:AlertController) {
    this.todos= this.todoService.getTodos();
  }




  archiveTodo(todoIndex){
    this.todoService.archivedTodo(todoIndex);
  }




  }

