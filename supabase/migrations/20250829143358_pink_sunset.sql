/*
  # Fix RLS Policy for Consultation Requests

  1. Security Updates
    - Drop existing policies if they exist
    - Create proper INSERT policy for anonymous users (anon role)
    - Create proper SELECT and UPDATE policies for authenticated users
    - Ensure the table has RLS enabled

  This migration fixes the "new row violates row-level security policy" error
  by properly configuring the RLS policies for the consultation_requests table.
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public to submit consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Allow authenticated users to read consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Allow authenticated users to update consultation requests" ON consultation_requests;

-- Ensure RLS is enabled
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert consultation requests
CREATE POLICY "Allow anon to insert consultation requests"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all consultation requests
CREATE POLICY "Allow authenticated to read consultation requests"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update consultation requests
CREATE POLICY "Allow authenticated to update consultation requests"
  ON consultation_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);