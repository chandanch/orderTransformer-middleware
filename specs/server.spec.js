const request = require('request');

const base_url = "http://localhost:9006/api/test"

describe("Node Server instantiate", () => {
  describe("GET /testApi", () => {
    it("should return status code 200", function() {
      request.get(base_url, function(error, response, body) {
          if (error) {
              console.log("Error");
          }
        expect(response.statusCode).toBe(200);
      });
    });

    it("should return Test Success", () => {
        request.get(base_url, function (error, response, body) {
            expect(body).toBe("Test Succes");
            done();
        });
    })

  });
});