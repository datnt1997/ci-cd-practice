const request = require('supertest');
const app = require('../src/app');

test('GET /health returns ok', async () => {
  const res = await request(app).get('/health');
  expect(res.status).toBe(200);
  expect(res.body).toEqual({ status: 'ok' });
});

test('POST /add adds two numbers', async () => {
  const res = await request(app).post('/add').send({ a: 2, b: 3 });
  expect(res.status).toBe(200);
  expect(res.body.result).toBe(5);
});

test('POST /add rejects invalid input', async () => {
  const res = await request(app).post('/add').send({ a: 'x', b: 3 });
  expect(res.status).toBe(400);
});
