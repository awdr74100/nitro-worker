import nitroCloudflareBindings from "nitro-cloudflare-dev";

export default defineNitroConfig({
  modules: [nitroCloudflareBindings],
  preset: "cloudflare-module",
});
