import Layout from "./Layout.module.scss";

const index = ({ children }) => {
  return <div className={Layout.container}>{children}</div>;
};

export default index;
