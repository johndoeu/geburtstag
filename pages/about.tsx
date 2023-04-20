import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - Geburtstag',
      }}
    >
      <h1>The Story</h1>
      <p>
        Honestly, I was trying to make a better website than this. But, do you
        know what?
      </p>

      <p>
        I thought the &quot;better&quot; website was ready to be <i>used</i>, but it has
        some errors on it! Arghh!!! And do you know what makes it worse? I check
        that website on the D-5 before D-Day!
      </p>

      <p>
        So my laziness body and mind didn&apos;t afford to fix that error. Sorry,
        actually. But, I don&apos;t want to break my promise to you. With all my
        super power, I present this website for you.
      </p>

      <p>
        Once again, <s>I love you</s> happy birthday! May your life always
        surrounded by great and lovely people.
      </p>
    </Layout>
  );
};

export default About;
