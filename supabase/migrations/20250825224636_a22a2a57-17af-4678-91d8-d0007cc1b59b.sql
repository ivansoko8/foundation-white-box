-- Remove the overly permissive policy that allows anyone to view submissions
DROP POLICY IF EXISTS "Anyone can view submissions" ON public.anonymous_submissions;

-- Create a more secure policy that only allows authenticated users with admin role to view submissions
-- For now, we'll restrict to authenticated users only, but this should be further restricted to admin users
CREATE POLICY "Only authenticated users can view submissions" 
ON public.anonymous_submissions 
FOR SELECT 
TO authenticated
USING (true);

-- Add a comment to remind about implementing proper admin role checking
COMMENT ON POLICY "Only authenticated users can view submissions" ON public.anonymous_submissions 
IS 'This policy restricts viewing of anonymous submissions to authenticated users only. Consider implementing admin role checking for better security.';