import express from "express";
import cors from "cors";

import feedbackRoutes from "./routes/feedbacks.routes.js";
import doacoesRouters from "./routes/doacoes.routes.js";
import locaisRouters from "./routes/locais.routes.js";
import campanhasRouters from "./routes/campanhas.routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "API funcionando corretamente!" });
});

// Rotas
app.use("/feedbacks", feedbackRoutes);
app.use("/doacoes", doacoesRouters);
app.use("/locais", locaisRouters);
app.use("/campanhas", campanhasRouters);

// Inicialização do servidor
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;
