import React from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import style from "./LayoutPage.module.scss";

type Props = {};

export default function LayoutPage({}: Props) {
	const { t } = useTranslation();
	const navigate = useNavigate();
	return (
		<div className={style.contain}>
			<div className={style.contain__top}>
				<h1>{t("Layout & Style")}</h1>
				<Button size={"middle"} onClick={() => navigate(`/`)}>
					{t("HOME")}
				</Button>
			</div>
		</div>
	);
}
