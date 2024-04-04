import Form from "./components/Form.js";
import List from "./components/List.js";
import { initialActivities } from "./components/data.js";
import { useEffect, useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [activity, setActivity] = useLocalStorageState("activity", {
    defaultValue: initialActivities,
  });

  const [isWeather, setIsWeather] = useState(undefined);

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const isWeather = await response.json();

      setIsWeather(isWeather);
    }
    const interval = setInterval(() => {
      startFetching();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!isWeather) {
    return null;
  }

  const filteredActivities = activity.filter(
    (activity) => activity.isForGoodWeather === isWeather.isGoodWeather
  );

  function handleAddActivity(name, isForGoodWeather) {
    setActivity([
      ...activity,
      { id: uid(), name: name, isForGoodWeather: isForGoodWeather },
    ]);
  }

  function handleDeleteActivity(id) {
    setActivity(activity.filter((singleActivity) => id !== singleActivity.id));
  }

  return (
    <>
      <h1>Weather and Activity App</h1>
      <h2>
        {isWeather.condition} {isWeather.temperature} °C
      </h2>
      <List
        activity={filteredActivities}
        isWeather={isWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
