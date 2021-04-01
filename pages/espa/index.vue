<template>
  <div class="espa-layout">
    <div class="title">
      ESPA
    </div>
    <div class="description">
      <div class="subtitle">
        ESPA is the first ever dedicated Esports platform for Indie devs, Modders and Every Player.
        <br><br>
        We are introducing for the first time ever, “Casual Esports”.
        <br><br>
      </div>
      We are on a mission to democratise and unlock value for all Players and Creators. We are imposing a triad interdependence between Developers, Players and Designers — where each has a defined role within the Digital Economy Ecosystem and adds unique points of value that are both siloed and specific, yet also very much cross-reliant and overlapping.
      <br><br>
      <b>Digital Fashion is also very much at the heart of ESPA— where digital fashion skins and wearables provide Players, Indie Devs and Modders their consistent income streams and ability to make a livelihood.</b>

      <br><br><br><br>
      <img src="/images/espa1.png" alt="" class="espa-img">
      <br><br><br><br>
      $MONA is the core value driver for the ESPA and DIGITALAX Ecosystem. It is an ERC-20 utility token with genuine functional use, a custom and purpose built incentive for embedding sustainable value within the ESPA ecosystem and <b>also directing the livelihood streams for designers, for indie developers/modders and for players that a part of ESPA.</b>
      <br><br>
      <youtube :video-id="'NsyOJGofvYY'" class="youtube-video" />
      <br><br>
      The first BETA of ESPA is launching soon. Stay up to do across our official Discord Community <a href="https://discord.com/invite/QM6CktUsKw" target="_blank">here</a>, our Medium Article releases <a href="https://espa4play.medium.com/" target="_blank">here</a>, and our YT video content <a href="https://www.youtube.com/channel/UCoZ1xSTFChe-k6QcUVWUTVw" target="_blank">here</a>.
      <br><br>
      <div class="subtitle">
        Visit the official ESPA homepage <a href="https://espa.digitalax.xyz" target="_blank">here</a>.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ESPAPage'
}
</script>
<style lang="scss">
.espa-layout {
    background: white;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 55px;
    margin-top: -55px;
    padding-bottom: 30vh;

    .youtube-video {
      display: flex;
      justify-content: center;
    }

  .title {
      font-family: $font-inter;
        font-size: 75px;
        line-height: 90px;
        font-weight: 900;
        color: black;
        margin-top: 10vh;
    }
    .description {
        margin-top: 5vh;
      font-family: $font-inter;
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        color: black;
        margin-bottom: 10vh;

        .subtitle {
          font-size: 28px;
        }

        a {
            color: rgb(51, 51, 209);
        }
    }
    .espa-img, .espa-video {
      width: 80%;
      padding-left: 20%;
    }
}
</style>
