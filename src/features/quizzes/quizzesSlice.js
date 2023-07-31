import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdToTopic } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;
            state.quizzes[id] = {
                id,
                name,
                topicId,
                cardIds,
            };
        },
    },
});

export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;

export const thunkActionCreator = (payload) => {
    return (dispatch) => {
        const { id, name, topicId, cardIds } = payload;

        dispatch(addQuiz({ id, name, topicId, cardIds }));
        dispatch(addQuizIdToTopic({ quizId: id, topicId }));
    }
}

export default quizzesSlice.reducer;