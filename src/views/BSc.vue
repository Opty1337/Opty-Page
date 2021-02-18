<template>
  <degree-table :degree-service="bScService" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DegreeTable from "@/components/DegreeTable/DegreeTable.vue";
import BScService from "@/services/Degree/BScService";

@Component({
  components: { DegreeTable },
})
export default class BSc extends Vue {
  readonly bScService = BScService.singleton;
}
</script>
