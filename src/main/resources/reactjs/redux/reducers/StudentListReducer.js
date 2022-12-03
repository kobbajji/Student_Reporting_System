import * as types from "../actions/actionTypes";
import initialState from "./initialState";



export default function studentsReducer(state = initialState.students, action) {
	switch (action.type) {
		case types.CREATE_STUDENT_SUCCESS:
		return [...state, { ...action.student }];
		case types.UPDATE_STUDENT_SUCCESS:
		return state.map((student) =>
		student.id === action.student.id ? action.student : student
		);
		case types.GET_ALL_STUDENTS_SUCCESS:
		return action.students;
		case types.DELETE_STUDENT_SUCCESS:
		return state.filter((student) => student.id !== action.student.id);
		default:
		return state;
	}
}





