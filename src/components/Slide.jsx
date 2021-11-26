import React, { useEffect, useState } from "react";
import "./Slide.css";
import DataSlide from "./DataSlide";
import styled from "styled-components";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

export default function Slide() {
  const [people, setPeople] = useState(DataSlide);
  const [value, setValue] = useState(0);

  useEffect(() => {
    let lastValue = people.length - 1;
    if (value > lastValue) {
      setValue(0);
    }
    if (value < 0) {
      setValue(lastValue);
    }
  }, [people, value]);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(value + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="slider">
      {people.map((person, index) => {
        const { id, image, name, title, phone, mail, quote } = person;

        let position = "next-slide";
        if (index === value) {
          position = "active-slide";
        }
        if (
          index === value - 1 ||
          (value === 0 && index === people.length - 1)
        ) {
          position = "prev-slide";
        }

        return (
          <div key={id} className={`slide ${position}`}>
            <div className="slide-img">
              <img src={image} alt={name} />
            </div>
            <h4>{name}</h4>
            <h5>{title}</h5>
            <p>{quote}</p>
            <h5>{phone}</h5>
            <h5>{mail}</h5>
          </div>
        );
      })}
    </div>
  );
}
