<script setup>
import ExperienceEntry from "../components/ExperienceEntry.vue";
import TabThemeExtended from "../components/TabThemeExtended.vue";
</script>

<template>
  <TabThemeExtended icon="📃" title="Resume">
    <div class="resumeBar">
      <span class="resumeItem" style="margin-top: 0;">Experience</span>
      <span class="downloadResumeButton">Download resume</span>
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
            I’m designing problem solutions from the conceptualization of ideas
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
        As a part of the designers’ team I was responsible for:
        <ul>
          <li>Creating user personas and taking part in user tests</li>
          <li>Co-creating the design system used in the app</li>
        </ul>
      </ExperienceEntry>
    </div>

    <div class="resumeBar">
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
    <div class="resumeBar">
      <span class="resumeItem">Education</span>
    </div>

    <ExperienceEntry
      job-title="Master’s degree in Psychology @ University of Wrocław"
      start-date="10.2016"
      end-date="09.2021"
      max-description-width=0
    >
    </ExperienceEntry>
    <div class="resumeBar">
      <span class="resumeItem">Interests</span>
    </div>
    <span class="baseText"
      >I’m interested in topics related to design, psychology, and tech but also
      in learning new languages</span
    >
  </TabThemeExtended>
</template>

<style>
div {
  font-family: "Questrial";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
}
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
.resumeBar {
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
  font-family: "Syne";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  padding: 4px 16px;
  border: 2px solid #170df2;
  color: #170df2;
  border-radius: 0 4px 0 4px;
  text-align: center;
}
.baseText {
}
</style>
