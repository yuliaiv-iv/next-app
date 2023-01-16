import { withLayout } from "../../Layout/Layout";
import { GetStaticProps, GetStaticPaths } from "next";
import {
  Categories,
  MenuItem,
  PageItem,
} from "../../interfaces/menu.interface";
import { PageModel } from "../../interfaces/page.interface";
import { firebaseDocs, firstLevelMenu } from "../../helpers/helpers";
import MainPage from "../../Layout/MainPage/MainPage";
import { getCollectionData, getDocData } from "../../helpers/api";

const { mainCollection, pageCollection, pageDocument } = firebaseDocs;

function Page({ page, firstCategory, menu }: any) {
  return (
    <>
      {page && (
        <MainPage page={page} firstCategory={firstCategory} menu={menu} />
      )}
    </>
  );
}

export default withLayout(Page);

export const getStaticPaths: GetStaticPaths = async () => {
  const menu = await getCollectionData(mainCollection);
  let paths: string[] = [];

  for (const key in menu) {
    paths = paths.concat(
      menu[key].categories
        .map((c: Categories) => c.pages)
        .flat()
        .map((i: PageItem) => `/${key}/${i.alias}`)
    );
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const menu = await getCollectionData(mainCollection);
    const page = await getDocData(
      pageCollection,
      pageDocument,
      params.alias! as string
    );

    if (Object.keys(menu).length === 0 || !page) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface PageProps {
  menu: MenuItem;
  firstCategory: string;
  page: PageModel;
}
