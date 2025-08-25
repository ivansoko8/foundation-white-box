const Index = () => {
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
      

      {/* GIF Overlays - Four Corners */}
      {/* Top Left */}
      <div className="absolute top-4 left-4 z-30">
        <img
          src="/Dance Barcelona GIF by Wahala Room.gif"
          alt="Dance Barcelona Animation"
          className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Top Right */}
      <div className="absolute top-4 right-4 z-30">
        <img
          src="/Happy Spanish GIF by TRT.gif"
          alt="Happy Spanish Animation"
          className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-4 left-4 z-30">
        <img
          src="/France Art GIF by Xinanimodelacra.gif"
          alt="France Art Animation"
          className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-4 right-4 z-30">
        <img
          src="/Happy Pop Art GIF by Xinanimodelacra.gif"
          alt="Happy Pop Art Animation"
          className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full bg-black/20">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Your Hero Title
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
            Your compelling subtitle or description goes here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;