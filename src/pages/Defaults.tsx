import React from "react";

export const DoesNotExist: React.FunctionComponent = () => {
  return (
    <>
      <section className="Page bgAccent2">
        <h1>Oops!</h1>
        <p>The page you're looking for does not exist (yet?)!</p>
        <p>Click the links above to teleport back!</p>
      </section>
    </>
  );
};

export const Default: React.FunctionComponent = () => {
  return (
    <>
      <section>
        <p>much wow, such empty</p>
      </section>
    </>
  );
};
