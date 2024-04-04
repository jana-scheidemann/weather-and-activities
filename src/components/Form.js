export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formElements = event.target.elements;
    const name = formElements.name.value;
    const isForGoodWeather = formElements.checkbox.checked;

    onAddActivity(name, isForGoodWeather);

    event.target.reset();
    formElements.name.focus();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add a new Activity:</legend>
          <label htmlFor="name">Name of the activity: </label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="checkbox">
            Is it a good-weather-activity? Check:
          </label>
          <input type="checkbox" id="checkbox" name="checkbox" />
          <br />
          <button type="submit">add to the list of activities</button>
        </fieldset>
      </form>
    </>
  );
}
