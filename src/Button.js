import React, { useEffect, useState } from "react";

export default function Button({ handleClick, text }) {
  let [term, setTerm] = useState(0);
  let [term2, setTerm2] = useState(0);
  let [term3, setTerm3] = useState(0);
  let [list, setList] = useState(['item1', 'item'])

  useEffect(() => {
    console.log("[]: I run on initial render only");
  }, []);
  useEffect(() => {
    console.log(
      "...nothing...: I run on initial render AND after every rerender"
    );
  });
  useEffect(() => {
    console.log(
      "[term]: I run on initial render AND after every rerender IF term has changed since last render"
    );
  }, [term, term2, term3, list]);
  return <button onClick={() => setTerm3(term3++)}>{text}</button>;
}
