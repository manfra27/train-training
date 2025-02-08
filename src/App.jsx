import React, { useState } from "react";
import { db } from "./db.jsx";
import "./App.css";
import Train from "./Train";
import Settings from "./Settings";
import Guide from "./Guide";

function App() {
  const [selectedDirectory, setSelectedDirectory] = useState("setting");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const modes = ["term", "explanation"];
  const [trainingMode, setTrainingMode] = useState("term");
  const [trueCount, setTrueCount] = useState(0);
  const [falseCount, setFalseCount] = useState(0);

  const updateCounts = (isCorrect) => {
    if (isCorrect) {
      setTrueCount((prev) => prev + 1);
    } else {
      setFalseCount((prev) => prev + 1);
    }
  };

  const handleModeSelection = (mode) => {
    setTrainingMode(mode);
  };

  const toggleTopicSelection = (topicName) => {
    setSelectedTopics((prev) =>
      prev.includes(topicName)
        ? prev.filter((topic) => topic !== topicName)
        : [...prev, topicName]
    );
  };

  const toggleCategorySelection = (categoryName) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(categoryName)
        ? prevCategories.filter((category) => category !== categoryName)
        : [...prevCategories, categoryName]
    );

    const category = db.find((cat) => cat.category === categoryName);
    if (category) {
      const categoryTopics = category.subcategories.map((sub) => sub.topicName);

      setSelectedTopics((prevTopics) =>
        selectedCategories.includes(categoryName)
          ? prevTopics.filter((topic) => !categoryTopics.includes(topic))
          : [...new Set([...prevTopics, ...categoryTopics])]
      );
    }
  };

  const handleDirectory = (newDirectory) => {
    setSelectedDirectory(newDirectory);
    setTrueCount(0);
    setFalseCount(0);
  };


  const renderContent = () => {
    if (selectedDirectory === "train") {
      return (
        <Train
          selectedTopics={selectedTopics}
          db={db}
          trainingMode={trainingMode}
          updateCounts={updateCounts}
        />
      );
    }
    if (selectedDirectory === "setting") {
      return (
        <Settings
          data={db.map((data) => data)}
          selectedTopics={selectedTopics}
          selectedCategories={selectedCategories}
          toggleTopicSelection={toggleTopicSelection}
          toogleCategorySelection={toggleCategorySelection}
          modes={modes}
          handleModeSelection={handleModeSelection}
          trainingMode={trainingMode}
        />
      );
    }
    if (selectedDirectory === "guide") {
      return <Guide />;
    }
  };

  return (
    <div className="App">
      <div className="body">
        {renderContent()}
      </div>
      <footer className="footer">
        {selectedDirectory === "train" ? (
          <div className="menu">
            <div>{trueCount}-{Math.round(100 / (trueCount + falseCount) * trueCount)}%-{falseCount}  </div>
          </div>
        ) : ("")}
        <div className="menu">
          <div
            className={selectedDirectory === "train"
              ? "item-answer"
              : "item-question"}
            onClick={() => handleDirectory("train")}
          >
            !!!
          </div>
          <div
            className={selectedDirectory === "setting"
              ? "item-answer"
              : "item-question"}
            onClick={() => handleDirectory("setting")}
          >
            ?
          </div>
          <div
            className={selectedDirectory === "guide"
              ? "item-answer"
              : "item-question"}
            onClick={() => handleDirectory("guide")}
          >
            ¿
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
