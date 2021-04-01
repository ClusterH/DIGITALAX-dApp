<template>
  <div class="start-layout">
    <div class="digital-fashion">
      <div class="title-section">
        <div class="page-content">
          <div class="heading">
            <span class="heading-text"> MARKETPLACE</span><img src="/images/favicon.png" class="black-logo" alt="" style="width: 5vw;" />
          </div>
          <div class="description">
            Digital fashion content supply chain built on top of ethereum, using NFTS as an efficient distribution channel
          </div>
        </div>
      </div>
      <div class="dress-section">
        <a href="https://marketplace.digitalax.xyz/" class="u-button" target="_blank">
          GET DIGITAL FASHION >
        </a>
      </div>
    </div>

     <div class="whitepaper-section">
      <div class="left-section">
        <nuxt-link to="/whitepaper" class="u-button">
          READ WHITEPAPER >
        </nuxt-link>
      </div>
      <div class="right-section">
        <div class="page-content">
          <div class="heading">WHITEPAPER</div>
          <div class="description">Read our whitepaper + Layer 2 R&D</div>
        </div>
      </div>
    </div>

    <div class="staking-section">
      <div class="page-content">
        <div class="left">
          <div class="heading">STAKING</div>
          <div class="description">Go to staking. For $MONA Token Distribution</div>
        </div>
        <div class="coin-image">
          <img src="/images/mona-coin.svg" alt="" />
          <img src="/images/mona-coin.svg" alt="" />
          <img src="/images/mona-coin.svg" alt="" />
          <img src="/images/mona-coin.svg" alt="" />
          <img src="/images/mona-coin.svg" alt="" />
        </div>

        <a href="https://staking.digitalax.xyz" class="u-button" target="_blank">
          GO TO STAKING >
        </a>
      </div>
    </div>

    <div class="doc-section">
      <div class="left-section">
        <a href="https://digitalax.gitbook.io/digitalax/" class="u-button" target="_blank">
          GO TO DOCUMENTATION >
        </a>
      </div>
      <div class="right-section">
        <div class="page-content">
          <div class="heading">DOCUMENTATION</div>
          <div class="description">See our documentation + $MONA utility</div>
        </div>
      </div>
    </div>

    <div class="pode-section">
      <div class="title-section">
        <div class="page-content">
          <div class="heading">
            PODE
          </div>
          <div class="description">
            Field Testers and Digital Evaluators
          </div>
        </div>
      </div>
      <div class="dress-section">
        <a href="https://pode.digitalax.xyz" class="u-button">
          <span>READ ABOUT PODE </span><span>PLAYER-CREATOR-PORTAL ></span>
        </a>
      </div>
    </div>

     <div class="espa-section">
      <div class="left-section">
        <a href="https://espa.digitalax.xyz" class="u-button">
          LEARN MORE >
        </a>
      </div>
      <div class="right-section">
        <div class="page-content">
          <img src="/images/espa-shadow.svg" />
          <div class="description">Esports for Indie devs, Modders, Digital Fashion Designers, Players</div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'StartPage'
}
</script>
<style lang="scss">
.start-layout {
  .digital-fashion {
    display: flex;

    .title-section {
      width: 50%;
    }

    .dress-section {
      width: 50%;
      display: flex;
      align-items: center;
      text-align: center;
      background-image: url("/images/dress-1.png"), url("/images/dress-2.png");
      background-repeat: no-repeat;
      background-size: 25%, 75%;
      background-position: left center, right center;

      .u-button {
        margin: auto;
      }
    }
  }

  .whitepaper-section {
    display: flex;
    background: black;
    height: 30vw;
    max-height: 200px;
    color: white;

    .left-section {
      width: 50%;
      display: flex;
      align-items: center;

      .u-button {
        margin: auto;
      }
    }

    .right-section {
      display: flex;
      align-items: center;
      .page-content {
        margin-left: auto;
        margin-right: 2vw;
      }
    }
  }

  .staking-section {
    background: #74A3F3;
    height: 200px;
    color: white;
    height: 30vw;
    max-height: 200px;

    .page-content {
      display: flex;
      align-items: center;
      padding-right: 7vw;
      height: 100%;

      .description {
        color: white;
      }

      .left {
        margin-right: 5vw;
      }

      img {
        margin-right: 10px;
        width: 6vw;

        @media (max-width: 1000px) {
          margin-right: 5px;
        }
      }

      .u-button {
        margin-left: 5vw;
      }
    }
  }

  .doc-section {
    display: flex;
    color: black;
    height: 30vw;
    max-height: 200px;

    .left-section {
      width: 50%;
      display: flex;
      align-items: center;

      .u-button {
        margin: auto;
      }

      margin-right: 10px;
    }

    .right-section {
      display: flex;
      align-items: center;

      .page-content {
        padding-left: 0;
      }
    }
  }

  .pode-section {
    display: flex;
    background: black;
    background-image: url("/images/pode.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
    color: white;
    height: 30vw;
    max-height: 200px;

    .title-section {
      width: 50%;
      display: flex;
      align-items: center;
    }

    .dress-section {
      width: 50%;
      display: flex;
      align-items: center;
      text-align: center;

      .u-button {
        margin: auto;
      }
    }
  }

  .espa-section {
    display: flex;
    height: 30vw;
    max-height: 200px;
    color: black;
    background: url(/images/espa-landing.png) no-repeat center, linear-gradient(to right, #74A3F3 0%, #261D43 50%, #74A3F3 110%);
    background-size: 50%;

    .left-section {
      width: 50%;
      display: flex;
      align-items: center;

      .u-button {
        margin: auto;
      }
    }

    .right-section {
      display: flex;
      align-items: center;
      img {
        height: 7vw;
      }
      .description {
        color: white;
      }

      .page-content {
        padding-left: 0;
        padding-top: 1vw;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
    }
  }

  .page-content {
    width: 100%;
    padding: 2vw 0 2vw 6vw;

    .heading {
      font-family: $font-inter;
      font-size: 4.7vw;
      font-weight: 800;
      line-height: 6vw;
      display: flex;
      align-items: center;
    }

    .description {
      padding-left: 0px;
      font-family: $font-inter;
      font-size: 1vw;
      font-weight: 800;
      line-height: 1.3vw;
      color: #74A3F3;

      @media (max-width: 1024px) {
        font-size: 12px;
        line-height: 15px;
      }

      @media (max-width: 768px) {
        font-size: 10px;
        line-height: 12px;
      }
    }
  }

  .u-button {
    text-transform: uppercase;
    font-family: $font-inter;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.12em;
    padding: 7px 10px;
    background: #3CC95B;
    box-sizing: border-box;
    border-radius: 7px;
    color: white;

    @media (max-width: 1000px) {
      font-size: 10px;
    }

    @media (max-width: 780px) {
      font-size: 8px;
    }
  }
}
</style>
<style lang="scss" scoped>
@media (max-width: 590px) {
  .start-layout {
    .digital-fashion {
      flex-direction: column;
      .title-section {
        width: 100%;
        .page-content {
          padding: 0 0 34px 33px;
          .heading {
            font-weight: $fw-black;
            font-size: 29px;
            line-height: 35px;
            position: relative;
            .heading-text {
              z-index: 10;
            }
            .black-logo {
              width: 92px !important;
              margin-left: -18px;
            }
          }
          .description {
            font-weight: 900;
            font-size: 7px;
            line-height: 8px;
            width: 197px;
            margin-top: 27px;
          }
        }
      }
      .dress-section {
        width: 100%;
        height: 95px;
      }
    }
    .whitepaper-section, .doc-section {
      display: flex;
      flex-direction: column-reverse;
      height: auto;
      max-height: unset;
      .left-section, .right-section {
        width: 100%;
      }
      .left-section {
        padding: 66px 0 39px;
      }
      .right-section {
        .page-content {
          padding: 31px 34px;
          .heading {
            font-weight: $fw-black;
            font-size: 29px;
            line-height: 35.1px;
          }
          .description {
            font-weight: $fw-black;
            font-size: 7px;
            line-height: 8.47px;
          }
        }
      }
    }
    .doc-section {
      .left-section {
        .u-button {
          font-size: $f11 !important;
        }
      }
    }
    .staking-section {
      height: auto;
      max-height: unset;
      .page-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-height: auto !important;
        height: auto;
        padding: 30px 28px 39px;
        .left {
          width: 100%;
          margin: 0;
          padding-left: 6px;
          .heading {
            font-weight: $fw-black;
            font-size: 29px;
            line-height: 35.1px;
          }
          .description {
            font-weight: $fw-black;
            font-size: 7px;
            line-height: 8.47px;
          }
        }
        .coin-image {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 25px 0 15px;
          img {
            width: 60px;
          }
        }
      }

    }
    .pode-section {
      display: flex;
      flex-direction: column;
      height: 250px;
      max-height: 250px;
      background-size: 260%;
      .title-section {
        width: 100%;
        .page-content {
          padding: 28px 34px;
          .heading {
            font-weight: $fw-black;
            font-size: 29px;
            line-height: 35px;
            position: relative;
            .black-logo {
              width: 73px !important;
            }
          }
          .description {
            font-weight: 900;
            font-size: 7px;
            line-height: 8.47px;
            color: white;
          }
        }
      }
      .dress-section {
        width: 100%;
        height: 95px;
        margin-top: 56px;
        .u-button {
          font-size: $f11;
        }
      }
    }
    .espa-section {
      display: flex;
      flex-direction: column-reverse;
      height: 250px;
      max-height: 250px;
      background-size: 260%;
      .right-section {
        width: 100%;
        .page-content {
          padding: 28px 34px;
          align-items: flex-start;
          img {
            height: 39px;
          }
          .description {
            display: none;
          }
        }
      }
      .left-section {
        width: 100%;
        height: 95px;
        margin-top: 56px;
      }
    }

    .u-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: $f10;
      font-weight: $fw-semiBold;
      width: 196px;
      max-width: 196px;
      height: 39px;
    }
  }
}
</style>
