import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personajes:any[]= [
    {
      nombre: "Rick Sánchez", 
      descripcion: `Es un científico alcohólico de 60 años 
      que acostumbra a hablar de manera vulgar y entre eructos. 
      Es el padre de Beth Smith, suegro de Jerry y el abuelo 
      materno de Summer y Morty, no se lleva bien con Jerry Smith.`,
      imagen: "assets/personajes/Rick_Sánchez.jpg"
    },
    {
      nombre: "Mortimer Smith (Morty)",
      descripcion: `Es un chico de 14 años, es el nieto de Rick Sánchez, 
      hijo de Beth Smith y Jerry Smith y hermano menor de Summer Smith; 
      viaja frecuentemente a múltiples lugares del universo junto a su abuelo Rick`,
      imagen: "assets/personajes/Morty.jpg"
    },
    {     nombre: "Beth Smith Sánchez",
      descripcion: `Es la hija de 34 años de Rick, esposa de Jerry y madre de Morty 
      y Summer. Al igual que su padre es muy inteligente, pero a diferencia de él,
      es muy responsable ante las diversas situaciones que se le presentan.`,
      imagen: "assets/personajes/Beth _Smith_Sánchez.jpg"
    },
    {
      nombre: "Jerry Smith",
      descripcion: `Es el yerno de 35 años de Rick, esposo de Beth y padre de Morty y 
      Summer. Trabaja como publicista en una compañía, en la cual él cree hacer bien 
      su trabajo. Es bastante inepto, siendo para la familia una molestia, ya que Rick 
      lo odia por no saber cortejar a su mujer y a sus hijos.`,
      imagen: "assets/personajes/Jerry_Smith.jpg"

    },
    {
      nombre: "Summer Smith",
      descripcion: ` Es la nieta de 17 años de Rick, hija de Beth Smith y Jerry Smith 
      y hermana mayor de Morty. En ocasiones acompaña a Rick en sus aventuras. Está 
      completamente obsesionada con ser popular al estar dispuesta en hacer cualquier 
      cosa para conseguirlo.`,
      imagen: "assets/personajes/Summer_Smith.jpg"

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
