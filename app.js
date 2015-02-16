(function (){
  var app = angular.module('store', []);
  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
  { name: 'Dodecahedron',
    price: 2.95,
    description: '...',
    canPurchase: true,
    soldOut: false
  },
  { name: 'Pentagonal Gem',
    price: 110.45,
    description: "Good stuff",
    canPurchase: true,
    soldOut: false
  },
  { name: 'Rocks that I got',
    price: 67.45,
    description: "I'm still Jenny from the Block",
    canPurchase: true,
    soldOut: false
  }
  ]
})();
