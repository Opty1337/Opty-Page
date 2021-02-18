<template>
  <degree-table :degree-service="mScService" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DegreeTable from "@/components/DegreeTable/DegreeTable.vue";
import MScService from "@/services/Degree/MScService";

@Component({
  components: { DegreeTable },
})
export default class BSc extends Vue {
  readonly mScService = MScService.singleton;
}
</script>
