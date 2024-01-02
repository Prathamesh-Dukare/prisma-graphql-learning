import { initServer } from "./app";

async function main() {
  const app = await initServer();
  app.listen(3002, () => console.log("Server is running on port 3002"));
}

main();
