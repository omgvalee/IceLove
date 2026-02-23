const SUPABASE_URL = "https://fncsqjbfxvdjuckxfujr.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuY3NxamJmeHZkanVja3hmdWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4NzUxMDksImV4cCI6MjA4NzQ1MTEwOX0.sa9TeSgvfXeRmezbM663zngUc35v_Q1wt9_KorI0ya8";

// Crear cliente de Supabase
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);