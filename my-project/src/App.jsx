// // import React, { useEffect, useRef } from 'react';
// // import * as tmImage from '@teachablemachine/image';

// // const App = () => {
// //   const webcamRef = useRef(null);
// //   const labelContainerRef = useRef(null);
// //   let model, webcam, labelContainer, maxPredictions;

// //   const init = async () => {
// //     const URL = 'https://teachablemachine.withgoogle.com/models/aLCcf7VFn/';

// //     const modelURL = URL + 'model.json';
// //     const metadataURL = URL + 'metadata.json';

// //     model = await tmImage.load(modelURL, metadataURL);
// //     maxPredictions = model.getTotalClasses();

// //     const flip = true;
// //     webcam = new tmImage.Webcam(200, 200, flip);
// //     await webcam.setup();
// //     await webcam.play();
// //     window.requestAnimationFrame(loop);

// //     if (webcamRef.current) {
// //       webcamRef.current.appendChild(webcam.canvas);
// //     }

// //     labelContainer = labelContainerRef.current;
// //     for (let i = 0; i < maxPredictions; i++) {
// //       labelContainer.appendChild(document.createElement('div'));
// //     }
// //   };

// //   const loop = async () => {
// //     webcam.update();
// //     await predict();
// //     window.requestAnimationFrame(loop);
// //   };

// //   const predict = async () => {
// //     if (webcam.canvas) {
// //       const prediction = await model.predict(webcam.canvas);
// //       for (let i = 0; i < maxPredictions; i++) {
// //         const classPrediction = ${prediction[i].className}: ${(prediction[i].probability * 100).toFixed(2)}%;
// //         labelContainer.childNodes[i].innerHTML = classPrediction;
// //       }
// //     }
// //   };

// //   useEffect(() => {
// //     init();

// //     return () => {
// //       if (webcam) {
// //         webcam.stop();
// //       }
// //     };
// //   }, []);

// //   return (
// //     <div>
// //       <div>Teachable Machine Image Model</div>
// //       <button type="button" onClick={init}>
// //         Start
// //       </button>
// //       <div ref={webcamRef} id="webcam-container"></div>
// //       <div ref={labelContainerRef} id="label-container"></div>
// //     </div>
// //   );
// // };

// // export default App;

// import { useEffect, useRef } from 'react';
// import * as tmImage from '@teachablemachine/image';

// const App = () => {
//   const webcamRef = useRef(null);
//   const labelContainerRef = useRef(null);
//   let model, webcam, labelContainer, maxPredictions;

//   const init = async () => {
//     const URL = 'https://teachablemachine.withgoogle.com/models/aLCcf7VFn/';

//     const modelURL = URL + 'model.json';
//     const metadataURL = URL + 'metadata.json';

//     model = await tmImage.load(modelURL, metadataURL);
//     maxPredictions = model.getTotalClasses();

//     const flip = true;
//     webcam = new tmImage.Webcam(200, 200, flip);
//     await webcam.setup();
//     await webcam.play();
//     window.requestAnimationFrame(loop);

//     if (webcamRef.current) {
//       webcamRef.current.appendChild(webcam.canvas);
//     }

//     if (labelContainerRef.current) {
//       labelContainer = labelContainerRef.current;
//       for (let i = 0; i < maxPredictions; i++) {
//         labelContainer.appendChild(document.createElement('div'));
//       }
//     }
//   };

//   const loop = async () => {
//     webcam.update();
//     await predict();
//     window.requestAnimationFrame(loop);
//   };

//   const predict = async () => {
//     if (webcam.canvas) {
//       const prediction = await model.predict(webcam.canvas);
//       for (let i = 0; i < maxPredictions; i++) {
//         const classPrediction = `${prediction[i].className}: ${(prediction[i].probability * 100).toFixed(2)}%`;
//         if (labelContainerRef.current && labelContainerRef.current.childNodes[i]) {
//           labelContainerRef.current.childNodes[i].innerHTML = classPrediction;
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     init();

//     return () => {
//       if (webcam) {
//         webcam.stop();
//       }
//     };
//   }, []);
//   console.log("Initializing.....")

//   return (
//     <div>
//       <div className='m-3 p-3 bg-slate-500 text-2xl font-medium'>Teachable Machine Image Model</div>
//       <button type="button" onClick={init}>
//         Start
//       </button>
//       <div ref={webcamRef} id="webcam-container"></div>
//       <div ref={labelContainerRef} id="label-container"></div>
//     </div>
//   );
// };

// export default App;
import { useEffect, useRef } from "react";
import { Button, Flex, Heading, Box, Center } from "@chakra-ui/react";
import * as tmImage from "@teachablemachine/image";

const App = () => {
  const webcamRef = useRef(null);
  const labelContainerRef = useRef(null);
  let model, webcam, labelContainer, maxPredictions;

  const init = async () => {
    const URL = "https://teachablemachine.withgoogle.com/models/aLCcf7VFn/";

    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const flip = true;
    webcam = new tmImage.Webcam(200, 200, flip);
    await webcam.setup();
    await webcam.play();
    window.requestAnimationFrame(loop);

    if (webcamRef.current) {
      webcamRef.current.appendChild(webcam.canvas);
    }

    if (labelContainerRef.current) {
      labelContainer = labelContainerRef.current;
      for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
      }
    }
  };

  const loop = async () => {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
  };

  const predict = async () => {
    if (webcam.canvas) {
      const prediction = await model.predict(webcam.canvas);
      for (let i = 0; i < maxPredictions; i++) {
        const classPrediction = `${prediction[i].className}: ${(
          prediction[i].probability * 100
        ).toFixed(2)}%`;
        if (
          labelContainerRef.current &&
          labelContainerRef.current.childNodes[i]
        ) {
          labelContainerRef.current.childNodes[i].innerHTML = classPrediction;
        }
      }
    }
  };

  useEffect(() => {
    init();

    return () => {
      if (webcam) {
        webcam.stop();
      }
    };
  }, []);

  return (
    <Box p={4}>
      <Heading textAlign="center" as="h2" justifyContent="center" size="xl" mb={4}>
        Teachable Machine Image Model
      </Heading>
      <hr />
      <Button
        size="md"
        height="48px"
        width="200px"
        border="2px solid black"
        borderColor="green.500"
        onClick={init}
        // colorScheme="telegram"
        textAlign="center"
        mb={12}
      >
        Start
      </Button>
      <Flex justifyContent="center" mb={4}>
        <Box ref={webcamRef} id="webcam-container"></Box>
      </Flex>
      <Flex ref={labelContainerRef} id="label-container" flexWrap="wrap">
        {/* Placeholder for labels */}
      </Flex>
    </Box>
  );
};

export default App;
