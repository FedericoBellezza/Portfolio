import { motion } from "framer-motion";
import InfiniteScrollCarouselBack from "../components/InfiniteScrollCarouselBack";
import InfiniteScrollCarouselFront from "../components/InfiniteScrollCarouselFront";

export default function HomePageBottom() {
  return (
    <>
      {/* Tools */}
      <div className="w-full mx-auto  xl:block px-5">
        <h2 className="text-4xl lg:text-7xl font-extrabold mt-20 animate-appear">
          Tecnologie
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl mt-5 italic">Frontend:</h3>
          <InfiniteScrollCarouselFront />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl mt-5 italic">Backend:</h3>
          <InfiniteScrollCarouselBack />
        </motion.div>
      </div>
    </>
  );
}
