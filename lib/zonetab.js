const fetch = require('node-fetch')

const getZonetab = (endpoint = 'https://data.iana.org/time-zones/tzdb/zone.tab') => {
  return fetch(endpoint)
    .then(res => res.text())
    .then(body => {
      const lines = body.split('\n')

      const timezoneMap = {}

      for (const line of lines) {
        const str = line.split('#')[0].trim()
        if (!str) {
          continue
        }

        const [code, coordinates, tz, comments = null] = str.split('\t')

        timezoneMap[tz] = {
          code,
          coordinates,
          comments
        }
      }

      return timezoneMap
    })
}

module.exports = getZonetab