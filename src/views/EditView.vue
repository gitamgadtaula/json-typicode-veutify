<template>
  <div class="create">
    <v-form>
      <v-container>
        <v-text-field
          v-model="form.title"
          label="Title"
          required
        ></v-text-field>
        <v-text-field v-model="form.body" label="Body" required></v-text-field>
        <v-btn @click="updatePost" color="success">Update</v-btn>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      form: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    updatePost() {
      const form = this.form;
      this.$store.dispatch("updatePost", {
        id: this.$route.params.id,
        payload: form,
      });
    },
  },
  computed: {
    ...mapState(["activePost"]),
  },
  watch: {
    activePost(newVal) {
      this.form.title = newVal.title;
      this.form.body = newVal.body;
    },
  },
  created() {
    this.$store.dispatch("getPostById", this.$route.params.id);
  },
};
</script>
  
  