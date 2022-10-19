export default eventHandler((event) => {
  appendHeaders(event, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET POST PUT DELETE OPTIONS',
    'Access-Control-Allow-Credentials': 'true',
    'Cache-Control': 'max-age=31536000, public',
  })
})
