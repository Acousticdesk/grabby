<template>
    <li>
        <router-link tag="a" v-bind:to="navigateTo">{{ title }}</router-link>
    </li>
</template>

<script>
    import { MOVIE_DETAILS_ROUTE } from '@/routes'

    export default {
      name: 'ListItem',
      props: ['id', 'title'],
      data() {
        return {
          navigateTo: `${MOVIE_DETAILS_ROUTE}/${this.id}`,
        }
      }
    }
</script>

<style></style>
