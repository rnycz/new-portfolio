import { Route, Routes, useLocation } from "react-router-dom";
import AboutMePage from "../../pages/AboutMePage";
import ContactPage from "../../pages/ContactPage";
import MainPage from "../../pages/MainPage";
import SkillsPage from "../../pages/SkillsPage";
import WorkPage from "../../pages/WorkPage";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

type TransitionSettings = {
  initial: {
    opacity: number;
  };
  animate: {
    opacity: number;
  };
  exit: {
    opacity: number;
  };
  transition: {
    duration: number;
  };
};

type Location = {
  pathname: string;
  key: string;
};

const AnimatedSwitch: React.FC = () => {
  const { pathname, key }: Location = useLocation();
  const transitionSettings: TransitionSettings = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
    transition: { duration: 0.2 },
  };
  return (
    <AnimatePresence mode="wait">
      <Routes location={pathname} key={key}>
        <Route
          path="/"
          element={
            <motion.div {...transitionSettings}>
              <MainPage />
            </motion.div>
          }
        />
        <Route
          path="/about-me"
          element={
            <motion.div {...transitionSettings}>
              <AboutMePage />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div {...transitionSettings}>
              <ContactPage />
            </motion.div>
          }
        />
        <Route
          path="/work"
          element={
            <motion.div {...transitionSettings}>
              <WorkPage />
            </motion.div>
          }
        />
        <Route
          path="/skills"
          element={
            <motion.div {...transitionSettings}>
              <SkillsPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
export default AnimatedSwitch;
