import logger from "../../src/utils/Logger/Logger";

describe("Teste do Logger", () => {
  it("Deve criar logs corretamente", () => {
    logger.info("Este é um teste de mensagem de informação");
  });
});
