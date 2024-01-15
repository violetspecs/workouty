import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://motfvcumvqowyzfjstjq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vdGZ2Y3VtdnFvd3l6ZmpzdGpxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNDg5ODU4MiwiZXhwIjoyMDIwNDc0NTgyfQ.rT5PSgTz9Z2ZuwB-kg-dH2Os3VJh940j90RAEsks67E'
const supabase = createClient(supabaseUrl, supabaseKey)

async function addWorkout(name, reps, image) {
    const { error } = await supabase
    .from('workouts')
    .insert({ name: name, reps: reps, image_url: image.name })
    if (!error) {
        uploadFile(image)
    }
}

async function getWorkout() {
    const { data, error } = await supabase
    .from('workouts')
    .select()
    return data.map((workout) => {
        let result = supabase.storage.from('images').getPublicUrl(workout.image_url)
        console.log(result.data.publicUrl)
        workout.image_url = result.data.publicUrl
        return workout
    })
}

function updateWorkout() {
    console.log("Updating workout")
}

async function uploadFile(file) {
    const { data, error } = await supabase.storage.from('images').upload(file.name, file)
    if (error) {
        console.log("Upload failed")
        console.log(error)
    } else {
        console.log("Upload success")
    }
}

export { addWorkout, updateWorkout, getWorkout }