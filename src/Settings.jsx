import React, { useState } from "react";
import { db } from "./db.jsx";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

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


    const pdfDownload = () => {
        const document = new jsPDF();
        document.setFontSize(30);
        document.setFont("helvetica", "bold")
        document.text("Conclusion", 15, 30);
        let y = 50;
        db.forEach((category) => {
            document.setFontSize(7);
            document.setFont("helvetica", "bold")
            document.text(`> ${category.category}`, 15, y, { baseline: "top" });
            y += 6;
            category.subcategories.forEach((subcategory) => {
                document.setFontSize(7);
                document.setFont("helvetica", "bold")
                document.text(`>> ${subcategory.topicName}`, 15, y, { baseline: "top" });
                y += 6;
                const tableData = subcategory.entries.map((entry) => [
                    entry.term,
                    entry.explanation,
                ]);
                if (tableData.length > 0) {
                    document.autoTable({
                        startY: y,
                        body: tableData,
                        theme: "grid",
                        columnStyles: {
                            0: { cellWidth: 35, halign: "right" },
                            1: { cellWidth: "auto" }
                        },
                        styles: {
                            lineColor: [255, 255, 255],
                            lineWidth: 0.1,
                            fontSize: 7,
                            font: "helvetica",
                            cellPading: 0,
                        }
                    });
                    y = document.lastAutoTable.finalY + 10;
                }
            });
        });
        document.save("Conclusion.pdf");
    }


    return (
        <div className="settings">
            <div className="section">
                <div className="section-title">...</div>
                <button onClick={pdfDownload} className="button" >Download</button>
            </div>
            <div className="section">
                <div className="section-title">find</div>
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
                <div className="section-title">topics</div>

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