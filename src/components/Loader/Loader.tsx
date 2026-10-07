import "./Loader.css";

const Loader = () => {
  return (
    <div className="website-loader">
      <div className="loader-content">
        <div className="loader-logo">ROCKSTAR</div>

        <div className="loader-spinner"></div>

        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;