import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  function navigationhandler(_) {
    navigate("/products");
  }
  return (
    <div>
      <p>WELCOME</p>
      <p>
        Go to <Link to="/products">the list of product</Link>
      </p>
      <button onClick={navigationhandler}> hahaha </button>
    </div>
  );
}

export default HomePage;
