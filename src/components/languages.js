import React from "react";

function Languages({ language, onLanguageChange }) {
  return (
    <div>
      <label className="label">Select Language</label>
      <div className="opts">
        {LANGUAGES.map(({ label, value }) => {
          return (
            <div
              key={label}
              className={`opt ${language === value ? "selected" : ""}`}
              onClick={() => onLanguageChange(value)}
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const LANGUAGES = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "French", value: "fr" },
  { label: "Hindi", value: "hi" },
  { label: "Simplified Chinese", value: "zh-CN" },
  { label: "Igbo", value: "ig" },
  { label: "Yoruba", value: "yo" },
  { label: "Hausa", value: "ha" },
];

export default Languages;
