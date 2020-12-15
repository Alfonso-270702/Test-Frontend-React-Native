import { ADD_GROUP } from "./type";
import axios from "axios";

export const addGroup = (group) => {
  return {
    type: ADD_GROUP,
    payload: group,
  };
};

export const addGroupAsync = (data) => {
  return (dispatch) => {
    axios({
      method: "post",
      url: "http://bta70.omindtech.id/api/grup",
      body: {
        kelas_id: data.jenjang,
        nama: data.name,
        thumbnail: data.imageName,
      },
    })
      .then((_) => {
        dispatch(addGroup(data));
      })
      .catch(console.log);
  };
};
