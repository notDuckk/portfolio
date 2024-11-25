import { useState } from "react";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const CopyButton = ({ textToCopy }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        } catch (error) {
            console.error("Failed to copy text:", error);
        }
    };

    return (
        <>
            <button
                onClick={handleCopy}
            >
                <img src={"/public/assets/copybutton.png"} alt={"copy button"} className={`w-6 h-6 transition-opacity duration-300 ${
                    copied ? "opacity-50" : "opacity-100"
                }`}
                />
            </button>
        </>


    );
};

export default CopyButton;