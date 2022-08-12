import { Component, OnInit } from '@angular/core';
import { LotsService } from '../lots.service';

@Component({
  selector: 'vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})
export class VagasComponent implements OnInit {
  vagas: any = [];

  constructor(private lotsService: LotsService) { }

  ngOnInit(): void {
    this.lotsService.getLots().subscribe((response) => {
      this.vagas = response;
    });
  }

}
