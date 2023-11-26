import { createSlice } from "@reduxjs/toolkit";

const UserName = createSlice({
    name:"User",
    initialState : null ,
    reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },

        removeUser:(state,action)=>{
            return null ;
        }
    }
})

export const {addUser ,removeUser} = UserName.actions ;
export default UserName.reducer ; 