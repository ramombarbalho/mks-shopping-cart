import React from "react";
import styled, { keyframes } from "styled-components";

const StyledProductCardSkeleton = styled.li`
  width: 217.56px;
  height: 285px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 2px 8px 0px #00000022;
  overflow: hidden;
`;

const skeletonAnimation = keyframes`
  to {
    background-position-x: -20%;
  }
`;

const DivSkeleton = styled.div`
  background-color: #ddd;
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    #ddd;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s ${skeletonAnimation} ease-in-out infinite;
`;

const ProductCardSkeleton: React.FC = () => {
  return (
    <StyledProductCardSkeleton>
      <DivSkeleton style={{ height: "145px" }} />
      <div
        style={{
          margin: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <DivSkeleton
            style={{
              height: "25px",
              width: "100px",
              borderRadius: "5px",
            }}
          />
          <DivSkeleton
            style={{
              height: "25px",
              width: "60px",
              borderRadius: "5px",
            }}
          />
        </div>
        <DivSkeleton style={{ height: "50px", borderRadius: "5px" }} />
      </div>
    </StyledProductCardSkeleton>
  );
};

export default ProductCardSkeleton;
