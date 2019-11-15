import React from "react";
import { css } from "glamor";

import ContentWrapper from "./ContentWrapper";

import cubes1webp from "../assets/img/icons/cubes-1.webp";
import cubes1png from "../assets/img/icons/cubes-1.png";

const caretCSS = (backgroundColor) =>
  css({
    backgroundColor,
    width: "26px",
    height: "4px"
  });

const OpeningSummary = () => (
  <section id="about">
  <div
    css={{
      position: "relative",
      zIndex: 9999,
      width: "100%",
      paddingTop: "80px",
      paddingBottom: "80px"
    }}
    >
    <ContentWrapper>
      <div
        css={{
          background: "#ffffff",
          display: "grid",
          gridTemplateColumns: "auto auto",
          padding: "40px 55px 40px 55px",
          margin: "0 auto 0 auto",
          borderRadius: "8px",
          boxShadow: "4px 9px 40px 2px rgba(7, 16, 75, 0.1)",
          border: "solid 1px #e8e8e8",
          "@media(max-width: 750px)": {
            padding: "32px 24px 32px 24px"
          },
          "@media(max-width: 1115px)": {
            display: "block"
          }
        }}
        >
        <div
          css={{
            paddingRight: "43px",
            "@media (max-width: 920px)": { paddingRight: "0px" }
          }}
          >
          <h1 css={{ paddingTop: "2px" }}>Dream It. Build It.</h1>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "auto auto 1fr",
              gridColumnGap: "4px",
              padding: "13px 0px 27px 0px"
            }}
            >
            <div {...caretCSS("#00205b")} />
            <div {...caretCSS("#c81c2e")} />
            <div {...caretCSS("#fedb01")} />
          </div>
          <p css={{ lineHeight: "24px", fontColor: "#000000" }}>
          Join over 500 hackers, speakers and mentors to create, learn and share your ideas.
          </p>
        </div>
        <div
          css={{
            margin: "auto auto auto auto",
            "@media(max-width: 1115px)": {
              height: "40vw"
            },
            "@media(max-width: 715px)": {
              height: "50vw"
            }
          }}
          >
         
          <iframe
            title="2018 QHacks Hackathon Highlights"
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FQHacks%2Fvideos%2F346061232921670%2F&show_text=0&width=560"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            css={{
              width: "500px",
              height: "281px",
              "@media(max-width: 1215px)": {
                width: "400px",
                height: "225px"
              },
              "@media(max-width: 1115px)": {
                paddingTop: "40px",
                width: "100%",
                height: "100%"
              }
            }}
            />
        </div>
        <picture
          css={{
            width: "275px",
            height: "196px",
            "@media(max-width: 1000px)": {
              width: "165px",
              height: "118px",
              bottom: "-70px"
            },
            position: "absolute",
            bottom: "-140px",
            right: "40px"
          }}
          >
          <source srcSet={cubes1webp} type="image/webp" />
          <source srcSet={cubes1png} type="image/png" />
          <img
            css={{
              width: "275px",
              height: "196px",
              "@media(max-width: 1000px)": {
                width: "165px",
                height: "118px"
              }
            }}
            src={cubes1png}
            alt="Floating cubes"
            />
        </picture>
      </div>
    </ContentWrapper>
  </div>
  </section>
);

export default OpeningSummary;