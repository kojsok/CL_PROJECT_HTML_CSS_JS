(() => {
  const SERVER_URL = 'http://localhost:3000'

  async function serverAddStudent(obj) {
    let response = await fetch(SERVER_URL + '/api/students', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    })

    let data = await response.json()

    return data
  }

  async function serverDeleteStudent(id) {
    let response = await fetch(SERVER_URL + '/api/students/' + id, {
      method: "DELETE"
    })

    let data = await response.json()

    return data
  }

  let listData = [];
})();
