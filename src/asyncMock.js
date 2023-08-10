export const products = [
  {
    id: "1",
    name: "Remera HUOKY WtHuo. ",
    price: 8500,
    category: "remera",
    img: "../images/remera1.png",
    stock: 25,
    description: "Disponible de L a XXL",
  },
  {
    id: "2",
    name: "Remera HUOKY NEON GENESIS",
    price: 9500,
    category: "remera",
    img: "../images/remera2.png",
    stock: 20,
    description: "Disponible de L a XXL",
  },
  {
    id: "3",
    name: "Remera HUOKY Room",
    price: 9000,
    category: "remera",
    img: "../images/remera3.png",
    stock: 15,
    description: "Disponible de L a XXL",
  },
  {
    id: "4",
    name: "Gorra Huoky Stage",
    price: 3000,
    category: "accesorios",
    img: "../images/gorra1.png",
    stock: 6,
    description: "AJUSTABLE",
  },
  {
    id: "5",
    name: "Gorra Huoky H-C219",
    price: 3500,
    category: "accesorios",
    img: "../images/gorra2.png",
    stock: 3,
    description: "AJUSTABLE",
  },
  {
    id: "6",
    name: "Gorra Huoky ORGANISM",
    price: 4000,
    category: "accesorios",
    img: "../images/gorra3.png",
    stock: 15,
    description: "AJUSTABLE",
  },
];

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === category));
    }, 500);
  });
};

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
