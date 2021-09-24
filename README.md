## Server for a web application for creating banks and calculate mortgage payments

Banks store in the database, the corresponding API provide for that

### REST API supports the following routes:

#### @ GET /api/banks

returns an array of all banks in json with `status 200`

#### @ GET /api/banks/:bankId

- gets a parameter `bankId`
- if there is such an id, it returns the bank object in json format with
  `status 200`
- if there is no such id, it returns json with
  `"message": 'This bank was not found'` and `status 404`

#### @ POST /api/banks

- gets `body` in format
  `{name, interestRate, maximumLoan, minimumDownPayment, loanTerm}`
- if in `body` some of the required fields is missing, returns json with
  `{"message": "missing required name field"}` and `status 404`
- as result returns an object with the added id
  `{id, name, interestRate, maximumLoan, minimumDownPayment, loanTerm}` and
  `status 201`

#### @ DELETE /api/banks/:bankId

- gets a parameter `bankId`
- if there is such an id, it returns json `{"message": "Bank deleted"` and
  `status 204`
- if there is no such id, it returns json with
  `"message": 'This bank was not found'` and `status 404`

#### @PUT /api/banks/:bankId

- gets `body` in format
  `{name, interestRate, maximumLoan, minimumDownPayment, loanTerm}` with
  updating any of field
- if in `body` some of the required fields is missing, returns json with
  `{"message": "missing required name field"}` and `status 404`
- as result returns an updated object of bank with `status 200`
- otherwise, it returns json with `"message": 'This bank was not found'` and
  `status 404`

#### For routes that receive data (POST, PUT), incoming data is validated.
