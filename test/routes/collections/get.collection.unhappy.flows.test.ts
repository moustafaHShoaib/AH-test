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


describe("get Collections", () => {
  describe("get Collection details unhappy flows Tests", () => {

    /*
    Bug 
    *** we should handle this case with a proper error message & error code 
    */
    test("get collection with non-existing collectionId", async () => {
      const response = await request(serviceUrl)
        .get(`/EN/collection/test?key=0fiuZFh4&format=json`)
        .expect(500);

        expect(response.body.count).toBeUndefined();
        expect(response.body.artObjects).not.toBeNull();
    });

    test("get collection with invalid Key", async () => {
        const response = await request(serviceUrl)
          .get(`/EN/collection/test?key=BK-AM-33-B&format=json`)
          .expect(401);
  
          expect(response.body.count).toBeUndefined();
          expect(response.body.artObjects).not.toBeNull();
      });
  });
});
