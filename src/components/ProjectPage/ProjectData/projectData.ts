import {
    DFLPicture,
    DriftmastersPicture,
    DriftmastersPicture02,
    PictureBierbaum01,
    PictureBierbaum02,
    NodeEnergy01
  } from "../../../images/images";

  import {
    descriptionBierbaum,
    descriptionDFL,
    descriptionRedBull,
    descriptionNodeEnergy
  } from "../../../texts/texts";


export interface ProjectData {
    title: string;
    description: string;
    img1: string;
    img2?: string;
    img3?: string;
  }
  
  export const projectData: { [key: string]: ProjectData } = {
    bierbaum: {
      title: "Bierbaum",
      description: descriptionBierbaum,
      img1: PictureBierbaum01,
      img2: PictureBierbaum02,
    },
    redbull: {
      title: "Red Bull",
      description: descriptionRedBull,
      img1: DriftmastersPicture,
      img2: DriftmastersPicture02,
    },
    dfl: {
      title: "DFL",
      description: descriptionDFL,
      img1: DFLPicture,
    },
    "node-energy": {
      title: "Node Energy",
      description: descriptionNodeEnergy,
      img1: NodeEnergy01,
    },
  };