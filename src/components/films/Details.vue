<template>
    <div>
        <h2>{{ getTitle() }}</h2>
        <img v-bind:src="poster" alt="">
        <p>{{ getPlot() }}</p>
    </div>
</template>

<script>
  import { getInfo, getPoster } from '@/api/movies/single'

  export default {
    name: 'RouteTesting',
    data() {
      return {
        id: this.$route.params.id,
        poster: null,
        info: null,
      }
    },
    beforeMount() {
        getInfo(this.id)
          .then(res => res.json())
          .then(info => this.info = info)

        getPoster(this.id)
          .then(res => res.blob())
          .then(blob => this.poster = URL.createObjectURL(blob))
    },
    methods: {
      getPlot() {
        return this.info ? this.info.Plot : 'Loading...'
      },
      getTitle() {
        return this.info ? this.info.Title : 'Loading...'
      },
    },
  }
</script>

<style scoped>

</style>
