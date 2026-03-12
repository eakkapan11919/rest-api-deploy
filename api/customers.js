let customers = [
  { id: 1, name: "John", email: "john@email.com" },
  { id: 2, name: "Anna", email: "anna@email.com" }
];

export default function handler(req, res) {

  if (req.method === "GET") {
    return res.status(200).json(customers);
  }

  if (req.method === "POST") {
    const { name, email } = req.body;

    const newCustomer = {
      id: customers.length + 1,
      name,
      email
    };

    customers.push(newCustomer);

    return res.status(201).json(newCustomer);
  }

}