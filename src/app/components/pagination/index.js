import React from "react";
import { Container } from "./styles";
import Button from "app/components/button";

const Pagination = ({
  totalPages,
  activePage,
  onNextPage,
  onPrevPage,
  onNumberPage
}) => {
  const [pages, setPages] = React.useState([]);
  const [newPages, setNewPages] = React.useState([]);
  const [startPage, setStartPage] = React.useState(0);
  const [minStartPage] = React.useState(0);
  const [maxStartPage, setMaxStartPage] = React.useState(0);

  React.useEffect(() => {
    const validation = () => {
      if (pages[pages.length - 1] !== 5) {
        let loopMax = 5 - pages[pages.length - 1].length;
        let tmp = [...pages[pages.length - 2]];
        tmp.reverse();
        tmp.length = loopMax;
        let newPages = [...pages];
        newPages[newPages.length - 1] = [
          ...tmp,
          ...newPages[newPages.length - 1]
        ];
        newPages[newPages.length - 1].sort((a, b) => a.key - b.key);
        setNewPages(newPages);
      }
      return;
    };
    pages && pages.length > 0 && setMaxStartPage(pages.length - 1);
    pages && pages.length > 0 && validation();
  }, [pages]);

  React.useEffect(() => {
    const showingPages = () => {
      let tmp = [];
      for (let i = 0; i < totalPages; i++) {
        tmp.push(
          <Button className="btn-page" funcPage={onNumberPage} key={i}>
            {i + 1}
          </Button>
        );
      }
      let jkl = [];
      for (let j = 0; j < Math.ceil(tmp.length / 5); j++) {
        let asd = tmp.slice(j * 5, j * 5 + 5);
        jkl.push(asd);
      }
      setPages(jkl);
      return;
    };
    totalPages && showingPages();
  }, [totalPages, onNumberPage]);

  const onNextHandler = () => {
    startPage + 1 <= maxStartPage && setStartPage(startPage + 1);
    onNextPage();
    return;
  };

  const onPrevHandler = () => {
    startPage - 1 >= minStartPage && setStartPage(startPage - 1);
    onPrevPage();
    return;
  };

  return (
    <Container>
      <Button className="btn-page" funcPage={onPrevHandler}>
        {`<`}
      </Button>
      {newPages && newPages.length > 0 && newPages[startPage].map(item => item)}
      <Button className="btn-page" funcPage={onNextHandler}>
        {`>`}
      </Button>
    </Container>
  );
};

export default Pagination;
