import React from "react";
import { withTranslation } from "react-i18next";

const Text = ({ t, khanh test }) => {
  return <h2>{t("title")}</h2>;
};

export default withTranslation()(Text);
