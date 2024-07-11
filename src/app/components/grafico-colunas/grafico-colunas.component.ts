import { Component } from '@angular/core';

@Component({
  selector: 'grafico-colunas',
  templateUrl: './grafico-colunas.component.html',
  styleUrls: ['./grafico-colunas.component.scss']
})
export class GraficoColunasComponent {


  ngOnInit() {
    this.carregarColunhas();
  }


  colunas = new Array<ColunaModel>();

  carregarColunhas() {
    let linhas = [];
    var valores = [60, 8, 100, 5, 75, 3, 39, 3, 18, 59, 33, 44, 12, 10,60, 8, 100, 5, 75, 3, 39, 3, 18, 59, 33, 44, 12, 10,60, 8, 100, 5, 75, 3, 39, 3, 18, 59, 33, 44, 12, 10];

    for (let index = 0; index < 26; index++) {
     
      let item = new ColunaModel();
      item.Descricao="Valor "+ valores[index].toString();
      item.Porcentagem = valores[index];
      linhas.push(item);
    }

    this.colunas = linhas;
  }


  ajustePorcentagem(value: number) {
    return value.toString() + "%";
  }

}




export class ColunaModel {
  Porcentagem: number = 0;
  Descricao: string = "";
}
