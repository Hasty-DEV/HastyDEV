import { generatePinCode } from "../../utils/PinGenerate/PinGenerate";

describe("Teste de Geração de PIN", () => {
  it("Desde deve gerar um pin de 3 Caracteres em Maiúsculas", () => {
    const pin = generatePinCode();
    expect(pin.length).toBe(6);
    expect(pin).toMatch(/^[A-Z0-9]+$/);
  });
});