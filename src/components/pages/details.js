import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { countryInfo } from "../../redux/cases";
import CountryInformation from "../countryInformation";

const DetailPage = () => {
  const params = useParams();

  const { countryName } = params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countryInfo(countryName));
  }, []);

  return (
    <>
      <CountryInformation />
    </>
  );
};

export default DetailPage;
