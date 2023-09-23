import { Injectable } from '@angular/core';
import { Elemento } from '../interfaces/elemento';

@Injectable({
  providedIn: 'root'
})
export class ElementosService {
  private elementos: Elemento[] = [];

  constructor() { }

  getElementos(): Elemento[] {
    return this.elementos;
  }

  agregarElemento(elemento: Elemento): void {
    this.elementos.push(elemento);
  }

  actualizarElemento(elemento: Elemento): void {
    const index = this.elementos.findIndex(e => e.id === elemento.id);
    if (index !== -1) {
      this.elementos[index] = elemento;
    }
  }

  eliminarElemento(id: number): void {
    this.elementos = this.elementos.filter(e => e.id !== id);
  }
}

