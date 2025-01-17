import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';
import { response } from 'express';

const lamine = {
  "id": 4,
  "name": "Lamine",
  "surnames": "Yamal",
  "age": 17,
  "position": "ED",
  "shirtNumber": 19,
  "active": true,
  "teamId": 1
}

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/players (POST)', () => {
    return request(app.getHttpServer())
      .post('/players')
      .send(lamine)
      .expect(200)
      .expect(lamine)
  });
});
