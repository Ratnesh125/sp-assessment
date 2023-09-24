import React from 'react';
import { Card2 } from './Cards';

export default function LabelledTextBox(props) {
    const { labelText, placeholderText } = props;
    return (
        <div className="w-full pt-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {labelText}
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder={placeholderText} />
        </div>
    )
}

export function LabeledSelect({ labelText, options }) {
    const [selectedOption, setSelectedOption] = React.useState('');
    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);
    };
    return (
        <div className="w-full mb-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {labelText}
            </label>
            <select
                className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                value={selectedOption}
                onChange={handleSelectChange}
            >
                {options.map((option, index) => (
                    <option key={index} value={option} >
                        {option}
                    </option>
                ))}
            </select>
            {selectedOption === "Add" && <Card2 />}
        </div>
    );
}

export function Subtopic() {
    const [toggle, setToggle] = React.useState(false);
    const handleSelectChange = (e) => {
        setToggle(true);
    };
    return (
        <div className="w-full mt-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Subtopic
            </label>
            <div className="flex">
                <input className="appearance-none block w-3/5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="enter new sub-topic" />
                <span className="ml-2 mt-2 font-semibold font-sm text-purple-500 dark:text-purple-500 hover:underline" onClick={handleSelectChange}>Add new subtopic</span>
            </div>
            {(toggle == true) && <Subtopic />}
        </div>
    );
}

export function CustomButton({ buttonText, onClick }) {
    return (
        <div className="w-full px-3 flex justify-end">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-28 rounded-lg" type="button" onClick={onClick}>
                {buttonText}
            </button>
        </div>
    );
}