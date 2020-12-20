 import img1 from "../../assets/progression/01-red-sampled-legend-merge.png";
 import img2 from "../../assets/progression/02-blue-annotated-legend-merge.png";
 import img3 from "../../assets/progression/05-green-checkered-legend-merge.png";
 import img4 from "../../assets/progression/07-red-headline-legend-merge.png";
 import img5 from "../../assets/progression/010-blue-clustered-legend-merge.png";
 import img6 from "../../assets/progression/014-red-checkered-legend-merge.png";
 import img7 from "../../assets/progression/016-blue-clustered-legend-merge.png";
  
 export const cfg = {
    sliderTarget: ".range",
    mapTarget: ".map",
    hardCodedProg: [
        img1,
        img2,
        img3,
        img4,
        img5,
        // img6,
        // img7
    ],
    fetchBaseURL: "http://localhost:3000/api/v1/",
    sessionInitExtension: "respondent",
    responseExtension: "response"
};