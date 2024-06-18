import React from "react";
import Summary from "../components/Summary";
import IntroductionCard from "../components/IntroductionCard";
import SkillsPage from "./SkillsPage";

const HomePage: React.FC = () => {
  return (
    <div>
      <div>
        <Summary />
      </div>
      <div>
        <IntroductionCard />
      </div>
      <div>
        <SkillsPage />
      </div>
    </div>
  );
};

export default HomePage;
