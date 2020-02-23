import React, { FunctionComponent } from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";

const LoadingComponent: FunctionComponent<{ trends: boolean }> = ({
  trends
}) => {
  const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${trends ? "200px" : "5px"};
    margin-bottom: ${trends ? "0px" : "5px"};
    @media (max-width: 575px) {
      margin-top: ${trends ? "100px" : "5px"};
    }
  `;
  return (
    <LoadingContainer>
      <ReactLoading type="spin" color="white" height={50} width={50} />
    </LoadingContainer>
  );
};

export default LoadingComponent;
