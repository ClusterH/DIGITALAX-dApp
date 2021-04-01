<template>
  <div class="white-layout">
    <br><br><br>

    <h1 class="heading">
      DASH File Format Specification and File <br>Intercommunication
      Architecture. Revision 1.2.
    </h1>
    <br>

    <h3 class="subtitle">
      Approach
    </h3>
    Our attitude and methodology towards the research, development and testing
    of the DASH File Format Specification and File Intercommunication
    Architecture is tightly iterative and inserts a degree of adaptability into
    the project’s framework. This cultivates a setup of evolving ideas, risk
    mitigation and focused execution.
    <br><br>

    <h3 class="subtitle">
      Quick Summary
    </h3>
    Revision One of the DASH File Format Specification and File
    Intercommunication Architecture set out the initial framework and blueprint
    for achieving cross-platform interoperability of 3D native asset files.
    <br><br>To this day, transfer of 3D assets into scene based application
    engines and 3D software environments is arguably the biggest challenge faced
    by the industry. This long unresolved pain point is highlighted by the
    literally hundreds of 3D file formats that exist, where almost every 3D
    software manufacturer has developed a new, and most often proprietary,
    format that is only optimised for their siloed narrow requirements.
    <br><br>Our approach and architecture is different. We are positioned to
    work across industries of scale that require best estimate and lightest
    weight solutions in order to initiate, develop, lead and flourish into
    economies of sustainable value generation— all digitally native. The future
    of 3D content in gaming, VR, and other live application environments
    requires disciplined focus on removing areas of black box error often
    obvious only in retrospect. Without this logical underpinning in mind, the
    prospect of developing a solution that can be deployed across the vast
    majority of general cases becomes that subject to a subclass of Halting
    Problem errors, grinding movement towards more optimal industry growth and
    end user experience to a near standstill. Thus, the main thrust of the
    resolution proposed here is to apply proper creative, computational, and
    cognitive scope in order to establish a new base layer for native digital
    content. In order to accomplish this, we must first strip or add
    intelligence where appropriate and find the player-creator experience on a
    few fundamental certainties, in highly uncertain environments.
    <br><br>DASH is incepted to be dynamic and adaptable, where opinionated
    logic is formulated from discrete data sourced directly from the application
    layer by the game engine plugin and fed to the wrapper constructor. In other
    words, the file itself is application layer and end environment considerate.
    We are set for achieving a 1:1 match of relevant information fidelity from
    the source file to the DASH output. <br><br>
    We have outlined below the second revision of the DASH File Format
    Specification and File Intercommunication structure, giving emphasis to the
    role of the wrapper constructor and the translation procedure for outputting
    the compatible DASH directly into the application environment.
    <br><br>

    <h3 class="subtitle">
      Structure
    </h3>
    The role of the wrapper constructor in the broader architecture is to
    accurately internalise values that are fed from the source file, any related
    texture files, and the game engine plugin, and then write well structured
    output within the considerably more cross-compatible DASH file.
    <br><br>The interface to the wrapper constructor consists of a simple
    drag and drop file upload UI that is compatible for both the model, material
    and texture files. Once uploaded, the instruction set for the wrapper
    constructor first extracts and reads relevant data from the source file’s
    (i.e. zpac) threedimensional surface, including that of the face and line
    element geometry, and texture and normal vertices. <br><br>Material
    Instance Segmentation is performed across the model, where the coordinate
    data is used to effectively detect and delineate each distinct material
    region of interest. The appropriate geometric and UV coordinates of these
    segmented regions are then stored in a nested array [Array 1]. The model has
    now been segmented into n cells, where specific techniques used for material
    delineation remain dependent on the source model inputted and the associated
    texture files. In each case, information is pulled from the texture map
    files in order to match the material-to-geometric components across the
    visual field.

    <br><br>

    <img src="/images/figure1-2.png" alt="" class="figure11">
    <div class="figure-text">
      Figure 1: Material Instance Segmentation
    </div>
    <br><br>Before application-specific topology optimisation, directed by
    the game engine plugin, is performed across the model, the associated
    texture and material image files too are subject to optimisation, in
    relation to the pre-segmented n cell regions. Here, Fourier techniques are
    applied to each n-cell region of the texture component, having the ability
    to decompose complicated objects for the purpose of removing redundant
    information and only retaining the most important components. Fast Fourier
    Transforms (FFT), in the form of the Discrete Fourier Transform (DFT), are
    performed across the texture maps and their n cell region, where they are
    translated into the frequency domain, from the spatial domain, for the
    purpose of distinguishing across the high and low frequencies. The discrete
    boundary conditions are based on the n cell region edge lines.
    <br><br>Opinionated logic from the wrapper constructor instruction set,
    which is informed by the application environment from the game engine
    plugin, gives judicious choice as to which frequencies are removed, retained
    and reduced so that minimal distortion on the maps is incurred, despite the
    fact that much of the underlying information is discarded. <br><br>The
    greater the magnitude across the frequency values the more image information
    contained at that frequency. Thus, the high degree of physical details can
    be arguably abstracted away and focus maintained only on a few crucial
    aspects in a manageable way. The retained information is then stored in a
    set of nested arrays [Array 2], with each macro array component referencing
    a specific n cell region. <br><br>At this end, knowledge of the minimum
    retention paths allow for the FFT to be hence used as a normalisation
    technique for the texture maps as they are translated into the application
    specific UV space. This ensures quality retention of the 2D texture map, in
    specific reference to its visual content, can be more closely maintained as
    it is reconstructed onto the 3D surface— reducing visible differences
    between the original source and its reconstruction within the new UV space.
    <br><br>

    <img src="/images/formula1.png" alt="" class="formula1">
    <br><br>Here, F(k,l) is indicative of each point represented in the
    Fourier space and f(a,b) is the image in the spatial domain. The exponential
    term basis functions are sine and cosine waves with increasing frequencies.
    <br><br>The inverse Fourier transform, re-transformed in the spatial
    domain is given by; <br><br>

    <img src="/images/formula2.png" alt="" class="formula2">
    <br><br>A double sum is calculated for each image point to obtain the
    result of the above equations. Here, the spatial domain is first transformed
    into an intermediate image using N one-dimensional Fourier Transforms. This
    intermediate image is then transformed into the final image, again using N
    one-dimensional Fourier Transforms. <br><br>The wrapper constructor
    references from a pre-set table of best fit values that are obtained through
    iterative testing of Voronoi tessellation varieties of 3D models and their
    corresponding geometric fidelity output in different application
    environments. This data table gives logic on the distribution of Voronoi
    centroids across each n cell region, with the use of both outward radial
    growth and the Plane Sweep algorithm defining the outward boundaries of the
    tessellated regions. With this in mind, the new optimised polycount and mesh
    density for the model is defined across the updated vertex and appropriated
    region coordinate data, which is specific and considerate for the output
    environment itself. <br><br>

    <img src="/images/figure2-2.png" alt="" class="figure22">
    <div class="figure-text">
      Figure 2: Voronoi Tessellation across the n cell regions
    </div>
    <br><br>
    The last stage in the instruction set maps back the optimised texture
    components to their new sites on the model. Final reassembly involves
    collapsing the texture files into their consistent fungible units, relevant
    down to a bit level, for guaranteeing a more than valid approximation across
    the newly generated topological partitions (i.e. voronoi tessellations and n
    cell regions).
    <br><br>Here, inspiration is adopted from the Louvain method, a
    community detection algorithm, which employs an iterative process for
    improving the scalability and detection of the modularity of a partition
    within a network/scope. The method unveils hierarchies of communities and
    allows for zooming within communities to discover sub-communities,
    sub-sub-communities etc. <br><br>Small “communities” within the texture
    maps are first identified and optimised for modularity locally, with
    consideration only across neighbouring bits. This novel approach allows for
    partitions to be made that are suitably modified to obtain a reduced
    complexity representation for eventual mapping to the whole n cell and
    tessellated region. From here, the second stage involves assembling a new
    reconstruction of the partitioned components, whose bits are relevant to the
    “communities” found during the first stage and so can be accurately
    translated, with valid approximation, onto the application specific model
    topology. The Teletransportation paradox is referenced here as a fitting
    thought experiment, where our “re-mapping” approach, and thus the final
    output of a DASH file, doesn’t require the information to be translated in
    the same order or structure as it was originally generated for the source
    file, but rather, only requires it to appear and behave that way— we have
    collapsed the original information into a limited set of key elements for
    optimisation across dimensionality. <br><br>The methodology behind the
    wrapper constructor instruction set, and thus broader DASH format and file
    intercommunication architecture, is improved through the injection of the
    spirit of Open Source at each stage of the process. By allowing the
    instruction set’s opinionated logic to be trainable and upgradable by the
    wider community, we are conveniently scaling exposure to positive Black Swan
    events— new innovation cycles, optimisation spectacles and larger
    to-be-faced challenges across specific edge cases. Further works will
    benefit from our initial procedures, but unlike other architectures, will
    not be limited by them. Instead an active community of developers and
    builders will be motivated and incentivised to evolve, with maintenance
    across reliability, security and functionality. <br><br>
  </div>
</template>
<script>
export default {
  name: 'FileFormatPageV2'
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

  .figure11, .figure22, .formula1, .formula2 {
    margin-left: calc(50% - 200px);
    width: 400px;

    @media (max-width: 780px) {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }
}
</style>
