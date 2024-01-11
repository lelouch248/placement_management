import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="m-3 header">
      <Link to="/">
        <h1 className="text-5xl">Placement Management App</h1>
      </Link>
    </div>
  );
};

export default Header;
