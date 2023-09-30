import { createClient } from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-09-29",
  useCdn: process.env.NODE_ENV === "production",
};

//set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

//helper function
export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
