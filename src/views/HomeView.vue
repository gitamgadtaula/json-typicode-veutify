<template>
  <div class="home">
    <v-data-table
      :headers="headers"
      :items="posts"
      :items-per-page="5"
      class="elevation-1"
      :loading="loading"
      loading-text="Loading... Please wait"
    >
      <template v-slot:[`item.title`]="{ item }">
        <span @click="$router.push('/post/' + item.id)">
          {{ item.title }}
        </span>
      </template>
      <template v-slot:[`item.body`]="{ item }">
        <span @click="$router.push('/post/' + item.id)">
          {{ item.body }}
        </span>
      </template>

      <template v-slot:[`item.id`]="{ item }">
        <div class="d-flex d-row">
          <v-btn
            small
            class="mx-2"
            fab
            color="cyan"
            @click="$router.push('/post/' + item.id)"
          >
            <v-icon dark> mdi-pencil </v-icon>
          </v-btn>
          <v-btn
            small
            fab
            class="mx-2"
            color="red"
            @click="deletePost(item.id)"
          >
            <v-icon dark> mdi-delete </v-icon>
          </v-btn>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      headers: [
        {
          text: "Title",
          value: "title",
          align: "start",
        },
        {
          text: "Body",
          value: "body",
          align: "start",
        },
        { text: "Action", value: "id" },
      ],
    };
  },
  computed: {
    ...mapState(["posts", "loading"]),
  },
  methods: {
    deletePost(id) {
      this.$store.dispatch("deletePost", id);
    },
  },
};
</script>
