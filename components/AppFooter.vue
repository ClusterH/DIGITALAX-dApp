<template>
  <div class="footer" :class="'footer-' + currentPage">
    <div class="footer-wrapper">
      <div class="heading">
        GET IN TOUCH
      </div>
      <div class="description">
        Contact us through contact@digitalax.xyz or reach out on any of our social media channels. We would love to hear from you.
      </div>
      <div class="center-wrapper">
        <div class="d-flex about-line">
          <a href="https://drive.google.com/file/d/1zG8h4GnodW7uWm_OsUY3g4I4RpOx6bMH/view?usp=sharing">
            ABOUT DIGITALAX
          </a>
          <a href="https://digitalax.gitbook.io/digitalax/" target="_blank">
            DOCUMENTATION
          </a>
          <a href="https://drive.google.com/file/d/1oFiBGBr_CN0-mUuuEp_g6wDBr-mNA0Uh/view?usp=sharing">
            READ ABOUT ESPA
          </a>
        </div>
        <img src="/images/white-logo.svg" alt="white-logo" class="white-logo" />
        <div class="d-flex icons-line">
          <a href="https://www.facebook.com/digitalax1" target="_blank">
            <img src="/images/facebook.svg" alt="" class="facebook-icon">
          </a>
          <a href="https://twitter.com/DIGITALAX_" target="_blank">
            <img src="/images/twitter.svg" alt="" class="twitter-icon">
          </a>
          <a href="https://www.instagram.com/digitalax_" target="_blank">
            <img src="/images/instagram.svg" alt="" class="instagram-icon">
          </a>
          <a href="https://www.tiktok.com/@digitalax?" target="_blank">
            <img src="/images/tiktok.svg" alt="" style="margin-right: 20px;" class="tiktok-icon">
          </a>
          <a href="https://www.twitch.tv/digitalax" target="_blank">
            <img src="/images/twitch.svg" alt=""  style="margin-right: 20px;" class="twitch-icon">
          </a>
          <a href="https://discord.com/invite/DKbSqRGtKv" target="_blank">
            <img src="/images/discord.svg" alt="" class="discord-icon">
          </a>
          <a href="https://www.reddit.com/r/DIGITALAX/" target="_blank">
            <img src="/images/reddit.svg" alt="" class="reddit-icon">
          </a>
          <a href="https://www.youtube.com/channel/UCE26XV44aaYe1zlPnDbiz5Q" target="_blank">
            <img src="/images/youtube.svg" alt="" class="youtube-icon">
          </a>
        </div>
        <div class="d-flex faq-line">
          <a href="https://digitalax.gitbook.io/digitalax/faq" target="_blank">
            FAQs
          </a>
          <a href="https://marketplace.digitalax.xyz/" target="_blank">
            Digital Fashion Auctions
          </a>
          <a href="https://staking.digitalax.xyz" target="_blank">
            Staking
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      isHomePage: true,
      currentPage: 'homepage'
    }
  },
  watch: {
    $route (to, from) {
      this.checkPage(this.$route.path)
    }
  },
  created () {
    this.checkPage(this.$route.path)
  },
  methods: {
    checkPage (url) {
      this.currentPage = this.$route.name
      if (url && url !== '/homepage') {
        this.isHomePage = false
      } else {
        this.isHomePage = true
      }
    }
  }
}
</script>

<style lang="scss">
.footer-wrapper {
  color: white;
  background: black;
  padding: 40px 7vw;

  .heading {
    font-weight: 800;
    font-size: 24px;
    line-height: 28px;
  }

  .description {
    font-weight: 800;
    font-size: 15px;
    line-height: 20px;
  }

  .center-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    .d-flex {
      display: flex;
    }

    .about-line {
      font-weight: 800;
      font-size: 14px;
      line-height: 18px;

      :not(:last-child) {
        margin-right: 50px;
      }

      @media (max-width: 600px) {
        :not(:last-child) {
          margin-right: 3vw;
        }
      }
    }

    & > :not(:last-child) {
      margin-bottom: 10px;
    }

    .icons-line {
      align-items: center;
      img {
        margin-right: 10px;
      }
    }

    .faq-line {
      font-weight: 800;
      font-size: 14px;
      line-height: 18px;
      text-decoration: underline;

      :not(:last-child) {
        margin-right: 30px;
      }

      @media (max-width: 600px) {
        :not(:last-child) {
          margin-right: 2vw;
        }
      }
    }
  }

  .white-logo {
    width: 30px;
  }
}
</style>

<style lang="scss" scoped>
@media all and (max-width: 590px) {
  .footer-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 900;

    .heading {
      font-size: 37px;
      line-height: 45px;
    }
    .description {
      font-weight: 900;
      font-size: 12px;
      line-height: 17px;
      text-align: center;
    }
    .center-wrapper {
      .about-line, .faq-line {
        font-size: 10px;
        line-height: 12px;
      }
      .icons-line {
        img {
          width: 30px;
          max-height: 30px;
          object-fit: cover;
        }
        .facebook-icon, .twitter-icon {
          width: 25px;
        }
        .tiktok-icon, .twitch-icon {
          width: 18px;
        }
         .discord-icon, .youtube-icon {
          width: 21px;
         }
      }

      .white-logo {
        width: 41px;
      }
    }
  }
}
</style>
