//TYPE DEFINITIONS

interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  role: string;
  heroImage: Image;
  backgroundInformation: string;
  profilePic: Image;
  email: string;
  address: string;
  socials: string[];
}

export interface ITopTech extends SanityBody {
  _type: "topTech";
  title: string;
  image: Image;
}

export interface ISkill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: string;
  title: string;
}

export interface Project extends SanityBody {
  title: string;
  _type: "project";
  image: Image;
  linkToBuild: string;
  linkToGit: string;
  summary: string;
  technologies: ISkill[];
  tags: string[];
}

export interface About extends SanityBody {
  aboutTitle: string;
  _type: "about";
  aboutImage: Image;
  description: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  responsibility: string[];
  technologies: ISkill[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
