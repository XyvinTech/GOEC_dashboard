import React from "react";
import StyledSearchField from "../../../ui/styledSearchField";
import StyledButton from "../../../ui/styledButton";
import "./ChargingTariff.css";
import StyledTable from "../../../ui/styledTable";
function ChargingTariff({ data, headers }) {
  const handleClick = () => {
    console.log("I am clicked...!");
  };

  return (
    <div className="container">
      <div className="top_nav">
        <div className="title_div">
          <h3 className="title">Charging Tariff</h3>
          <p className="lastSync">
            Last synced
            <span className="time">
              4 minutes ago
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M10.5 1.96875C5.79592 1.96875 1.96875 5.79592 1.96875 10.5C1.96875 15.2041 5.79592 19.0312 10.5 19.0312C15.2041 19.0312 19.0312 15.2041 19.0312 10.5C19.0312 5.79592 15.2041 1.96875 10.5 1.96875ZM15.4219 9.7933H11.7715L13.2841 8.28064L13.0545 8.01363C12.6436 7.58712 12.1335 7.26906 11.5697 7.08788C11.0058 6.90671 10.4059 6.86808 9.82353 6.97544C9.24113 7.0828 8.69442 7.3328 8.23226 7.7031C7.7701 8.07339 7.40691 8.55244 7.17515 9.09742C6.94339 9.64239 6.85028 10.2363 6.90416 10.8261C6.95804 11.4158 7.15722 11.983 7.48389 12.477C7.81056 12.9709 8.25455 13.3762 8.77615 13.6567C9.29776 13.9371 9.88072 14.0839 10.4729 14.0839C11.2141 14.0833 11.9368 13.8533 12.5421 13.4255C13.1473 12.9977 13.6054 12.3932 13.8534 11.6948L14.0737 11.0742L15.3111 11.5119L15.0938 12.1324C14.7946 12.9789 14.2686 13.7269 13.5731 14.2946C12.8776 14.8623 12.0394 15.228 11.1502 15.3515C10.2609 15.475 9.35481 15.3518 8.53089 14.9951C7.70697 14.6385 6.99695 14.0622 6.47842 13.3293C5.95988 12.5964 5.6528 11.7351 5.59073 10.8394C5.52865 9.94377 5.71398 9.0483 6.12645 8.25087C6.53892 7.45344 7.16267 6.78474 7.92951 6.31785C8.69635 5.85097 9.57678 5.60387 10.4746 5.60355C11.1372 5.60102 11.7933 5.73418 12.4024 5.99482C13.0116 6.25547 13.561 6.63808 14.0167 7.11908L14.0396 7.14451L14.2164 7.34959L15.4219 6.14455V9.7933Z"
                  fill="#828282"
                />
              </svg>
            </span>
          </p>
        </div>
        <div className="search_div">
          <StyledSearchField placeholder="Search" />
          <StyledButton
            variant="primary"
            width="153"
            height="51"
            onClick={handleClick}
          >
            ADD
          </StyledButton>
        </div>
      </div>
      <StyledTable data={data} headers={headers} />
    </div>
  );
}

export default ChargingTariff;
