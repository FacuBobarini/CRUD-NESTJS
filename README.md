# API-CRUD-NEST

## Endpoints

### POST -> /person

- **BODY:**
  {
  name: string,
  lasName: string,
  dni: number
  }

### GET -> /person

- **RESPONSE:**
  [
  {
  _id: string,
  name: string,
  lasName: string,
  dni: number,
  __v: number,
  createdAt: string,
  updatedAt: string
  }
  ]

### GET -> /person/:ID

- **PARAMS:**
  ID
- **RESPONSE:**
  {
  \_id: string,
  name: string,
  lasName: string,
  dni: number,
  \_\_v: number,
  createdAt: string,
  updatedAt: string
  }

### DELETE -> /person/:ID

- **PARAMS:**
  ID

### PATCH -> /person/:ID

- **PARAMS:**
  ID
- **BODY:**
  {
  name?: string,
  lasName?: string,
  dni?: number,
  }
