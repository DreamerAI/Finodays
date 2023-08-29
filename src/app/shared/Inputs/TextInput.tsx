import { ErrorMessage, Field } from "formik";
import s from "./TextInput.module.css";

type TextInputProps = {
    name: string;
    validate?: (value: string) => string | undefined;
    placeholder: string;
    type?: "text" | "email" | "password" | "number";
};

type SelectInputProps = {
    name: string;
    placeholder: string;
    label: string;
    options?: { value: string; label: string }[];
};

export const TextInput = ({
    name,
    placeholder,
    type = "text",
}: TextInputProps) => (
    <div>
        <Field
            placeholder={placeholder}
            type={type}
            id={name}
            name={name}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        <ErrorMessage name={name} component="div" className="text-red-500" />
    </div>
);

export const SelectInput = ({
    name,
    placeholder,
    label,
    options = [],
}: SelectInputProps) => (
    <div className="mb-4">
        <label htmlFor="name" className="font-semibold">{label}</label>
        <Field
            placeholder={placeholder}
            as="select"
            id={name}
            name={name}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mt-1"
        >
            {options.map(({ value, label }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </Field>
        <ErrorMessage name={name} component="div" className="text-red-500" />
    </div>)


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const CustomCheckbox = ({ field, label }) => {
    return (
        <>
            <input {...field} id={field.name} type="checkbox" className={s.input} />
            <label htmlFor={field.name} className={s.label}>{label}</label>
        </>
    );
};

interface Props {
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

export const RiskCustomCheckbox = ({ label, onChange, name }: Props) => {
    return (
        <>
            <input name="" id={name} type="checkbox" className={s.input} onChange={onChange} />
            <label htmlFor={name} className={s.label}>{label}</label>
        </>
    );
};
