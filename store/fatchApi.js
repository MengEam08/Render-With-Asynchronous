const Base_Url = "https://fakestoreapi.com/";

export async function getData(endpoint) {
  try {
    const response = await fetch(`${Base_Url}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
