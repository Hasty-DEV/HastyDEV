const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.52tpxzp.mongodb.net/?retryWrites=true&w=majority`, {
    });
    console.log("Conexão com o MongoDB estabelecida com sucesso.");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB: " + error);
    process.exit(1);
  }
};

module.exports = connectDB;
