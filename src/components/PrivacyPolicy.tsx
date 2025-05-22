import React from "react";
import { privacyPolicy } from "../constants/privacyPolicy";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy" style={{ whiteSpace: "pre-wrap" }}>
      <div className="privacy-policy-title">zzz: Privacy Policy</div>
      <div>{privacyPolicy}</div>
    </div>
  );
};

export default PrivacyPolicy;
