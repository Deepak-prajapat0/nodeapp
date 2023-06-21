const request = require('supertest')
const app = require("../app")
const User = require('../models/userModel')

const user={
    name:"dkfdsfd",
    email:"abss@gmail.com",
    password:"123456",
    isAuthor:true
}

describe('user api testing',()=>{  
    describe("POST api",()=>{
        it("should create a user in db",async()=>{
            const res = await request(app).post('/api/user')
            .send(user)
            expect(res.status).toBe(201);
        })
    })
    describe("POST api",()=>{
        it("should login a user",async()=>{
            const res = await request(app).post('/api/login')
            .send({email:"abss@gmail.com",password:"123456"})
            expect(res.status).toBe(200);
        })
    })
})