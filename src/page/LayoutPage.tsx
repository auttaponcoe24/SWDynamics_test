import React, { useState } from "react";
import { Button, Divider } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import style from "./LayoutPage.module.scss";
import "./LayoutPage.module.scss";

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

			<div className={style.contain__down}>
				{/* {actionButton()} */}
				<ActionButton />
			</div>
		</div>
	);
}

const ActionButton = () => {
	const { t } = useTranslation();
	let arr1: string[] = ["rectangular", "circle", "oval"];
	let arr2: string[] = ["trapezoid", "rectangle", "rhombus"];
	const [movePosition, setMovePosition] = useState(false);
	return (
		<div>
			<div className={style.container}>
				<button className={style.button}>
					<div className={style.box}>
						<div className={style.triangleLeft}></div>
					</div>
					<div className={style.button__inlineText}>{t("Move shape")}</div>
				</button>

				<button
					onClick={() => setMovePosition(!movePosition)}
					className={style.button}
				>
					<div className={style.box}>
						<div className={style.triangleTop}></div>
						<div className={style.triangleDown}></div>
					</div>
					<div className={style.button__inlineText}>{t("Move position")}</div>
				</button>

				<button className={style.button}>
					<div className={style.box}>
						<div className={style.triangleRight}></div>
					</div>
					<div className={style.button__inlineText}>{t("Move shape")}</div>
				</button>
			</div>
			<Divider />
			<div className={style.active}>
				{movePosition ? (
					<>
						{arr1.map((item, index) => (
							<ActiveButton key={index} data={item} index={index} />
						))}
						<div>{""}</div>
					</>
				) : (
					<>
						<div>{""}</div>
						{arr1.map((item, index) => (
							<ActiveButton key={index} data={item} index={index} />
						))}
					</>
				)}
			</div>
			<div className={style.active}>
				{movePosition ? (
					<>
						<div>{""}</div>
						{arr2.map((item, index) => (
							<ActiveButton key={index} data={item} index={index} />
						))}
					</>
				) : (
					<>
						{arr2.map((item, index) => (
							<ActiveButton key={index} data={item} index={index} />
						))}
						<div>{""}</div>
					</>
				)}
			</div>
		</div>
	);
};

const ActiveButton = ({ data }: any) => {
	// console.log("first =>", data);
	let newData = "style." + data;
	console.log("sss=>", newData);

	return (
		<div className={style.container}>
			<button className={style.button}>
				<div className={style.box}>
					<div>{data}</div>
					{/* <div className={`circle ${style.circle}`}></div> */}
				</div>
			</button>
		</div>
	);
};
