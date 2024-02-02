import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserData } from "../../models/user.model";
import { addUserLocal } from "../../utils/localStorage";

interface UserState {
	lastId: number;
	users: UserData[];
}

const initialState: UserState = {
	// type: "",
	// firstName: "",
	// lastName: "",
	// date: "",
	// nation: "",
	// idCard: "",
	// gender: "",
	// phone: "",
	// passport: "",
	// salary: "",
	lastId: 0,
	users: [],
};

// export const addUser = createAsyncThunk(
// 	"user/addUser",
// 	async (input: UserData) => {
// 		// await new Promise((resolve) => setTimeout(resolve, 2000));
// 		const result = await addUserLocal(input);
// 		return result;
// 	}
// );

// export const addUser = (input: UserData) => {
// 	const result = addUserLocal(input);
// 	return result;
// };

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.lastId++;

			state.users.push({
				id: state.lastId,
				type: action.payload.type,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
				date: action.payload.date,
				nation: action.payload.nation,
				idCard: action.payload.idCard,
				gender: action.payload.gender,
				phone: action.payload.phone,
				passport: action.payload.passport,
				salary: action.payload.salary,
			});
			addUserLocal(JSON.stringify(state.users));
		},
	},
	// extraReducers: (builder) => {},
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
