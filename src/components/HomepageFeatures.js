import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Design',
    Svg: require('../../static/img/figma-logo.svg').default,
    description: (
      <>
        Design and Mockup Application for the crime alert app.
      </>
    ),
  },
  {
    title: 'Nestjs as Backend ',
    Svg: require('../../static/img/nestjs.svg').default,
    description: (
      <>
        Using Loopback or Nestjs as Background framework we will deliver and API in different services.
      </>
    ),
  },
  {
    title: 'React Native',
    Svg: require('../../static/img/react-native.svg').default,
    description: (
      <>
        How we will implement messages for the device we will combine in frontend react native and firebase.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
