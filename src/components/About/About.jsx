import "./About.scss";

function About() {
  return (
    <div className="about__meta">
    <div className="about">
      <h2 className="about__header"> About Me</h2>
      <p className="about__text">
        {" "}
        Welcome! I'm Jonathan Sage, a dynamic professional and
        adventurer.
        </p>
        <p className="about__text">Following college, my love for languages and the human
        experience led me to years of global travel. During this time, I taught
        languages and made significant contributions to community development,
        from volunteering in remote villages to supporting local initiatives.
        </p>
        <p className="about__text">
        These experiences allowed me to immerse myself deeply in new cultures.
        It was during my time in Peru that I discovered a profound passion for
        climbing, which led to notable ascents in both the Peruvian Andes and
        Canadian Rockies.
      </p>
      <p className="about__text">
        Upon returning to Canada, I tackled operations
        management in prestigious equestrian venues such as <a  className="about__link" href="https://www.sprucemeadows.com/" target="_blank" rel="noopener noreferrer" >Spruce Meadows,</a> <a  className="about__link" href="https://tbird.ca/" target="_blank" rel="noopener noreferrer">Tbird </a>and  <a className="about__link" href="https://www.royalfair.org/royalhorseshow/" target="_blank" rel="noopener noreferrer">The Royals,</a>
        where I was able to deepen my leadership skills in high-pace environments, effectively managing teams, and coordinating complex operations under tight deadlines.
      </p>
      <p className="about__text">
        This blend of experiences naturally led me to focus on software
        engineering, where my enthusiasm for problem-solving and continuous
        learning continues to drive me.
      </p>
    </div>
    </div>
  );
}

export default About;
