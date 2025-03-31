const request = require("supertest");
const app = require("../../../server");
const { Url } = require("../../../models");

jest.mock("../../../models");

describe("#unshortenUrlController", () => {
  const mockUrl = {
    short_url: "abc123",
    original_url: "https://www.google.com",
  };

  it("should return the original URL when a valid short URL is provided", async () => {
    Url.findOne.mockResolvedValue(mockUrl);

    const response = await request(app)
      .post("/unshorten")
      .send({ short_url: mockUrl.short_url })

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("original_url", mockUrl.original_url);
  });

  it("Returns 400 if short_url is null", async () => {
    const response = await request(app).post("/unshorten").send({});

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("short_url is required");
  });

  it("Returns 404 if the url does not exist", async () => {
    Url.findOne.mockResolvedValue(null);

    const response = await request(app).get("/unshorten");

    expect(response.status).toBe(404);
    expect(response.body.error).toBe("Shortened URL not found");
  });


  it("should return error 500 in case of internal failure", async () => {
    Url.findOne.mockRejectedValue(new Error("Database error")); // Simulando erro no banco

    const response = await request(app).get("/error");

    expect(response.status).toBe(500);
    expect(response.body.error).toBe("Internal server error");
  });
});