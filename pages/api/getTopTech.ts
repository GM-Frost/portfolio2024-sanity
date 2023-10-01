import { sanityClient } from "@/sanity";
import { ITopTech } from "@/typings";

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
*[_type=="topTech"]`;

type Data = {
  topTechs: ITopTech[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const topTechs: ITopTech[] = await sanityClient.fetch(query);
  res.status(200).json({ topTechs });
}
