let orders = [
  { id: 1, product: "Laptop", quantity: 1 },
  { id: 2, product: "Mouse", quantity: 2 }
];

export default function handler(req, res) {

  if (req.method === "GET") {
    return res.status(200).json(orders);
  }

  if (req.method === "POST") {
    const { product, quantity } = req.body;

    const newOrder = {
      id: orders.length + 1,
      product,
      quantity
    };

    orders.push(newOrder);

    return res.status(201).json(newOrder);
  }

}