class LogHelper {
    localServerLogging = (title, desc = '', data = {}) => {
      fetch('http://localhost:3000/api/logs', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          title,
          data,
          desc,
          createdAt: new Date().toISOString(),
        }),
      });
    };
  }
  
  export default new LogHelper();
  