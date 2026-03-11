import { Table } from "antd";

function List() {
  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Role", dataIndex: "role" },
  ];

  const data = [
    { key: 1, name: "Nguyen Van A", email: "a@gmail.com", role: "Admin" },
    { key: 2, name: "Tran Van B", email: "b@gmail.com", role: "User" },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>User List</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default List;