    import { GoogleGenerativeAI } from "@google/generative-ai";

    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(API_KEY);
    export const getMovieFromMood = async (prompt) => {
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash"
    });

    const result = await model.generateContent(
        `Suggest ONLY ONE movie title for this mood: ${prompt}.
        Return only the movie name, nothing else.`
    );

    const response = await result.response;
    const text = response.text();

    return text.trim();
    };