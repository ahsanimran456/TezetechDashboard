import { ErrorMessage, useField } from 'formik';
import React from 'react';

function Select({
    name,
    required,
    label,
    firstSelect,
    selectList,
    custom_label_name,
    customer_value_name,
    className,
    options,
    value,
    ...rest
}) {
    const [field] = useField(name);

    return (
        <>
            <div className={`form-group my-2`}>
                {label && (
                    <label htmlFor={name}>
                        {required && (
                            <span className="labeltext">
                                {label}
                            </span>
                        )}
                    </label>
                )}
                <select
                    name={name}
                    id={name}
                    value={value && value}
                    {...field}
                    {...rest}
                    className={className}
                >
                    {firstSelect && <option hidden>{firstSelect}</option>}
                    {Array.isArray(selectList) &&
                        selectList.map((item, index) => {
                            return (
                                <option value={item[customer_value_name]} className={options} key={index}>
                                    {item[custom_label_name] && item[custom_label_name].replace(/_/g, ' ')}
                                </option>
                            );
                        })}
                </select>
            </div>
            {required && (
                <div className='my-1'>
                    <ErrorMessage name={name}>
                        {(msg) => (
                            <div style={{ color: 'red', whiteSpace: 'nowrap' }}>{msg}</div>
                        )}
                    </ErrorMessage>
                </div>
            )}
        </>
    );
}

export default Select;
