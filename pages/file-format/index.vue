<template>
  <div class="white-layout">
    <br><br><br>

    <h1 class="heading">
      DASH File Format Specification and File Intercommunication Architecture. Revision One.
    </h1>
    <br>

    <h3 class="subtitle">
      Quick Summary
    </h3>
    Transfer of 3D digital assets across different applications and graphic environments is not only a process that is presently subject to a high degree of unsophistication, is tedious and broken, but also, in base reality, the concept of cross-platform 3D digital asset interoperability is still very much hypothetical. It is not possible to “drag and drop” a file created in one 3D application directly into another without information loss and often detrimental reductions of fidelity in render output.
    <br><br>This document sets forth to radically enhance and reform the entire 3D asset transfer domain. We are introducing a file intercommunication architecture, presented predominantly through a wrapper constructor and engine plugin, that enables the dynamic generation of a new 3D file format, DASH.
    <br><br>DASH defines the geometry and other properties for objects that are dynamically generated through this file intercommunication architecture — whose data structure output is intrinsically dependent on and optimised for the specific application and/or graphic environment into which the output is rendered. In other words, the file format output itself is application layer considerate. These files must have the extension .DASH.
    <br><br>In this release, the file intercommunication architecture is tailored for translation of .zpac source files into the .DASH file format, in order to enable native compatibility with the Unity, Unreal and Blender engines.
    <br><br>

    <h3 class="subtitle">
      Motive
    </h3>
    There are a number of reasons as to why DASH is essential. The most prominent of these are exemplified in assessments of the current gaming, VR, scene based and 3D digital content landscape, with consideration of explosive demand and forward industry projections. 3D digital content continues to lead the future exponentially, with more than a third of the world’s population formally classified as gamers and the global market size of gaming and VR valued at ~USD$180 billion as of 2020, almost double from that recorded in 2016 at ~USD$99.6 billion.
    <br><br>With this increased adoption in mind, desire for ever more customizable and engaging digital experiences allows us to connect with others and recreate our identities. This has greatly increased the emphasis on any Player’s need to convey with fluency an individualized identity with authentic self-expression in native digital environments. In turn this feeds into the increased demand for more interoperable and cross-platform native information which has only become more essential— not just for the content developers, but most consequentially for the Players/Interactors. The inevitable societal leap into immersive digital ubiquity creates a tightly coiled expectation for seamless digital experiences that are highly personalised and unique to each individual.
    <br><br>Digital fashion is one market segment that directly empowers and fulfills this need, as it provides a mechanism for Player ability to create unique identities for enriched digital world interactions. Enhanced capacity to transpose digital fashion assets cross platform across starkly different application environments (i.e. from Fortnite into GTA) might seem trivial and nonsensical from a common viewpoint today, and in particular from a business or technical perspective, however, in the future-present, not only will this facility be vital, it will become universally expected. Players require a seamless and consistent cross-platform identity— and use self expression through fashion as a major component to achieve it. The digital hybrid realm is no different.
    <br><br>Presently however, no efficient and streamlined system or universal format exists that is able to solve this pipeline blockade and reduce the singular usage approach of 3D objects across differential content environments.
    <br><br>The DASH standard provides both Players and Producers/Developers with a clear technical solution to achieve cross-platform interoperability of 3D digital assets, with an initial focus on digital fashion items, to not only solve a core and inefficient underlying technical pipeline pain-point in the broader 3D digital content industry, but, of far higher value, help to develop digital economies that meet Player expectations, promote creativity and creator engagement, and, allow for novel experiences that scale multi variant wealth generation for both the game Producers and Players, simultaneously.
    <br><br>

    <h3 class="subtitle">
      About DASH
    </h3>
    DASH is a new standard for quick and painless communication of creative data, messages, and content. The accompanying file intercommunication architecture, consisting of a wrapper constructor and an engine plugin, is able to translate different proprietary source files, like that of .zpac, into the application layer considerate DASH file format.
    <br><br>The dynamic output of the DASH format enables;
    <div class="note-list">
      • Cross platform interoperability of 3D digital assets.<br>
      • Easy transfer of assets into game engine environments.<br>
      • Preservation of visual information fidelity during asset transfer.<br>
      • Application layer specific optimisation of 3D object data across size, geometry, graphic expense, and material and texture surface attributes.<br>
    </div>
    <br><br>

    <h3 class="subtitle">
      Structure
    </h3>
    The DASH file format is dynamically generated through the interplay of a wrapper constructor and an engine plugin. In high level, the architecture is set where the wrapper constructor is able to take in a set of specified data values from the source file and values directly from the output application environment, which are fed to the constructor by the game engine plugin.
    <br><br>With these values stored, the wrapper constructor then acts to translate and write the data structure set for the new compatible DASH file through the use of an information space categorization, scoped bounding, traversal and optimization strategy, primarily informed by a proper understanding and application of Voronoi topographies and traditional video game Sprites as abstraction complexity compression heuristics. The full strategy set is condensed into simple seeming logical functions reliant more on approximate, related inference and adherence to strict prior fidelity, as compared to conventional approaches.
    <br><br>Voronoi tessellation provides an efficient mechanism for being able to dynamically partition and subdivide the surface of a geometric object, either polygonal or freeform. This approach is a highly beneficial method for optimally distributing polygon segmentation on the 3D object’s surface in a way that can reduce the overall polycount, mesh density and still ensure that facet edges, especially when dealing with spherical, cylindrical and more complex shapes, don’t interfere with and reduce quality across texturing. Balancing the cost of graphic vs performance fidelity through Voronoi tessellation ensures that each dynamic DASH output achieves an optimal tris limit and still maintains geometric information that is malleable and consistent with the overall graphic output environment without permanently modifying the object itself i.e. low fidelity increased angular rounding.
    <br><br>

    <img src="/images/figure1.png" alt="" class="figure1">
    <div class="figure-text">
      Figure 1: 3D Object Surface, applying Plane Sweep.
    </div>
    <br><br>Our approach seeks to leverage across both the use of outward radial growth and the Plane Sweep algorithm for creating the Voronoi tessellations across the object’s external facing surface— here, cells and points are created as the sweep line moves across the plane, guiding the beach line as the algorithm progresses.
    <br><br>Further, inspiration from Sprites comes from the perspective of being able to maintain a low latency transfer of information that can be experiential across the required fidelity. Projecting the relevant object data across a shifted plane allows for relevant information properties to be mapped from the source file into the larger graphical scene in a way that removes unnecessary computational overhead, and, in conjunction, navigates the mapping of a 3D topology more effectively across the plotted vertices and edges on the mesh surface.
    <br><br>With this combined Voronoi and Sprite inspired logic acting as the core variable argument determinators for the function, the function is then further attuned to the output application environment through leveraging a selection of machine learning libraries and datasets. The logic of the wrapper constructor is thus able to continuously re-attune as existing and new ML libraries are used to deploy, show and upgrade the core variable argument determinators.
    <br><br>Here, we are injecting the spirit of Open Source into the wider pursuit for quick and painless communication of 3D content— where for the first time the functions’ opinionated logic is trainable and upgradable. New ML libraries and datasets can contribute easily, be themselves open sourced, and become merged, into the DASH data repository for wider community leverage, where users of our file intercommunication architecture and DASH file format can implement custom, non-standard functions and add or replace functions for iteratively developed and improved application layer specific performance. With this we are founding the establishment of an active developer and builder orientated ecosystem for DASH that is motivated by peer recognition and maintained to uphold the highest state of reliability, security and functionality.
    <br><br>

    <h3 class="subtitle">
      Specification
    </h3>
    This section outlines and defines the .DASH format and the file intercommunication application specifications for generating the .DASH file format. It is significant to understand the translation process of proprietary source files, like .zpac, into application layer considerate .DASH adaptive data encapsulation formats. This section also describes the differential parts and arrangements of .DASH files.
    <br><br>The .DASH appendix includes the following components:
    <br><br>
    o File structure<br>
    o File intercommunication sequence<br>
    o Application specifications<br>
    o Schematic representation<br>
    <br><br>

    <h3 class="subtitle">
      File Structure
    </h3>
    The following types of data can be considered and understood by the .DASH file.
    <br><br>Model Cost
    <br>
    o Poly count<br>
    o Vertex count<br>
    o Mesh surface topology<br>
    o Polygon density<br>
    <br>
    Vertex Attributes
    o Position<br>
    o Geometric<br>
    o Texture<br>
    o Tangent and normal<br>
    o Degree<br>
    o Colour<br>
    <br>
    Surface Material assignment<br>
    o Texture type<br>
    <div class="note-list">
      o Diffuse<br>
      o Opacity<br>
      o Bump<br>
      o Specular<br>
      o Glow<br>
      o Reflection<br>
    </div>
    o Texture count<br>
    <br><br>
    Geometric Elements<br>
    o Face<br>
    o Point<br>
    o Line<br>
    o Edge<br>
    o Curve<br>
    o Surface<br>
    o Rigged geometries<br><br>
    Free-form Surfaces<br>
    o Angle<br>
    o Radius<br>
    o Polygon<br>
    o Point<br>
    o Acceleration<br><br>
    Display/ Render Attributes<br>
    o Bevel interpolation<br>
    o Colour interpolation<br>
    o Dissolve interpolation<br>
    o Level of Detail<br>
    o Material library<br>
    o Shading and lighting paths<br>
    <br>
    <h3 class="subtitle">
      File Intercommunication Sequence
    </h3>
    <code>
      <br>
      \\ Receive input source file, engine plugin, engine type
      <br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;read inputs for each ...
      <br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;if U[ ,  ) ... &lt; arg1 then
      <br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;sort for all x ∈ arg2 then
      <br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;centroidx ← object_segment(centroid1, ... centroidn, centroidn+1)
      <br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;if U[ ,  ) ... &lt; arg3 then
      <br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.l  ← plane_sweep(a.l)
      <br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;if U[ ,  ) ... &lt; arg4 then
      <br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A  ← A U {poly_identify}
      <br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;if U[ ,  ) ... &lt; arg5 then
      <br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i  ← A U [ . |I|); I ← I/{I(i)}.
      <br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;return I, app spec.<br>
      \\
    </code>

    <br><br>
    <h3 class="subtitle">
      Application Specifications
    </h3>
    In terms of the file intercommunication architecture, which ultimately is able to determine the final data structure output of the .DASH file, the data sourced from the engine plugin is relevant to both the game engine type and also more broadly key components of the built graphic scene itself.
    <br><br>In this release, the engine plugin is built for compatibility across the Unity, Unreal and Blender engines, where both the physics engine and recommended graphics card drivers are industry standardised.
    <br><br>Specific scene data and attributes from within the engine are sourced by the engine plugin. This includes;
    <br><br>
    o Universal geometry<br>
    <div class="note-list">
      o Tris<br>
      o Quads<br>
    </div>
    o Vertex count<br>
    o Texture count<br>
    o Material count<br>
    o Object count<br>
    o UV layers<br>
    o Vertex colours<br>
    o FPS margin<br><br>

    This information is then fed to the wrapper constructor, gathering relevant input data so that a well suited and output application specific data structure set can be written under the DASH file format. The DASH file is now able to appear “native” and sensitive to not only the game engine that it is being deployed into, but rather also the specifics of the graphic environment itself.
    <br><br>
    <h3 class="subtitle">
      Schematic Representation
    </h3><br><br>
    <img src="/images/figure2.png" alt="" class="figure2">
    <div class="figure-text">
      Figure 2: DASH file format generation process schematic.
    </div>
  </div>
</template>
<script>
export default {
  name: 'FileFormatPage'
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
  @media (max-width: 780px) {
    margin-top: -65px;
  }
  padding-bottom: 200px;

  font-family: 'Courier New';
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

  .figure1 {
    margin-left: calc(50% - 200px);
    width: 400px;

    @media (max-width: 780px) {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }

  .figure2 {
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
