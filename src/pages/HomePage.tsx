@@ .. @@
            <h1 className="font-montserrat font-bold text-2xl md:text-3xl lg:text-4xl mb-2 leading-tight tracking-tighter">
              <div className="text-gradient mb-2">
                <TypingEffect 
                  text="AI THAT WORKS" 
                  delay={800}
                  speed={80}
                  onComplete={() => setTypingComplete(true)}
                />
              </div>
              <div className={`text-white font-bold tracking-tighter text-2xl md:text-3xl lg:text-4xl transition-all duration-800 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                WHILE YOU REST
              </div>
            </h1>