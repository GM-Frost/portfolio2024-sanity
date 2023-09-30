import { sanityClient } from "@/sanity";
import { About } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
*[_type=="about"]`;

type Data = {
  about: About[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const about: About[] = await sanityClient.fetch(query);
  res.status(200).json({ about });
}
