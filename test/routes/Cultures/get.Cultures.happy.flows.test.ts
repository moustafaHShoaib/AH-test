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
  describe("get cultures 'EN' Tests", () => {
    test("get Culture EN with valid key", async () => {
      const response = await request(serviceUrl)
        .get(`/EN/collection?key=0fiuZFh4`)
        .expect(200);

      expect(response.headers).toHaveProperty(
        "content-type",
        "application/json; charset=utf-8"
      );
      expect(response.body.count).toBeGreaterThan(0);
      expect(response.body.artObjects).not.toBeNull();
    });

    test("get Cultures EN with JSON format", async () => {
      const response = await request(serviceUrl)
        .get(`/EN/collection?key=0fiuZFh4&format=json`)
        .expect(200);

      expect(response.headers).toHaveProperty(
        "content-type",
        "application/json; charset=utf-8"
      );

      expect(response.body.count).toBeGreaterThan(0);
      expect(response.body.artObjects).not.toBeNull();
    });

    /*
     *** Bug
     *** we should see a response in case of using a jsonp format
     */
    test("get Cultures EN with jsonp format", async () => {
      const response = await request(serviceUrl)
        .get(`/EN/collection?key=0fiuZFh4&format=jsonp`)
        .expect(200);

      expect(response.headers).toHaveProperty(
        "content-type",
        "text/javascript; charset=utf-8"
      );

      expect(response.body.count).toBeGreaterThan(0);
      expect(response.body.artObjects).not.toBeNull();
    });

    /*
     *** Bug
     *** we should see a response in case of using a XML format
     */

    test("get Cultures EN with xml format", async () => {
      const response = await request(serviceUrl)
        .get(`/EN/collection?key=0fiuZFh4&format=xml`)
        .expect(200);

      expect(response.headers).toHaveProperty(
        "content-type",
        "application/xml; charset=utf-8"
      );

      expect(response.body.count).toBeGreaterThan(0);
      expect(response.body.artObjects).not.toBeNull();
    });

    test("get Cultures EN with p=0", async () => {
      const response = await request(serviceUrl)
        .get(`/EN/collection?key=0fiuZFh4&p=1`)
        .expect(200);

      expect(response.headers).toHaveProperty(
        "content-type",
        "application/json; charset=utf-8"
      );
      
      expect(response.body.count).toBeGreaterThan(0);
      expect(response.body.artObjects).not.toBeNull();
    });
  });
  describe("get cultures 'NL' Tests", () => {
    test("get Culture NL with valid key", async () => {
      const response = await request(serviceUrl)
        .get(`/NL/collection?key=0fiuZFh4`)
        .expect(200);

      expect(response.headers).toHaveProperty(
        "content-type",
        "application/json; charset=utf-8"
      );

      expect(response.body.count).toBeGreaterThan(0);
      expect(response.body.artObjects).not.toBeNull();
    });

    test("get Cultures NL with JSON format", async () => {
      const response = await request(serviceUrl)
        .get(`/NL/collection?key=0fiuZFh4&format=json`)
        .expect(200);

      expect(response.headers).toHaveProperty(
        "content-type",
        "application/json; charset=utf-8"
      );

      expect(response.body.count).toBeGreaterThan(0);
      expect(response.body.artObjects).not.toBeNull();
    });

    /*
     *** Bug
     *** we should see a response in case of using a jsonp format
     */
    test("get Cultures NL with jsonp format", async () => {
      const response = await request(serviceUrl)
        .get(`/NL/collection?key=0fiuZFh4&format=jsonp`)
        .expect(200);

      expect(response.headers).toHaveProperty(
        "content-type",
        "text/javascript; charset=utf-8"
      );

      expect(response.body.artObjects).toBeUndefined();
    });

    /*
     *** Bug
     *** we should see a response in case of using a XML format
     */

    test("get Cultures NL with xml format", async () => {
      const response = await request(serviceUrl)
        .get(`/NL/collection?key=0fiuZFh4&format=xml`)
        .expect(200);

      expect(response.headers).toHaveProperty(
        "content-type",
        "application/xml; charset=utf-8"
      );

      expect(response.body.artObjects).toBeUndefined();
    });
    test("get Cultures NL with p=0", async () => {
      const response = await request(serviceUrl)
        .get(`/NL/collection?key=0fiuZFh4&p=0`)
        .expect(200);

      expect(response.headers).toHaveProperty(
        "content-type",
        "application/json; charset=utf-8"
      );
      
      expect(response.body.count).toBeGreaterThan(0);
      expect(response.body.artObjects).not.toBeNull();
    });
  });
});
