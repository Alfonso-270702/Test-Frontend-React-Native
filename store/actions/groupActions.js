import { ADD_GROUP } from "./type";
import axios from "axios";

export const addGroup = (group) => {
  return {
    type: ADD_GROUP,
    payload: group,
  };
};

export const addGroupAsync = (data, token) => {
  return (dispatch) => {
    axios({
      method: "post",
      url: "http://bta70.omindtech.id/api/grup",
      headers: {
        Authorization: token,
      },
      data: {
        kelas_id: data.jenjang,
        nama: data.name,
        thumbnail: data.image,
      },
    })
      .then((_) => {
        dispatch(addGroup(data));
      })
      .catch(console.log);
  };
};
