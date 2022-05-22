<template>
  <div>
    <div class="flex flex-row justify-center">
      <div class="flex flex-col items-center w-1/3">
        <div class="h-1/4">Story</div>
        <star-row :rating="3" class="h-1/4"/>
        <div class="h-1/4">Production</div>
        <star-row :rating="3" class="h-1/4"/>
      </div>
      <div class="w-1/3 text-6xl font-bold align-center">8.0</div>
      <div class="flex flex-col items-center w-1/3">
        <div class="h-1/4">Entertainment</div>
        <star-row :rating="3" class="h-1/4"/>
        <div class="h-1/4">Cinematography & Sound</div>
        <star-row :rating="3" class="h-1/4"/>
      </div>
    </div>
  </div>
</template>

<script>
import StarRow from "@/components/global/StarRow.vue";

export default {
  components: {
    StarRow,
  },
  data() {
    return {
      rating: {
        story: 5,
        production: 5,
        entertainment: 4,
        "cinematography & sound": 5,
      },
    };
  },
};
</script>
