import Error from "../assets/Icons/Error";
import { HeadingTag } from "../components";
import { withLayout } from "../Layout/Layout";

export function Error404(): JSX.Element {
  return (
    <section className="error">
      <Error />
      <HeadingTag tag="h2">This page could not be found. Error 404</HeadingTag>
    </section>
  );
}

export default withLayout(Error404);
