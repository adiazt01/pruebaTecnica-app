export const getTask = async (id) => {
    const url = `https://www.boredapi.com/api/activity?participants=${id}`;
    const data = await fetch(url).then(res => res.json())
    return data
  };