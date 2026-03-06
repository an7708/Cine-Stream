    import { useState } from "react";
    import { getMovieFromMood } from "../services/aiService";

    function MoodMatcher({ onMovieFound }) {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);     // ← added

    const handleSearch = async () => {
        if (!prompt.trim()) return;

        setLoading(true);
        setError(null);           // reset previous errors

        try {
        const movieTitle = await Promise.race([
            getMovieFromMood(prompt),
            new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Request timed out")), 18000)
            ), // 18 second timeout
        ]);

        if (!movieTitle || typeof movieTitle !== "string" || movieTitle.trim() === "") {
            throw new Error("No valid movie suggestion returned");
        }

        onMovieFound(movieTitle);
        } catch (err) {
        console.error("Mood → Movie failed:", err);
        setError(err.message || "Something went wrong. Try again?");
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="mood-box">
        <input
            type="text"
            placeholder="Describe your mood... (e.g. I am sad suggest me action movie)"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()} // ← nice bonus
        />

        <button onClick={handleSearch} disabled={loading}>
            {loading ? "Thinking..." : "Find Movie"}
        </button>

        {loading && <p className="loading-text">AI thinking...</p>}

        {error && <p className="error-text">{error}</p>}
        </div>
    );
    }

    export default MoodMatcher;