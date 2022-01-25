<template>
  <div class="container pt-5">
    <h3>Add a new post</h3>
    <hr>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Writer</label>
        <input v-model="post.author" type="text" class="form-control" placeholder="Writer name...">
      </div>
      <div class="form-group">
        <label>Title</label>
        <input v-model="post.title" type="text" class="form-control" placeholder="Title...">
      </div>
      <div class="form-group">
        <label>Link of Image</label>
        <input v-model="post.thumbnail" type="text" class="form-control" placeholder="Image of Writer...">
      </div>
      <div class="form-group">
        <label>Text</label>
        <input v-model="post.previewText" type="text" class="form-control"
               placeholder="Write something...">
      </div>
      <div class="form-group">
        <label>Text Content</label>
        <textarea v-model="post.content" cols="30" rows="5" class="form-control"></textarea>
      </div>
      <button @click="$router.push('/')" class="btn btn-danger">Cancel</button>
      <button type="submit" class="btn btn-info">Save</button>
    </form>
  </div>
</template>
<script>
  import axios from "axios";

  export default {
    data() {
      return {
        post: {
          author: "",
          content: "",
          previewText: "",
          thumbnail: "",
          title: "",
        }
      }
    },
    methods: {
      onSubmit() {
        axios.post("/posts.json", {...this.post, updatedDate: new Date()})
          .then(response => {
            console.log(response)
            this.post = {}
          })
          .catch(e => console.log(e));

      }
    }
  }
</script>
