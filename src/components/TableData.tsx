import React, { useState } from "react";
import { Button, Table } from "antd";
import type { TableColumnsType } from "antd";
import { UserData } from "../models/user.model";
import { removeUserLocal } from "../utils/localStorage";

// interface DataType {
// key: React.Key;
// 	type: string;
// 	firstName: string;
// 	lastName: string;
// 	date: string;
// 	nation: string;
// 	idCard: string;
// 	gender: string;
// 	phone: string;
// 	passport: string;
// 	salary: string;
// }

const columns: TableColumnsType<UserData> = [
	{
		title: "ชื่อ",
		dataIndex: "firstName",
	},
	{
		title: "เพศ",
		dataIndex: "gender",
		sorter: {
			compare: (a: any, b: any) => a.gender - b.gender,
			multiple: 3,
		},
	},
	{
		title: "หมายเลขโทรศัพท์มือถือ",
		dataIndex: "phone",
		sorter: {
			compare: (a: any, b: any) => a.phone - b.phone,
			multiple: 2,
		},
	},
	{
		title: "สัญชาติ",
		dataIndex: "nation",
		sorter: {
			compare: (a: any, b: any) => a.nation - b.nation,
			multiple: 1,
		},
	},
	{
		title: "จักการ",
		// dataIndex: "nation",
	},
];

interface TableDataProps {
	dataTable: UserData[];
}

const TableData: React.FC<TableDataProps> = ({ dataTable }) => {
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

	const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
		// console.log("selectedRowKeys changed: ", newSelectedRowKeys);
		setSelectedRowKeys(newSelectedRowKeys);
	};

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	};

	const clearTable = () => {
		removeUserLocal();
		window.location.reload();
	};
	return (
		<div>
			<Button onClick={clearTable}>ลบข้อมูล</Button>

			<div>
				<div style={{ marginBottom: 16 }}></div>
				<Table
					rowSelection={rowSelection}
					columns={columns}
					// dataSource={dataTable}
					dataSource={dataTable.map((data, index) => ({
						...data,
						key: index.toString(),
					}))}
				/>
			</div>
		</div>
	);
};

export default TableData;
