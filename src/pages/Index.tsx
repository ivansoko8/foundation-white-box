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
      

      {/* Header with Lamin Yemal */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-40 flex items-center gap-4">
        <img
          src="/lovable-uploads/870abdb2-f0ed-47bd-aa45-871c41b58714.png"
          alt="Lamin Yemal"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
          style={{
            filter: 'drop-shadow(0 0 0 transparent)',
            mixBlendMode: 'multiply'
          }}
        />
        <h2 className="font-powerpoint text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-orange-white bg-clip-text text-transparent drop-shadow-lg">
          LAMIN YEMAL
        </h2>
      </div>


      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full bg-black/20">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            $YEMAL
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
            the oficil 100% true real coin of lamin yemal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;