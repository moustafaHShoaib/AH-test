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
  describe("get Collection images happy flows Tests", () => {
    test("get NL collection images with a valid key", async () => {
      const response = await request(serviceUrl)
        .get(`/nl/collection/SK-C-5/tiles?key=0fiuZFh4&z6`)
        .set("content-type", "application/JSON")
        .expect(200);


      let imageObject = JSON.parse(response.text);
      expect(response.text).toHaveLength(94306);
      expect(imageObject.levels[0].name).toContain('z3')
      expect(imageObject.levels[1].name).toContain('z4')
      expect(imageObject.levels[2].name).toContain('z0')
      expect(imageObject.levels[3].name).toContain('z1')
      expect(imageObject.levels[4].name).toContain('z2')
      expect(imageObject.levels[5].name).toContain('z5')
    });
  });
});
