
export function getProducts() {
  return new Promise((res) => {
    res(
      [
      {
        name: 'Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado',
        image: '/static/images/produtos/produto-1.png',
        price: { amount: 179.9, isDiscount: null },
        id: 1,
      },
      {
        name: 'Coturno Feminino Bebecê Tratorado Detalhe Tachas',
        image: '/static/images/produtos/produto-2.png',
        price: { amount: 349.9, isDiscount: 315 },
        id: 2,
      },
      {
        name: 'Scarpin Bebecê Salto Alto Taça Com Fivela',
        image: '/static/images/produtos/produto-3.png',
        price: { amount: 159.90, isDiscount: null },
        id: 3,
      },
    ]);
  });
}


export function getProductsDesktop() {
  return new Promise((res) => {
    res(
      [
      {
        name: 'Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado',
        image: '/static/images/produtos/desktop/prod1.png',
        price: { amount: 179.9, isDiscount: null },
        id: 1,
      },
      {
        name: 'Coturno Feminino Bebecê Tratorado Detalhe Tachas',
        image: '/static/images/produtos/desktop/prod4.png',
        price: { amount: 349.9, isDiscount: 315 },
        id: 2,
      },
      {
        name: 'Scarpin Bebecê Salto Alto Taça Com Fivela',
        image: '/static/images/produtos/desktop/prod5.png',
        price: { amount: 159.90, isDiscount: null },
        id: 3,
      },
            {
        name: 'Scarpin Bebecê Salto Alto Taça Com Fivela',
        image: '/static/images/produtos/desktop/prod4.png',
        price: { amount: 159.90, isDiscount: null },
        id: 4,
      },
      {
        name: 'Scarpin Bebecê Salto Alto Taça Com Fivela',
        image: '/static/images/produtos/desktop/prod5.png',
        price: { amount: 159.90, isDiscount: null },
        id: 5,
      },
      {
        name: 'Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado',
        image: '/static/images/produtos/desktop/prod1.png',
        price: { amount: 179.9, isDiscount: null },
        id: 6,
      },
      {
        name: 'Coturno Feminino Bebecê Tratorado Detalhe Tachas',
        image: '/static/images/produtos/desktop/prod2.png',
        price: { amount: 349.9, isDiscount: 315 },
        id: 7,
      },
      
    ]);
  });
}

