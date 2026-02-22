let users = [{ id: 1, name: "Sam" }]; 

export const getUsers = (req, res) => {
  res.json({ success: true, data: users });
};

export const addUser = (req, res) => {
  const newUser = { id: Date.now(), name: req.body.name };
  users.push(newUser);
  res.json({ success: true, data: newUser });
};