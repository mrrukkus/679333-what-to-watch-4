import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";

const filmsMock = [
  {
    runTime: 190,
    comments: [
      {
        "id": 1,
        "user": {
          "id": 4,
          "name": `Kate Muir`
        },
        "rating": 8.9,
        "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        "date": `2019-05-08T14:13:56.569Z`
      }
    ],
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Dramas`,
    year: 2014,
    filmBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    score: `1,0`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    paragraphs: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`, `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
    director: `Wes Andreson`,
    starring: [`Bill Murray, Edward Norton, Jude Law, Willem Dafoe`],
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: 0
  },
  {
    runTime: `1h 39m`,
    img: `img/bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`,
    genre: `Dramas`,
    year: 2014,
    filmBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    score: `2,0`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    paragraphs: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`, `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
    director: `Wes Andreson`,
    starring: [`Bill Murray, Edward Norton, Jude Law, Willem Dafoe`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    id: 1
  },
  {
    runTime: `1h 39m`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Dramas`,
    year: 2014,
    filmBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    score: `1,0`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    paragraphs: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`, `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
    director: `Wes Andreson`,
    starring: [`Bill Murray, Edward Norton, Jude Law, Willem Dafoe`],
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: 0
  },
  {
    runTime: `1h 39m`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Dramas`,
    year: 2014,
    filmBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    score: `1,0`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    paragraphs: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`, `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
    director: `Wes Andreson`,
    starring: [`Bill Murray, Edward Norton, Jude Law, Willem Dafoe`],
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: 0
  },
  {
    runTime: `1h 39m`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Dramas`,
    year: 2014,
    filmBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    score: `1,0`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    paragraphs: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`, `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
    director: `Wes Andreson`,
    starring: [`Bill Murray, Edward Norton, Jude Law, Willem Dafoe`],
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: 0
  },
  {
    runTime: `1h 39m`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Dramas`,
    year: 2014,
    filmBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    score: `1,0`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    paragraphs: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`, `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
    director: `Wes Andreson`,
    starring: [`Bill Murray, Edward Norton, Jude Law, Willem Dafoe`],
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: 0
  },
  {
    runTime: `1h 39m`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Dramas`,
    year: 2014,
    filmBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    score: `1,0`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    paragraphs: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`, `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
    director: `Wes Andreson`,
    starring: [`Bill Murray, Edward Norton, Jude Law, Willem Dafoe`],
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: 0
  },
  {
    runTime: `1h 39m`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Dramas`,
    year: 2014,
    filmBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    score: `1,0`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    paragraphs: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`, `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
    director: `Wes Andreson`,
    starring: [`Bill Murray, Edward Norton, Jude Law, Willem Dafoe`],
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: 0
  },
  {
    runTime: `1h 39m`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Dramas`,
    year: 2014,
    filmBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    score: `1,0`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    paragraphs: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`, `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
    director: `Wes Andreson`,
    starring: [`Bill Murray, Edward Norton, Jude Law, Willem Dafoe`],
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: 0
  },
];

describe(`Tabs renders correctly`, () => {
  it(`Overview tab renders correctly`, () => {
    const overview = renderer
      .create(<Tabs
        activeTab={`Overview`}
        film={filmsMock[0]}
        onTabChange={() => {}}
      />).toJSON();

    expect(overview).toMatchSnapshot();
  });

  it(`Details tab renders correctly`, () => {
    const details = renderer
      .create(<Tabs
        activeTab={`Details`}
        film={filmsMock[0]}
        onTabChange={() => {}}
      />).toJSON();

    expect(details).toMatchSnapshot();
  });

  it(`Reviews tab renders correctly`, () => {
    const reviews = renderer
      .create(<Tabs
        activeTab={`Reviews`}
        film={filmsMock[0]}
        onTabChange={() => {}}
      />).toJSON();

    expect(reviews).toMatchSnapshot();
  });
});
