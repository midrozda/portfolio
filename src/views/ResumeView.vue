<script setup>
import ExperienceEntry from "../components/ExperienceEntry.vue";
</script>

<template>
  <div class="image">
    <span class="title">š Resume</span>
  </div>
  <div id="ResumeContent">
    <div id="resumeBar">
      <span class="resumeItem">Experience</span>
      <span class="resumeItem downloadResumeButton">Download resume</span>
    </div>
    <div class="experienceEntries">
      <ExperienceEntry
        job-title="UX/UI Designer @ Nokia"
        start-date="07.2020"
        end-date="present"
      >
        As a sole UX/UI Designer in the team:
        <ul>
          <li>
            Iām designing problem solutions from the conceptualization of ideas
            and business opportunities, up until validating them with the users
            and implementing the solution that addresses user needs, business
            goals, and tech capabilities
          </li>
          <li>
            I created a design system that is used for designing a new UI for
            the internal web-based app
          </li>
          <li>
            I am a part of the UI board that helps and advises other co-workers
            in UX/UI matters and is responsible for creating and managing a
            design system used throughout the company (2 apps audits, constantly
            contributing to the design system creation)
          </li>
          <li>
            I took part in 6 projects throughout the company as a lead (3) or
            supporting designer (3)
          </li>
        </ul>
      </ExperienceEntry>
      <ExperienceEntry
        job-title="Researcher + Copywriter (internship) @ Try Evidence"
        start-date="08.2020"
        end-date="11.2020"
      >
        As a part of the research team I was responsible for:
        <ul>
          <li>
            Researching video games-related topics, articles, and writing blog
            posts for project needs
          </li>
          <li>Designing a user research project</li>
        </ul>
      </ExperienceEntry>
      <ExperienceEntry
        job-title="UX/UI Designer (non-profit) @ CodersCrew"
        start-date="03.2020"
        end-date="03.2021"
      >
        As a part of the designersā team I was responsible for:
        <ul>
          <li>Creating user personas and taking part in user tests</li>
          <li>Co-creating the design system used in the app</li>
        </ul>
      </ExperienceEntry>
    </div>

    <div id="resumeBar">
      <span class="resumeItem">Skills</span>
    </div>
    <p>
      Software: Figma, Adobe Suite (Xd, AAE, Premiere, Illustrator in
      particular), Maze, WiX, Whimsical, Notion, Miro, Krita, Sony Vegas,
      DaVinci Resolve
    </p>
    <p style="margin-top: 26px">
      Languages: Polish (native), English (C1), German (B1), Mandarin (HSK2)
    </p>
    <div id="resumeBar">
      <span class="resumeItem">Education</span>
    </div>

    <ExperienceEntry
      job-title="Masterās degree in Psychology @ University of WrocÅaw"
      start-date="10.2016"
      end-date="09.2021"
      max-description-width=0
    >
    </ExperienceEntry>
    <div id="resumeBar">
      <span class="resumeItem">Interests</span>
    </div>
    <span class="baseText"
      >Iām interested in topics related to design, psychology, and tech but also
      in learning new languages</span
    >
  </div>
</template>

<style>
.image {
  background-image: url("@/assets/background.svg");
  width: 100vw;
  height: 208px;
  z-index: -1;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.experienceEntries {
  border-left: 1px solid #c4c4c4;
}
.title {
  padding: 12px;
  font-family: "Syne";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  background: white;
}
#ResumeContent {
  padding: 38px 40px 38px 40px;
  border: 3px solid #1b1b1b;
  top: -25px;
  position: relative;
  background: white;
}
#resumeBar {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  align-items: center;
  flex-wrap: wrap-reverse;
}
.resumeItem {
  font-family: "Syne";
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 28px;
  margin-top: 26px;
  margin-bottom: 26px;
  color: #170df2;
}

.downloadResumeButton {
  padding: 4px 16px;
  border: 2px solid #170df2;
  border-radius: 0 4px 0 4px;
}
.baseText {
  font-family: "Questrial";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
}
</style>
