@@ .. @@
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight tracking-tighter">
              <div className="text-gradient mb-2">
                <TypingEffect 
                  text="AI THAT WORKS" 
                  delay={800}
                  speed={80}
                  onComplete={() => setTypingComplete(true)}
                />
              </div>
              <div className={`text-white font-bold tracking-tighter transition-all duration-800 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                WHILE YOU REST
              </div>
            </h1>