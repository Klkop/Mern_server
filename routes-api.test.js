const { app, startServer } = require('./index');
const request = require('supertest');
let server;

beforeAll(async () => {
    server = await startServer(); // Start the server
});

afterAll(done => {
    server.close(done); // Close the server
});

describe('GET /users', () => {
    test('Get users from /users API', async () => {
        const res = await request(app)
            .get('/users')
            .expect(200);

        console.log('Response body:', res.body); // Log the actual response

        const data = res.body;
        expect(data).toHaveProperty('getAllUsers');
        data.getAllUsers.forEach(user => {
            expect(user).toHaveProperty('id');
            expect(user).toHaveProperty('email');
        });
    });
});
