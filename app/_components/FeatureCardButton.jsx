// app/_components/FeatureCardButton.jsx
"use client" // ← Only the button is interactive!

export default function FeatureCardButton({ buttonText }) {
    const handleClick = () => {
        console.log("Clicked:", buttonText);
        // Your logic here
    };

    return (
        <button
            onClick={handleClick}
            className="bg-[#625df6] p-[0.5em] rounded-b-xl font-bold ring-1 ring-purple-500 inset-shadow-xs inset-shadow-purple-300 cursor-pointer hover:bg-[#7269f8] transition"
        >
            {buttonText}
        </button>
    )
}
