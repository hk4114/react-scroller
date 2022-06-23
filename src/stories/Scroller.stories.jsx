import React from 'react';

import Scroller from "../Scroller";

export default {
  title: 'Scroller',
  component: Scroller,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <div style={{ height: 3000 }}><Scroller {...args}><button >???!</button></Scroller></div>;

export const Primary = Template.bind({});
Primary.args = {
  y: 400,
  isSmooth: true
};