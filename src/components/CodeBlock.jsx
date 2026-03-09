import React from "react";

const CodeBlock = () => {
  return (
    <div className="relative bg-[#0f0b34] p-6 rounded-lg w-full max-w-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <pre className="text-sm lg:text-base text-gray-300 whitespace-pre-wrap break-words">
        <span className="text-[#f9a826]">const</span> developer = {"{"}
        <br />
        {"  "}
        <span className="text-[#f9a826]">name</span>:{" "}
        <span className="text-[#16f2b3]">'Kapiraj Kumar'</span>,
        <br />
        {"  "}
        <span className="text-[#f9a826]">role</span>:{" "}
        <span className="text-[#16f2b3]">'Full-Stack Developer'</span>,
        <br />
        {"  "}
        <span className="text-[#f9a826]">education</span>:{" "}
        <span className="text-[#16f2b3]">'B.Tech CSE Graduate'</span>,
        <br />
        {/* {"  "}
        <span className="text-[#f9a826]">experience</span>:{" "}
        <span className="text-[#16f2b3]">"Worked as Developer"</span>,
        <br />
        {"  "} */}
        <span className="text-[#f9a826]">skills</span>: [
        <br />
        {"    "}
        <span className="text-[#16f2b3]">'React'</span>,{" "}

        <span className="text-[#16f2b3]">'Express.js'</span>,
        <br />
        {"    "}
        <span className="text-[#16f2b3]">'MongoDB'</span>,{" "}
        <span className="text-[#16f2b3]">'MySQL'</span>,{" "}
        <br />
        {"    "}
        <span className="text-[#16f2b3]">'Tailwind'</span>,{" "}
        <span className="text-[#16f2b3]">'Material-UI'</span>,{" "}
        <span className="text-[#16f2b3]">'JavaScript'</span>,
        <br />
        {"    "}
        <span className="text-[#16f2b3]">'DSA'</span>,{" "}
        <span className="text-[#16f2b3]">'Postman'</span>,{" "}
        <span className="text-[#16f2b3]">'Git & GitHub'</span>,
        <br />
        {"    "}
        <span className="text-[#16f2b3]">'C++'</span>,{" "}
        <span className="text-[#16f2b3]">'C'</span>
        <br />
        {"  "}]
        <br />
        {"  "}
        <span className="text-[#f9a826]">hireable</span>:{" "}
        <span className="text-[#16f2b3]">true</span>
        <br />
        {"}"}
      </pre>
    </div>
  );
};

export default CodeBlock;
