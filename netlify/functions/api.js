exports.handler = async function(event) {
  const API_KEY = '4f6a2d52fe8e483e92015691707cdb05';
  const BASE = 'https://api.football-data.org/v4';
  const path = event.queryStringParameters?.path || '';

  try {
    const res = await fetch(`${BASE}${path}`, {
      headers: { 'X-Auth-Token': API_KEY }
    });
    const data = await res.json();
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: e.message })
    };
  }
};
