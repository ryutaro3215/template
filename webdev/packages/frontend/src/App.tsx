export const App = () => {
  const handleClick = async () => {
    const response = await fetch("/api/test");

    console.log("status:", response.status);
    console.log("url:", response.url);

    const text = await response.text();
    console.log("body:", text);
    alert(text);
  };

  return (
    <button type="button" onClick={handleClick}>
      Click Api
    </button>
  );
};
