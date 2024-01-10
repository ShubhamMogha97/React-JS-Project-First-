import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("err------", err);
  return (
    <div>
      {/* <h2>{err.error.message}</h2> */}
      <h2>{err.status}</h2>
      <h3>{err.statusText}</h3>
    </div>
  );
};

export default Error;
