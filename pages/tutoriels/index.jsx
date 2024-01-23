import { Card, CardContainer } from "@/components/Card";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import HtmlHead from "@/components/HtmlHead";
import { Pagination } from "@/components/Pagination";
import {TextGradient} from "@/components/TextGradient";
import { fetcher } from "@/utils/fetcher";

export const getServerSideProps = async (props) => {
  const { query } = props;
  const { page = 1, level = 1 } = query;

  const limit = 20;
  const skipTo = (parseInt(page) * limit) - limit;
  const response = await fetcher(`/api/post/select?start=${skipTo}&end=${limit}`);
  const { data, total, pages } = response;

  console.log({ response });

  return {
    props: {
      totalPages: pages,
      page: page,
      totalArticles: total,
      level: level,
      cards: data
    }
  }
}

export default function TutorialsPage({ 
  cards, 
  page, 
  totalArticles, 
  totalPages, 
  level
}) {
  const pageInt = parseInt(page);

  console.log("tutorials page", totalPages, typeof totalPages);

  return (
    <div className="Tutoriels">
      <HtmlHead title="Tutoriels"/>

      <Container mTop={50}>
        <Container width={100} mTop={20} height={true}>
          <Heading level={1}>
            Découvrir nos <TextGradient>Tutoriels</TextGradient>
          </Heading>

          <p className="subtitle">Page {pageInt} ({totalPages[totalPages.length - 1]} pages sur {totalArticles} articles)</p>

          <CardContainer>
            {
              cards.map((card, index) => (
                <Card key={index} {...card} />
              ))
            }
          </CardContainer>

          <Pagination items={totalPages} actualPage={parseInt(page)}/>
        </Container>
      </Container>
    </div>
  )
}