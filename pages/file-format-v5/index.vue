<template>
  <div class="white-layout">
    <br><br><br>

    <h1 class="heading">
      DASH File Format Specification and File <br>Intercommunication Architecture. Revision 1.7.
    </h1>
    <br>

    <div class="quotation">
      "Well, in our country," said Alice, still panting a little, "you'd generally get to somewhere else—if you run very fast for a long time, as we've been doing."
      <br><br>
      "A slow sort of country!" said the Queen. "Now, here, you see, it takes all the running you can do, to keep in the same place. If you want to get somewhere else, you must run at least twice as fast as that!"
    </div>

    <br><br>
    <img src="/images/revision5/revision5diagrams.000.png" alt="" class="v5-image">
    <br><br>

    <div class="textCenter">
      _____________
    </div>
    <br><br>
    All too often, there is a neglect of an important distinction which cultivates a culture and environment of hidden biases and misconceptions.
    <br><br>
    While it may have become an industry standard approach to file format
    architecture, the illusory promise of optimisation by most familiar methods
    ahead of all else misleads practitioners in its side effects and outcomes.
    This is a structural flaw in prevalent reasoning from insufficiently
    examined base principles.
    <br><br>
    As a consequence, far too much time, effort, and expense is allocated by
    independent and market leading researchers alike to “wrong place, wrong
    time” approaches when solving fundamental problems of information
    categorization, understanding, transformation, and exchange. The
    implications for cascade effects in commercial applications are abundant.
    <br><br>
    These misconceptions most often take two forms: undecidability errors of
    the Halting Problem subset and self-reinforcing false positives, which
    compound the illusion that all information as received should in fact be
    considered valid or well-defined, or that trust can be simply assumed in a
    given system without an unavoidable need to examine our priors.
    <br><br>
    There is no use in building on top of an unestablished topography with
    poorly defined coordinates. When the bounding scope of paths and weights
    within a given information space have not first been properly confirmed, or
    in a more pressing occurrence, have proven themselves time and again to be
    incorrect, and even directly opposite to intended expectations, results
    from ever faster and fancier optimisation schemes become worse than
    worthless. They embed a debt in the architect of information transfer all
    the way down.
    <br><br>
    Validating an information space and defining the fabric for truth prior to
    performing work on the system is an order of magnitude more difficult, and
    more important, than figuring out any type of optimisation for a system
    that is fundamentally flawed from within— blatantly obvious to some, yet
    time and again proven to be overlooked, even now. Identifying the feature
    set and requirements should direct and reshape decisions about correct
    optimization mechanisms, not vice versa.
    <br><br>
    DASH exists to solve information transfer for a multiplicity of use cases
    with a layered purpose: It brings fundamental change and innovation to an
    industry stuck in the consequences of past choices and provides fellow
    creators a guide by which we can ensure we see the forest for the trees, as
    it were. Before we set out into the dark forest, we establish the ground
    truths required for truly optimal results.
    <br><br>
    Afterall, are we really satisfied with a neverending Red Queen’s race?
    Sometimes, a better solution takes the patience to let time and the truth
    of outcomes settle the conversion.
    <br><br>
    This latest Revision of DASH further details the 10 dimensional
    mathematical space that is encompassed by the Transformation Set.
    <br>
    <br>
    <br>
    <img src="/images/revision5/revision5diagrams.012.png" alt="" class="v5-image">
    <div class="figure-text">
      Figure 1: Conceptual relation between the 10 dimensional Transformation Set and Communication with the Engine Plugin
    </div>
    <br><br>

    <h3 class="subtitle">
      Transformation Set Outlined
    </h3>
    1. NSsample()
    <br><br>
    <img src="/images/revision5/revision5diagrams.001.png" alt="" class="v5-image">
    <br><br>
    <img src="/images/revision5/revision5diagrams.002.png" alt="" class="v5-image">
    <br><br>
    The incorporation of both the Goertzel Filter and Nyquist-Shannon sampling
    is to pre-establish through a digital filter that the provided source
    information is itself a reliable signal. This ensures that we do not assume
    trust in any component of the system, or the system in itself, but rather
    take a discrete sample of a component of the system to make a well
    encapsulated evaluation about the information space state at the initial
    stage. The calculation on this initial evaluation, determined by the input,
    can then be appropriately extrapolated for computing, pre-empt the input’s
    response, and feedback to more complex tempering.
    <br><br>
    2. FourierFFT()
    <br><br>
    <img src="/images/revision5/revision5diagrams.003.png" alt="" class="v5-image">
    <br><br>
    <img src="/images/revision5/revision5diagrams.004.png" alt="" class="v5-image">
    <br><br>
    A Fast Fourier Transform is employed to traverse the information space and
    bring insight into the “recipe” behind the information signal itself, where
    each cycle is appropriately measured, compared and analysed. The modular
    and distinct components to the information are identified and extracted
    from the broader recipe so that a perspective shift can be made on the
    information, allowing elements of higher importance and relevance to be
    enhanced, and those lesser either reduced or even completely ignored—
    allowing for a much more efficient, optimised and accurately prioritised
    data set, as well as a deeper insight into the functional weights within
    the information.
    <br><br>
    3. Voronoi()
    <br><br>
    <img src="/images/revision5/revision5diagrams.005.png" alt="" class="v5-image">
    <br><br>
    Fortune’s Plane Sweep Algorithm works to generate the tessellated Voronoi
    regions, where both the sweep and beach lines are maintained. The beach
    line (to the left of the vertical sweep line) is a complex piecewise curve
    that acts to divide the surface of the object and trace out the edges of
    the Voronoi diagram with the input point as the focus. Implementing Voronoi
    tessellation as a novel way to segment across a 3D object’s surface
    produces cells of convex polygons whose boundary lines purposefully
    optimise for the irregular arrangement of local zones in relation to the
    larger environment, or in this case, the whole 3D object in relation to the
    specific application environment.
    <br><br>
    4. Louvain()
    <br><br>
    <img src="/images/revision5/revision5diagrams.006.png" alt="" class="v5-image">
    <br><br>
    To add further dimensional clarity to the information space and gain a more
    refined understanding of the network’s structure and partitions, Louvain’s method is used— a graph based method. Nodes are optimised both locally and
    through aggregation, to give dimensional distinction to both the
    hierarchical relationships between the nodes and how these relationships
    relate to the resolution parameters for distinguishment between the number
    of nodes pertinent to a certain cluster. Partitions can be updated and
    further optimised as multiple consecutive iterations of the algorithm are
    performed, using the previous iteration’s partition to identify the
    starting point for the next.
    <br><br>
    5. NovelAP()
    <br><br>
    <img src="/images/revision5/revision5diagrams.007.png" alt="" class="v5-image">
    <br><br>
    Here, adjacent possibilities within the established graph space are
    delineated and then used to reassess the deductions made so far, serving to
    map the current inputs to their potential active outcomes, in relation to
    the relevant output application environment and information filtered and
    fed to the instruction set from the game engine plugin. These adjacent
    possibles capture both the limits of the transforms performed thus far and
    also the potential for change derived from root causes.
    <br><br>
    6. SpaceTimeRedux()
    <br><br>
    <img src="/images/revision5/revision5diagrams.008.png" alt="" class="v5-image">
    <br><br>
    The HZ 1 Algorithm acts as a pre-filter to the use of the DCCR algorithm,
    used to search for the least-cost path associated with the current
    information space and within bounds of the source model’s and output
    application environment’s constraints. The HZ 1 pre-measurement acts to
    quantitatively reduce the uncertainty and increase the reproducibility of
    identifying the most optimal path, not to yield a precise, certain
    judgement, but rather to greatly increase the chances of finding the
    optimal feasible path— through a tighter scoped cost bound, organisation,
    and consideration of the attributed qualities of the relevant variables at
    hand.
    <br><br>
    7. GraphTransform()
    <br><br>
    <img src="/images/revision5/revision5diagrams.009.png" alt="" class="v5-image">
    <br><br>
    Derived graphics within the transformed graph space are produced for
    modeling and mapping the represented information into the differential
    subsets of the application layer’s graphic output environment, inclusive of
    the hierarchies across; model, scene, project, engine. This process is
    applied across the context of the Transformation Set for representing the
    information across different domains, thus allowing for different
    perspectives to more effectively weigh in on which regions of the graph
    contain the champion scores— the more offsets and angles introduced, the
    less influence of potential biases.
    <br><br>
    8. AsymGraph()
    <br><br>
    <img src="/images/revision5/revision5diagrams.010.png" alt="" class="v5-image">
    <br><br>
    Here the Champion nodes of the information graph are explicitly recognised
    and defined. Eulerian-Lagrangian discretization methods are exploited for
    simulating different arrangements of the information with pervasive
    degenerencies— here contact interactions of different coordinate groups are
    modelled in relation to the hierarchies of information, sourced from the
    engine plugin in relation to the application output environment, as listed
    above.
    <br><br>
    9. ClothEL()
    <br><br>
    &nbsp;&nbsp;&nbsp;&nbsp;a. ---
    <br><br>
    10. Monte Carlo
    <br><br>
    <img src="/images/revision5/revision5diagrams.011.png" alt="" class="v5-image">
    <br><br>
    The final dimensional pass involves the use of the Monte Carlo Tree Search
    algorithm for ending the directive with an evaluation and potential
    restart, for retrieval of the best known information output candidate. The
    focus is radially expanded to randomly cycle through and sample different
    known potentials of the final output, until consensus is reached through
    probabilistic interpretation.
    <br><br>
    <h3 class="subtitle">
      Open Source Injection, Crowdsourced Solution Space
    </h3>
    The wider innovation of the DASH File Format comes through alignment and
    framing of the architecture with an Open Source spirit and practice. This
    focus on crowdsourced collaboration for the maintenance, upgrading and
    establishment of new datasets, models and approaches, not only acts to
    ensure higher consistent fidelity yield upon each transfer and new
    environment implementation, but also, reinforces the practical-conceptual
    ethic for the pursuit and promotion of a richer collaboration culture
    within the industry— bringing a paradigmatic mindset shift beyond
    preconceived biases, irrespective of conventional wisdoms.
    <br><br>
    At each chronology of a dimensional pass in the Transformation Set,
    intrinsic steps are taken in order to enforce the new DASH output structure
    upon the source information. However, there is also controlled flexibility interwoven, made evident through the composable nature of each dimensional
    unit— where no one unit is more significantly weighted than another in
    terms of its influence within the broader ensemble. This thus allows for
    the final sweeping pass, through the Monte Carlo Tree Search algorithm, to
    retrieve the best known output candidate and use the stored results at each
    dimensional unit coordinate to logically engage in a “comparison, check, update” ternary operation against new proposed libraries merged into the
    DASH data repository by the wider community. These libraries can be custom,
    novel, non-standard functions and datasets that act to add or replace
    certain functions within the Transformation Set, and even in some cases
    deduct redundant or inessential modules.
    <br><br>
    Here, the Open Source incentive is emphasised to build a network of
    leverageable information that works to benefit the whole. Thereby, an
    active developer ecosystem is fostered around DASH, where more application
    layer specificity and refinement for the output graphic environment
    correlates directly to rich crowdsourced collaboration. The logic for the
    very fabric of DASH is able to be continuously re-attuned and stay
    relevant, as existing and new libraries are used to deploy, show and
    upgrade the core variable argument determinators.
  </div>
</template>
<script>
export default {
  name: 'FileFormatPageV5'
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

  .textCenter {
    text-align: center;
  }

  .subtitle {
    font-weight: bold;
    font-size: 12pt;
  }

  .quotation {
    padding-left: 5%;
    padding-right: 5%;
    text-align: left;
    font-style: italic;

    .writer {
      text-align: right;
    }
  }

  .note-list {
    margin-left: 15px;
  }

  .v5-image {
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
