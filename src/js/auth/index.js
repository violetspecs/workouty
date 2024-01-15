import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://motfvcumvqowyzfjstjq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vdGZ2Y3VtdnFvd3l6ZmpzdGpxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNDg5ODU4MiwiZXhwIjoyMDIwNDc0NTgyfQ.rT5PSgTz9Z2ZuwB-kg-dH2Os3VJh940j90RAEsks67E'
const supabase = createClient(supabaseUrl, supabaseKey)

async function signUpNewUser(email, password) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            emailRedirectTo: 'http://localhost:9000/'
        }
    })
}

async function signInWithEmail(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
}

async function signOut() {
    const { error } = await supabase.auth.signOut()
}
  

export { signUpNewUser, signInWithEmail, signOut }