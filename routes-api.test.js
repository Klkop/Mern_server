//jest to test http get method and verify get method
const app=require('./index')
const request=require('supertest')
describe('GET/users',()=>{
    test('GET users from /user API',async()=>{
        const res=await request(app)
        .get('./users')
        .expect(200);
        console.log()
        
    })
})