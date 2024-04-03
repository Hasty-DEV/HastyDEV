/*

import request from "supertest";
import { app } from "../../config/express/express";
import VerificationCode from "../../api/models/Email/EmailVerifyCode.model";

interface UserDataTypes {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  role: string;
  id?: number | string;
  token?: string;
}

const UserData: UserDataTypes = {
  username: "JestTest",
  email: "testesdesoftware@jeffldscompany.com.br",
  password: "Teste123!",
  first_name: "Jest",
  last_name: "Test",
  role: "user",
};

describe("Fará Todo o Processo de Autenticação e ciclo de vida de um usuário", () => {
  it("Deve Efetuar o Registro de um usuário, usando a Rota /api/register", async () => {
    const response = await request(app).post("/api/register").send(UserData);

    expect(response.status).toBe(201);

    UserData.id = response.body.id;
    UserData.token = response.body.token;

    expect(response.body).toEqual(
      expect.objectContaining({
        id: expect.anything(),
        token: expect.any(String),
      })
    );
  });

  it("Envia email de verificação, acessando a rota /api/sendEmailVerification", async () => {
    const response = await request(app)
      .post("/api/sendEmailVerification")
      .send(UserData.email);

    expect(response.status).toBe(200);
  });

  it("Verifica o email, acessando a rota /api/emailCodeVerification", async () => {
    const code = await VerificationCode.findOne({
      where: { userId: UserData.id },
    });

    expect(code).toBeTruthy();

    const response = await request(app).post("/api/register").send({
      code: code?.code,
      email: UserData.email,
    });

    expect(response.status).toBe(200);
  });
});
*/