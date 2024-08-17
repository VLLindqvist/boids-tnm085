import Fastify from "fastify";
import Static from "@fastify/static";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const fastify = Fastify({
  logger: true,
});

fastify.register(Static, {
  root: path.join(dirname(fileURLToPath(import.meta.url)), "static"),
});

// Run the server!
fastify.listen({ port: 9099 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
