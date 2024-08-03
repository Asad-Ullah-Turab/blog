import { useSelector } from "react-redux";
import { Button, Newsletter } from "../components";
export default function Home() {
  const isLogged = useSelector((state) => state.auth.loginStatus);
  return (
    <div>
      <div className="max-w-full w-screen justify-center items-center flex bg-primary h-screen overflow-hidden">
        <div className="text-center">
          <div className="font-montserrat font-semibold md-2:text-7xl text-5xl text-center text-secondary md-2:p-10 p-5">
            Unleash Your Voice
          </div>
          <div className="text-center font-openSans md-2:text-4xl text-2xl text-text">
            Write, Share, and Inspire
          </div>
          <Button
            className="md-2:mt-10 mt-5 block md-2:text-3xl md-2:px-10 md-2:py-5 text-xl font-openSans"
            to={isLogged ? "/blogs" : "/signup"}
          >
            Get Started
          </Button>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
