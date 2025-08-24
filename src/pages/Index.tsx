const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* GIF Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/Pop%20Art%20GIF%20by%20Xinanimodelacra.gif")`,
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
            Welcome to Our Experience
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 drop-shadow-lg opacity-90">
            Immerse yourself in something extraordinary
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;