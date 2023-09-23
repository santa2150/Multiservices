import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Elemento } from '../interfaces/elemento';
import { ElementosService } from '../servicios/elemento.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class EditarElementoPage {
  elemento: Elemento = { id: 0, nombre: '', correo: '' };
  id: number;

  constructor(
    private elementosService: ElementosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : 0;

    const elementos = this.elementosService.getElementos();
    this.elemento = elementos ? elementos.find(e => e.id === this.id) || this.elemento : this.elemento;
  }

  guardarCambios(): void {
    this.elementosService.actualizarElemento(this.elemento);
    this.router.navigate(['/lista-elementos']);
  }

  ngOnInit() {
  }

}
