import React from "react";

const DoesNotExist: React.FunctionComponent = () => {
  return (
    <>
      <section>
        <h1>Oops!</h1>
        <p>The page you're looking for does not exist (yet?)!</p>
        <p>Click the links above to teleport back!</p>
      </section>
    </>
  );
};

export default DoesNotExist;
