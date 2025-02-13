import React, { useState } from "react";

const mapTopicsAndEntries = (db) =>
    db.flatMap((category) =>
        category.subcategories.map((subcategory) => ({
            topicName: subcategory.topicName,
            entries: subcategory.entries.map(({ term, explanation, question, answerType, options }) => ({
                term,
                explanation,
                question,
                answerType,
                options,
            }))
        }))
    );


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
                    <div className="card">

                        {trainingMode === "explanation"
                            ? <div className="item-question">

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
                                    <br />

                                </div>
                                : (
                                    ""
                                )
                        }


                        <input type="text" placeholder="..." className="input-field"></input>
                        {
                            Resolve ?
                                (<>
                                    <div className="answer">
                                        <button onClick={() => handleAnswer(true)} className="button">correct</button>
                                        <button onClick={() => handleAnswer(false)} className="button">again</button>
                                    </div>
                                </>) : (<div className={onAnswer ? "item-answer" : "item-question"}></div>
                                )
                        }

                        {!Resolve ? (<button onClick={() => setResolve(true)} className="button">Resolve</button>) : (<></>)}


                    </div>
                ) : (
                    <div></div>)
            }
        </div >
    );
};

const Train = ({ selectedTopics, db, trainingMode, updateCounts }) => {
    const [entriesState, setEntriesState] = useState(
        mapTopicsAndEntries(db).filter((topic) =>
            selectedTopics.includes(topic.topicName)
        )
    );

    const updateEntryState = (term, isCorrect) => {
        setEntriesState(prevEntries =>
            prevEntries.map(topic => ({
                ...topic,
                entries: topic.entries.map(entry =>
                    entry.term === term
                        ? { ...entry, onAnswer: isCorrect }
                        : entry
                )
            }))
        );
    };

    const resetAgain = () => {
        setEntriesState(prevEntries =>
            prevEntries.map(topic => ({
                ...topic,
                entries: topic.entries.map(entry =>
                    entry.onAnswer === false
                        ? { ...entry, resolved: false, onAnswer: null }
                        : entry
                )
            }))
        );
    };

    const allEntries = entriesState.flatMap(topic => topic.entries);
    const shuffledEntries = [...allEntries].sort(() => Math.random() - 0.5);

    return (
        <div className="train">
            {entriesState.length === 0 ? (
                <p>PS /Users/jesus{">"} select topics in ./setting</p>
            ) : (
                <>
                    <ul>
                        {shuffledEntries.map((entry) => (
                            <ToggleItem
                                key={entry.term}
                                term={entry.term}
                                explanation={entry.explanation}
                                question={entry.question}
                                trainingMode={trainingMode}
                                onAnswer={(isCorrect) => updateEntryState(entry.term, isCorrect)}
                            />
                        ))}
                    </ul>
                    <button onClick={resetAgain}>repeat again</button>
                </>
            )}
        </div>
    );
};

export default Train;





