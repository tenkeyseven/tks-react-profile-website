// const About = () => {

// }
// export default About

const socials = [
  { logo: "logo_github", name: "xxx", link: "xxx", apiUrl: "xxx" },
  { logo: "logo_weibo", name: "xxx", link: "xxx", apiUrl: "xxx" },
  { logo: "logo_bilibili", name: "xxx", link: "xxx", apiUrl: "xxx" },
  { logo: "logo_ins", name: "xxx", link: "xxx", apiUrl: "xxx" },
];

function Card({
  logo,
  name,
  link,
  apiUrl,
}: {
  logo: string;
  name: string;
  link: string;
  apiUrl: string;
}) {
  return (
    <div>
      Card
      <div>{logo}</div>
      <div>{name}</div>
      <div>{link}</div>
      <div>{apiUrl}</div>
    </div>
  );
}

export default function About() {
  return (
    <div>
      {socials.map(({ logo, name, link, apiUrl }) => (
        <Card key={logo} logo={logo} name={name} link={link} apiUrl={apiUrl} />
      ))}
    </div>
  );
}
