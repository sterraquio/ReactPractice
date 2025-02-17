import { Navigate, useNavigate } from "react-router";
import "./Home.css";
import { useCallback } from "react";
const Home = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/corazon", { state: { userData: { displayName: "John Doe" } }, });
  }, [navigate]);
  return (
    <div>
      <h1>Inicio</h1>
      <button onClick={() => Navigate("/corazon")}>Ver más enfermedades</button>
    </div>
  );
};
export default Home;
