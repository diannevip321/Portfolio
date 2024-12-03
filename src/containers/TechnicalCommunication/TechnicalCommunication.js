import React from "react";
import "./TechnicalCommunication.scss";
import { technicalCommunication } from "../../portfolio";

export default function TechnicalCommunication({ isDark }) {
  if (!technicalCommunication.display) return null;

  return (
    <div className="main" id="technical-communication">
      <h1 className={isDark ? "dark-mode-heading" : "heading"}>
        {technicalCommunication.title}
      </h1>
      <p className={isDark ? "dark-mode-subtitle" : "subtitle"}>
        {technicalCommunication.subtitle}
      </p>
      <div className="projects-container">
        {technicalCommunication.assignments.map((assignment, index) => (
          <div className="project-card" key={index}>
            <h2 className="project-title">{assignment.title}</h2>
            <p className="project-description">{assignment.description}</p>
            <a
              href={assignment.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Assignment
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
