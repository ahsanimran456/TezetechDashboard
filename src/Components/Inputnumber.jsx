import React from "react";
import { ErrorMessage, useField, useFormikContext } from "formik";
import styled from "styled-components";

const InputCustom = styled.input`
  /* Define your styles here */
  /* Example: */
`;

function Inputnumber({ name, required, label, disabled, type, ...rest }) {
    const { errors } = useFormikContext();
    const [field] = useField(name);
    return (
        <>
            <div className="form-group my-2">
                {label && (
                    <label htmlFor={name}>
                        {required && (
                            <span className="labeltext">
                                {label}
                            </span>
                        )}
                    </label>
                )}
                <InputCustom
                    type={type || "text"} // Default to "text" if type is not provided
                    name={name}
                    error={errors[name]}
                    id={name}
                    {...field}
                    {...rest}
                    disabled={disabled} // Pass the 'disabled' prop to InputCustom
                />
            </div>
            {required && (
                <div className='my-1'>
                    <ErrorMessage name={name}>
                        {(msg) => (
                            <div style={{ color: "red", whiteSpace: "nowrap" }}>
                                {msg}
                            </div>
                        )}
                    </ErrorMessage>
                </div>
            )}
        </>
    );
}

export default Inputnumber;
