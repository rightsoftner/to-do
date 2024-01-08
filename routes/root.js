"use strict";
import path from "path";
import { readFile } from "fs/promises";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

export default async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    try {
      // Read HTML content from a file
      const htmlFilePath = path.join(__dirname, "../views/index.html");
      const htmlContent = await readFile(htmlFilePath, "utf-8");

      // Send HTML response
      reply.type("text/html").send(htmlContent);
    } catch (err) {
      console.error("Error reading HTML file:", err);
      reply.status(500).send("Internal Server Error");
    }
  });
}
