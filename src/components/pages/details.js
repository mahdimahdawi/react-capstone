import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
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
    <Link to="/">{<BiArrowBack />}</Link>
      <CountryInformation />
    </>
  );
};

export default DetailPage;
