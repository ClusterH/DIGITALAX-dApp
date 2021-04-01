<template>
  <div class="main">
    <div class="one-side">
      <app-header :is-home-page="isHomePage" />
      <nuxt />
      <app-footer v-if="!isHomePage" />
    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader'
import AppFooter from '~/components/AppFooter'

export default {
  name: 'DefaultLayout',

  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {
      isHomePage: true
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
      if (url && url !== '/homepage' && url !== '/homepage/') {
        this.isHomePage = false
      } else {
        this.isHomePage = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/layouts/_default.scss";

@-webkit-keyframes digitalax {
    0%{background-position:0% 63%}
    50%{background-position:100% 38%}
    100%{background-position:0% 63%}
}
@-moz-keyframes digitalax {
    0%{background-position:0% 63%}
    50%{background-position:100% 38%}
    100%{background-position:0% 63%}
}
@-o-keyframes digitalax {
    0%{background-position:0% 63%}
    50%{background-position:100% 38%}
    100%{background-position:0% 63%}
}
@keyframes digitalax {
    0%{background-position:0% 63%}
    50%{background-position:100% 38%}
    100%{background-position:0% 63%}
}

  .main {
    background-color: #fff;
  }

  .one-side {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-size: 800% 800%;
    -webkit-animation: digitalax 15s ease infinite;
    -moz-animation: digitalax 15s ease infinite;
    -o-animation: digitalax 15s ease infinite;
    animation: digitalax 15s ease infinite;

    // padding-bottom: 86px;
    /deep/ .navigation-bar {
      padding: 10px 60px 0 60px;
      position: relative;
      z-index: 3;
      @media (max-width: 1300px) {
        padding-top: 10px;
      }
    }

    /deep/ .footer {
      width: 100%;
      position: relative;
      z-index: 3;

      .left-block {
        a {
          color: black;
          margin-right: 20px;
        }
      }
      .right-block {
        a {
          color: $color-grey-dusty;
          margin-right: 20px;
        }
      }
    }
  }
  @media (max-width: 640px) {
    .one-side {
      /deep/ .navigation-bar {
        padding: 20px 16px 0 16px;
      }
    }
  }
  @media (max-width: 1300px) {

    .right-side {
      padding-top: 0px;
      background-size: 525px;
    }
    .branding {
      .brand {
        font-size: 14px!important;
      }
      .sub-brand {
        font-size: 6px!important;
      }
    }
  }
  @media (max-width: 1200px) {
    .left-side {
      display: none;
    }
    .right-side {
      width: 100%;
      background-size: 525px;
    }
  }
  @media (max-width: 850px) {
    body {
      overflow-x: hidden;
    }
  }
</style>
