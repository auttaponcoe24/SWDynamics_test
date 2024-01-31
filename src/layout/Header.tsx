import React from "react";
import { Select, Space } from "antd";
import { useTranslation } from "react-i18next";
import style from "./Header.module.scss";

type Props = {};

export default function Header({}: Props) {
	const { i18n } = useTranslation();

	const handleChange = (lang: string) => {
		// console.log(`selected ${lang}`);
		i18n.changeLanguage(lang);
	};

	return (
		<header className={style.header}>
			<Space wrap>
				<Select
					defaultValue="EN"
					style={{ width: 70 }}
					onChange={handleChange}
					options={[
						{ value: "EN", label: "EN" },
						{ value: "TH", label: "TH" },
					]}
				/>
			</Space>
		</header>
	);
}
