<template>
  <div class="whitepaper-layout">
    <div class="box-row">
      <a href="https://drive.google.com/file/d/1zG8h4GnodW7uWm_OsUY3g4I4RpOx6bMH/view?usp=sharing" target="_blank">
        <div class="box">
          <b>Read</b> WhitePaper
        </div>
      </a>
      <a href="https://www.youtube.com/watch?v=LNpJDuzArh0" target="_blank">
        <div class="box">
          <b>See</b> Video
        </div>
      </a>
      <div class="dropdown">
        <div class="dropbtn">
          <b>File</b> Format Spec
        </div>
        <div class="dropdown-content">
          <nuxt-link to="/file-format">
            Revision 1: January 13th, 2021
          </nuxt-link>
          <nuxt-link to="/file-format-v2">
            Revision 1.2: January 23rd, 2021
          </nuxt-link>
          <nuxt-link to="/file-format-v3">
            Revision 1.5: February 3rd, 2021
          </nuxt-link>
          <nuxt-link to="/file-format-v4">
            Revision 1.6: February 13th, 2021
          </nuxt-link>
          <nuxt-link to="/file-format-v5">
            Revision 1.7: February 23rd, 2021
          </nuxt-link>
          <nuxt-link to="/file-format-v6">
            Revision 2.1: March 3rd, 2021
          </nuxt-link>
          <nuxt-link to="/file-format-v7">
            Revision 2.2: March 13th, 2021
          </nuxt-link>
          <nuxt-link to="/file-format-v8">
            Revision 2.3: March 23rd, 2021
          </nuxt-link>
        </div>
      </div>
      <nuxt-link to="/fgo">
        <div class="box">
          <b>FGO</b> Standard
        </div>
      </nuxt-link>
    </div>

    <img src="/images/model.jpg" alt="" class="model-img">
  </div>
</template>
<script>
export default {
  name: 'WhitePaperPage'
}
</script>
<style lang="scss">
.whitepaper-layout {
  background: white;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 55px;
  margin-top: -55px;
  @media (max-width: 780px) {
    margin-top: -65px;
  }

  .model-img {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 20vh;
    margin-bottom: 30vh;
    text-align: center;

    @media (max-width: 780px) {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      margin-top: 5vh;
      margin-bottom: 10vh;
    }
  }

  .box-row {
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: 780px) {
        flex-direction: column;
        align-items: center;
    }

    a, .dropdown {
        display: block;
        margin-top: 10vh;
        margin-right: 30px;

        @media (max-width: 780px) {
            margin-top: 5vh;
            width: 70%;
            margin-left: auto;
            margin-right: auto;
        }
    }

    .dropdown {
      position: relative;
      display: inline-block;

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        width: 100%;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
      }

      .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        margin-top: 0;
        margin-right: 0;
        margin-left: 0;
        width: 100%;
      }

      .dropdown-content a:hover {background-color: #ddd;}

      &:hover .dropdown-content {display: block;}
    }

    .dropbtn, .box {
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        padding: 10px 45px;
        font-family: $font-inter;
        font-size: 18px;
        line-height: 30px;
        width: 250px;
        border: thin solid black;
        background-color: white;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

        &:hover {
          background-color: #eee;
        }

        @media (max-width: 1000px) {
            width: 200px;
            padding: 30px;
        }

        @media (max-width: 780px) {
            width: 100%;
            padding: 20px;
            font-size: 14px;
            line-height: 20px;
            height: auto;
        }
    }
  }
}
</style>
