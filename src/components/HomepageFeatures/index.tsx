import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"img">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "crypto",
    Svg: require("@site/static/img/wagmi_dark.svg").default,
    description: (
      <>
        基于Wagmi封装/适配了众多符合业务场景的hook（如Ethers.js），以及适配各种钱包的连接等。
      </>
    ),
  },
  {
    title: "chain",
    Svg: require("@site/static/img/evm.svg").default,
    description: (
      <>
        定义了众多EVM链的配置信息，以及处理<code>RPC</code>相关的工具函数。
      </>
    ),
  },
  {
    title: "utils",
    Svg: require("@site/static/img/tools.svg").default,
    description: <>开箱即用，封装众多符合业务场景的工具函数。</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <div
          style={{
            display: "flex",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  // const { siteConfig } = useDocusaurusContext()
  // console.log(siteConfig)

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
