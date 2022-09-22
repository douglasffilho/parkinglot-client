import { Component, OnInit } from '@angular/core';
import subscribers from 'src/app/subscribers';
import { LotsService } from '../../services/lots/lots.service';

@Component({
  selector: 'vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss'],
})
export class VagasComponent implements OnInit {
  vagas: any = [];

  constructor(private lotsService: LotsService) {
    subscribers.carParkedEvent.subscribe(() => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.lotsService.getLots().subscribe((response) => {
      this.vagas = response
        .map((vaga: any) => {
          vaga.disponivel = !vaga.car;
          return vaga;
        })
        .sort((v1: any, v2: any) => v1.number - v2.number);
    });
  }
}
