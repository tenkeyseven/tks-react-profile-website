import React from "react";
import { IconType } from "react-icons";
import loaderStyles from "/src/ColorLoader.module.css";
import {
  AiOutlineGithub,
  AiOutlineWeibo,
  AiOutlineInstagram,
} from "react-icons/ai";
import { RiBilibiliFill } from "react-icons/ri";
import useSWR from "swr";

// const About = () => {
// }
// export default About

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Stats({ apiUrl }: { apiUrl: string }) {
  const { data, error } = useSWR(apiUrl, fetcher);

  // return <div className={loaderStyles.loader}></div>;
  if (error) return <div>failed to load</div>;
  if (!data) return <div className={loaderStyles.loader}></div>;

  return <div>{data.count}</div>;
}

const socials = [
  {
    Logo: AiOutlineGithub, //传递一个 component 需要大写
    name: "Github",
    link: "https://github.com/tenkeyseven",
    apiUrl: "https://api.swo.moe/stats/github/tenkeyseven",
  },
  {
    Logo: AiOutlineWeibo, //传递一个 component 需要大写
    name: "Weibo",
    link: "https://weibo.com/tenkeyseven",
    apiUrl: "https://api.swo.moe/stats/weibo/2867502440",
  },
  {
    Logo: RiBilibiliFill, //传递一个 component 需要大写
    name: "Bilibii",
    link: "https://space.bilibili.com/93654417",
    apiUrl: "https://api.swo.moe/stats/bilibili/93654417",
  },
  {
    Logo: AiOutlineInstagram, //传递一个 component 需要大写
    name: "Instagram",
    link: "https://instagram.com/tenkeyseven98",
    apiUrl: "https://api.swo.moe/stats/instagram/tenkeyseven98",
  },
];

function Card({
  Logo,
  name,
  link,
  apiUrl,
}: {
  Logo: IconType;
  name: string;
  link: string;
  apiUrl: string;
}) {
  return (
    <a
      className="flex items-center p-4 m-4 shadow-lg group hover:shadow-xl duration-300"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Logo className="h-10 w-10 group-hover:rotate-180 duration-300" />
      <div className="flex flex-col items-center">
        <div className="pl-2 pr-2 text-xl font-bold">{name}</div>
        {/* <div>{link}</div> */}
        <Stats apiUrl={apiUrl} />
      </div>
    </a>
  );
}

export default function About() {
  return (
    <div className="grid grid-cols-2 ">
      {socials.map(({ Logo, name, link, apiUrl }) => (
        <Card key={name} Logo={Logo} name={name} link={link} apiUrl={apiUrl} />
      ))}
    </div>
  );
}
