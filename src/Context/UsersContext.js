import React, { useEffect, useState } from "react";
export const MainAddUsersContext = React.createContext();



function UserContext({ children }) {
    const [Users, setUsers] = useState([
        {
            fname: 'Alexa',
            email: `alexa@example.com`,
            number: "03452978179",
            timing: 'Afternoon',
            RoleName: "Student",
            Role: true,
            Userimg: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            fname: 'Johan',
            email: `Johan@example.com`,
            number: "03452234115",
            timing: 'Morning',
            RoleName: "Teacher",
            Role: true,
            Userimg: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

        },
        {
            fname: 'Emma',
            email: 'emma@example.com',
            number: '03451122334',
            timing: 'Evening',
            RoleName: 'Other',
            Role: false,
            Userimg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            fname: 'Oliver',
            email: 'oliver@example.com',
            number: '03457788999',
            timing: 'Afternoon',
            RoleName: 'Student',
            Role: true,
            Userimg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        },
    ]);

    const HandleUSer = (newUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser]);
    }

    useEffect(() => {
        if (Users) {
            console.log(Users);
        }
    }, [Users]);
    return (
        <MainAddUsersContext.Provider value={{ HandleUSer, Users }}>
            {children}
        </MainAddUsersContext.Provider>

    );
}

export default UserContext;