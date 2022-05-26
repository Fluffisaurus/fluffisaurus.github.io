import React from "react";

export const DoesNotExist: React.FunctionComponent = () => {
  return (
    <>
      <section className="Page bgAccent2">
        <h1>Oops!</h1>
        <p>
          The URL you typed in does not exist... yet? Who knows, maybe it will
          one day. Perhaps you misspelled it? If not, I'm as lost as you are.
        </p>
        <p>Use the navigation above to go to an existing page!</p>
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
