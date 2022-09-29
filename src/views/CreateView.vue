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
        <v-btn @click="submitPost" color="success">Submit</v-btn>
      </v-container>
    </v-form>
  </div>
</template>
<script>
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
    submitPost() {
      const form = this.form;
      this.$store.dispatch("createPost", form);
    },
  },
};
</script>

