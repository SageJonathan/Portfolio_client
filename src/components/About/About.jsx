import "./About.scss";

function About() {
  return (
    <div className="about">
      <h2 className="about__header"> About Me</h2>
      <p className="about__text">
        {" "}
        Welcome! I'm Jonathan Sage, a dynamic professional and adventurer. My
        global travels have involved teaching languages and making significant
        contributions to community development, from volunteering in remote
        villages to supporting local initiatives. These experiences allowed me
        to immerse myself deeply in new cultures and languages.
      </p>
      <p className="about__text">
        It was during my time in Peru that I discovered a profound passion for
        climbing, which led to notable ascents in both the Peruvian Andes and
        Canadian Rockies. Upon returning to Canada, I tackled operations
        management in prestigious equestrian venues, applying my skills to new
        challenges.
      </p>
      <p className="about__text">
        This blend of experiences naturally led me to focus on software
        engineering, where my enthusiasm for problem-solving and continuous
        learning continues to drive me.
      </p>
    </div>
  );
}

export default About;
