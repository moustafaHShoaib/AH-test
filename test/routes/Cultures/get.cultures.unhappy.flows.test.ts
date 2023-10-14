import "jest";
import * as request from "supertest";
import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
} from "@jest/globals";
import { serviceUrl } from "../../utils";
/*
 * Test Module
 */

describe("get cultures Collections", () => {
  describe("get cultures 'EN' unhappy Tests", () => {
    test("get Cultures EN with invalid key", async () => {
      const response = await request(serviceUrl)
        .get(`/EN/collection?key=invalidKey`)
        .expect(401);

      expect(response.headers).toHaveProperty(
        "content-type",
        "text/plain; charset=utf-8"
      );

      expect(response.body.count).toBeUndefined();
      expect(response.body.artObjects).not.toBeNull();
    });

    test("get Cultures NL with invalid key", async () => {
      const response = await request(serviceUrl)
        .get(`/NL/collection?key=invalidKey`)
        .expect(401);

      expect(response.headers).toHaveProperty(
        "content-type",
        "text/plain; charset=utf-8"
      );

      expect(response.body.artObjects).toBeUndefined();
    });

    test("get Undefined cultures", async () => {
      const response = await request(serviceUrl)
        .get(`/TEST/collection?key=0fiuZFh4`)
        .expect(404);

      expect(response.headers).toHaveProperty(
        "content-type",
        "text/html; charset=utf-8"
      );

      expect(response.body.artObjects).toBeUndefined();
    });

    test("get Cultures NL with p=10001", async () => {
      const response = await request(serviceUrl)
        .get(`/NL/collection?key=0fiuZFh4&p=10001`)
        .expect(200);

      expect(response.headers).toHaveProperty(
        "content-type",
        "application/json; charset=utf-8"
      );
      expect(response.body.count).toEqual(0);
      expect(response.body.artObjects).toStrictEqual([]);
      expect(response.body.artObjects).toStrictEqual([]);
      expect(response.body.facets).toStrictEqual([]);
    });

    test("get Cultures EN with p=10001", async () => {
      const response = await request(serviceUrl)
        .get(`/EN/collection?key=0fiuZFh4&p=10001`)
        .expect(200);

      expect(response.headers).toHaveProperty(
        "content-type",
        "application/json; charset=utf-8"
      );
      expect(response.body.count).toEqual(0);
      expect(response.body.artObjects).toStrictEqual([]);
      expect(response.body.artObjects).toStrictEqual([]);
      expect(response.body.facets).toStrictEqual([]);
    });
  });
});
