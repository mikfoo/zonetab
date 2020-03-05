# zonetab

## Description
Fetches the zone.tab file from https://data.iana.org/time-zones/tzdb/zone.tab and returns a promise with a formatted timezone object.

## Installation
```bash
$ npm install zonetab
```

## Usage

### CLI
```bash
$ zonetab -f > zonetab.json
```

### Node
```javascript
const getZonetab = require('zonetab')

getZonetab().then(zonetabMap => {
  // zonetabMap output:
  // {
  //   ...
  //   "Europe/Copenhagen": {
  //     "code": "DK",
  //     "coordinates": "+5540+01235",
  //     "comments": null,
  //   },
  //   ...
  // }
})
```