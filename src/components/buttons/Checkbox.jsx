import { MdCheck } from "react-icons/md";
import PropTypes from "prop-types";

const Checkbox = ({ checked, label, onChange }) => {
  return (
    <label className="flex items-center p-2 space-x-2 cursor-pointer">
      <input
        type="checkbox"
        className="w-6 h-6 border border-gray-300 rounded appearance-none checked:bg-blue-500 checked:border-transparent focus:outline-none"
        checked={checked}
        onChange={onChange}
      />
      <span className="text-lg">{label}</span>
      {checked && <MdCheck className="text-green-500" />}
    </label>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
