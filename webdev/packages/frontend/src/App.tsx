export const App = () => {
  const apiCheck = async () => {
    const response = await fetch("/api/test");

    console.log("status:", response.status);
    console.log("url:", response.url);

    const text = await response.text();
    console.log("body:", text);
    alert(text);
  };

  const dbCheck = async () => {
    const response = await fetch("/api/users");
    console.log("status:", response.status);
    console.log("url:", response.url);

    const json = await response.json();
    console.log("body:", json);
    alert(JSON.stringify(json));
  };

  return (
    <>
      <button type="button" onClick={apiCheck}>
        check API
      </button>
      <button type="button" onClick={dbCheck}>
        check DB
      </button>
    </>
  );
};
