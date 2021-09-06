import React from "react";

function Info() {
  const title = "this is my title";
  const showTitle = true;

  if (showTitle) {
    return (
      <>
        <h1>{title}</h1>
        <p>Manage your stuff.</p>
      </>
    );
  } else {
    return <p>empty</p>;
  }
}

export default Info;
