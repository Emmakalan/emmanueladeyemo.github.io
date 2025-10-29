import { motion } from 'motion/react';
import conferenceImage from 'figma:asset/3ef99ddf6c0e6755323e242e81744b55a1a753e3.png';
import panelImage from 'figma:asset/5e5ede5f2d03d6c76ac03430f325c1320cab30de.png';
import workingImage from 'figma:asset/84e827f8597f05e54359da26303f0334697e6dbb.png';
import networkingImage from 'figma:asset/892ec01a4ecc8b1135776db8aed3f008b015eea7.png';
import panelSpeakingImage from 'figma:asset/5929726802e06fee4b716bd456b032168946cd2b.png';
import presentingImage from 'figma:asset/13651b45b804173f7a797d610dd7734f06fa498d.png';

export function Gallery() {
  const images = [
    {
      src: conferenceImage,
      caption: 'Networking at Product Calgary with Dan Olsen',
    },
    {
      src: panelImage,
      caption: 'Panel Discussion: Technical vs Non-Technical PM',
    },
    {
      src: workingImage,
      caption: 'Working on Product Strategy',
    },
    {
      src: networkingImage,
      caption: 'Engaging with Attendees at Conference',
    },
    {
      src: panelSpeakingImage,
      caption: 'Speaking on Technical vs Non-Technical PM Panel',
    },
    {
      src: presentingImage,
      caption: 'Presenting at Product Workshop',
    },
  ];

  return (
    <section className="py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl text-white mb-4"
          >
            In Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Moments from conferences, workshops, and day-to-day work
          </motion.p>
        </div>

        {/* Auto-Scrolling Gallery */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B1220] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B1220] to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Container */}
          <motion.div
            className="flex gap-6 pb-6"
            animate={{
              x: [0, -((images.length * 456))], // 456px = 400px width + 56px gap (6 * 4px * 2.33)
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* First set of images */}
            {images.map((image, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-[320px] md:w-[400px] group"
              >
                <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#6B8CFF]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {images.map((image, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-[320px] md:w-[400px] group"
              >
                <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#6B8CFF]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {/* Third set for extra smoothness */}
            {images.map((image, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 w-[320px] md:w-[400px] group"
              >
                <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#6B8CFF]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
