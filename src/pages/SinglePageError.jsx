import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
const SinglePageError = () => {
  const error = useRouteError();
  return (
    <Wrapper>
      <div>
        <h3>{error.message}</h3>
      </div>
    </Wrapper>
  );
};
export default SinglePageError;
