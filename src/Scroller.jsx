import React from 'react';
import { useScroller } from "./useScroller";

export default function Scroller(props) {
  const { x, y, isSmooth, children } = props;
  const scroller = useScroller({ x, y, isSmooth });
  return (<div onClick={scroller}>
    {children}
  </div>)
}