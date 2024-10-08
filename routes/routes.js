import getAllAfrica from "../controller/controller.js";

export const getAfricasCountries = async (req, res) => {
  const { data, success } = await getAllAfrica();
  return res.status(200).send({ success, data });
};

export const setAfricasCountries = (req, res) => {
  const country = req.body;
  console.log(body);
};
