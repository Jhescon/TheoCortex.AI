/*
  # Disable RLS for consultation requests

  This migration disables Row Level Security for the consultation_requests table
  to allow anonymous users to submit consultation forms.

  ## Changes
  1. Disable RLS on consultation_requests table
  2. This allows public form submissions without authentication

  ## Security Note
  This is appropriate for public contact forms where we want to accept
  submissions from anonymous users.
*/

-- Disable RLS for the consultation_requests table
ALTER TABLE consultation_requests DISABLE ROW LEVEL SECURITY;