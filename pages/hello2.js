
import Strong from "../decorators/strong"
import Em from "../decorators/em"

const Hello = () => {
  const result = 2+2
  return (
    <div>
      <h3>Hello 2</h3>
      <Strong content2={result} /><br />
      <Em>{result}</Em><br />
      <em>I am using another shorthand arrow function syntax.</em>
    </div>
  )
}

export default Hello