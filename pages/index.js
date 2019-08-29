import Alphabet from "../components/Alphabet";
import "../index.css";

const layoutStyle = {
  margin: 100,
  textAlign: "center",
  fontSize: 288
};

const Index = () => (
  <div style={layoutStyle}>
    <Alphabet />
  </div>
);

export default Index;
