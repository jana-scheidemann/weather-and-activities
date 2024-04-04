export default function List({ activity, isWeather, onDeleteActivity }) {
  return (
    <>
      <h3>
        The weather is {isWeather.isGoodWeather ? "good" : "bad"}. Here are some
        things you can do:
      </h3>

      <ul>
        {activity.map(({ id, name }) => (
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
