import React from 'react';

const QuickStartChecklist = ({ steps }) => {
    return (
        <div className="checklist">
            <h3>Quick Start Checklist</h3>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
        </div>
    );
};

export default QuickStartChecklist;