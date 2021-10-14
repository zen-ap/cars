import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel, {Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/styles.css";

const TopCarsContainer = styled.div`
    ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10
    `};
`;

const Title = styled.h2`
    ${tw`
        text-3xl
        lg:text-5xl
        text-black
        font-extrabold
    `};
`;

const CarsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `};
`;
export function TopCars() {
    const [current, setCurrent] = useState(0);
    return (
      <TopCarsContainer>
        <Title>Explore Our Top Deals</Title>
          <CarsContainer>
            <Carousel
              value={current}
              onChange={setCurrent}
              slides={cars}
              plugins={[
                "clickToChange",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 3,
                  },
                },
              ]}
              breakpoints={{
                640: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 1,
                      },
                    },
                  ],
                },
                900: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 2,
                      },
                    },
                  ],
                },
              }}
            />
            <Dots value={current} onChange={setCurrent} number={numberOfDots} />
          </CarsContainer>
      </TopCarsContainer>
    );
  }