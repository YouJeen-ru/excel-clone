import {TABLE_RESIZE} from "@/redux/types";

// Action Creator
export function tableResize(data) {
    return {
        type: TABLE_RESIZE,
        data
    }
}