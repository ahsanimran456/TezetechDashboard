import React, { useContext, useEffect, useState } from 'react';
import { Button, Switch, Table } from 'antd';
import { MainAddUsersContext } from '../Context/UsersContext';
const columns = [
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Name',
        dataIndex: 'fname',
        render: (text, record) => {
            return <div>
                <img src={record.Userimg} alt="avatar"
                    style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px', objectFit: "cover" }}
                /><span>{text}</span>
            </div>;
        },
    },
    {
        title: 'Phone No',
        dataIndex: 'number',
    },
    {
        title: 'Interview Timings',
        dataIndex: 'timing',
    },
    {
        title: 'Role',
        dataIndex: 'RoleName',
    },
    {
        title: 'Active',
        dataIndex: 'Role',
        render: (isActive) => {
            return <Switch checked={isActive} />;
        },
    },
];

const Userlist = () => {
    const { Users } = useContext(MainAddUsersContext);
    const [Userlist, setUserlist] = useState();
    const [data2, setData2] = useState([]);
    useEffect(() => {
        if (Users) {
            setUserlist(Users)
            setData2(Users);
        }
    }, [Users]);

    const handleSearch = (value) => {
        const filteredData = data2.filter((item) => {
            const lowerValue = value.toLowerCase();
            return (
                (item?.email && item?.email.toLowerCase().includes(lowerValue)) ||
                (item?.fname && item?.fname.toLowerCase().includes(lowerValue)) ||
                (item?.RoleName && item?.RoleName.toLowerCase().includes(lowerValue)) ||
                (item?.number && item?.number?.toString() && item?.number.toLowerCase().includes(lowerValue)) ||
                (item?.timing && item?.timing.toLowerCase().includes(lowerValue))
            );

        });
        setUserlist(filteredData);
    }

    return (
        <div className='Table-main mt-4 px-3'>
            <h3>
                User Table
            </h3>
            <div className='tableheader'>
                <div className="search-table ">
                    <input type="text" onInput={(e) => handleSearch(e.target.value)} name="" id="" className='form-control' placeholder='Search' />
                    <i className='fa fa-search'></i>
                </div>
            </div>
            <Table columns={columns} dataSource={Userlist} />
        </div>
    );
};
export default Userlist;