import { Form, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
// import FormControl from "../components/form/FormControl";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import { Alert, Radio, Select, notification } from "antd";
import FormControl from "../Components/FormControl";
import { Switch } from 'antd';
import Imageupload from "../Components/Imageupload";
import SubmitButton from "../Components/Sumbitbtn";
import { MainAddUsersContext } from "../Context/UsersContext";
const { Option } = Select;
function CreateUser() {
    const navigate = useNavigate();
    const { HandleUSer } = useContext(MainAddUsersContext);
    const [isLoading, setIsLoading] = useState(true);
    const [Userimg, setUserimg] = useState();
    const [timing, settiming] = useState("Morning");
    const [RoleName, setRoleName] = useState("Student");
    const [Role, setRole] = useState(false);
    const customDropdownRender = menu => (
        <div>
            {menu}

        </div>
    );
    const initialValues = {
        fname: "",
        email: "",
        number: "",
    };

    const [api, contextHolder] = notification.useNotification();
    notification.config({
        duration: 1,
    });
    const openNotificationWithIcon = (type) => {
        api[type]({
            message: 'User Create Successfully',
        });
    };
    const handleSubmit = (values) => {
        const Userobj = { ...values, RoleName, Userimg, Role, timing };
        console.log(Userobj);
        HandleUSer(Userobj)
        openNotificationWithIcon('success')
    };

    const handleChange = (e) => {
        settiming(e)
    }
    const validationSchema = yup.object({
        fname: yup.string().required(< Alert message="First Name  is Required" type="warning" showIcon />),
        number: yup.string()
            .min(10, < Alert message="Number is  incorrect" type="warning" />)
            .max(11, < Alert message="Number is  incorrect" type="warning" />)
            .required(< Alert message="Mobile number is required" type="warning" showIcon />),
        // timing: yup.string().required(< Alert message="Role  is Required" type="warning" showIcon />),
        email: yup.string().email(< Alert message="Invalid Email" type="error" showIcon />).required(< Alert message="Email is Required" type="warning" showIcon />),
    });


    useEffect(() => {
        // Simulate a 2-second loading delay
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false); // Hide the loader after 2 seconds
        }, 1000);

        // Clean up the timeout when the component unmounts
        return () => clearTimeout(loadingTimeout);
    }, []);

    const onChange = (e) => {
        setRoleName(e.target.value);
    };
    const HandleRole = (checked) => {
        setRole(checked)
    };
    // if (isLoading) return <Loader />;
    // if (!roleListData?.roles && !AccessPermissionUser) return <LoaderForm header_title={"Create User"} />;
    return (
        <div className="container-fluid ">
            {contextHolder}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                validateOnChange
            >
                <Form name="myForm">
                    <div className="row clearfix">
                        <div className="col-xl-12 col-lg-12">
                            <div className="card">
                                {/* <div className="card-header borderblue"> */}
                                <h3 className="card-title">{"User Form"}</h3>
                                {/* </div> */}
                                <div className="card-body">
                                    <div className="row ">
                                        <div className="col-md-12">
                                            <Imageupload setimg={setUserimg} img={Userimg} />
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <FormControl
                                                className="form-control my-1"
                                                required={true}
                                                label={"User name"}
                                                name="fname"
                                                control="input"
                                                placeholder={"Enter username"}
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <FormControl
                                                required={true}
                                                className="form-control my-1"
                                                label={"Email"}
                                                name="email"
                                                control="input"
                                                placeholder="Enter Email"
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <FormControl
                                                className="form-control my-1"
                                                required={true}
                                                label={"Enter your phone number"}
                                                name="number"
                                                control="inputnumber"
                                                placeholder={"XXXXXXXXXXX"}
                                                type={"number"}
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-12" >
                                            {/* <FormControl
                                                className="form-control my-1"
                                                options="custom-select"
                                                firstSelect={"--Select--"}
                                                selectList={RoleList}
                                                required={true}
                                                label={"Interview preferred time"}
                                                name="timing"
                                                control="select_custom_options"
                                                custom_label_name="label"
                                                customer_value_name="label"
                                            /> */}
                                            <span className="labeltext d-block mt-2">
                                                Interview preferred time
                                            </span>
                                            {/* <Select
                                                className="mt-2  input custom-select "
                                                defaultValue="Category"
                                                // onChange={handleChange}
                                                options={[
                                                    {
                                                        value: "jack",
                                                        label: "Jack",
                                                    },
                                                    {
                                                        value: "Category",
                                                        label: "Category",
                                                    },
                                                    {
                                                        value: "Yiminghe",
                                                        label: "yiminghe",
                                                    },
                                                ]}
                                            /> */}
                                            <Select
                                                className="mt-2 input custom-select"
                                                defaultValue="Morning"
                                                onChange={handleChange}
                                                optionLabelProp="label"
                                                dropdownRender={customDropdownRender}
                                            >
                                                <Option value="Morning" label="Morning">
                                                    <div className="optioncus">Morning</div>
                                                </Option>
                                                <Option value="Evening" label="Evening">
                                                    <div className="optioncus">Evening</div>
                                                </Option>
                                                <Option value="Afternoon" label="Afternoon">
                                                    <div className="optioncus">Afternoon</div>
                                                </Option>
                                            </Select>
                                        </div>
                                        <div className="col-md-6 col-sm-12 mt-3" >
                                            <Switch onChange={HandleRole} />&nbsp;&nbsp;
                                            <label htmlFor=""> Select Your Role(optional)</label>
                                            {Role && <div className="mt-3">
                                                <Radio.Group onChange={onChange} value={RoleName}>
                                                    <Radio value={"Student"}>Student</Radio>
                                                    <Radio value={"Teacher"}>Teacher</Radio>
                                                    <Radio value={"Other"}>Other</Radio>
                                                </Radio.Group>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                    <br />
                                    <div className="float-end">
                                        <SubmitButton
                                            props={{
                                                class: "btn btn-primary submitbtn",
                                                text: "ADD USER",
                                            }}
                                        // buttonLoading={res.isLoading}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default CreateUser;
