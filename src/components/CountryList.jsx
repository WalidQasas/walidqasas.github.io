import CountryCard from "./CountryCard";
import { CountryListWrapper } from "./styles";
import { Link } from "react-router-dom";

function CountryList() {
    // Example data for countries
    const countries = [
        { name: "Brazil", code: "BR" },
        { name: "United States", code: "US" },
        { name: "Germany", code: "DE" },
        { name: "France", code: "FR" },
        { name: "Japan", code: "JP" },
        { name: "Canada", code: "CA" },
        { name: "Australia", code: "AU" },
        { name: "Mexico", code: "MX" },
        { name: "India", code: "IN" }
    ];

    return (
        <CountryListWrapper>
            {countries.map((country) => (
                <Link
                    key={country.code}
                    to={`/country/${country.name}`}
                    style={{ textDecoration: "none" }}
                >
                    <CountryCard country={country} />
                </Link>
            ))}
        </CountryListWrapper>
    );
}

export default CountryList;
