const USER: string = "USER";

// create
export const addUserLocal = (user: any) => localStorage.setItem(USER, user);

// get
export const getUserLocal: any = () => localStorage.getItem(USER);

// del
export const removeUserLocal = () => localStorage.removeItem(USER);
