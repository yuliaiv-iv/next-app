import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import { withLayout } from "../../Layout/Layout";
import { MenuItem } from "../../interfaces/menu.interface";
import { firebaseDocs, firstLevelMenu } from "../../helpers/helpers";
import { ParsedUrlQuery } from "querystring";
import { getCollectionData } from "../../helpers/api";
import { HeadingTag, Paragraph } from "../../components";

const { mainCollection } = firebaseDocs;

function Type({ firstCategory }: TypeProps): JSX.Element {
  const firstCategoryItem = firstLevelMenu.find(
    (m) => m.route === firstCategory
  )!;

  const capitalized = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <>
      <HeadingTag tag="h1">
        {capitalized(firstCategoryItem?.name)} Page
      </HeadingTag>
      <Paragraph>
        Some content related {capitalized(firstCategoryItem?.name)} section
      </Paragraph>
    </>
  );
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => "/" + m.route),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
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

  const menu = await getCollectionData(mainCollection);

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};

interface TypeProps {
  menu: MenuItem;
  firstCategory: string;
}
