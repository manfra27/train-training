import React from "react";
import { db } from "./db.jsx";
import { jsPDF } from "jspdf";
import "jspdf-autotable";


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


const Guide = () => {
    return (
        <div className="guide">
            <h1>Guide</h1>
            <h5>Only nerds read a guide for such a simple app.</h5>
            <div>!!!: Train</div>
            <div>?: Settings</div>
            <div>¿: Guide</div>
            <br />
            <div>q: question</div>
            <div>t: term</div>
            <div>r: reflection</div>
            <div>e: explanations</div>

            <br />
            <button onClick={pdfDownload}>Download conclusion as PDF</button>

        </div >
    );
};

export default Guide;
