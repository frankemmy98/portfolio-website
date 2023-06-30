import './index.scss'

// these components will receive three(3) arguments
// first argument is the class that we want to apply to our characters
// second is the array of the characters itself
// last is the index(starting point), which will basically set the delay
// of our letters and the animation.

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
