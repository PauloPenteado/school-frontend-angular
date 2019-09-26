import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  title = 'Painel Administrativo';
  students = 'Alunos';
  courses = 'Cursos';
  employees = 'Funcionarios';
  plans = 'Planos';
  search = 'Buscar  ';

  constructor() { }

  ngOnInit() {
  }

}
