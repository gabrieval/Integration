import LoginForm from "../../components/loginForm/loginForm";
import styled from "./landingPage.module.css";
function LandingPage({login}) {
    return (  <div className={styled.landingContainer}>
      <LoginForm login={login}/>
    </div>);
}

export default LandingPage;