import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ficha-tecnica',
  templateUrl: './ficha-tecnica.component.html',
  styleUrls: ['./ficha-tecnica.component.css']
})
export class FichaTecnicaComponent implements OnInit {

  console:String;
  decription:String;
  catalog:String;

  constructor(private route: ActivatedRoute) {
    console.log('constructor');
    this.console = this.route.snapshot.queryParams.console;
    console.log(this.console);
    if (this.console === 'ps4'){
      this.decription = '<table class="table" width="100%" cellspacing="0" cellpadding="1" border="1">\n' +
        '<tbody><tr><td width="200"><b>Nombre del producto</b></td>\n' +
        '<td>PlayStation®4</td>\n' +
        '</tr><tr><td width="200"><b>Código del producto</b></td>\n' +
        '<td>Serie CUH-2000</td>\n' +
        '</tr><tr><td width="200"><b>Procesador principal</b></td>\n' +
        '<td><p>Procesador personalizado de un chip</p>\n' +
        '<p>CPU: AMD \'Jaguar\' x86-64, 8 núcleos</p>\n' +
        '<p>GPU: motor gráfico AMD de 1,84 TFLOPS basado en Radeon™</p>\n' +
        '</td>\n' +
        '</tr><tr><td><b>Memoria</b></td>\n' +
        '<td>8 GB GDDR5</td>\n' +
        '</tr><tr><td><b>Capacidad de almacenamiento*</b></td>\n' +
        '<td>500 GB, 1 TB</td>\n' +
        '</tr><tr><td><b>Dimensiones externas</b></td>\n' +
        '<td>Aprox. 265 × 39 × 288 mm (ancho × alto × largo)&nbsp;<br>\n' +
        '(excluye la proyección de mayor tamaño)</td>\n' +
        '</tr><tr><td><b>Peso</b></td>\n' +
        '<td>Aprox. 2,1 kg</td>\n' +
        '</tr><tr><td><b>Unidad BD/DVD<br>\n' +
        ' (solo lectura)</b></td>\n' +
        '<td>BD de 6 CAV<br>\n' +
        'DVD de 8 CAV</td>\n' +
        '</tr><tr><td><b>Entrada/Salida</b></td>\n' +
        '<td>2 puertos de altísima velocidad USB (USB 3.1 Gen1)&nbsp;<br>\n' +
        '1 puerto AUX</td>\n' +
        '</tr><tr><td><b>Red</b></td>\n' +
        '<td><p>1 puerto Ethernet (10BASE-T, 100BASE-TX, 1000BASE-T)</p>\n' +
        '<p>IEEE 802.11 a/b/g/n/ac</p>\n' +
        '<p>Bluetooth® 4.0</p>\n' +
        '</td>\n' +
        '</tr><tr><td><b>Alimentación</b></td>\n' +
        '<td>AC de 100-240 V, 50/60 Hz</td>\n' +
        '</tr><tr><td><b>Consumo de energía</b></td>\n' +
        '<td>Máx. 165 W</td>\n' +
        '</tr><tr><td><b>Temperatura de funcionamiento</b></td>\n' +
        '<td>5 ºC - 35 ºC<br>\n' +
        '</td>\n' +
        '</tr><tr><td><b>Salida AV</b></td>\n' +
        '<td>Salida HDMI™ (compatible con salida HDR)</td>\n' +
        '</tr></tbody></table>';
    }else{
      this.decription = '<table class="class="table""><tbody><tr class="ztXv9"><th style="padding-left:0">Spec</th><th><b>Xbox One</b> X</th><th><b>Xbox One</b> S</th></tr><tr><td style="padding-left:0">Memoria</td><td>12 GB GDDR5 @ 326 GB/s</td><td>8 GB DDR3 @ 68 GB/s, 32 MB ESRAM @ 218 GB/s</td></tr><tr><td style="padding-left:0">Flash</td><td>8GB</td><td>8GB</td></tr><tr><td style="padding-left:0">Disco Duro</td><td>1TB HDD</td><td>500GB, 1TB, 2TB HDD</td></tr><tr><td style="padding-left:0">Lector</td><td>4K UHD Blu-ray</td><td>4K UHD Blu-ray</td></tr></tbody></table>';
    }
  }

  ngOnInit(): void {
  }

}
