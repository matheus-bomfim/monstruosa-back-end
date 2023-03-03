import { DataSource } from "typeorm"
import app from "../../../app";
import AppDataSource from "../../../data-source";
import  Request from "supertest";
import { loginUserAdmMocks, loginUserMocks, newUserAdmMocks, newUserAthleteMocks, newUserMocks, updateUserMocks } from "../../mocks/userMocks";

describe("Testing user routes",() => {
    let connection: DataSource;

    let userIdUpdateNotAdm = ""

    beforeAll(async ()=>{
        await AppDataSource.initialize()
        .then((res) => (connection = res))
        .catch((err)=>{console.error("Error In Data Source")});
    });

    afterAll(async () => {
        await connection.destroy();
    });

    test("Should be able to create a new user",async ()=>{
        const response = await Request(app).post("/users").send(newUserMocks)
        userIdUpdateNotAdm = response.body.id
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name","James Bond")
        expect(response.body).not.toHaveProperty("password")
        expect(response.body).toHaveProperty("tel","12345888")
        expect(response.body).toHaveProperty("email","diogo12@mail.com")
        expect(response.body).toHaveProperty("city","Rio de Janeiro")
        expect(response.body).toHaveProperty("isAdm", false)
        expect(response.body).toHaveProperty("img", "www.img.com")
        expect(response.body).toHaveProperty("isAthlete", false)
    })

    test("Should be able to create a new user adm",async ()=>{
        const response = await Request(app).post("/users").send(newUserAdmMocks)
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name","Diogo Defante")
        expect(response.body).not.toHaveProperty("password")
        expect(response.body).toHaveProperty("tel","12345888")
        expect(response.body).toHaveProperty("email","diogodefante@mail.com")
        expect(response.body).toHaveProperty("city","São Paulo")
        expect(response.body).toHaveProperty("isAdm", true)
        expect(response.body).toHaveProperty("img", "www.img12.com")
        expect(response.body).toHaveProperty("isAthlete", false)
    })

    test("Should be able to create a new user athlete",async ()=>{
        const response = await Request(app).post("/users").send(newUserAthleteMocks)
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name","Nick Lauda")
        expect(response.body).not.toHaveProperty("password")
        expect(response.body).toHaveProperty("tel","12345888")
        expect(response.body).toHaveProperty("email","nicklauda@mail.com")
        expect(response.body).toHaveProperty("city","New York")
        expect(response.body).toHaveProperty("isAdm", false)
        expect(response.body).toHaveProperty("img", "www.img123.com")
        expect(response.body).toHaveProperty("isAthlete", true)
        expect(response.body).toHaveProperty("athlete", "Vôlei")
    })

    test("Should not be able to create a user already created",async ()=>{
        const response = await Request(app).post("/users").send(newUserMocks)
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("message","Usuário já existente")
    })

    test("Should not be able to update a user already created",async ()=>{
        const login = await Request(app).post("/users/login",).send(loginUserMocks)
        const response = await Request(app).patch(`/users/${userIdUpdateNotAdm}`).set("authorization",login.body.token)
        .send(updateUserMocks)
        expect(response.status).toBe(404)
    })
    
    test("Should be able to update a user already created",async ()=>{
        const login = await Request(app).post("/users/login",).send(loginUserAdmMocks)
        const response = await Request(app).patch(`/users/${userIdUpdateNotAdm}`).set("authorization",login.body.token)
        .send(updateUserMocks)
        expect(response.status).toBe(202)
        expect(response.body).toHaveProperty("name","Ayrton Senna")
    })

    test("Should not be able to delete a user already created",async ()=>{
        const login = await Request(app).post("/users/login",).send(loginUserMocks)
        const response = await Request(app).delete(`/users/${userIdUpdateNotAdm}`).set("authorization",login.body.token)
        .send(updateUserMocks)
        expect(response.status).toBe(404)
    })
    
    test("Should be able to delete a user already created",async ()=>{
        const login = await Request(app).post("/users/login",).send(loginUserAdmMocks)
        const response = await Request(app).delete(`/users/${userIdUpdateNotAdm}`).set("authorization",login.body.token)
        .send(updateUserMocks)
        expect(response.status).toBe(204)
    })

})