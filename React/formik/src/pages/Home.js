import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TodoContext } from '../store/TodoContext'
import { Space, Table} from 'antd';
import { render } from '@testing-library/react';

function Home() {
  const { todos } = useContext(TodoContext)
  const columns = [
    {
      dataIndex: 'title',
      title: 'Title',
      key: 'title',
    },
    {
      dataIndex: 'description',
      title: 'Desc',
      key: 'description',
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
    },
    {
      title: 'Till',
      dataIndex: 'dueDate',
      key: 'dueDate',
    },
    {
      title: 'Completed',
      dataIndex: 'completed',
      key: 'completed',
      render : (value)=><div><input type='checkbox' checked={value}/></div>
    },
  ];

  return (
    <div>
      Links as belows
      <div> <Link to="create">Add</Link> </div>
      <div> <Link to="login">Login</Link> </div>
      <div> <Link to="register">Register</Link></div>
      <div> <Link to="profile">Profile</Link> </div>
      <div> <Link to="create">Logout</Link> </div>
      <Table columns={columns} dataSource={todos} />
    </div>
  )
}

export default Home