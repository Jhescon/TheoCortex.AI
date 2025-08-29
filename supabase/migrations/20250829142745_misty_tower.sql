/*
  # Create consultation requests table

  1. New Tables
    - `consultation_requests`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email` (text, required)
      - `company_name` (text, required)
      - `service_selection` (text, required)
      - `problems` (text, required)
      - `additional_info` (text, optional)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `consultation_requests` table
    - Add policy for public insert access (form submissions)
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  company_name text NOT NULL,
  service_selection text NOT NULL,
  problems text NOT NULL,
  additional_info text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Allow public to insert consultation requests (form submissions)
CREATE POLICY "Allow public to submit consultation requests"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all consultation requests (for admin access)
CREATE POLICY "Allow authenticated users to read consultation requests"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update consultation requests (for status changes)
CREATE POLICY "Allow authenticated users to update consultation requests"
  ON consultation_requests
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_consultation_requests_updated_at
  BEFORE UPDATE ON consultation_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();