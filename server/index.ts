import { app, port } from "./src/app";

app.listen(port, () =>
  console.log(`El servidor esta corriendo desde el puerto: ${port}`)
);
