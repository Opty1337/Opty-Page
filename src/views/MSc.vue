<template>
  <degree-table />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DegreeTable from "@/components/DegreeTable/DegreeTable.vue";

@Component({
  components: { DegreeTable },
})
export default class BSc extends Vue {
  created() {
    this.$store.commit("inMSc");
  }
}
</script>
