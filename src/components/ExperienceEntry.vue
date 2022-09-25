<template>
  <div class="experienceEntries">
    <div class="left">
      <div class="jobTitle">{{ jobTitle }}</div>
      <div class="jobTime">{{ startDate }} - {{ endDate }}</div>
    </div>
    <div class="right">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["jobTitle", "startDate", "endDate", "maxDescriptionWidth"],
};
</script>

<style scoped>
.experienceEntries {
  flex-flow: column wrap;
  display: flex;
  flex-direction: row;
  justify-content: left;
}
.left {
  margin-left: 16px;
  align-items: flex-start;
  width: 220px;
}
.right {
  padding-left: 72px;
  width: 482px;
  font-family: "Questrial";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
}

.jobTime {
  font-family: "Questrial";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
}

.jobTime {
  font-family: "Questrial";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #616161;
}
</style>
