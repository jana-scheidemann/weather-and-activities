export default function List({ activities, isWeather, onDeleteActivity }) {
  return (
    <>
      <h3>
        The weather is {isWeather.isGoodWeather ? "good" : "bad"}. Here are some
        things you can do:
      </h3>

      <ul>
        {activities.map(({ id, name }) => (
          <li key={id}>
            {name}{" "}
            <button type="button" onClick={() => onDeleteActivity(id)}>
              🗑️ delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
