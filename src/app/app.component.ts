import { Component, Input, OnInit } from '@angular/core';
import { Persona } from './models/Persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' ]
})
export class AppComponent implements OnInit {
  titleDeMiApp: string = 'HOLA SADKJFAFDJK!!!';
  nombre:string = 'Hernan' 
  personas: Persona[] = []
  
  constructor() {

  }

  ngOnInit(): void {
      let p: Persona = new Persona( "Ale", "Fantino", 55)
      this.personas.push(p)
      this.personas.push(new Persona( "Raul", "Boy", 35))
  }


}
