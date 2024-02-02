import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import style from "./FormPage.module.scss";
import { Button, Select, Space, Input, Radio, Form } from "antd";
import TableData from "../components/TableData";
import { useSelector } from "react-redux";
import { addUser, userSelector } from "../store/slices/userSlice";
import { getUserLocal } from "../utils/localStorage";
import { useAppDispatch } from "../store/store";
import { UserData } from "../models/user.model";

type Props = {};

const showForm = () => {
	const dispatch = useAppDispatch();
	const userReducer = useSelector(userSelector);

	const [input, setInput] = useState({
		type: "",
		firstName: "",
		lastName: "",
		date: "",
		nation: "",
		idCard: "",
		gender: "",
		phone: "",
		passport: "",
		salary: "",
	});

	const resetForm = () => {
		setInput({
			type: "",
			firstName: "",
			lastName: "",
			date: "",
			nation: "",
			idCard: "",
			gender: "",
			phone: "",
			passport: "",
			salary: "",
		});
	};

	const handleSubmitForm = (e: any) => {
		e.preventDefault();
		dispatch(
			addUser({
				type: input.type,
				firstName: input.firstName,
				lastName: input.lastName,
				date: input.date,
				nation: input.nation,
				idCard: input.idCard,
				gender: input.gender,
				phone: input.phone,
				passport: input.passport,
				salary: input.salary,
			})
		);
		resetForm();

		// console.log("input", input);
	};

	// console.log("userReducer =>", userReducer.users);

	return (
		<form className={style.form}>
			<div className={style.form__input}>
				<div className={style.form__input__select}>
					<label className={style.label}>
						<span className={style.form__input__select__start}>*</span>{" "}
						คำนำหน้า:
					</label>
					<Space wrap>
						<Select
							defaultValue="คำนำหน้า"
							value={input.type || "คำนำหน้า"}
							style={{ width: 80, alignSelf: "self-start" }}
							onChange={(value) =>
								setInput({
									...input,
									type: value,
								})
							}
							options={[
								{ value: "นาย", label: "นาย" },
								{ value: "นาง", label: "นาง" },
							]}
							size="small"
						></Select>
					</Space>
				</div>

				<div className={style.form__input__select}>
					<label>
						<span className={style.form__input__select__start}>*</span>
						<div>ชื่อจริง: </div>
					</label>
					<Input
						size="small"
						style={{ width: 200 }}
						type="text"
						value={input.firstName}
						onChange={(e) => setInput({ ...input, firstName: e.target.value })}
					/>
				</div>
				<div className={style.form__input__select}>
					<label>
						<span className={style.form__input__select__start}>*</span> นามสกุล:{" "}
					</label>
					<Input
						size="small"
						style={{ width: 250 }}
						type="text"
						value={input.lastName}
						onChange={(e) => setInput({ ...input, lastName: e.target.value })}
					/>
				</div>
			</div>

			<div className={style.form__input}>
				<div className={style.form__input__select}>
					<label>
						<span className={style.form__input__select__start}>*</span>วันเกิด:{" "}
					</label>
					<Input
						style={{ width: 130 }}
						size="small"
						type="date"
						value={input.date}
						onChange={(e) => setInput({ ...input, date: e.target.value })}
					/>
				</div>

				<div className={style.form__input__select}>
					<label>
						<span className={style.form__input__select__start}>*</span> สัญชาติ:{" "}
					</label>
					<Space wrap>
						<Select
							defaultValue="-- กรุณาเลือก --"
							style={{ width: 300, alignSelf: "self-start" }}
							value={input.nation}
							onChange={(value) => setInput({ ...input, nation: value })}
							options={[
								{ value: "thai", label: "Thai" },
								{ value: "japan", label: "Japan" },
							]}
							size="small"
						/>
					</Space>
				</div>
			</div>

			<div className={style.form__input}>
				<label>เลขบัตรประชาชน: </label>
				<Input
					size="small"
					style={{ width: 200 }}
					type="text"
					value={input.idCard}
					onChange={(e) => setInput({ ...input, idCard: e.target.value })}
				/>
			</div>

			<div className={style.form__input}>
				<div className={style.form__input__select}>
					<label>
						<span className={style.form__input__select__start}>*</span> เพศ:{" "}
					</label>
					<Radio.Group
						onChange={(e) => setInput({ ...input, gender: e.target.value })}
						value={input.gender}
						style={{ display: "flex" }}
					>
						<Radio value={"ผู้ชาย"}>ผู้ชาย</Radio>
						<Radio value={"ผู้หญิง"}>ผู้หญิง</Radio>
						<Radio value={"ไม่ระบุ"}>ไม่ระบุ</Radio>
					</Radio.Group>
				</div>
			</div>

			<div className={style.form__input}>
				<div className={style.form__input__select}>
					<label>
						<span className={style.form__input__select__start}>* </span>{" "}
						หมายเลขโทรศัพท์มือถือ:{" "}
					</label>
					<Select
						defaultValue="+66"
						style={{ width: 80, alignSelf: "self-start" }}
						// onChange={(value) => setInput({ ...input, nation: value })}
						options={[{ value: "+66", label: "+66" }]}
						size="small"
					/>
					<span>-</span>
					<Input
						size="small"
						style={{ width: 200 }}
						type="text"
						value={input.phone}
						onChange={(e) => setInput({ ...input, phone: e.target.value })}
					/>
				</div>
			</div>

			<div className={style.form__input}>
				<label>หนังสือเดินทาง: </label>
				<Input
					size="small"
					style={{ width: 200 }}
					type="text"
					value={input.passport}
					onChange={(e) => setInput({ ...input, passport: e.target.value })}
				/>
			</div>

			<div className={style.form__input}>
				<div className={style.form__input__select}>
					<label>
						<span className={style.form__input__select__start}>*</span>{" "}
						เงินเดือนที่คาดหวัง:{" "}
					</label>
					<Input
						size="small"
						style={{ width: 200 }}
						type="text"
						value={input.salary}
						onChange={(e) => setInput({ ...input, salary: e.target.value })}
					/>
				</div>
				<div className={style.form__input__button}>
					<Button onClick={resetForm}>ล้างข้อมูล</Button>
					{/* <button onClick={handleSubmitForm}>ส่งข้อมูล</button> */}
					<Button onClick={handleSubmitForm}>ส่งข้อมูล</Button>
				</div>
			</div>
		</form>
	);
};

export default function FormPage({}: Props) {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const dataTable: UserData[] = JSON.parse(getUserLocal());
	console.log("getUserLocal =>", dataTable);

	return (
		<div className={style.contain}>
			<div className={style.contain__top}>
				<h1>{t("Form & Table")}</h1>
				<Button size={"middle"} onClick={() => navigate(`/`)}>
					{t("HOME")}
				</Button>
			</div>

			{showForm()}
			{/* {JSON.stringify(dataTable)} */}
			<TableData dataTable={dataTable} />
		</div>
	);
}
