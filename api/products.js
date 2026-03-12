let products = [
  { id: 1, name: "Laptop", price: 30000 },
  { id: 2, name: "Mouse", price: 500 }
];

export default function handler(req, res) {

  if (req.method === "GET") {
    return res.status(200).json(products);
  }

  if (req.method === "POST") {
    const { name, price } = req.body;

    const newProduct = {
      id: products.length + 1,
      name,
      price
    };

    products.push(newProduct);

    return res.status(201).json(newProduct);
  }

  if (req.method === "PUT") {
    const { id, name, price } = req.body;

    const product = products.find(p => p.id == id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.name = name;
    product.price = price;

    return res.status(200).json(product);
  }

  if (req.method === "DELETE") {
    const { id } = req.query;

    products = products.filter(p => p.id != id);

    return res.status(200).json({ message: "Product deleted" });
  }

}