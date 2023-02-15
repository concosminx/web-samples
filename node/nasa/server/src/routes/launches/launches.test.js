const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app)
        .get('/launches')
        .expect('Content-Type', /json/)
        .expect(200);
        
    });

});


describe('Test POST /launches', () => {

    const completeLaunchData = {
        mission: "MMT-1",
        rocket: "USS Enterprise",
        launchDate: "January 4, 2028",
        target: "Kepler-442 b"
    };

    const launchDataWithoutDate = {
        mission: "MMT-1",
        rocket: "USS Enterprise",
        target: "Kepler-442 b"
    };

    const launchDataWithInvalidDate = {
        mission: "MMT-1",
        rocket: "USS Enterprise",
        launchDate: "not-a-date",
        target: "Kepler-442 b"
    };

    test('It should respond with 201 success', async () => {
        const response = await request(app)
        .post('/launches')
        .send(completeLaunchData)
        .expect('Content-Type', /json/)
        .expect(201);

        const requestDate = new Date(completeLaunchData.launchDate).valueOf();
        const responseDate = new Date(response.body.launchDate).valueOf();

        expect(responseDate).toBe(requestDate);
        expect(response.body).toMatchObject(launchDataWithoutDate);
        
    });

    test('It should catch missing required properties', async () => {
        const response = await request(app)
        .post('/launches')
        .send(launchDataWithoutDate)
        .expect('Content-Type', /json/)
        .expect(400);

        expect(response.body).toStrictEqual({
            error: 'Missing required launch property',
        });
    });
    test('It should catch invalid dates', async () => {
        const response = await request(app)
        .post('/launches')
        .send(launchDataWithInvalidDate)
        .expect('Content-Type', /json/)
        .expect(400);

        expect(response.body).toStrictEqual({
            error: 'Invalid launch date',
        });
    });
});