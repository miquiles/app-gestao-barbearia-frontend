import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-pesquisa',
  templateUrl: './cliente-pesquisa.component.html',
  styleUrls: ['./cliente-pesquisa.component.css']
})
export class ClientePesquisaComponent implements OnInit {
  title = 'autocomplete';
  options = ["Sam", "varun", "teste"]

  constructor() { }

  ngOnInit(): void {
  }

}
