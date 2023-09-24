import React from 'react';
import LabelledTextBox from './Components';
import { LabeledSelect, CustomButton, Subtopic} from './Components';
export default function Card1() {
    const existingSubject = ["add existing or new Subject","Add","English", "Social"];
    return (
        <div>
            <div className="ml-6 mt-4 text-xl font-arial font-semibold">Create subject/topic/subtopic</div>
            <div className="flex flex-wrap m-4">
                <LabeledSelect labelText="Subject" options={existingSubject} />
                <LabelledTextBox labelText="topic" placeholderText="Enter new topic" />
                <Subtopic />
                <CustomButton buttonText="Post" />
            </div>
        </div>
    )
}

export function Card2() {
    return (
        <div>
            <LabelledTextBox labelText="Subject" placeholderText="Enter new subject" />
        </div>
    )
}
