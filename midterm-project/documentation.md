
# PROJECT NAME

---

Name: Pratik Lahiri

Date: October 28, 2019

Project Topic: Housing listings

URL: 

---


### 1. Data Format and Storage

Data point fields:
- `building`:     ...       `Type: string`
- `price`:     ...       `Type: number`
- `furnished`:     ...       `Type: string`
- `contact`:     ...       `Type: string`
- `features`:     ...       `Type: array`

Schema: 
```javascript
{
   "housing": []
}
```

### 2. Add New Data

HTML form route: `/listHousing`

POST endpoint route: `/api/listHousing`

Example Node.js POST request to endpoint: 
```javascript
var request = require("request");

var options = { 
    method: 'POST',
    url: 'http://localhost:3000/api/listHousing',
    headers: { 
        'content-type': 'application/x-www-form-urlencoded' 
    },
    form: { 
       building: 'University View',
       price: "974",
       furnished: "Yes",
       contact: "(012)-345-6789",
       features: "4 bed 4 bath, remodeled",    
    } 
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

### 3. View Data

GET endpoint route: `/api/getHousing`

### 4. Search Data

Search Field: name

### 5. Navigation Pages

Navigation Filters
1. Apartments -> `  /apartments  `
2. Houses -> `  /houses  `
3. Townhouses -> `  /townhouses  `
4. Expensive housing -> `  /expensive  `
5. Furnished housing -> `  /furnished  `

