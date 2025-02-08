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
                                    {term.split('\n').map((line, index) => (
                                        <div key={index}>{line}</div>
                                    ))}
                                    {explanation.split('\n').map((line, index) => (
                                        <div key={index}>{line}</div>
                                    ))}

                                </div>
                                : (
                                    ""
                                )
                        }


                        <input type="text" className="input-field"></input>
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








/*
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
                    <div>
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


                            {!Resolve ? (<button onClick={() => setResolve(true)}>resolve</button>) : (<></>)
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
                        <input type="text" className="input-field"></input>

                    </div>
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
*/