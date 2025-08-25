-- Create media bucket for GIFs and other media files
INSERT INTO storage.buckets (id, name, public) VALUES ('media', 'media', true);

-- Create policy to allow public access to media files
CREATE POLICY "Media files are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'media');

-- Create policy to allow authenticated users to upload media files
CREATE POLICY "Authenticated users can upload media files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'media' AND auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update their own media files
CREATE POLICY "Users can update media files" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'media' AND auth.role() = 'authenticated');

-- Create policy to allow authenticated users to delete media files
CREATE POLICY "Users can delete media files" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'media' AND auth.role() = 'authenticated');