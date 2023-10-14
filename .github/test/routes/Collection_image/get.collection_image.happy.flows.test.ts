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

beforeAll(async (): Promise<void> => {});

describe("get Collections", () => {
  describe("get Collection images happy flows Tests", () => {
    test("get NL collection images with a valid key", async () => {
      const response = await request(serviceUrl)
        .get(`/nl/collection/SK-C-5/tiles?key=0fiuZFh4&z6`)
        .set("content-type", "application/JSON")
        .expect(200);

      expect(response.text).toHaveLength(94306);
    });
  });
});
