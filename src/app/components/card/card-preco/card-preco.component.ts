import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-preco',
  templateUrl: './card-preco.component.html',
  styleUrls: ['./card-preco.component.css']
})
export class CardPrecoComponent {
@Input()
gameType:string = ""
@Input()
gamePreco:string = ""
}
