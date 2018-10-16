<template>
    <div class="box">
      <div class="header clearfix">
        <div class="header-left fll" @click="$router.push('/')">
          <img src="../assets/left.png" alt="" class="img">
        </div>
        <div class="login fll">
          党史上的今天
        </div>
      </div>

      <div class="content">
        <h2 class="title">党史上的今天</h2>
        <h2>1953年10月16日　中共中央通过《关于实行粮食的计划收购与计划供应的决议》</h2>
        <p>1953年10月16日　中共中央通过《关于实行粮食的计划收购与计划供应的决议》。11月19日，政务院下达《关于实行粮食的计划收购和计划供应的命令》。粮食实行统购统销以后，中央又根据有计划经济建设的需要，实行了棉花的统购和棉布、食用油等的统购统销。实行粮食等主要农产品的统购统销，虽然不可避免存在一些缺点，但总的来说，在我国实现工业化的初期是一个适合当时需要的积极举措。</p>
        <h2>1954年10月16日　毛泽东给中共中央政治局的同志和其他有关同志写了《关于红楼梦研究问题的信》</h2>
        <p>1954年10月16日　毛泽东给中共中央政治局的同志和其他有关同志写了《关于红楼梦研究问题的信》。在此之前，有两个青年发表文章批评俞平伯研究《红楼梦》的观点和方法。毛泽东在信中说：“这是三十多年以来向所谓红楼梦研究权威作家的错误观点的第一次认真的开火。”“事情是两个‘小人物’做起来的，而‘大人物’往往不注意，并往往加以阻拦，他们同资产阶级作家在唯心论方面讲统一战线，甘心作资产阶级的俘虏”。毛泽东的信从批判俞平伯的红学观点，引申到胡适派资产阶级唯心论的斗争，提出的问题十分尖锐，在文化学术界引起高度重视。</p>
        <h2>1964年10月16日　我国第一颗原子弹爆炸成功</h2>
        <p>1964年10月16日　我国第一颗原子弹爆炸成功。我国国防和科学技术方面的这一辉煌成就，有力地打破了超级大国的核垄断和核讹诈，提高了我国的国际地位。同日发表的《中华人民共和国政府声明》指出：中国政府一贯主张全面禁止和彻底销毁核武器；中国发展核武器是为了防御，为了打破核大国的核垄断。中国政府郑重宣布，中国在任何时候、任何情况下，都不会首先使用核武器。中国政府将一如既往，尽一切努力，争取通过国际协商，促进全面禁止和彻底销毁核武器的崇高目标的实现。</p>
        <h2>1980年10月16日　中共中央决定把康生、谢富治的罪行向全党公布，开除党籍</h2>
        <p>1980年10月16日　中共中央批转中央纪律检查委员会《关于康生问题的审查报告》和《关于谢富治问题的审查报告》，决定把他们的罪行向全党公布，同时撤销对这两个人的《悼词》，开除他们的党籍。</p>
        <h2>1988年10月16日　中国第一座高能加速器北京正负电子对撞机首次对撞成功</h2>
        <p>1988年10月16日　中国第一座高能加速器北京正负电子对撞机首次对撞成功。这是我国在高科技领域的又一重大突破。1990年7月21日，北京正负电子对撞机工程正式通过国家验收，性能达到80年代国际先进水平。2009年5月19日，中国科学院高能物理研究所宣布：北京正负电子对撞机重大改造工程对撞亮度达到验收指标，加上此前该改造工程的直线加速器、探测器和同步辐射专用光运行均已达到设计指标。</p>
      </div>

    </div>
</template>

<script>
    export default {
        name: "history"
    }
</script>

<style scoped lang="scss">
  .box  {
    .header {
      background: #c50206;
      width: 100%;
      height: 1.05rem;

      .img {
        padding-bottom: 14px;
        padding-left: 10px;
      }

      .login {
        padding-left: 102px;
        line-height: 56px;
        font-weight: 400;
        font-size: 17px;
        color: #fff;
      }
    }
  }

  .content {
    padding: 10px;

    .title {
      font-size: 24px;
      font-weight: 500;
      line-height: 1.2;
      font-family: -apple-system,Helvetica Neue,Roboto,Segoe UI,sans-serif;
    }

    h2 {
      margin-top: 10px;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.2;
      font-family: -apple-system,Helvetica Neue,Roboto,Segoe UI,sans-serif;
    }

    p {
      margin: 10px 0;
      font-size: 14px;
      line-height: 2;
      font-family: -apple-system,Helvetica Neue,Roboto,Segoe UI,sans-serif;
    }
  }
</style>
