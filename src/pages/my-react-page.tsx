import Layout from "@theme/Layout";
import { memo } from "react";

const MyReactPage = memo(() => {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
});

export default MyReactPage;
