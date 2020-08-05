import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
  styleUrls: ['./card-heroe.component.css']
})
export class CardHeroeComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() index: number;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  watchHeroe(): void {
    this.router.navigate(['/heroe', this.index]);
  }

}
