import "./Error.scss";
function Error() {
  return (
    <div className="error">
      <div className="error__content">
        <h1 className="error__title">404</h1>
        <p className="error__message">
          Oops! The page you're looking for can't be found.
        </p>
        <p className="error__instruction">
          But don't worry, you can always go back to the{" "}
          <a href="/">homepage</a>.
        </p>
      </div>
    </div>
  );
}

export default Error;
