import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ynpkstocwrzvamchynon.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlucGtzdG9jd3J6dmFtY2h5bm9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwNjUwNjUsImV4cCI6MjAzOTY0MTA2NX0.768X0aJPNM9fOYGGG3JQ_rLwvNPaUEfCBCxsE6v5WfU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
