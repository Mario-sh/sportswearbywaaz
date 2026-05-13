export default function Story() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
        
        {/* Left Image */}
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop" 
            alt="Our Story" 
            className="w-full h-[400px] md:h-[500px] object-cover grayscale"
          />
          {/* Grey offset background box */}
          <div className="absolute -left-6 -bottom-6 w-full h-full bg-gray-200 -z-10 hidden md:block"></div>
        </div>

        {/* Right Content */}
        <div className="space-y-12 pb-8">
          <h2 className="text-5xl md:text-7xl font-extended font-bold text-brand-dark">OUR<br/>STORY</h2>
          
          <div className="space-y-6 text-sm text-brand-dark/70 max-w-md leading-relaxed">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>

          <div className="flex items-center gap-12 pt-8">
            {/* Logo Mark */}
            <svg width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-dark">
              <path d="M4 16L16 4L28 16L16 28L4 16Z" fill="currentColor" />
              <path d="M8 16L16 8L24 16L16 24L8 16Z" fill="white" />
            </svg>

            {/* Stats Card */}
            <div className="bg-[#EAEAEA] p-6 w-48 text-brand-dark">
              <span className="text-4xl font-display font-medium block mb-1">+100</span>
              <p className="text-xs text-brand-dark/60">stores around the world</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
