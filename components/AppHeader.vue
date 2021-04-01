<template>
  <div class="navigation-bar">
    <div class="branding">
      <nuxt-link to="/homepage">
        <span class="brand text--uppercase fw-normal">Digitalax </span>
        <span class="sub-brand" :class="!isHomePage ? 'black' : ''">The Digital Fashion Engine</span>
      </nuxt-link>
    </div>

    <div class="list-link" :class="!isHomePage ? 'black' : ''">
      <ul>
        <li>
          <nuxt-link to="/whitepaper">
            R&D
          </nuxt-link>
        </li>
        <li>
          <a href="https://marketplace.digitalax.xyz/" target="_blank">
            Marketplace
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1zG8h4GnodW7uWm_OsUY3g4I4RpOx6bMH/view?usp=sharing" target="_blank">
            WhitePaper
          </a>
        </li>
        <li>
          <a href="https://staking.digitalax.xyz" target="_blank">
            Staking
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AppHeader',
  props: {
    isHomePage: Boolean
  }
}
</script>

<style lang="scss">
.avatar-style{
  margin-left: 10px;
}
.navigation-bar {
  display: flex;
  justify-content: space-between;
  padding: 0;
  padding-left: 14vh;
  @media (max-width: 1300px) {
    padding-left: 23vh;
  }
  .branding {
      display: flex;
      flex-direction: row;
      height: 45px;
      justify-content: space-between;
      padding-top: 10px;
      .brand {
        font-family: $font-inter-rainbows;
        font-size: $f6;
        line-height: 20px;
        color: #376ce6;

        &.black {
          color: black !important;
        }
      }
      .sub-brand {
        display: block;
        color: $color-sliver-chalice;
        font-size: $f12;
        font-weight: $fw-semiBold;
        line-height: 10px;

        &.black {
          color: black !important;
        }
      }
  }
  .brand-home {
    display: none;
  }

  .list-link {
    &.black {
      ul li a {
        color: black !important;
        border-color: black !important;
      }
    }
    ul {
      line-height: 44px;
      li {
        display: inline-block;
        margin-right: 20px;
        a {
          font-size: $f10;
          color: #376ce6;
          border-bottom: thin solid #376ce6;
          padding-bottom: 2px;
        }
      }
    }
  }
  .account {
    .connect-wallet {
      font-size: $f10;
      padding: 13.5px 16px;
    }
  }

  .account-number {
    width: 150px;
    display: flex;
    padding-top: 11px;
    .acc {
      width: 78px;
      overflow: hidden;
      font-family: $font-inter;
      font-size: $f8;
    }
  }
  @media (max-width: 640px) {
    padding-left: 0;
    padding-top: 15px;
    .list-link {
      display: none;
    }
    .account {
      .connect-wallet {
        padding: 12px 16px;
      }
    }
  }
  @media (max-width: 768px) {
    padding-left: 0;
    .brand-home {
      margin-top: 12px;
      a {
        font-size: $f6;
        .sub-brand {
          font-size: $f12 !important;
        }
      }
    }
  }
  @media (max-width: 1200px) {
    .brand-home {
      display: block;
      .brand {
        font-size: $f6 !important;
      }
      .sub-brand {
        font-size: 8px !important;
      }
    }
  }
  @media (max-width: 1300px) {
    .navigation-bar {
      padding-left: 23vh;
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
}
</style>

<style lang="scss" scoped>
@media all and (max-width: 590px) {
  .navigation-bar {
    padding: 2px 0 0 14px !important;
    .branding {
      .brand {
        font-size: 10px !important;
        line-height: 12px;
        color: #74A3F3 !important;
      }
      .sub-brand {
        font-weight: 600;
        font-size: 4px !important;
        line-height: 5px;
        letter-spacing: 0.1em;
        color: #9E9E9E;
      }
    }
    .list-link {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      ul {
        li {
          a {
            font-size: $f12;
            color: #74A3F3 !important;
            border-bottom: thin solid #74A3F3 !important;
          }
        }
      }
    }
  }
}
</style>
