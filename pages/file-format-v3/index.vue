<template>
  <div class="white-layout">
    <br><br><br>

    <h1 class="heading">
      DASH File Format Specification and File <br>Intercommunication
      Architecture. Revision 1.5.
    </h1>
    <br>

    <h3 class="subtitle">
      Architecture Overview
    </h3>
    The latest released revision of the DASH File Format Specification and File
    Intercommunication Architecture gives a more detailed scope of the
    Transformation Set logic of the wrapper constructor. The Transformation Set
    is run after the source file is opened in the Optimistic Transformer. It
    sits between both Pre and Post Processing of the source information, where
    its chronologically determined behaviours remain very much dependent and
    considerate of the final application environment.
    <br><br>
    The communication between the wrapper constructor and engine plugin is
    tethered by the Optimistic Transformation and stored in the Optimistic
    Transform Ledger. Here the Transformation Interface acts to both take in
    the source file and also display analysis of the key hierarchy set of
    information across the model, scene, project and engine— giving a wide
    aerial view as to components and attributes in the application environment
    that have influence on the Transformation Set’s opinionated logic.
    <br><br>

    <img src="/images/figure31.png" alt="" class="figure31">
    <div class="figure-text">
      Figure 1: Source Information Flow and Progression
    </div>
    <br><br>

    <img src="/images/figure32.png" alt="" class="figure32">
    <div class="figure-text">
      Figure 2: Optimistic Transformer
    </div>
    <br><br>

    <img src="/images/figure33.png" alt="" class="figure33">
    <div class="figure-text">
      Figure 3: Transformation Set Progression
    </div>

    <br><br>The Transformation Set guides the information through different dimensional
    lenses, using each lens to gain a richer understanding of the essential
    information held within each domain. This is then cross-matched for each of
    the other dimensions, in order to identify and maintain the minimum
    required set, and margin of flexibility around this set, for upholding the
    utmost fidelity. By cycling through the minimum required space transforms
    and looping through the graph dynamics until a conceptually “smooth fabric”
    is achieved, the information space complexity is vastly reduced. This
    ensures the fastest path to discovery for considerate outputs to multiple
    destinations. The final considerate output from the Transformation Set
    remains subject to both the base requirements and the strategically
    customisable attributes, from an optimisation standpoint, that are relevant
    to the application environment.
    <br><br>At each module lens, key information is retained so that a final sweeping
    check can then be performed and any redundant or inessential modules
    deducted. This keeps consistent emphasis on only maintaining the minimum
    required set, contracting away the potential for negative carry for Post
    Processing and then inclusion by the engine plugin. Further, this final
    sweeping check also intentionally enables the ability for new modules to be
    injected and interchanged overtime— the DASH file format architecture is
    structured to be upgradeable and iteratively trainable across different
    functions and datasets, allowing for both a generalised and also more
    specific approach to be taken for optimising for application layer
    determined performance. An Open Source spirit will be supported and
    pioneered here.
    <br><br>Moreover, again, the Teletransportation paradox sits as a highly fitted
    reference. The translated information is not required to be in the same
    order or structure as it was originally generated from the source file, but
    rather, must appear and behave in a way that now is considerately fashioned
    to the contextual relevance of the final domain. The original information
    has been collapsed into a limited set of key elements for optimisation
    across each dimensionality. Hence, here, we are not claiming perfection,
    but, we are claiming the potential for a complete and truthful proof.
    <br><br>

    <h3 class="subtitle">
      Architecture Pseudocode for the Transformation Set
    </h3>
    <code>
      <br>
      NSsample(){<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// For each, coordinate score raster, vector<br>
      }<br>
      <br>
      MC[0] = NSsample.score<br>
      <br>
      FourierFFT(){<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// For each NSsample.score<br>
      &nbsp;&nbsp;&nbsp;&nbsp;Let A = NSsample.score.FFTspace<br>
      <br>
      &nbsp;&nbsp;&nbsp;&nbsp;// FFTspace.freqSpace<br>
      &nbsp;&nbsp;&nbsp;&nbsp;A[] = freqSpace<br>
      <br>
      &nbsp;&nbsp;&nbsp;&nbsp;FourierFFT.score = A.map<br>
      }<br>
      <br>
      MC[1] = FourierFFT.score<br>
      <br>
      Voronoi(){<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Call library<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Apply to FourierFFT.score<br>
      &nbsp;&nbsp;&nbsp;&nbsp;Voronoi.score = FourierFFT.score<br>
      }<br>
      <br>
      MC[2] = Voronoi.score<br>
      <br>
      Louvain(){<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Call library<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Apply to Voronoi.score and NSsample.score<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Take output and assign to VNS<br>
      &nbsp;&nbsp;&nbsp;&nbsp;Louvain.score = VNS.score{#library}<br>
      }<br>
      <br>
      MC[3] = Louvain.score<br>
      <br>
      NovelAP(){<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Call library (Proprietary)<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Apply to Louvain.score<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Take output and assign to VNS<br>
      &nbsp;&nbsp;&nbsp;&nbsp;NovelAP.score = Louvain.score{#library}<br>
      }<br>
      <br>
      MC[4] = NovelAP.score<br>
      <br>
      SpaceTimeRedux(){<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Call library<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Apply to NovelAP.score<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Take output and assign to VNS<br>
      &nbsp;&nbsp;&nbsp;&nbsp;SpaceTimeRedux.score = Louvain.score{#library}<br>
      }<br>
      <br>
      MC[5] = SpaceTimeRedux.score<br>
      <br>
      GraphTransform(){<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Call library<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Apply to SpaceTimeRedux.score<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Take output and assign to VNS<br>
      &nbsp;&nbsp;&nbsp;&nbsp;GraphTransform.score = SpaceTimeRedux.score{#library}<br>
      }<br>
      <br>
      MC[6] = GraphTransform.score<br>
      <br>
      AsymGraph(){<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Call library (Proprietary)<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Apply to GraphTransform.score<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Derive Champion Scores<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ChampionScore(isAmplifiable){<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return(isAmplifiable ? amplify : destroy)<br>
      &nbsp;&nbsp;&nbsp;&nbsp;}<br>
      &nbsp;&nbsp;&nbsp;&nbsp;AsymGraph.score = ChampionScore<br>
      }<br>
      <br>
      MC[7] = AsymGraph.score<br>
      <br>
      ClothEL(){<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Call library<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Apply to AsymGraph.score<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Take output and assign to VNS<br>
      &nbsp;&nbsp;&nbsp;&nbsp;ClothEL.score = AsymGraph.score{#library}<br>
      }<br>
      <br>
      MC[8] = ClothEL.score<br>
      <br>
      For each MC[]<br>
      // Call libraries (Proprietary)<br>
      // Apply for each in MC[]<br>
      // For each score check for redundant values<br>
      // Store index for redundant values of MC[] in Score()<br>
      // Remove redundant values at index in Score() from ClothEL() and store final output as OTset()<br>
      // If all MC[] returns no redundant values then keep OTset() = ClothEL() as final output<br>
    </code>
  </div>
</template>
<script>
export default {
  name: 'FileFormatPageV3'
}
</script>
<style lang="scss">
.white-layout {
  background: white;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 55px;
  margin-top: -55px;
  padding-bottom: 200px;

  font-family: "Courier New";
  font-weight: normal;
  font-size: 11pt;

  .heading {
    font-weight: bold;
    font-size: 15pt;
  }

  .subtitle {
    font-weight: bold;
    font-size: 12pt;
  }

  .note-list {
    margin-left: 15px;
  }

  .figure-text {
    font-size: 7pt;
    text-align: center;
  }

  .figure31, .figure32, .figure33{
    margin-left: calc(50% - 400px);
    width: 800px;

    @media (max-width: 780px) {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }
}
</style>
