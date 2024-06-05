import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const SiteSection = ({ children }: Props) => {
  return (
    <div className="site-section">
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </div>
  );
};

export default SiteSection;
