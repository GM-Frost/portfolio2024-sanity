import { sanityClient } from "@/sanity";
import { ISkill } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
*[_type=="skill"]`;

type Data = {
  skills: ISkill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: ISkill[] = await sanityClient.fetch(query);
  res.status(200).json({ skills });
}
