import { HeadingTag } from "../components/";
import { withLayout } from "../Layout/Layout";
import { GetStaticProps } from "next";
import { MenuItem } from "../interfaces/menu.interface";
import { getCollectionData } from "../helpers/api";
import { firebaseDocs } from "../helpers/helpers";
import UIKit from "../components/UIKit/UIKit";

const { mainCollection } = firebaseDocs;

function Home({ menu }: HomeProps): JSX.Element {
  return (
    <>
      <HeadingTag tag="h1">Home Page</HeadingTag>
      <UIKit />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = "courses";

  const menu = await getCollectionData(mainCollection);

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};
interface HomeProps {
  menu: MenuItem;
  firstCategory: string;
}
