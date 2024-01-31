import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import style from "./FormPage.module.scss";
import { Button } from "antd";

type Props = {};

export default function FormPage({}: Props) {
	const { t } = useTranslation();
	const navigate = useNavigate();

	return (
		<div className={style.contain}>
			<div className={style.contain__top}>
				<h1>{t("Form & Table")}</h1>
				<Button size={"middle"} onClick={() => navigate(`/`)}>
					{t("HOME")}
				</Button>
			</div>
		</div>
	);
}
