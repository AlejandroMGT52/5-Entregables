import { Component } from '@angular/core';

@Component({
  selector: 'app-Deber5',
  templateUrl: './Deber5.component.html',
  styleUrls: ['./Deber5.component.scss']
})
export class Deber5Component {
  // Lista de productos
  products = [
    { 
      name: 'Aston Martin DBS Superleggera', 
      price: 100.000, 
      inventoryStatus: 'OFERTA', 
      image: 'https://www.astonmartinofgreenwich.com/wp-content/uploads/2023/06/New-2023-Aston-Martin-DBS-Superleggera.jpg'
    },
    { 
      name: 'Tesla Roadster (2024) ', 
      price: 195.22, 
      inventoryStatus: 'OFERTA', 
      image: 'https://soymotor.com/sites/default/files/2023-05/tesla-roadster-soymotor_2.jpg'
    },
    { 
      name: ' Nissan GT-R Nismo', 
      price: 185.25, 
      inventoryStatus: 'VENDIENDO', 
      image: 'https://cdn.motor1.com/images/mgl/Bbg6A/s1/2018-nissan-gt-r-nismo-gt3.jpg'
    },
    { 
      name: ' Chevrolet Corvette Z06 (C8) ', 
      price: 175.36, 
      inventoryStatus: 'OFERTA', 
      image: 'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2025/performance/corvette-z06/mov/01-images/2025-z06-z07-01.png?imwidth=960'
    },
    { 
      name: 'Koenigsegg Jesko Absolut', 
      price: 8545.36, 
      inventoryStatus: 'VENDIENDO', 
      image: 'https://www.gamereactor.eu/media/96/koenigseggbelievesjesko_4289633.jpg'
    },
    { 
      name: 'McLaren P1', 
      price: 568.36, 
      inventoryStatus: 'OFERTA', 
      image: 'https://acnews.blob.core.windows.net/imgnews/large/NAZ_ede8f5955d27415abddca8103e9f7574.jpg'
    },
  ];

  // Configuración del carrusel (responsiveOptions)
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3,   // 4 productos visibles en pantallas grandes
      numScroll: 1
    },
    {
      breakpoint: '980px',
      numVisible: 2,   // 3 productos visibles en pantallas medianas
      numScroll: 1
    },
    {
      breakpoint: '660px',
      numVisible: 1,   // 2 productos visibles en pantallas pequeñas
      numScroll: 1
    },

  ];

  // Método para determinar el severidad de la disponibilidad
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }
}
