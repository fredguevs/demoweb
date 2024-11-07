import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import "./App.css";
import "typeface-poppins";

import { Provider } from "@/components/ui/provider";

function App() {
  return (
    <>
      <Provider>
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>{" "}
        <div className="pt-4 font-sans3 overflow-x-hidden selection:bg-selection-dark selection:text-white">
          {/* Navbar Section */}
          <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
            <Navbar />
          </div>

          {/* Hero Section with offset to account for navbar */}
          <div>
            <Hero />
          </div>

          <div className="mt-20">
            <h1
              className="ml-40 text-2xl md:text-3xl lg:text-4xl font-bold mb-20"
              style={{ color: "black" }}
            >
              PROJECTS
            </h1>
          </div>

          {/* Projects Section */}
          <div className="ml-32 mt-10">
            <ProjectCard
              title="MobiPrint: A Mobile 3D Printer for Environment-Scale Design and Fabrication"
              authors="Daniel Campos Zamora, Liang He, and Jon Froehlich"
              conference="UIST 2024"
              links={[
                { label: "PDF", url: "https://example.com/pdf" },
                { label: "ACM DL", url: "https://example.com/acm" },
                { label: "Video", url: "https://example.com/video" },
                {
                  label: "Code & Hardware Design",
                  url: "https://example.com/code",
                },
              ]}
              description="We present MobiPrint, a prototype mobile fabrication system that combines elements from robotics, architecture, and Human-Computer Interaction (HCI) to enable environment-scale design and fabrication in ad-hoc indoor environments. MobiPrint provides a multi-stage fabrication pipeline: first, the robotic 3D printer automatically scans and maps an indoor space; second, a custom design tool converts the map into an interactive CAD canvas for editing and placing models in the physical world; finally, the MobiPrint robot prints the object directly on the ground at the defined location. Through a “proof-by-demonstration” validation, we highlight our system’s potential across different applications, including accessibility, home furnishing, floor signage, and art."
              imageSrc="https://www.3printr.com/wp-content/uploads/2024/10/mobiprint.jpg"
            />
            <ProjectCard
              title="ModElec: A Design Tool for Prototyping Physical Computing Devices Using Conductive 3D Printing"
              authors="Liang He, Jarrid A Wittkopf, Ji Won Jun, Kris Erickson, and Rafael 'Tico' Ballagas"
              conference="IMWUT 2021 / UbiComp 2022"
              links={[
                { label: "PDF", url: "https://example.com/pdf" },
                { label: "ACM DL", url: "https://example.com/acm" },
                { label: "Video", url: "https://example.com/video" },
                {
                  label: "Code & Hardware Design",
                  url: "https://example.com/code",
                },
              ]}
              description="We present a pipeline for printing interactive and always-on magnetophoretic displays using affordable FDM 3D printers. Using our pipeline, an end-user can convert the surface of a 3D shape into a matrix of voxels. The generated model can be sent to an FDM 3D printer equipped with an additional syringe-based injector. During the printing process, an oil and iron powder-based liquid mixture is injected into each voxel cell, allowing the appearance of the once-printed object to be editable with external magnetic sources. To achieve this, we made modifications to the 3D printer hardware and the firmware. We also developed a 3D editor to prepare printable models. We demonstrate our pipeline with a variety of examples, including a printed Stanford bunny with customizable appearances, a small espresso mug that can be used as a post-it note surface, a board game figurine with a computationally updated display, and a collection of flexible wearable accessories with editable visuals."
              imageSrc="https://www.de4m.xyz/research/modelec/thumbnail.jpg"
            />
            <ProjectCard
              title="HulaMove: Using Commodity IMU for Waist Interaction"
              authors="Xuhai Xu, Jiahao Li, Tianyi Yuan, Liang He, Xin Liu, Yukang Yan, Yuntao Wang, Yuanchun Shi, Jennifer Mankoff, and Anind K Dey."
              conference="CHI 2021"
              links={[
                { label: "PDF", url: "https://example.com/pdf" },
                { label: "ACM DL", url: "https://example.com/acm" },
                { label: "Video", url: "https://example.com/video" },
                {
                  label: "Code & Hardware Design",
                  url: "https://example.com/code",
                },
              ]}
              description="We present HulaMove, a novel interaction technique that leverages the movement of the waist as a new eyes-free and hands-free input method for both the physical world and the virtual world. We first conducted a user study (N=12) to understand users’ ability to control their waist. We found that users could easily discriminate eight shifting directions and two rotating orientations, and quickly confirm actions by returning to the original position (quick return). We developed a design space with eight gestures for waist interaction based on the results and implemented an IMU-based real-time system. Using a hierarchical machine learning model, our system could recognize waist gestures at an accuracy of 97.5%. Finally, we conducted a second user study (N=12) for usability testing in both real-world scenarios and virtual reality settings."
              imageSrc="https://i.ytimg.com/vi/W8MoKTT_akw/maxresdefault.jpg"
            />
            <ProjectCard
              title="Ondulé: Designing and Controlling 3D Printable Springs"
              authors="Liang He, Huaishu Peng, Michelle Lin, Ravikanth Konjeti, François Guimbretière, and Jon E. Froehlich"
              conference="UIST 2019"
              links={[
                { label: "PDF", url: "https://example.com/pdf" },
                { label: "ACM DL", url: "https://example.com/acm" },
                { label: "Video", url: "https://example.com/video" },
                {
                  label: "Code & Hardware Design",
                  url: "https://example.com/code",
                },
              ]}
              description="We present Ondulé—an interactive design tool that allows novices to create parameterizable deformation behaviors in 3D-printable models using helical springs and embedded joints. Informed by spring theory and our empirical mechanical experiments, we introduce spring and joint-based design techniques that support a range of parameterizable deformation behaviors, including compress, extend, twist, bend, and various combinations. To enable users to design and add these deformations to their models, we introduce a custom design tool for Rhino. With the tool, users can convert selected geometries into springs, customize spring stiffness, and parameterize their design with mechanical constraints for desired behaviors."
              imageSrc="https://i.ytimg.com/vi/tCiGhV3RJuI/maxresdefault.jpg"
            />
            <ProjectCard
              title="SqueezaPulse: Adding Interactive Input to Fabricated Objects"
              authors="Liang He, Gierad Laput, Eric Brockmeyer, and Jon E. Froehlich"
              conference="TEI 2017"
              links={[
                { label: "PDF", url: "https://example.com/pdf" },
                { label: "ACM DL", url: "https://example.com/acm" },
                { label: "Video", url: "https://example.com/video" },
                {
                  label: "Code & Hardware Design",
                  url: "https://example.com/code",
                },
              ]}
              description="We present SqueezaPulse, a technique for embedding interactivity into fabricated objects using soft, passive, lowcost bellow-like structures. When a soft cavity is squeezed, air pulses travel along a flexible pipe and into a uniquely designed corrugated tube that shapes the airflow into predictable sound signatures. A microphone captures and identifies these air pulses enabling interactivity. Informed by the underlying acoustic theory, we described an informal examination of the effect of different 3D-printed corrugations on air signatures and our resulting SqueezaPulse implementation. To demonstrate and evaluate the potential of SqueezaPulse, we present four prototype applications and a small, lab-based user study (N=9). Our evaluations show that our approach is accurate across users and robust to external noise."
              imageSrc="https://dl.acm.org/cms/asset/a589ff98-d1d3-4a33-9853-d15e807dd2eb/3024969.3024976.key.jpg"
            />
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
