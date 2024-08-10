import "./About.scss";

function About() {
  return (
    <div className="about__meta">
      <div className="about">
        <h2 className="about__header"> About Me</h2>
        <p className="about__text">
          Welcome! I'm Jonathan Sage, a seasoned professional with a diverse
          background in global travel, language instruction, and operations
          management.
        </p>
        <p className="about__text">
          My journey began with a passion for languages and cultural immersion,
          driving extensive travel and meaningful contributions to community
          development across the globe.
        </p>

        <p className="about__text">
          Back in Canada, I refined my leadership skills in operations
          management at top equestrian venues, including{" "}
          <a
            className="about__link"
            href="https://www.sprucemeadows.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spruce Meadows
          </a>
          ,{" "}
          <a
            className="about__link"
            href="https://tbird.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tbird
          </a>
          , and{" "}
          <a
            className="about__link"
            href="https://www.royalfair.org/royalhorseshow/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Royals
          </a>
          .
        </p>
        <p className="about__text">
          My diverse background has paved the way for a successful transition
          into software engineering, where I focus on problem-solving and
          crafting effective, user-centric solutions to real-world challenges.
        </p>
      </div>
    </div>
  );
}

export default About;
