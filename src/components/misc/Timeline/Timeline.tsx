import React from "react";
import TimelineItem from "./TimelineItem";

interface TimelineProps {
  children: React.ReactNode;
}

export const Timeline = ({ children }: TimelineProps) => (
  <ul className="timeline">
    {React.Children.map(children, (child) => (
      <TimelineItem>{child}</TimelineItem>
    ))}
  </ul>
);
