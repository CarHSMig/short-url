const request = require("supertest");
const app = require("../../../server");
const { Url } = require("../../../models");

jest.mock("../../../models");

describe("#shortenUrlController", () => {
  it("create short url", async () => {
    Url.create.mockResolvedValue({
      short_url: "abc123",
      original_url: "https://www.google.com",
    });

    const response = await request(app)
      .post("/shorten")
      .send({ original_url: "https://www.google.com" });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("short_url");
  });

  it("return 400 if invalid url", async () => {
    const response = await request(app).post("/shorten").send({});

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("originalUrl is required");
  });
});