import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Automatic Withdrawal',
        // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Streamline your cash flow with automatic withdrawals. Our system ensures your funds are transferred to your bank account or crypto wallet on a regular schedule, saving you time and reducing manual effort.
            </>
        ),
    },
  {
    title: 'Easy to Use',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Developers can easily implement secure payment functionality using our intuitive API documentation and robust SDKs.
          Simplify your payment workflows with our straightforward integration methods and comprehensive developer resources
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          Our payment gateway lets you focus on your business while we handle the complexities of payment processing. Integrate quickly and securely, so you can concentrate on what truly matters—growing your business.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/*<Svg className={styles.featureSvg} role="img" />*/}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
