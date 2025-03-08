import React from 'react';
import Card from './components/Card';
import { useState } from 'react';
import './App.css';

export default function App() {
  // Important states
  const [currentCardIndex, setcurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // List of card pairs
  const cards = [
    {question : "Is your reflection you?", answer : "No - it's just light. Shows how our sense of self isn't always what it seems."},
    {question : "Can you step in the same river twice?", answer : "No - the water changes. Shows nothing stays the same."},
    {question : "Is a copy of you still you?", answer : "No - identity is unique. Even perfect copies aren't the same."},
    {question : "Can time flow backwards?", answer : "Maybe - time might just be in our minds."},
    {question : "Is a dream real?", answer : "Yes - it's real to your mind. Shows how reality depends on perception."},
    {question : "Can you be certain of anything?", answer : "No - even doubt might be wrong. Shows limits of knowledge."},
    {question : "Is your future self you?", answer : "Maybe - same body, different thoughts. Shows identitry isn't simple."},
    {question : "Is a photograph of you, you?", answer : "No - just light and shadow. Shows difference between image and reality."},
    {question : "Can machines think?", answer : "Maybe - depends on what 'thinking' means. Shows complexity of consciousness"},
    {question : "Is anything permanent?", answer : "No - everything changes. Shows nature of reality is flux."},
    {question : "Can yoou know your thoughts?", answer : "Partially - some thoughts hide from us. Shows limits of self-knowledge."},
    {question : "Is space empty?", answer : "No - even empty space has properties. Shows nature of existence."},
    {question : "Is the past real?", answer : "Only in memory - shows how reality depends on perception."},
    {question : "Can you choose what you want?", answer : "Maybe - thoughts might control choices. Shows complexity of free will."},
    {question : "Is a copy of a copy still the same?", answer : "No - each copy changes reality. Shows how representation differs from reality."},

  ];

  // Flips the card over
  // const flipCard = () => setIsFlipped(!isFlipped);
  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  // Go to the next flashcard and flip to original position
  function nextCard() {
    setIsFlipped(false);
    setcurrentCardIndex(Math.floor(Math.random() * cards.length));
  }

  return (
    <div className="app">
        <h1>Reality Riddles</h1>
        <p>
          Through contemplation and reflections, each card presents a metaphysical
          riddle that challenges our understanding of reality, consciousness, and
          the nature of being.
        </p>
        <h3>total cards: {cards.length}</h3>
        <Card card={cards[currentCardIndex]} onFlip={flipCard} isFlipped={isFlipped} />
        <button className="next-button" onClick={nextCard}>Next Card</button>
    </div>
  )
}