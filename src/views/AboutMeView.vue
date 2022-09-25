<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="image"></div>
  <div id="aboutMeContent">

    <div id="figures">
      <div id="leftFigure"></div>
      <div id="rightFigure">
        <div id="logo">🐤</div>
        <div id="myName">Michalina Drozda</div>
        <div id="horizontalLine"></div>
        <div id="position">UX UI designer</div>
      </div>
    </div>
    <div id="about">
      <div style="margin-left: 50px">
        <div id="hello">Hello</div>
        <div id="me">Here is who I'm & what I do</div>
        <div style="margin-top: 20px;">
          <RouterLink class="buttons" to="/resume">Resume</RouterLink>
          <RouterLink style="margin-left: 24px;" class="buttons" to="/projects">Projects</RouterLink>
        </div>
        <div id="summary">
          <p>
            I'm a UX/UI Designer with background in psychology studies. I'm
            easy-going and passionate about what I do. If you want to get to know
            me more see my resume, portfolio or just send me an e-mail!
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="image" style="
  position: relative; top: -25px; z-index: -1; margin-bottom: 0;"></div>
</template>

<style>
.image {
  background-image: url("@/assets/background.svg");
  width: 100vw;
  margin-left: calc(50% - 50vw);
  height: 208px;
  position: relative;
}

#aboutMeContent {
  flex-flow: column wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#figures {
  order: 1;
  width: 331px;
  height: 400px;
}
#leftFigure,
#rightFigure {
  width: 294px;
  height: 394px;
  border-radius: 0 30px 0 30px;
}

#leftFigure {
  position: absolute;
  background: #170df2;
  border: 6px solid #fffafa;
}

#rightFigure {
  position: relative;
  top: -25px;
  left: 25px;
  background: #fffafa;
  border: 3px solid #1b1b1b;
  display: flex;
  align-items: center;
  flex-direction: column;
}

#logo {
  margin-top: 86px;
  width: 64px;
  height: 64px;
  font-family: "Syne";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #1b1b1b;
}

#myName {
  margin-top: 36px;
  width: 131px;
  height: 58px;
  font-family: "Syne";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #1b1b1b;
}

#horizontalLine {
  margin-top: 24px;
  width: 79px;
  height: 0;
  border: 2px solid #170df2;
}

#position {
  margin-top: 24px;
  width: 145px;
  height: 21px;
  font-family: "Questrial";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: #1b1b1b;
}

#about {
  order: 2;
}

#hello {
  margin-top: 24px;
  font-family: "Syne";
  font-style: normal;
  font-weight: 600;
  font-size: 100px;
  line-height: 120px;
}
#me {
  font-family: "Syne";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
}

#summary {
  font-family: "Questrial";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  margin-top: 24px;
  margin-bottom: 65px;
  max-width: 387px;
}
.buttons {
  font-family: 'Syne';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #170DF2;
  border: 2px solid #170DF2;
  border-radius: 4px 0 4px 0;
  width: 108px;
  height: 30px;
  padding: 2px 14px 2px 14px;
}
</style>
