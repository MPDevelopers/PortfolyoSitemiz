/*
  # Create Contact Messages Table

  ## Overview
  Creates a table to store contact form submissions from the portfolio website.

  ## New Tables
    - `contact_messages`
      - `id` (uuid, primary key) - Unique identifier for each message
      - `name` (text) - Name of the person sending the message
      - `email` (text) - Email address of the sender
      - `message` (text) - The message content
      - `created_at` (timestamptz) - Timestamp when the message was submitted
      - `read` (boolean) - Flag to mark if the message has been read

  ## Security
    - Enable RLS on `contact_messages` table
    - Add policy to allow anyone to insert messages (public form submission)
    - Add policy to allow authenticated users to read messages (for admin access)

  ## Notes
    - The table stores all contact form submissions
    - Messages are marked as unread by default
    - Public can submit, but only authenticated users can view
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);