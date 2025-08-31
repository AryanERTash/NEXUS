import FuzzyText from "../components/FuzzyText"; // adjust if needed
import heroVideo from "../assets/hero.mp4"; // adjust if needed


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover={true}
          color="#009e9a"
          fontSize="clamp(3rem, 15vw, 10rem)"
        >
          NEXUS
        </FuzzyText>
      </div>
    </section>
  );
};

export default Hero;
