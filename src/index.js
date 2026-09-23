import Resolver from "@forge/resolver";
import { kvs } from "@forge/kvs";

const resolver = new Resolver();

const defaultConfig = {
  title: "Quick Links",
  defaultColour: "#004254",
  links: []
};

resolver.define("getConfig", async () => {
  return (await kvs.get("portal-config")) || defaultConfig;
});

resolver.define("saveConfig", async ({ payload }) => {
  await kvs.set("portal-config", payload);
  return true;
});

export const handler = resolver.getDefinitions();