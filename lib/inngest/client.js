import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
     id: "jobgenie",
     name:"jobgenie",
     credential: {
        gemini:{
            apikey: process.env.GEMINI_API_KEY,
        },
     },
     });
