<template>
  <q-page>
    <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" v-for="workout in workoutList" :key="workout.id">
      <img :src="workout.image_url">
      <q-card-section>
        <div class="text-h6">{{ workout.name }}</div>
        <div class="text-subtitle2">{{ workout.reps }}</div>
      </q-card-section>
    </q-card>
  </div>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Workout name"
      />

      <q-input
        filled
        type="number"
        v-model="reps"
        label="Reps"
      />

      <q-file
        style="max-width: 300px"
        v-model="filesImage"
        filled
        label="Select image"
        accept=".jpg, image/*"
        @rejected="onRejected"
      />


      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

    <q-btn @click="getWorkouts" label="Get"></q-btn>

  </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { addWorkout, updateWorkout, getWorkout } from '../js/db'

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      name: '',
      reps: '',
      filesImage: '',
      workoutList: []
    }
  },
  methods: {
    onSubmit() {
      console.log("Submitting....")
      console.log(this.filesImage)
      addWorkout(this.name, this.reps, this.filesImage)
      updateWorkout()
    },
    onReset() {
      this.name = ''
      this.reps = ''
      this.filesImage = ''
    },
    getWorkouts() {
      getWorkout().then((result) => {
        this.workoutList = result
        console.log(result)
      })
    }
  }

})
</script>
