<<<<<<< HEAD
import { 
	Component, Input, Output, EventEmitter, OnInit
} from '@angular/core';

import { ConversaoResponse, Conversao } from '../models/';
import { ConversorService } from '../services';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 2832259d5173eb5ce5ef7c79a4b0a2bd7f71203f

@Component({
  selector: 'modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css']
})
export class ModalCotacaoComponent implements OnInit {

<<<<<<< HEAD
	@Input() id: string;
	@Input() conversaoResponse: ConversaoResponse;
	@Input() conversao: Conversao = new Conversao();
	@Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

	constructor(private conversorService: ConversorService) {}

	ngOnInit() {
  	}

	novaConsulta() {
		this.onConfirm.emit();
	}

	get valorConvertido(): string {
	  	if (this.conversaoResponse === undefined) {
	  		return '0';
	  	}
	  	
	  	return (this.conversao.valor * 
	  		this.conversaoResponse.rates[this.conversao.moedaPara])
	  			.toFixed(2);
	}

	get cotacaoPara(): number {
	  	return this.conversorService.cotacaoPara(
	  		this.conversaoResponse, this.conversao);
	}

	get cotacaoDe(): string {
	  	return this.conversorService.cotacaoDe(
	  		this.conversaoResponse, this.conversao);
	}

	get dataCotacao(): string {
		return this.conversorService.dataCotacao(
	  		this.conversaoResponse);
	}
=======
  constructor() { }

  ngOnInit() {
  }

>>>>>>> 2832259d5173eb5ce5ef7c79a4b0a2bd7f71203f
}
