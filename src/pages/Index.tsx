import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Index = () => {
  const [submission, setSubmission] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!submission.trim()) {
      toast.error('Please enter some text before submitting');
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('anonymous_submissions')
        .insert({ content: submission.trim() });

      if (error) throw error;

      toast.success('Submitted anonymously! 🥸');
      setSubmission('');
    } catch (error) {
      console.error('Error submitting:', error);
      toast.error('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-h-full min-w-full transform -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/ZJSiz0nz9U4?autoplay=1&mute=1&loop=1&playlist=ZJSiz0nz9U4&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      

      {/* Header with Lamin Yemal */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-40 flex items-center gap-4">
        <img
          src="/lovable-uploads/870abdb2-f0ed-47bd-aa45-871c41b58714.png"
          alt="Lamin Yemal"
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
          style={{
            filter: 'drop-shadow(0 0 0 transparent)',
            mixBlendMode: 'multiply'
          }}
        />
        <h2 className="font-powerpoint text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-orange-white bg-clip-text text-transparent drop-shadow-lg">
          LAMIN YEMAL
        </h2>
      </div>

      {/* GIF Overlays - Four Corners from Supabase Storage */}
      {/* Top Left */}
      <div className="absolute top-4 left-4 z-30">
        <img
          src="https://uangwxyjepawtsfeyugo.supabase.co/storage/v1/object/public/media/Dance%20Barcelona%20GIF%20by%20Wahala%20Room.gif"
          alt="Dance Barcelona Animation"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Top Right */}
      <div className="absolute top-4 right-4 z-30">
        <img
          src="https://uangwxyjepawtsfeyugo.supabase.co/storage/v1/object/public/media/Happy%20Spanish%20GIF%20by%20TRT.gif"
          alt="Happy Spanish Animation"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-4 left-4 z-30">
        <img
          src="https://uangwxyjepawtsfeyugo.supabase.co/storage/v1/object/public/media/France%20Art%20GIF%20by%20Xinanimodelacra.gif"
          alt="France Art Animation"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-4 right-4 z-30">
        <img
          src="https://uangwxyjepawtsfeyugo.supabase.co/storage/v1/object/public/media/Happy%20Pop%20Art%20GIF%20by%20Xinanimodelacra.gif"
          alt="Happy Pop Art Animation"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-lg shadow-lg animate-spin-slow"
        />
      </div>

       {/* Content Overlay */}
       <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/20">
         <div className="text-center text-white px-4 mb-8">
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
             $YEMAL
           </h1>
           <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
             the oficil 100% true real coin of lamin yemal
           </p>
         </div>
       </div>

       {/* Anonymous Submission Form - Centered and bottom-aligned with GIFs */}
       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40">
         <div className="bg-white/95 backdrop-blur-sm rounded-xl border-2 border-red-500 p-4 shadow-lg w-96">
           <textarea
             value={submission}
             onChange={(e) => setSubmission(e.target.value)}
             placeholder="Share your thoughts anonymously..."
             className="w-full h-28 p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800 placeholder-gray-500"
             disabled={isSubmitting}
           />
           <button
             onClick={handleSubmit}
             disabled={isSubmitting || !submission.trim()}
             className="w-full mt-3 rainbow-mlg hover:shadow-lg hover:shadow-purple-500/40 disabled:bg-gray-400 disabled:hover:shadow-none text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 hover:scale-[1.02] text-shadow-lg relative z-10"
             style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
           >
             <span className="relative z-10 drop-shadow-lg">
               {isSubmitting ? 'Sending...' : 'Send anonymously 🥸🤫'}
             </span>
           </button>
         </div>
       </div>
    </div>
  );
};

export default Index;