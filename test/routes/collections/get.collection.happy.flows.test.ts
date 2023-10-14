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
import {
  webImageBody,
  principalMakersBodyEN,
  principalMakersBodyNL,
} from "../testSchema/collectionDetails.schema";
/*
 * Test Module
 */
let webImage = webImageBody();
let principalMakersBody_EN = principalMakersBodyEN();
let principalMakersBody_NL = principalMakersBodyNL();

describe("get Collections", () => {
  describe("get Collection details happy flows Tests", () => {
    test("get EN collection with a valid key", async () => {
      const response = await request(serviceUrl)
        .get(`/EN/collection/BK-AM-33-B?key=0fiuZFh4&format=json`)
        .expect(200);

      expect(response.headers).toHaveProperty(
        "content-type",
        "application/json; charset=utf-8"
      );

      expect(response.body.artObjects).not.toBeNull();
      expect(response.body.artObject.id).toEqual("en-BK-AM-33-B");
      expect(response.body.artObject.objectNumber).toEqual("BK-AM-33-B");
      expect(response.body.artObject.title).toEqual(
        "Ten weepers from the tomb of Isabella of Bourbon"
      );

      expect(response.body.artObject.webImage).toEqual(webImage);
      expect(response.body.artObject.principalMakers).toEqual(principalMakersBody_EN);
    });

    test("get NL collection with a valid key", async () => {
      const response = await request(serviceUrl)
        .get(`/NL/collection/BK-AM-33-B?key=0fiuZFh4&format=json`)
        .expect(200);

      expect(response.headers).toHaveProperty(
        "content-type",
        "application/json; charset=utf-8"
      );

      expect(response.body.artObjects).not.toBeNull();
      expect(response.body.artObject.id).toEqual("nl-BK-AM-33-B");
      expect(response.body.artObject.objectNumber).toEqual("BK-AM-33-B");
      expect(response.body.artObject.title).toEqual(
        "Tien pleurants van het praalgraf van Isabella van Bourbon"
      );
      expect(response.body.artObject.webImage).toEqual(webImage);
      expect(response.body.artObject.principalMakers).toEqual(principalMakersBody_NL);
    });
  });
});
