<template>
  <div class="layout">
    <video id="myVideo" autoplay loop muted>
      <source src="~/assets/bg_video.mp4" type="video/mp4">
    </video>
    <div class="homepage">
      <div class="wrapper">
        <div class="intro-tag">
          DIGITALAX is Building the First
        </div>
        <h1 class="intro">
          Digital Fashion<br>Operating System.
        </h1>
        <div class="groups-bottom">
          <nuxt-link to="/start" class="u-button">
            START HERE >
          </nuxt-link>
          <a href="https://marketplace.digitalax.xyz/" target="_blank" class="marketplace-link">
            GET DIGITAL FASHION >
          </a>
        </div>
        <div class="intro-description">
          Optimised architecture for taking digital fashion into<br>
          gaming, VR and other live 3D content environments.
        </div>
      </div>

      <div class="page-2">
        <div class="img-bg">
          <div class="img-bg-left">
            <img class="img-2" src="/images/bg_img_2.png" alt="bg2">
            <img class="img-1" src="/images/bg_img_1.png" alt="bg1">
          </div>
          <div class="img-bg-right">
            <img class="img-3" src="/images/bg_img_3.png" alt="bg3">
            <img class="img-4" src="/images/bg_img_4.png" alt="bg4">
          </div>
        </div>
        <div class="page-content">
          <div class="heading">
            1ST LAYER
          </div>
          <div class="description">
            Digital fashion content supply chain built on top of ethereum, using NFTS as an efficient distribution channel
          </div>
          <div class="text">
            FRACTIONAL GARMENT <br/>
            COMPONENTS ISSUED BY <br/>
            INDEPENDENT ARTISTS & CREATORS
          </div>
          <div class="patterns">
            <a href="https://twitter.com/robnessofficial" class="description" target="_blank">
              Patterns Designed by ROBNESS
            </a>
          </div>
        </div>
      </div>

      <div class="page-3">
        <div class="page-content">
          <div class="heading">
            2ND LAYER
          </div>
          <div class="description">
            File Format Logic: Application specific interoperability channel
          </div>
          <div class="text">
            NEW FILE INTERCOMMUNICATION <br />
            FORMAT BETWEEN 3D DIGITAL FASHION <br />
            APPLICATIONS AND GAME ENGINES
          </div>
        </div>
        <nuxt-link to="/whitepaper" class="u-button w-button">
          File Format Revisions
        </nuxt-link>
      </div>

      <div class="page-4">
        <div class="page-content">
          <div class="left-content">
            <div class="heading">
              3RD LAYER
            </div>
            <div class="left-content-wrapper">
              <div class="description">
                First ever dedicated esports platform for independent developers, modders, designers, and casual players or gamers.
              </div>
              <div class="espa-content">
                <img src="/images/espa-shadow.svg" alt="espa" class="espa-shadow" />
                <a href="https://espa.digitalax.xyz/" class="u-button learn-more" target="_blank">
                  LEARN MORE
                </a>
                <img src="/images/espa.svg" alt="espa" class="espa-svg" />
              </div>
            </div>
          </div>
          <img src="/images/espa-among-us.png" alt="espa" class="espa-among-us" />
        </div>
      </div>

      <app-footer />
    </div>
  </div>
</template>
<script>
import AppFooter from '~/components/AppFooter'
export default {
  name: 'HomePage',
  components: {
    AppFooter
  }
}
</script>
<style lang="scss">
.layout {
  position: absolute;
  top: 0;
  #myVideo {
    object-fit: cover;
    width: 100vw;
    height: 105vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
}
.homepage {
  position: relative;
  top: 180;
  z-index: 2;

  .model-img {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 10vh;
    margin-bottom: 20vh;
    text-align: center;

    @media (max-width: 780px) {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      margin-top: 2vh;
      margin-bottom: 4vh;
    }
  }

  .page-2 {
    width: 100vw;
    height: 37vw;
    position: relative;
    margin-top: calc(50vh - 120px);

    @media (max-width: 780px) {
      margin-top: -50px;
    }

    .patterns {
      margin-top: 1vw;
      text-decoration: underline;
    }

    .img-bg {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      z-index: -1;

      .img-bg-left {
        width: 50%;
        position: relative;
        .img-1 {
          position: absolute;
          right: 50%;
          top: 0;
          height: 37vw;
        }

        .img-2 {
          position: absolute;
          right: 0;
          top: 0;
          height: 37vw;
        }
      }

      .img-bg-right {
        position: relative;
        width: 50%;

        .img-3 {
          position: absolute;
          left: 0;
          top: 0;
          height: 37vw;
        }

        .img-4 {
          position: absolute;
          left: 50%;
          top: 0;
          height: 37vw;
        }
      }
    }
  }

  .page-3 {
    background: black;
    width: 100vw;
    position: relative;
    height: 37vw;

    .text {
      background: -webkit-linear-gradient(360deg, #FC8EFF 5%, #31F949, #FFFF8B, #000000);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .w-button {
      background: white;
      color: black;
      margin-top: 4vw;
      float: right;
      margin-right: 8vw;

      @media (max-width: 720px) {
        font-size: 8px;
        padding: 5px 10px;
      }

      @media (max-width: 320px) {
        margin-top: 2vw;
      }
    }
  }

  .page-4 {
    background: #74A3F3;
    width: 100vw;
    height: 60vw;

    .page-content {
      display: flex;
      height: 100%;

      .left-content {
        width: 50%;

        .left-content-wrapper {
          display: flex;
          flex-direction: column;

          .espa-shadow {
            padding-left: 0px;
            width: 100%;
          }

          .learn-more {
            padding: 5px 20px;
            align-self: flex-end;
            margin-right: 20px;

            @media (max-width: 550px) {
              font-size: 8px;
            }
          }
          .espa-svg {
            display: none;
          }
        }
      }

      .espa-among-us {
        height: 35vw;
        align-self: flex-end;
        margin-bottom: 50px;
      }
    }
  }

  .page-content {
    margin: 0 7vw;
    width: 100%;
    padding-top: 6vw;
    font-weight: 800;
    color: white;

    @media (max-width: 1200px) {
      margin-left: 50px;
      width: calc(100% - 50px);
    }

    @media (max-width: 850px) {
      padding-top: 5vw;
    }

    @media (max-width: 550px) {
      padding-top: 4vw;
    }

    @media (max-width: 400px) {
      padding-top: 2vw;
    }

    .heading {
      font-family: $font-inter;
      font-size: 6vw;
      font-weight: 800;
      line-height: 7vw;

      @media (max-width: 450px) {
        font-size: 5vw;
        font-weight: 600;
        line-height: 6vw;
      }
    }

    .description {
      font-family: $font-inter;
      font-size: 20px;
      line-height: 25px;

      @media (max-width: 1200px) {
        font-size: 14px;
        line-height: 18px;
      }

      @media (max-width: 720px) {
        font-size: 12px;
        line-height: 14px;
      }

      @media (max-width: 450px) {
        font-size: 10px;
        line-height: 12px;
      }
    }

    .text {
      font-family: $font-inter;
      font-size: 3.3vw;
      line-height: 4vw;
      margin-top: 5px;

      @media (max-width: 450px) {
        font-size: 2.5vw;
        line-height: 3vw;
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
  }

  .groups-bottom {
    margin-top: 30px;
    margin-bottom: 30px;

    .marketplace-link {
      color: #376ce6;
      margin-left: 20px;
    }
  }

  .wrapper {
    margin-top: 25vh;
    margin-left: 10vw;

    .intro-tag {
      color: #376ce6;
      font-family: $font-armata;
      font-size: 25px;
      line-height: 50px;
    }

    .intro {
      color: #376ce6;
      font-family: $font-inter;
      font-size: 60px;
      font-weight: 900;
      line-height: 80px;
    }

    .intro-description {
      color: #376ce6;
      font-family: $font-armata;
      font-size: 20px;
      line-height: 30px;
    }

    @media (max-width: 780px) {
      margin-top: 10vh;
      min-height: 100vh;

      .intro-tag {
        font-size: 20px;
        line-height: 35px;
      }

      .intro {
        font-size: 40px;
        line-height: 50px;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@media all and (max-width: 590px) {
  #myVideo {
    height: 186px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #74A3F3;
    margin-left: 0px;
    margin-top: 269px;
    padding-bottom: 106px;
    height: auto;
    min-height: unset;
    .intro-tag {
      font-size: 18px;
      line-height: 23px;
      color: #74A3F3;
    }
    .intro {
      text-align: center;
      font-size: 34px;
      line-height: 36px;
      color: #74A3F3;
      margin: 0px;
    }
    .groups-bottom {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-top: 9px;
      margin-bottom: 17px;
      color: #74A3F3;
      .u-button {
        padding: 9px 10px 8px;
        font-size: $f9;
        font-weight: $fw-semiBold;
      }
      .marketplace-link {
        font-size: 8.5px;
        font-weight: $fw-bold;
        line-height: 10.3px;
        letter-spacing: 0.12em;
        margin-left: 0px;
        margin-top: 9px;
        color: #74A3F3;
      }
    }
    .intro-description {
      text-align: center;
      font-size: 17px;
      line-height: 23px;
      margin: 0 10px;
      color: #74A3F3;
    }
  }
  .page-2 {
    height: auto !important;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .img-bg {
      display: flex;
      flex-direction: column;
      position: unset !important;
      width: 100% !important;
      .img-bg-left {
        width: 100% !important;
        position: unset !important;
        display: flex;
        flex-direction: column;
        .img-1,.img-2 {
          width: 100% !important;
          height: 104px !important;
          position: unset !important;
          object-fit: cover;
        }
      }
      .img-bg-right {
        width: 100% !important;
        position: unset !important;
        display: flex;
        flex-direction: column;
        .img-3,.img-4 {
          width: 100% !important;
          height: 104px !important;
          position: unset !important;
          object-fit: cover;
        }
      }
    }
    .page-content {
      margin-left: 31px;
      position: absolute;
      top: 66px;
      left: 0px;
      line-height: 35.1px;
      .heading {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 190px;
        font-size: 37px;
        font-weight: 900;
        line-height: 44.78px;
      }
      .description {
        margin-top: 78px;
        width: 172px;
        font-size: 10px;
        line-height: 12.1px;
      }
      .text {
        width:100%;
        font-size: 29px;
        line-height: 35.1px;
      }
      .patterns {
        display: none;
      }
    }
  }
  .page-3 {
    height: auto;
    position: unset;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-bottom: 1vh;

    .page-content {
      margin-left: 31px;
      .heading {
        margin-top: 66px;
        font-size: 37px;
        font-weight: 900;
        line-height: 44.78px;
      }
      .description {
        width: 187px;
        font-size: 10px;
        line-height: 12.1px;
      }
      .text {
        word-break: break-word;
        width: 84vw;
        margin-top: 21px;
        font-size: 28px;
        line-height: 33.89px;
      }
    }
    .u-button {
      display: none;
      margin: 0px;
    }
  }
  .page-4 {
    height: auto;
    position: unset;

    .page-content {
      position: relative;
      margin-left: 31px;
      padding: 0px;
      .left-content {
        width: 100vw;
        .heading {
          width: 209px;
          margin-top: 84px;
          font-size: 37px;
          font-weight: 900;
          line-height: 44.78px;
        }
        .left-content-wrapper {
          .description {
            width: 187px;
            font-size: 10px;
            line-height: 12.1px;
          }
          .espa-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            .espa-shadow {
              margin-top: 67px;
              width: 220px;
            }
            .u-button {
              align-self: center;
              margin: 0px;
              font-size: 11px;
              background: transparent;
            }
            .espa-svg {
              width: 236px;
              display: block;
            }
          }
        }
      }
      .espa-among-us {
        position: absolute;
        top: 73px;
        right: 3px;
        width: 136px;
        height: 159px;
      }
    }
  }
}
</style>
