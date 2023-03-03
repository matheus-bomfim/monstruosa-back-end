import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import Request from "supertest";
import app from "../../../app";
import { newPubliMocks, UpdateMocks } from "../../mocks/publiMocks";
import { loginUserAdmMocks, newUserAdmMocks } from "../../mocks/userMocks";

describe("Testing publis routes",() => {
    let connection: DataSource;
    
    beforeAll(async ()=>{
        await AppDataSource.initialize()
        .then((res) => (connection = res))
        .catch((err)=>{console.error("Error In Data Source")});
    });

    afterAll(async () => {
        await connection.destroy();
    });

    test("Should be able to create publis", async () => {
        const newUser = await Request(app).post("/users").send(newUserAdmMocks)
        const login = await Request(app).post("/users/login").send(loginUserAdmMocks)
        const response = await Request(app).post("/publis").send(newPubliMocks).set("authorization",login.body.token)
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("text","Teste 1")
        expect(response.body).toHaveProperty("img", ["WWW.GOOGLE.COM"])
    })

    test("Should be able to update publis", async () => {
        const list = await Request(app).get("/publis")
        const login = await Request(app).post("/users/login").send(loginUserAdmMocks)
        const response = await Request(app).patch(`/publis/${list.body.list[0].id}`).send(UpdateMocks).set("authorization",login.body.token)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("text","Teste Update 1")
        expect(response.body).toHaveProperty("img", ["WWW.GOOGLE.COM","WWW.G1.COM"])
    })

    test("Should be able to delete publis", async () => {
        const list = await Request(app).get("/publis")
        const login = await Request(app).post("/users/login").send(loginUserAdmMocks)
        const response = await Request(app).delete(`/publis/${list.body.list[0].id}`).set("authorization",login.body.token)
        expect(response.status).toBe(204)
    })
})