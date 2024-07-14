import React from 'react';
import styles from '../module/genres.module.css';

const Genres = () => {
  const genres = [
    {
      id: '01',
      title: 'Classic Literature',
      text: 'The category of classic literature contains literature that is worthy of being read through the ages. Classic literature is timeless and well-written. Sophocles,Charles Dickens, Jane Austen and Virgil are all writers whose works are considered classical literature.'
    },
    {
      id: '02',
      title: 'Romance',
      text: 'A romance is understood to be \'love stories,\' which are primarily focused on the relationship between the main characters of the story. The biggest defining characteristic of the romance genre is that a happy ending is always guaranteed, perhaps living \'happily ever after.\''
    },
    {
      id: '03',
      title: 'Suspense Thriller',
      text: 'Readers are taken on a rollercoaster ride of tension and intrigue. These gripping tales are filled with twists and turns, keeping readers guessing until the very last page as protagonists navigate dangerous situations.'
    },
    {
      id: '04',
      title: 'Science Fiction',
      text: 'Embarking on voyages across the cosmos and exploring the possibilities of future technology, science fiction books ignite the imagination with visions of advanced civilizations, space exploration, and speculative science.'
    },
    {
      id: '05',
      title: 'Fantasy',
      text: 'Immersed in magical realms and mythical creatures, fantasy books transport readers to worlds where anything is possible, weaving tales of epic quests, ancient prophecies, and battles between good and evil.'
    },
    {
      id: '06',
      title: 'Horror',
      text: 'Sending shivers down readers\' spines, horror books delve into the macabre and the supernatural, exploring fear, dread, and the unknown through chilling tales of monsters, ghosts, and psychological terror.'
    },
    {
      id: '07',
      title: 'Biography',
      text: 'Providing insight into real lives and experiences, biography books recount the journeys, triumphs, and struggles of notable individuals, offering inspiration and understanding through their personal stories and achievements.'
    },
    {
      id: '08',
      title: 'Self Help',
      text: 'Empowering readers to improve their lives and well-being, self-help books offer practical advice, strategies, and insights for personal growth, happiness, and success, covering topics such as relationships, productivity, and mental health.'
    },
    {
      id: '09',
      title: 'Historical Fiction',
      text: 'Offering a glimpse into the past, historical fiction books blend real events with fictional narratives, transporting readers to different eras and cultures, bringing history to life through vivid characters and immersive storytelling.'
    },
    {
      id: '10',
      title: 'Poetry',
      text: 'Distilling emotions into rhythmic language, they inspire reflection, evoke vivid imagery, and offer solace. From ancient epics to modern verses, they celebrate the power of words and the timeless beauty of human expression.'
    },
    {
      id: '11',
      title: 'Philosophy',
      text: 'Delve into life\'s fundamental questions, exploring existence, ethics, and knowledge, they provoke deep thought, challenge assumptions, and offer diverse perspectives, fostering critical thinking and a deeper understanding of the human condition.'
    },
    {
      id: '12',
      title: 'Adventure Fiction',
      text: 'Captivates with thrilling journeys, daring heroes, and unexpected twists, transports readers to exotic locales, ignites the imagination, and offers escapism, excitement, and a sense of discovery and wonder.'
    }
  ];

  return (
    <section className={styles.genre} id="genre">
      <div className={styles.container}>
        <h2 className={`${styles.h2} ${styles.sectionTitle} ${styles.hasUnderline}`} id="section-title1">
          Explore Different Genres
          <span className={styles.span} />
        </h2>
        <ul className={styles.gridList}>
          {genres.map((genre) => (
            <li key={genre.id}>
              <div className={styles.chapterCard}>
                <p className={styles.cardSubtitle}>{genre.id}</p>
                <h3 className={styles.h3}>{genre.title}</h3>
                <p className={styles.cardText}>{genre.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Genres;
