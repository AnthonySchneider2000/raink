import "./rain.css"

function Rain() {
    return (
      <>
          {Array(100) // You can change the number of raindrops by adjusting this value
            .fill(null)
            .map((_, index) => (
              <div key={index} className="raindrop" />
            ))}
      </>
    );
  }

export default Rain;