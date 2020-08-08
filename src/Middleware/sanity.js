import sanity from "@sanity/client";

const client = sanity({
  projectId: 'r8h1uflq',
  dataset: 'production',
  useCdn: true
})

export default {
  client
}