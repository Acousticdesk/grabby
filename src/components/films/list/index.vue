<template>
    <div>
        <h2>Recently watched movies:</h2>
        <ul>
            <list-item id="tt4532826" title="Robin Hood" />
            <list-item id="tt1727824" title="Bohemian Rhapsody" />
            <list-item id="tt5093026" title="Papillon" />
        </ul>
    </div>
</template>

<script>
    import ListItem from './Item'

    export default {
      name: 'FilmsList',
      components: {
        'list-item': ListItem,
      }
    }
</script>

<style scoped>
    h2 {
        margin-top: 40px;
    }
    ul {
        list-style-type: none;
    }
</style>
