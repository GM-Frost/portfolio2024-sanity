import { About } from "@/typings";

export const fetchAboutInfo = async () => {
  //calling out the backend
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAboutInfo`
  );
  const data = await res.json();
  const aboutInfo: About[] = data.about;
  return aboutInfo;
};
