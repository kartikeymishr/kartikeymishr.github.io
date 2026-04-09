import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID;
const dataset = "production";
const apiVersion = "2022-10-24";

export const client = sanityClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export const writeClient = sanityClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
