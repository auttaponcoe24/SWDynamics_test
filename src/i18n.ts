import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	EN: {
		translation: {
			Test: "Test",
			"Layout & Style": "Layout & Style",
			"Connect API": "Connect API",
			"Form & Table": "Form & Table",
			"Move shape": "Move shape",
			"Move position": "Move position",
			HOME: "HOME",
		},
	},
	TH: {
		translation: {
			Test: "แบบทดสอบที่",
			"Layout & Style": "การจัดการหน้าเว็บ",
			"Connect API": "การเชื่อมต่อ API",
			"Form & Table": "การจัดการหน้าฟอร์ม",
			"Move shape": "เลื่อนรูปแบบ",
			"Move position": "เปลี่ยนตำแหน่ง",
			HOME: "หน้าหลัก",
		},
	},
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "EN",
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
