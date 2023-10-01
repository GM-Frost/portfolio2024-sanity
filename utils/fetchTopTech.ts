import { ITopTech } from "@/typings";

export const fetchTopTech = async () => {
  //calling out the backend
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTopTech`);
  const data = await res.json();
  const topTechs: ITopTech[] = data.topTechs;

  return topTechs;
};
