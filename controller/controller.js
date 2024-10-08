import Country from "../model/country.js";

const getAllAfrica = async () => {
  try {
    const res = await Country.find({});
    return { success: true, data: res };
  } catch (error) {
    return { success: false, data: error };
  }
};

export default getAllAfrica;
