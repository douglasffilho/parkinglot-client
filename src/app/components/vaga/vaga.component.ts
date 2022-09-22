import { Component, Input, OnInit } from '@angular/core';
import { ModalOption } from 'src/app/model/modal-option';
import { LotsService } from 'src/app/services/lots/lots.service';

@Component({
  selector: 'vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.scss']
})
export class VagaComponent implements OnInit {
  id: string = '';

  @Input()
  vaga: any = null;

  img: string = '';

  actionOptions: ModalOption[] = [
    new ModalOption(
      'MOVE',
      'Mudar o carro de vaga',
      () => {
        console.log('MOVE ', this.id);
      }
    ),
    new ModalOption(
      'GETOUT',
      'Ir embora',
      () => {
        this.lotsService.unparkCar(this.vaga.car.plate).subscribe();
      }
    )
  ];

  constructor(private lotsService: LotsService) {}

  selectedOption(optionValue: string) {
    this.actionOptions.find(option => option.value === optionValue)?.action();
  }

  ngOnInit(): void {
    this.id = this.vaga.number;
    if (this.vaga.disponivel) {
      this.img = 'assets/vaga-disponivel.jpeg';
    } else {
      this.img = 'assets/vaga-ocupada.jpeg';
    }
  }
}
