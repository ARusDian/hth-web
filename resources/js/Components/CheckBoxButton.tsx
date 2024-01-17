import React from "react";

export interface Props {
    checked?: boolean;
    onChange: (checked: boolean) => void;
    label: string;
}

export default function CheckBoxButton(props: Props) {

    return (
        <div className="relative flex items-start py-3 ">
            <input
                id={props.label}
                type="checkbox"
                className="hidden peer"
                checked={props.checked}
                onChange={(e) => props.onChange(e.target.checked)}
                value={props.label}
            />
            <label htmlFor={props.label}
                className="flex items-center justify-center w-full py-4 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-blue-300 peer-checked:border-blue-400 peer-checked:bg-blue-500 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                <div className="flex items-center justify-center">
                    <div className="text-lg text-brand-black">{props.label}</div>
                </div>
            </label>
        </div>
    )
}
