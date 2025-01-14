import { GoogleGenerativeAI } from "@google/generative-ai";
import fs  from "fs";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyAxXTDHmwaxDdJ4kPYu08kfklK76jv0esU');

const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-pro' });

const IMAGE_PATH_1 = './mac.png';
const imageResp1 = fs.readFileSync(IMAGE_PATH_1);


const PDF_IMAGE_PATH = './Trips_Flight_DownloadETicket (64).pdf';
const pdfResp = fs.readFileSync(PDF_IMAGE_PATH);

const pdfResult = await model.generateContent([
    {
        inlineData: {
            data: Buffer.from(pdfResp).toString("base64"),
            mimeType: "application/pdf",
        },
    },
    'Find the air line name and also check if airline website link is provided'
]);

// 'can you help me in find these two things: 1. **Booking Reference/e-ticket number:** Shown as "eg JFDE2V / eg 098XXXXXXXXXX", 2. **Last Name:**  As it appears on the ticket.',
//console.log(pdfResult.response.text());



const result = await model.generateContent([
    {
        inlineData: {
            data: Buffer.from(imageResp1).toString("base64"),
            mimeType: "image/jpeg",
        },
    },
    ' asuming the screen size to be { width: 1440, height: 900 } of the screen. is the test.js tab is visible to you in the given screen shot. so can you help with the cross sign to that use to close the test.js tab in the image with exact cordinate in pixels'
  ])
console.log(result.response.text());

//'for exact screen dimension of width: 1080, height: 1024 can you tell me exact x and y co ordinates of the image where submit button is ?'