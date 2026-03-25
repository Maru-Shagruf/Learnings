async function runTests() {
  const BASE_URL = "http://localhost:3000/api";
  let token = "";

  console.log("--- 1. Testing User Registration ---");
  const regRes = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "admin", password: "password123" })
  });
  console.log(await regRes.json());

  console.log("\n--- 2. Testing User Login ---");
  const loginRes = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "admin", password: "password123" })
  });
  const loginData = await loginRes.json();
  token = loginData.token;
  console.log("Token Received:", token ? "Yes" : "No");

  console.log("\n--- 3. Testing Secure Product Creation ---");
  const createRes = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` 
    },
    body: JSON.stringify({ name: "Mechanical Keyboard", price: 120 })
  });
  console.log(await createRes.json());

  console.log("\n--- 4. Testing Get Products (Pagination & Cache) ---");
  const getRes = await fetch(`${BASE_URL}/products?page=1&limit=5`);
  console.log(await getRes.json());
}

runTests();