const { createClient } = require("@supabase/supabase-js");

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://efginsoxufbscutujzls.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmZ2luc294dWZic2N1dHVqemxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyNjkxNzgsImV4cCI6MjAzNTg0NTE3OH0.93HiQY5fVYhUDkcleDzQeYXfzkCWmysIknIlEyi0ccE"
);

module.exports = supabase;
