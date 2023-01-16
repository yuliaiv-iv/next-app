import { useState } from "react";
import { Button, HeadingTag, Paragraph, Rating, Tag } from "../components/";
import { withLayout } from "../Layout/Layout";
import { GetStaticProps } from "next";
import { MenuItem } from "../interfaces/menu.interface";
import { getCollectionData } from "../helpers/api";
import { firebaseDocs } from "../helpers/helpers";

const { mainCollection } = firebaseDocs;

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState(2);

  return (
    <>
      <HeadingTag tag="h1">Home Page</HeadingTag>
      <HeadingTag tag="h3">Application UI Kit</HeadingTag>
      <div>
        <HeadingTag tag="h1">h1 Text</HeadingTag>
        <HeadingTag tag="h2">h2 Text</HeadingTag>
        <HeadingTag tag="h3">h3 Text</HeadingTag>
        <Paragraph>Paragraph</Paragraph>
      </div>
      <div>
        Primary Tags
        <Tag size="small" color="primary">
          Small Tag
        </Tag>
        <Tag color="primary">Medium Tag</Tag>
      </div>
      <div>
        Secondary Tags
        <Tag size="small" color="secondary">
          Small Tag
        </Tag>
        <Tag color="secondary">Medium Tag</Tag>
      </div>
      <div>
        Grey Tags
        <Tag size="small" color="grey">
          Small Tag
        </Tag>
        <Tag color="grey">Medium Tag</Tag>
      </div>
      <div>
        Green Tags
        <Tag size="small" color="green">
          Small Tag
        </Tag>
        <Tag color="green">Medium Tag</Tag>
      </div>
      <div>
        Rating
        <Rating rating={1} isEditable setRating={setRating} />
        <Rating rating={4} />
      </div>
      <div>
        Buttons
        <Button appearance="primary">Primary Button</Button>
        <Button appearance="secondary" arrow="right">
          Secondary Button
        </Button>
      </div>
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
