import React, { useState } from "react";

const mapTopicsAndEntries = (db) => {
    return db.map((topic) => ({
        topicName: topic.topicName,
        entries: topic.entries.map((entry) => ({
            term: entry.term,
            explanation: entry.explanation,
            question: entry.question,
            answerType: entry.answerType,
            options: entry.options,
        })),
    }));
};

const ToggleItem = (
    { term, explanation, question, trainingMode, onAnswer },
) => {
    const [Resolve, setResolve] = useState(false);
    const [Reflected, setReflected] = useState(false);

    const handleAnswer = (isCorrect) => {
        onAnswer(isCorrect);
        setReflected(true);
    };

    return (
        <div>
            {
                Reflected === false ? (
                    <div onClick={() => setResolve(true)} className="item" >
                        {trainingMode === "explanation"
                            ? <div className="item-question">
                                <br />
                                {term.split('\n').map((line, index) => (
                                    <div key={index}>{line}</div>
                                ))}
                            </div>
                            : <div className="item-question">
                                {question.split('\n').map((line, index) => (
                                    <div key={index}>{line}</div>
                                ))}
                            </div>}
                        {
                            Resolve && trainingMode === "explanation"
                                ? <div className="item-answer">
                                    <br />
                                    {explanation.split('\n').map((line, index) => (
                                        <div key={index}>{line}</div>
                                    ))}
                                </div>
                                : (
                                    ""
                                )
                        }
                        {
                            Resolve && trainingMode === "term"
                                ? <div className="item-answer">
                                    <br />
                                    {term.split('\n').map((line, index) => (
                                        <div key={index}>{line}</div>
                                    ))}
                                    <br />
                                    {explanation.split('\n').map((line, index) => (
                                        <div key={index}>{line}</div>
                                    ))}

                                </div>
                                : (
                                    ""
                                )
                        }
                        {
                            Resolve ?
                                (<>
                                    <br />
                                    <div className="answer">
                                        <div onClick={() => handleAnswer(true)}>correct</div>
                                        <div onClick={() => handleAnswer(false)}>again</div>
                                    </div>
                                </>) : (<div className={onAnswer ? "item-answer" : "item-question"}></div>
                                )
                        }
                    </div >
                ) : (
                    <div></div>)
            }
        </div>
    );
};

const Train = ({ selectedTopics, db, trainingMode, updateCounts }) => {
    const mappedData = mapTopicsAndEntries(db).filter((topic) =>
        selectedTopics.includes(topic.topicName)
    );

    const allEntries = mappedData.flatMap((topic) => topic.entries);

    const shuffledEntries = allEntries.sort(() => Math.random() - 0.5);

    const handleAnswer = (isCorrect) => {
        updateCounts(isCorrect);
    };

    return (
        <div className="train">
            {mappedData.length === 0
                ? <p>PS /Users/jesus{">"} select topics in ./setting</p>
                : (
                    <ul>
                        {shuffledEntries.map((entry) => (
                            <ToggleItem
                                key={entry.term}
                                term={entry.term}
                                explanation={entry.explanation}
                                question={entry.question}
                                answerTypes={entry.answerTypes}
                                options={entry.options}
                                trainingMode={trainingMode}
                                onAnswer={handleAnswer}
                            />
                        ))}
                    </ul>
                )}
        </div>
    );
};

export default Train;
