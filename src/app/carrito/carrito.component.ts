import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent {
  listaProductos!: any;
  totalPrice: number = 0;
  totalprodu: number = 0;
  quantity: number = 0;
  character: any;
  precioTotal: any;
  constructor(public productosService: ProductosService) {}
  ngOnInit(): void {
    this.listaProductos = this.productosService.character;
    //this.updateeQuantity = this.productosService.updateQuantity(character, quantity);
    console.log(this.listaProductos);
    this.productosService.totalCarrito$.subscribe((data) => {
      console.log(data);
      this.totalPrice = data;
    });
    // this.totalprodu = this.productosService.getTotalProdu();
    this.precioTotalCarrito();
  }
  calcularPrecio(quantity: any, character: any) {
    console.log(character);
    character.quantity = quantity.target.value;
    this.productosService.getTotalProdu(character);
  }
  precioTotalCarrito() {
    this.precioTotal = this.productosService.getTotalPrice();
  }
}
