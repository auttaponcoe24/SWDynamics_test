import React from "react";
import { useTranslation } from "react-i18next";
import style from "./HomePage.module.scss";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function HomePage({}: Props) {
	const { t } = useTranslation();

	const navigate = useNavigate();

	const card = [];

	return (
		<div className={style.home}>
			<div className={style.home__card}>
				<button
					onClick={() => navigate(`/layout-page`)}
					className={style.home__card__item}
				>
					<h1 className={style.home__card__item__h1}>{t("Test")} 1</h1>
					<p>{t("Layout & Style")}</p>
				</button>
				<button className={style.home__card__item}>
					<h1 className={style.home__card__item__h1}>{t("Test")} 2</h1>
					<p>{t("Connect API")}</p>
				</button>
				<button
					onClick={() => navigate(`/form-page`)}
					className={style.home__card__item}
				>
					<h1 className={style.home__card__item__h1}>{t("Test")} 3</h1>
					<p>{t("Form & Table")}</p>
				</button>
			</div>
		</div>
	);
}
