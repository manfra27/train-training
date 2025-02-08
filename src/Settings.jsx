import React, { useState } from "react";

const Settings = ({
    data,
    selectedTopics,
    selectedCategories,
    toggleTopicSelection,
    toogleCategorySelection,
    modes,
    handleModeSelection,
    trainingMode,
}) => {

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
                <div className="section-title">topics()</div>

                <ul className="category-list">
                    {data.map((category) => (
                        <li key={category.category} >
                            <span
                                className={`topic-item ${selectedCategories.includes(category.category) ? "item-answer" : "item-question"
                                    }`}
                                onClick={() => toogleCategorySelection(category.category)}
                            >
                                < br />
                                {category.category}
                            </span>
                            <ul className="subcategory-list">
                                {category.subcategories.map((subcategory) => (
                                    <li key={subcategory.topicName}
                                        className={`topic-item ${selectedTopics.includes(subcategory.topicName) ? "item-answer" : "item-question"}`}
                                        onClick={() => toggleTopicSelection(subcategory.topicName)}>
                                        <span>{subcategory.topicName}</span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default Settings;




/*
{data.map((categoryName) => (
                        <li
                            key={categoryName}
                            className={`topic-item ${selectedCategories.includes(categoryName)
                                ? "item-answer"
                                : "item-question"
                                }`}
                            onClick={() => toogleCategorySelection(categoryName)}
                        >
                            {categoryName}< br />
                        </li>
                    ))}
                    */

