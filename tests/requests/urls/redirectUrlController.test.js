const request = require("supertest");
const app = require("../../../server");
const { Url } = require("../../../models");

jest.mock("../../../models");

describe("#redirectUrlController", () => {
  it("redirect to original URL ", async () => {
    Url.findOne.mockResolvedValue({
      original_url: "https://www.google.com",
    });

    const response = await request(app).get("/abc123");

    expect(response.status).toBe(302);
    expect(response.headers.location).toBe("https://www.google.com");
  });

  it("Returns 404 if the url does not exist", async () => {
    Url.findOne.mockResolvedValue(null);

    const response = await request(app).get("/inexist");

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