import { motion } from "framer-motion";
import PropTypes from "prop-types";
const AnimatedButton = ({ label, handleClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="px-6 py-3 m-2 text-white bg-blue-500 rounded-full shadow-md w-font-semibold m hover:bg-blue-700 w-[200px]"
      onClick={handleClick}>
      {label}
    </motion.button>
  );
};

AnimatedButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default AnimatedButton;
