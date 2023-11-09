import { motion } from "framer-motion";
import PropTypes from "prop-types";

const DeleteModal = ({ showModal, handleClose, handleDelete }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showModal ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 ${
        showModal ? "" : "pointer-events-none"
      }`}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: showModal ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="p-8 bg-white rounded-lg">
        <h2 className="mb-4 text-lg font-bold">Confirm Deletion</h2>
        <p>Are you sure you want to delete this column?</p>
        <div className="flex justify-end mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 mr-2 text-white bg-red-500 rounded"
            onClick={handleDelete}>
            Confirm
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded"
            onClick={handleClose}>
            Cancel
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

DeleteModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default DeleteModal;
