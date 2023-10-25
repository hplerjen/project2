export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    productType: string;
    onStock: number;
  }

  export const products = [
    {
      id: 1,
      name: 'DEH2',
      price: 10,
      description: 'Ivvar Niillas',
      productType: "CD NEW",
      onStock: 10
    },
    {
        id: 2,
        name: 'DEH1',
        price: 50, 
        description: 'Ivvar Niillas',
        productType: "CD Secondhand",
        onStock: 10
      },
  ];
  