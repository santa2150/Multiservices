import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Elemento } from '../interfaces/elemento';
import { ElementosService } from '../servicios/elemento.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListaPage {
  elementos: Elemento [];

  constructor(private elementosService: ElementosService, private router: Router) {
    this.elementos = this.elementosService.getElementos();
  }

  editarElemento(id: number): void {
    this.router.navigate(['/editar-elemento', id]);
  }

  eliminarElemento(id: number): void {
    this.elementosService.eliminarElemento(id);
    this.refrescarLista();
  }

  refrescarLista(): void {
    this.elementos = this.elementosService.getElementos();
  }

  ngOnInit() {
  }

}
