<template>
  <div class="contribution-success-page">
    <div class="left-block">
      <h3 class="title title-mobile">
        You Contributed <span v-if="$store.state.contributedEth"> {{ $store.state.contributedEth }}</span>ETH.
      </h3>
      <div class="img-content">
        <div class="img-block">
          <img class="img-size" src="https://digitalax.s3.us-east-2.amazonaws.com/2K+NFT.png" alt="">
        </div>
        <div class="content-block">
          <h3>
            MEET MONA
          </h3>
          <p class="text-size">
            0x8hdgdj73ggdb6rf1hdagdj39ggdb
          </p>
          <div class="desc">
            <div class="left-content">
              <p class="text-size">
                Mona is Crypto’s first digital.
              </p>
              <p class="text-size">
                Follow her story <a href="https://www.instagram.com/mona_vir/" target="_blank">here</a>.
              </p>
            </div>
            <button class="download-button u-button-black" :loading="buttonLoading" @click="downloadFile">
              Download File
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- end-left-block -->
    <div class="right-block">
      <div class="contributed-info">
        <h3 class="title">
          You Contributed <span>{{ $store.state.contributedEth }}</span>ETH.
        </h3>

        <p v-if="$store.state.contributedEth!==2">
          Remaining: {{ 2-$store.state.contributedEth }} ETH - <a href="/homepage"> <u> Contribute More</u></a>
        </p>
        <p v-else>
          Remaining: {{ 2-$store.state.contributedEth }} ETH
        </p>

        <div class="status-tx">
          <p v-if="result.status" class="status">
            <label>Status: </label>
            <span v-if="result.status" class="text-success"><b>Success</b></span>
            <span v-else><b>Failed</b></span>
          </p>
          <div v-if="result.transactionHash" class="tx">
            <label>TX-ID: </label>
            <div class="tx-result">
              <b>{{ result.transactionHash }}</b>
            </div>
          </div>
        </div>
        <div class="countdown">
          <count-down-timer
            :endtime="endTime"
          />
        </div>
        <div class="nft">
          <h5>MEET MONA NFT</h5>
          <p>Estimated APY: ---</p>
        </div>
        <div class="faqs">
          <h5>FAQs</h5>
          <div class="qa">
            <h6 class="question">
              Can I contribute more ETH?
            </h6>
            <p class="answer text-size">
              You can contribute up to a total of 2ETH anytime during the Genesis period. However, contributing more ETH will not grant you another MEET MONA NFT— contributing more ETH will increase your $MONA rewards when the staking function is live on DIGITALAX platform.
            </p>
          </div>
          <div class="qa">
            <h6 class="question">
              Can I withdraw my contributed ETH?
            </h6>
            <p class="answer text-size">
              You cannot withdraw your contributed ETH. All Genesis monavaile NFTs will remained locked in a users wallet until the Genesis Period has finished on November 20th at 11pm UTC.
            </p>
          </div>
          <div class="seemore text-size">
            See <a href="https://digitalax.gitbook.io/digitalax/faq" target="_blank">here</a> for more FAQs.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IPFS from 'ipfs'
import { mapMutations, mapState } from 'vuex'
import CountDownTimer from '~/components/CountDownTimer'
export default {
  name: 'ContributeSuccess',
  components: {
    CountDownTimer
  },

  data () {
    return {
      result: {},
      contributedValue: 0,
      endTime: '2020-11-20T23:00:00+00:00',
      buttonLoading: false,
      link: ''
    }
  },

  computed: {
    ...mapState([
      'linkImage'
    ])
  },

  watch: {
    $route (to, from) {
      this.getParamsFromUrl()
    }
  },

  mounted () {
    this.getParamsFromUrl()
  },

  methods: {
    ...mapMutations(['setLinkImage']),
    async downloadFile () {
      this.buttonLoading = true

      if (this.linkImage !== '') {
        this.link = this.linkImage
      }
      if (this.link === '') {
        this.link = await this.getImg()
      }

      const element = document.createElement('a')
      element.setAttribute('href', this.link)
      element.download = 'download.png'
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
      this.buttonLoading = false
    },

    async getImg () {
      const node = await IPFS.create()
      // const node = await window.$nuxt.$ipfs

      const cid = '/ipfs/QmSvHszVSVGkMcEHao9qzYdxGT7A718jG9HSuMnJJzWnoh'
      // load the raw data from js-ipfs (>=0.40.0)
      const bufs = []
      for await (const buf of node.cat(cid)) {
        bufs.push(buf)
      }
      const data = Buffer.concat(bufs)

      const blob = new Blob([data], { type: 'image/png' })
      this.setLinkImage(window.URL.createObjectURL(blob))
      return window.URL.createObjectURL(blob)
    },

    getParamsFromUrl () {
      const params = this.$route.params
      if (parseFloat(this.$store.state.contributedEth) === 0) {
        this.$router.push({ name: 'error-page' })
      }
      if (params && params.receiptResult && params.valueContributed) {
        this.result = params.receiptResult
        this.contributedValue = params.valueContributed
      }
    }
  }
}
</script>
<style lang="scss">
.text-size{
  font-size: 10px;
}
.img-block{
  max-height: 350px;
}
.img-size{
  max-height: 330px;
  max-width: 330px;
  width: 100%;
}
  .contribution-success-page {
    display: flex;
    height: calc(100vh - 85px - 86px);
    padding: 10px 60px;
    overflow: auto;
    .left-block {
      width: 330px;
      margin-right: 60px;
      align-self: center;
      align-content: center;
      @media (max-width: 1300px) {
        width: 330px;
      }
      .title-mobile {
        font-size: $f5;
        margin-bottom: 10px;
        line-height: 30px;
        display: none;
      }
      .img-content {
        background: $color-alaba;
        border: 1px solid $color-mercury-3;
        .content-block {
          font-size: $f9;
          padding: 5px 23px 20px 32px;
          h4 {
            font-size: $f6;
            font-weight: $fw-black;
            margin-bottom: 10px;
          }
          .desc {
            margin-top: 16px;
            line-height: 18px;
            .left-content {
              display: inline-block;
              vertical-align: top;
              a {
                text-decoration: underline;
              }
            }
          }
          .u-button-black {
              color: #ffffff;
              text-transform: uppercase;
              font-family: "Inter", sans-serif;
              font-size: 12px;
              font-weight: 700;
              background-color: #111111;
              border: thin solid;
              border-color: transparent;
              padding: 14px 19px;
              letter-spacing: 0.12em;
          }
        }
      }
    }
    .right-block {
      width: calc(100% - 500px + 60px);
      align-self: center;
      align-content: center;
      margin-top: 10px;
      .contributed-info {
        @media (min-width: 768px) {
          margin-top: -3px;
        }
        max-width: 80%;
        font-weight: $fw-normal;
        .title {
          font-size: $f4;
          font-weight: $fw-black;
          line-height: 30px;
          margin-bottom: 10px;
        }
        .status-tx {
          margin-bottom: 20px;
          @media (max-width: 1300px) {
            margin-bottom: 10px;
          }
          .tx-result {
            max-width: 90%;
            display: inline-block;
            vertical-align: top;
            position: relative;
            &:hover {
              .tx-tooltip {
                display: block;
              }
            }
            b {
              max-width: 100%;
              display: inline-block;
              text-overflow: ellipsis;
              overflow: hidden;
              user-select: none;
            }
            .tx-tooltip {
              position: absolute;
              top: -25px;
              left: 0px;
              background: #E6E6E6;
              padding: 2px 14px;
              font-size: 13px;
              border-radius: 20px;
              font-weight: 600;
              display: none;
            }
          }
        }
        .countdown {
          font-size: 15px;
          border: thin solid $color-mercury-3;
          display: inline-block;
          line-height: 20px;
          margin-bottom: 40px;
          padding: 10px 18px;
          @media (max-width: 1300px) {
            font-size: 20px;
          }
        }
        h5 {
          font-weight: $fw-black;
          font-size: $f6;
          line-height: 20px;
        }
        .nft {
          margin-bottom: 40px;
          h5 {
            margin-bottom: 8px;
          }
        }
        .faqs {
          h5 {
            margin-bottom: 8px;
          }
          .qa {
            margin-bottom: 12px;
            .question {
              font-size: $f8;
              font-weight: $fw-bold;
              margin-bottom: 2px;
            }
          }
        }
        .seemore {
          a {
            text-decoration: underline;
          }
        }
      }
    }
    .download-button {
      padding: 5px 5px !important;
      border-radius: 0;
      margin-top: 10px;
      // bottom: 0px;
      float: right;
      font-size: 9px!important;
      @media (max-width: 1300px) {
        padding: 5px 10px !important;
        font-size: 9px!important;
      }
    }
  }

  @media (max-width: 768px) {
    .one-side {
      .footer {
        padding: 0 16px;
      }
    }
    .contribution-success-page {
      flex-direction: column;
      padding: 8vh 60px 20px 60px;
      .left-block {
        width: 100%;
        max-width: 300px;
        margin-right: 0;
        margin-bottom: 32px;
        margin-top: 10px;
        .title-mobile {
          display: block;
        }
        .img-content {
          border: thin solid $color-mercury-3;
          background: $color-alaba;
          .content-block {
            padding: 14px 20px;
            .left-content {
              width: 100%;
            }
            .download-button {
              // margin-top: px;
              float: none;
            }
          }
          .el-col-12 {
            width: 100%;
          }
        }
      }
      .right-block {
        width: 100%;
        .contributed-info {
          max-width: 100%;
          h3 {
            display: none;
          }
        }
      }
    }
    .footer-contribution-success {
      position: initial;
    }
  }
  @media (max-width: 640px) {
    .contribution-success-page {
      padding: 8vh 16px 20px 16px;
    }
  }
   @media (max-width: 1300px) {
    .contribution-success-page {
      padding: 1vh 16px 20px 60px;
    }
    .content-block{
      padding: 0px 7px 16px 10px!important;
      font-size: 12px!important;
      h4 {
        font-size: 20px!important;
      }
    }
    .contributed-info {
      .title {
        font-size: $f6!important;
        margin-bottom: 8px!important;
      }
      .nft {
        margin-bottom: 12px!important;
      }
      .qa {
        margin-bottom: 2px!important;
        .question {
          font-size: 12px!important;
        }
      }
      .answer {
        font-size: 10px!important;
      }
      .countdown {
        font-size: 14px!important;
        padding: 0px 18px!important;
        margin-bottom: 15px!important;
      }
      h5 {
         margin-bottom: 7px!important;
         font-size: 17px!important;
       }
    }
  }
</style>
