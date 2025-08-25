-- Create table for anonymous text submissions
CREATE TABLE public.anonymous_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.anonymous_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (anonymous submissions)
CREATE POLICY "Anyone can submit anonymously" 
ON public.anonymous_submissions 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Create policy to allow anyone to view submissions (public viewing)
CREATE POLICY "Anyone can view submissions" 
ON public.anonymous_submissions 
FOR SELECT 
TO anon
USING (true);