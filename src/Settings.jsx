import React, { useState } from "react";

const Settings = ({
    topics,
    selectedTopics,
    toggleTopicSelection,
    modes,
    handleModeSelection,
    trainingMode,
}) => {
    const [allSelected, setAllSelected] = useState(false);

    const handleSelectAllToggle = () => {
        if (allSelected) {
            topics.forEach((topic) => {
                if (selectedTopics.includes(topic)) {
                    toggleTopicSelection(topic);
                }
            });
        } else {
            topics.forEach((topic) => {
                if (!selectedTopics.includes(topic)) {
                    toggleTopicSelection(topic);
                }
            });
        }
        setAllSelected(!allSelected);
    };

    return (
        <div className="settings">
            <div className="section">
                <div className="section-title">find()</div>
                <div className="modes-container">
                    {modes.map((mode) => (
                        <ul
                            key={mode}
                            onClick={() => handleModeSelection(mode)}
                            className={` ${trainingMode.includes(mode)
                                ? "item-answer"
                                : "item-question"
                                }`}
                        >
                            {mode}
                        </ul>
                    ))}
                </div>
            </div>
            <div className="section">
                <div className="section-title">selectAll()</div>
                <div
                    onClick={handleSelectAllToggle}
                    className={allSelected ? "item-answer" : "item-question"}
                >
                    {allSelected ? "true" : "false"}
                </div>
            </div>
            <div className="section">
                <div className="section-title">selectTopics()</div>
                <ul className="topics-list">
                    {topics.map((topicName) => (
                        <li
                            key={topicName}
                            className={`topic-item ${selectedTopics.includes(topicName)
                                ? "item-answer"
                                : "item-question"
                                }`}
                            onClick={() => toggleTopicSelection(topicName)}
                        >
                            {topicName}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Settings;



