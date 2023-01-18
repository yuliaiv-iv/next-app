import Error from "../assets/Icons/Error";
import { HeadingTag } from "../components";
import { withLayout } from "../Layout/Layout";

function Error500(): JSX.Element {
  return (
    <section className="error">
      <Error />
      <HeadingTag tag="h2">
        Internal Server Error 500. Try to refresh this page
      </HeadingTag>
    </section>
  );
}

export default withLayout(Error500);
