import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import ProfileCard from "./ProfileCard";

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Meet Our</p>
          <h2 className={styles.sectionHeadText}>Council Members</h2>
        </motion.div>
      </div>

      {/* ✅ Profile Cards in 3 columns */}
      <div className={`-mt-20 pb-14 ${styles.paddingX} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7`}>
        <ProfileCard
          name="Ankit Ghosh"
          title="Software Engineer"
          handle="ankitghosh"
          status="Online"
          contactText="Contact Me"
          avatarUrl="src/assets/ankit_ghosh.jpg"
          showUserInfo={false}
          enableTilt={true}
          onContactClick={() => console.log("Contact clicked")}
        />
        <ProfileCard
          name="Samik"
          title="Software Engineer"
          handle="samikdev"
          status="Online"
          contactText="Contact Me"
          avatarUrl="src/assets/ankit_ghosh.jpg"
          showUserInfo={false}
          enableTilt={true}
          onContactClick={() => console.log("Contact clicked")}
        />
        <ProfileCard
          name="Tanishk Tiwari"
          title="Software Engineer"
          handle="tanishk"
          status="Online"
          contactText="Contact Me"
          avatarUrl="src/assets/ankit_ghosh.jpg"
          showUserInfo={false}
          enableTilt={true}
          onContactClick={() => console.log("Contact clicked")}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedback");
