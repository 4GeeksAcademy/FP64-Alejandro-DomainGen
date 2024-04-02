/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function main() {
  const pronounAdjList = getPronounAdjList();
  const pronounAdjNounList = getPronounAdjNounList(pronounAdjList);
  printPronounAdjNoun(pronounAdjNounList);
}

const getPronounAdjList = () => {
  let state = [];
  const pronounList = ["the", "our"];
  const AdjList = ["great", "big"];
  pronounList.forEach((pronoun) => {
    AdjList.forEach((adj) => {
      state = [...state, `${pronoun}${adj}`];
    });
  });
  return state;
};

const getPronounAdjNounList = (pronounAdjList) => {
  const nounList = ["jogger", "racoon"];
  return pronounAdjList.reduce((state, pronounAdj) => {
    nounList.forEach((noun) => {
      state = [...state, `${pronounAdj}${noun}.com`];
    });
    return state;
  });
};

const printPronounAdjNoun = (pronounAdjNounList) => {
  pronounAdjNounList.forEach((pronounAdjNoun) => {
    console.log(pronounAdjNoun);
  });
};
main();
